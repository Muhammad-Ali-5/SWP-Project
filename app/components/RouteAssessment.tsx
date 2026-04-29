"use client";

import { useEffect, useRef, useState } from "react";
import type {
  DivIcon,
  LayerGroup,
  Map as LeafletMap,
  Marker as LeafletMarker,
} from "leaflet";

type Mode = "main" | "jordan" | "planb";

type RouteFns = {
  buildMain: () => void;
  buildJordan: () => void;
  clearAllLayers: () => void;
};

const coords = {
  lahore: [31.5204, 74.3587] as [number, number],
  karachi: [24.8607, 67.0011] as [number, number],
  islamabad: [33.6844, 73.0479] as [number, number],
  amman: [31.9454, 35.9284] as [number, number],
  elArish: [31.1302, 33.7984] as [number, number],
  rafah: [31.2939, 34.2608] as [number, number],
  keremShalom: [31.2212422, 34.270061] as [number, number],
  gazaCity: [31.5017, 34.4668] as [number, number],
  portSaid: [31.2565, 32.2841] as [number, number],
  ashdod: [31.8167, 34.65] as [number, number],
  zikim: [31.598, 34.527] as [number, number],
  aqaba: [29.5267, 35.006] as [number, number],
};

const seaLaneKarachiToPortSaid: [number, number][] = [
  [24.8607, 67.0011],
  [23.5000, 63.0000],
  [19.429809, 59.670163],
  [15.902443, 54.810136],
  [11.5000, 44.0000],
  [12.5000, 43.5000],
  [14.0000, 42.5000],
  [18.0000, 39.5000],
  [22.5000, 37.0000],
  [27.5000, 34.0000],
  [28.126229, 33.503208],
  [28.691795, 32.989329],
  [29.9000, 32.5500],
  [29.921462, 32.540392],
  [29.937526, 32.569195],
  [29.949710, 32.580490],
  [29.970433, 32.586994],
  [29.991606, 32.584582],
  [30.052736, 32.572937],
  [30.204460, 32.566163],
  [30.257767, 32.513494],
  [30.300927, 32.378188],
  [30.5382331, 32.3270697],
  [30.7000, 32.3400],
  [31.236087, 32.303729],
  [31.252990, 32.307597],
  [31.255766, 32.300697],
  [31.2565, 32.2841],
];

const philadelphiCorridor: [number, number][] = [
  [31.216774, 34.265206],
  [31.218585, 34.269442],
  [31.298505, 34.241406],
  [31.299112, 34.237235],
  [31.326168, 34.219752],
  [31.324008, 34.215503],
  [31.294096, 34.232907],
  [31.293207, 34.237737],
  [31.216774, 34.265206],
];

// Sea lane Karachi → Aqaba (9th consignment)
const seaLaneKarachiToAqaba: [number, number][] = [
  [24.8607, 67.0011],
  [23.5000, 63.0000],
  [19.429809, 59.670163],
  [15.902443, 54.810136],
  [11.5000, 44.0000],
  [12.5000, 43.5000],
  [14.0000, 42.5000],
  [18.0000, 39.5000],
  [22.5000, 37.0000],
  [26.0000, 36.2000],
  [27.5000, 34.8000],
  [28.4000, 34.5000],
  [29.5267, 35.0060],
];

const roadAshdodToZikim: [number, number][] = [
  [31.8167, 34.6500],
  [31.7200, 34.5800],
  [31.5980, 34.5270],
];

const truckLanePortSaidToAlArish: [number, number][] = [
  [31.2565, 32.2841],
  [31.24994, 32.290496],
  [31.229975, 32.292947],
  [31.221317, 32.299638],
  [31.204973, 32.300134],
  [31.093298, 32.303883],
  [31.093987, 32.334271],
  [30.888425, 32.358936],
  [31.1302, 33.7984],
];

const roadElArishToRafah: [number, number][] = [
  [31.1302, 33.7984],
  [31.135, 33.82],
  [31.17, 33.95],
  [31.21, 34.08],
  [31.24, 34.18],
  [31.2939, 34.2608],
];

const roadKeremToGaza: [number, number][] = [
  [31.2167, 34.2667],
  [31.25, 34.29],
  [31.34, 34.3],
  [31.42, 34.35],
  [31.5017, 34.4668],
];

const roadAmmanToKerem: [number, number][] = [
  [31.9454, 35.9284],
  [31.7, 35.6],
  [31, 35.48],
  [30.3, 35.3],
  [29.55, 34.95],
  [29.52, 34.97],
  [29.9, 35.02],
  [30.6, 35.08],
  [31.05, 34.7],
  [31.2167, 34.2667],
];

const popups: Record<string, string> = {
  lahore: `
    <div class="pop-header">// ORIGIN NODE 01</div>
    <div class="pop-title">Allama Iqbal Int'l Airport — Lahore</div>
    <div class="pop-body">Primary dispatch hub for NDMA chartered flights. Most consignments from the 19th onward depart from here. Standard payload: 100 metric tons per chartered flight, optimised for El Arish landing weight capacity.</div>
    <div class="pop-body">Documented departures include consignments 19, 21, 22, 23, 24, 25, 28, 29 (Aug 2025 – Feb 2026), each 100 tons.</div>
    <span class="pop-tag pop-ok">PRIMARY HUB (19th onward)</span>
    <span class="pop-tag pop-info">100 TONS / FLIGHT</span>
    <div class="pop-source">Source: NDMA official releases — Chapter 4, §4.3.1</div>
  `,

  karachi: `
    <div class="pop-header">// ORIGIN NODE 02</div>
    <div class="pop-title">Jinnah Int'l Airport + SAPT Seaport — Karachi</div>
    <div class="pop-body">Secondary aviation dispatch hub (e.g., 14th consignment: 100 tons to El Arish; 16th: 97 tons to Amman). Also the exclusive origin for all maritime operations via the adjacent SAPT seaport.</div>
    <div class="pop-body">7th consignment: 300 tons via SAPT to Port Said. 8th: 350 tons to Port Said. 9th: 300 tons to Aqaba, Jordan.</div>
    <span class="pop-tag pop-ok">AVIATION + SEA</span>
    <span class="pop-tag pop-info">SAPT SEAPORT ORIGIN</span>
    <div class="pop-source">Source: NDMA — Chapter 4, §4.3.1 &amp; §4.4</div>
  `,

  islamabad: `
    <div class="pop-header">// ORIGIN NODE 03</div>
    <div class="pop-title">Islamabad Int'l Airport</div>
    <div class="pop-body">Origin for the 1st through 6th consignments via PAF C-130 military aircraft — cumulative <strong style="color:#ffe066">330 metric tons</strong> (Oct 2023 – early 2024). Also used for the 13th consignment (100 tons, Oct 2024), 17th (100 tons, Aug 3 2025), and 18th (100 tons, Aug 8 2025).</div>
    <span class="pop-tag pop-ok">EARLY PHASE + LATER CHARTERS</span>
    <span class="pop-tag pop-info">PAF C-130 MILITARY (1–6)</span>
    <div class="pop-source">Source: NDMA — Chapter 4, §4.3.1</div>
  `,

  portSaid: `
  <div class="pop-header">// SEA ROUTE NODE — ROUTE B</div>
  <div class="pop-title">Port Said, Egypt</div>
  <div class="pop-body">Arrival point for Pakistan's 7th consignment (300 tons, early 2024) and 8th consignment (350 tons, Apr 21 2024) via commercial cargo ship from SAPT Karachi. Cargo included medicines, blankets, hygiene kits, tinned food, Female Dignity kits, dry ration, ready-to-eat food, jerry cans, and tents.</div>
  <div class="pop-body">Sea lane followed: Karachi → Arabian Sea → Salalah (Oman coast) → Bab el-Mandeb Strait (Djibouti / Yemen) → Red Sea (Sudan/Eritrea west · Saudi Arabia east) → Gulf of Suez → Suez Canal → Port Said.</div>
  <div class="pop-body">From Port Said, cargo moved overland southwest along the Egyptian Mediterranean coastal road (Road 45) to El Arish — approximately 45–50 km — joining the Route A ground transport chain.</div>
  <div class="pop-stat">650 TONS · 7th + 8th CONSIGNMENTS</div>
  <span class="pop-tag pop-info">MARITIME — SUEZ CANAL ROUTE</span>
  <span class="pop-tag pop-ok">SAPT KARACHI ORIGIN</span>
  <span class="pop-tag pop-warn">ROAD 45 → EL ARISH ONWARD</span>
  <div class="pop-source">Source: NDMA (2024); NDMA (Apr 2024) — Chapter 4, §4.4</div>
`,

  aqaba: `
  <div class="pop-header">// SEA ROUTE NODE — ROUTE B (VARIANT)</div>
  <div class="pop-title">Aqaba Port, Jordan</div>
  <div class="pop-body">Destination for Pakistan's 9th consignment — 300 metric tons dispatched from Karachi Port on June 14, 2024, comprising medicines, hygiene kits, and food packs, for onward distribution to Gaza.</div>
  <div class="pop-stat">300 TONS · 9th CONSIGNMENT · Jun 14 2024</div>
  <span class="pop-tag pop-info">MARITIME — ROUTE B VARIANT</span>
  <span class="pop-tag pop-ok">KARACHI PORT ORIGIN</span>
  <div class="pop-source">Source: Express Tribune (Jun 2024) — Chapter 4, §4.4</div>
`,

  ashdod: `
    <div class="pop-header">// ASHDOD PORT — ZIKIM SUPPLY ORIGIN</div>
    <div class="pop-title">Ashdod Port, Israel</div>
    <div class="pop-body">International maritime cargo for North Gaza is offloaded here and reloaded onto trucks for the final leg to Zikim (Erez West) crossing — approximately one hour's drive south of the port.</div>
    <div class="pop-body">Aid trucks entering Gaza through Zikim originate from Ashdod, bypassing the southern Kerem Shalom route entirely and directly supplying the isolated northern governorates.</div>
    <span class="pop-tag pop-info">ZIKIM FEEDER PORT</span>
    <span class="pop-tag pop-ok">NORTH GAZA SUPPLY CHAIN</span>
    <div class="pop-source">Source: Chapter 4, §4.3.8 — Zikim Crossing</div>
  `,

  elArish: `
    <div class="pop-header">// TRANSIT HUB — BOTTLENECK 01</div>
    <div class="pop-title">El Arish Int'l Airport — Egypt</div>
    <div class="pop-body">Primary staging hub for all Pakistani chartered flights. Located ~45–50 km from the Rafah border crossing. The Egyptian Red Crescent Society (ERCS) North Sinai branch receives cargo here and coordinates truck transport to the border. An ERCS logistics warehouse holds goods pending border clearance.</div>
    <div class="pop-body">Items documented as denied entry into Gaza after Israeli inspection include: solar panels, water filters, and ultrasound machines.</div>
    <span class="pop-tag pop-delay">MAJOR BOTTLENECK</span>
    <span class="pop-tag pop-warn">ERCS HANDOVER POINT</span>
    <span class="pop-tag pop-delay">ITEMS DENIED: SOLAR / FILTERS / ULTRASOUND</span>
    <div class="pop-source">Source: Security Council Report (Dec 2023); Anadolu Agency — Chapter 4, §4.3.3</div>
  `,

  rafah: `
    <div class="pop-header">// BORDER CROSSING — STATUS: RESTRICTED</div>
    <div class="pop-title">Rafah Border Crossing — Egypt / Gaza</div>
    <div class="pop-body">Closed indefinitely to humanitarian cargo as of March 1, 2026, following Israeli military control of the crossing. Intermittently reopened for limited medical evacuations only. Aid trucks from El Arish are diverted to Kerem Shalom.</div>
    <div class="pop-body">Egypt established a new logistics zone in the Rafah area to reduce the ground-transport burden for drivers (~50 km from El Arish). The Rafah crossing sits within the Philadelphi Corridor — the 14 km militarily occupied buffer zone along the Gaza-Egypt border.</div>
    <span class="pop-tag pop-delay">CLOSED TO AID (Mar 1, 2026)</span>
    <span class="pop-tag pop-warn">MEDICAL EVACUATIONS ONLY</span>
    <span class="pop-tag pop-delay">PHILADELPHI CORRIDOR ZONE</span>
    <div class="pop-source">Source: WFP (Mar 2026); Egypt Independent (Feb 2024) — Chapter 4, §4.3.4 &amp; §4.3.5</div>
  `,

  keremShalom: `
  <div class="pop-header">// FINAL CHECKPOINT — BOTTLENECK 02</div>
  <div class="pop-title">Kerem Shalom Crossing (Israel–Gaza)</div>
  <div class="pop-body">As of February 28, 2026, Kerem Shalom became the sole operational crossing for all humanitarian and commercial cargo into Gaza. All trucks must pass through Israeli COGAT (Coordination of Government Activities in the Territories) security inspection here before entry is permitted.</div>
  <div class="pop-body">Between March 31 and April 5, 2026, 30% of all truckloads were returned to Egypt due to congestion and reduced opening hours. 70% of cargo that entered was offloaded before reaching beneficiaries during the same period.</div>
  <div class="pop-stat">⚠ 30% TRUCK RETURN RATE (Apr 2026)</div>
  <span class="pop-tag pop-delay">COGAT INSPECTION REQUIRED</span>
  <span class="pop-tag pop-delay">SOLE CROSSING (Feb 28, 2026)</span>
  <span class="pop-tag pop-warn">CONGESTION · REDUCED HOURS</span>
  <div class="pop-source">Source: UN OCHA (Apr 2026); Reuters (Mar 2026) — Chapter 4, §4.3.6</div>
`,

  gazaCity: `
    <div class="pop-header">// DESTINATION</div>
    <div class="pop-title">Gaza Strip</div>
    <div class="pop-body">Aid that successfully clears Kerem Shalom is distributed by UNRWA and partner organisations northward through Khan Yunis and Deir al-Balah into central and northern Gaza.</div>
    <div class="pop-body">77% of internal roads are impassable or severely damaged, significantly increasing fuel consumption and travel time for all distributions.</div>
    <div class="pop-stat">⚠ ~80% AID INTERCEPTED (May–Oct 2025)</div>
    <span class="pop-tag pop-delay">LAST-MILE INTERCEPTION RISK</span>
    <span class="pop-tag pop-info">UNRWA DISTRIBUTION</span>
    <div class="pop-source">Source: UN OCHA (Oct 2025); UN OCHA (Apr 2026) — Chapter 4, §4.3.7</div>
  `,

  amman: `
    <div class="pop-header">// ALTERNATE ROUTE HUB — ROUTE C</div>
    <div class="pop-title">Queen Alia Int'l Airport — Amman, Jordan</div>
    <div class="pop-body">Secondary route activated when El Arish access is restricted. Cargo received by the <strong style="color:#ffe066">Jordan Hashemite Charity Organization (JHCO)</strong> and <strong style="color:#ffe066">Royal Medical Services Jordan</strong>, who coordinate overland transport south via the King's Highway (Madaba → Karak → Wadi Musa/Petra → Aqaba), then north through the Wadi Araba valley into Israel to Kerem Shalom.</div>
    <div class="pop-body">Consignments: 10th (40t, Sep 2024), 13th (100t, Oct 2024), 15th (40t, Apr 2025), 16th (97t, May 2025), 17th (100t, Aug 2025), 18th (100t, Aug 2025).</div>
    <span class="pop-tag pop-warn">ALTERNATE ROUTE (ROUTE C)</span>
    <span class="pop-tag pop-ok">JHCO + ROYAL MED SERVICES</span>
    <div class="pop-source">Source: NDMA — Chapter 4, §4.5</div>
  `,

  zikim: `
    <div class="pop-header">// NORTHERN CROSSING — INTERMITTENT</div>
    <div class="pop-title">Zikim Crossing (Erez West) — North Gaza</div>
    <div class="pop-body">Entry point specifically for North Gaza — the most inaccessible zone of the crisis. Aid trucks originate from Ashdod Port (~1 hour north). Closed for over 40 consecutive days before reopening April 13, 2026.</div>
    <div class="pop-body">Under the Oct 2025 ceasefire, approximately 600 trucks/day combined (Zikim + Kerem Shalom) were permitted. OCHA Logistics Cluster: Aug 31–Sep 13, 2025 — 608 pallets entered via Zikim while Kerem Shalom was non-operational, demonstrating their complementary roles.</div>
    <div class="pop-body">G2G: OCHA documented Jordan Government-to-Government convoys (Aug 3–16, 2025) — 15 of 22 trucks offloaded food items specifically at Zikim.</div>
    <div class="pop-stat">✅ REOPENED: April 13, 2026</div>
    <span class="pop-tag pop-warn">INTERMITTENT OPERATION</span>
    <span class="pop-tag pop-info">NORTH GAZA — ASHDOD FEEDER</span>
    <span class="pop-tag pop-ok">600 TRUCKS/DAY CEASEFIRE QUOTA</span>
    <div class="pop-source">Source: UN OCHA (Apr 2026); OCHA Logistics Cluster (Sep 2025) — Chapter 4, §4.3.8</div>
  `,

  philadelphi: `
    <div class="pop-header">// MILITARY BUFFER ZONE</div>
    <div class="pop-title">Philadelphi (Salah al-Din) Corridor</div>
    <div class="pop-body">A narrow buffer zone approximately 100 metres wide and 14 km long, running along the entire Gaza-Egypt border from Rafah in the north to Kerem Shalom in the south. Established under the 1978 Camp David Accords.</div>
    <div class="pop-body">Israeli forces took control of the Palestinian side of this corridor in May 2024, directly halting all humanitarian aid trucks from entering through Rafah. All El Arish-to-Kerem Shalom convoys now pass through this militarily occupied zone.</div>
    <span class="pop-tag pop-delay">MILITARILY OCCUPIED (May 2024)</span>
    <span class="pop-tag pop-warn">14 KM · CAMP DAVID 1978</span>
    <div class="pop-source">Source: NBC News (Sep 2024); Xinhua (Sep 2024) — Chapter 4, §4.3.5</div>
  `,
};

export default function RouteAssessment() {
  const [mode, setMode] = useState<Mode>("main");
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layersRef = useRef<{
    mainLayer: LayerGroup | null;
    jordanLayer: LayerGroup | null;
    markers: Record<string, LeafletMarker>;
  }>({
    mainLayer: null,
    jordanLayer: null,
    markers: {},
  });
  const routeFnsRef = useRef<RouteFns | null>(null);

  useEffect(() => {
    if (!mapElRef.current || mapRef.current) {
      return;
    }

    let canceled = false;

    const setupMap = async () => {
      const L = await import("leaflet");
      if (canceled || !mapElRef.current) {
        return;
      }

      const map = L.map(mapElRef.current, {
        center: [25, 55],
        zoom: 4,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = map;

      const makeIcon = (label: string, color = "#00c8ff") =>
        L.divIcon({
          className: "",
          html: `<div style="
            background:#0f1825;
            border:2px solid ${color};
            border-radius:8px;
            padding:4px 7px;
            display:flex;
            align-items:center;
            gap:4px;
            white-space:nowrap;
            box-shadow:0 0 12px ${color}44;
            font-family:'Share Tech Mono', monospace;
            color:${color};
            font-size:0.68rem;
            letter-spacing:1px;
          ">${label}</div>`,
          iconAnchor: [20, 15],
        });

      const clearAllLayers = () => {
        if (layersRef.current.mainLayer) {
          map.removeLayer(layersRef.current.mainLayer);
          layersRef.current.mainLayer = null;
        }
        if (layersRef.current.jordanLayer) {
          map.removeLayer(layersRef.current.jordanLayer);
          layersRef.current.jordanLayer = null;
        }
        Object.values(layersRef.current.markers).forEach((m) => map.removeLayer(m));
        layersRef.current.markers = {};
      };

      const addMarker = (
        key: string,
        latlng: [number, number],
        icon: DivIcon,
        popupHtml: string,
      ) => {
        const marker = L.marker(latlng, { icon }).addTo(map);
        marker.bindPopup(popupHtml, { maxWidth: 320, minWidth: 260 });
        layersRef.current.markers[key] = marker;
      };

      const drawDashedLine = (
        latlngs: [number, number][],
        color: string,
        dashArray = "8,6",
        weight = 2.5,
      ) => L.polyline(latlngs, { color, weight, dashArray, opacity: 0.85 });

      const drawSolidLine = (latlngs: [number, number][], color: string, weight = 3) =>
        L.polyline(latlngs, { color, weight, opacity: 0.9 });

      const buildMain = () => {
        clearAllLayers();
        const layer = L.layerGroup();

        drawSolidLine([coords.lahore, coords.elArish], "#00c8ff").addTo(layer);
        drawSolidLine([coords.karachi, coords.elArish], "#00c8ff").addTo(layer);
        drawSolidLine(philadelphiCorridor, '#A349A4').addTo(layer);
        drawSolidLine([coords.islamabad, coords.elArish], "#00a8dd").addTo(layer);

        drawDashedLine(seaLaneKarachiToPortSaid, "#a78bfa", "10,7", 2).addTo(layer);
        drawDashedLine(truckLanePortSaidToAlArish, "#ffe066", "6,5", 1.5).addTo(layer);
        drawDashedLine(roadElArishToRafah, "#ffe066", "6,5", 2.5).addTo(layer);
        drawDashedLine([coords.rafah, coords.keremShalom], "#ff4444", "4,4", 3.5).addTo(layer);
        drawDashedLine(roadKeremToGaza, "#00ff88", "10,7", 1.8).addTo(layer);
        drawDashedLine([coords.keremShalom, coords.zikim], "#00ff88", "6,4", 1.8).addTo(layer);
        drawDashedLine(roadAshdodToZikim, '#00ff88', '5,4', 1.6).addTo(layer);

        layer.addTo(map);
        layersRef.current.mainLayer = layer;

        addMarker('lahore', coords.lahore, makeIcon('✈ LAHORE', '#00c8ff'), popups.lahore);
        addMarker('karachi', coords.karachi, makeIcon('✈ KARACHI', '#00c8ff'), popups.karachi);
        addMarker('islamabad', coords.islamabad, makeIcon('✈ ISLAMABAD', '#00a8dd'), popups.islamabad);
        addMarker('portSaid', coords.portSaid, makeIcon('⚓ PORT SAID', '#a78bfa'), popups.portSaid);
        addMarker('ashdod', coords.ashdod, makeIcon('⚓ ASHDOD', '#5a7aaa'), popups.ashdod);
        addMarker('elArish', coords.elArish, makeIcon('EL ARISH', '#ffe066'), popups.elArish);
        addMarker('rafah', coords.rafah, makeIcon('RAFAH', '#ff4444'), popups.rafah);
        addMarker('philadelphi', [31.248116, 34.257123], makeIcon('PHILADELPHI CORRIDOR', '#A349A4'), popups.philadelphi);
        addMarker('keremShalom', coords.keremShalom, makeIcon('KEREM SHALOM', '#ff4444'), popups.keremShalom);
        addMarker('gazaCity', coords.gazaCity, makeIcon('GAZA', '#00ff88'), popups.gazaCity);
        addMarker('zikim', coords.zikim, makeIcon('ZIKIM (N.GAZA)', '#00ff88'), popups.zikim);

        map.setView([28, 48], 4);
      };

      const buildJordan = () => {
        clearAllLayers();
        const layer = L.layerGroup();

        drawSolidLine([coords.lahore, coords.elArish], '#1a3a55').addTo(layer);
        drawSolidLine([coords.karachi, coords.elArish], '#1a3a55').addTo(layer);
        drawDashedLine(roadElArishToRafah, '#1a3a55', '6,5', 1.5).addTo(layer);
        drawDashedLine([coords.rafah, coords.keremShalom], '#1a3a55', '4,4', 1.5).addTo(layer);
        drawDashedLine(roadKeremToGaza, '#1a3a55', '10,7', 1.8).addTo(layer);

        drawSolidLine([coords.karachi, coords.amman], '#ff9900').addTo(layer);
        drawSolidLine([coords.islamabad, coords.amman], '#ff9900').addTo(layer);

        drawDashedLine(seaLaneKarachiToAqaba, '#c4a8fa', '10,7', 1.8).addTo(layer);
        drawDashedLine(roadAmmanToKerem, '#ffe066', '8,5', 2.5).addTo(layer);

        drawDashedLine([coords.keremShalom, coords.zikim], '#00ff88', '6,4', 1.8).addTo(layer);
        drawDashedLine(roadAshdodToZikim, '#00ff88', '5,4', 1.6).addTo(layer);

        layer.addTo(map);
        layersRef.current.jordanLayer = layer;

        addMarker('lahore', coords.lahore, makeIcon('✈ LAHORE', '#5a7a9a'), popups.lahore);
        addMarker('karachi', coords.karachi, makeIcon('✈ KARACHI', '#ff9900'), popups.karachi);
        addMarker('islamabad', coords.islamabad, makeIcon('✈ ISLAMABAD', '#ff9900'), popups.islamabad);
        addMarker('amman', coords.amman, makeIcon('⇢ AMMAN', '#ff9900'), popups.amman);
        addMarker('elArish', coords.elArish, makeIcon('EL ARISH', '#2a4a6a'), popups.elArish);
        addMarker('rafah', coords.rafah, makeIcon('RAFAH', '#ff4444'), popups.rafah);
        addMarker('philadelphi', [31.255, 34.263], makeIcon('PHILADELPHI CORRIDOR', '#A349A4'), popups.philadelphi);
        addMarker('keremShalom', coords.keremShalom, makeIcon('KEREM SHALOM', '#ff4444'), popups.keremShalom);
        addMarker('gazaCity', coords.gazaCity, makeIcon('GAZA', '#00ff88'), popups.gazaCity);
        addMarker('zikim', coords.zikim, makeIcon('ZIKIM (N.GAZA)', '#00ff88'), popups.zikim);
        addMarker('ashdod', coords.ashdod, makeIcon('⚓ ASHDOD', '#5a7aaa'), popups.ashdod);
        addMarker('aqaba', coords.aqaba, makeIcon('⚓ AQABA', '#c4a8fa'), popups.aqaba);

        map.setView([28, 48], 4);
      };

      routeFnsRef.current = { buildMain, buildJordan, clearAllLayers };
      buildMain();
    };

    void setupMap();

    return () => {
      canceled = true;
      routeFnsRef.current?.clearAllLayers();
      mapRef.current?.remove();
      mapRef.current = null;
      routeFnsRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !routeFnsRef.current) {
      return;
    }
    if (mode === "planb") {
      routeFnsRef.current.clearAllLayers();
      return;
    }
    if (mode === "main") {
      routeFnsRef.current.buildMain();
    }
    if (mode === "jordan") {
      routeFnsRef.current.buildJordan();
    }
    window.setTimeout(() => mapRef.current?.invalidateSize(), 50);
  }, [mode]);

  return (
    <section className="route-assessment-map">
      <header>
        <div className="header-left">
          <div className="header-title">{'// Cell 2 — Logistics Route Tracker'}</div>
          <div className="header-sub">
            Pakistan → Gaza Strip · Humanitarian Aid Supply Chain · SWP Assessment 2025–26
          </div>
        </div>
        <div className="header-badge">NDMA / AKF DATA</div>
      </header>

      <div className="controls">
        <span className="ctrl-label">VIEW MODE //</span>
        <button
          className={`btn ${mode === "main" ? "active" : ""}`}
          onClick={() => setMode("main")}
          type="button"
        >
          ▶ Main Route (Egypt)
        </button>
        <button
          className={`btn jordan-btn ${mode === "jordan" ? "active" : ""}`}
          onClick={() => setMode("jordan")}
          type="button"
        >
          ⇢ Alt Route (Jordan)
        </button>
        <div className="divider" />
        <span className="ctrl-label">CONTINGENCY //</span>
        <button
          className={`btn planb-btn ${mode === "planb" ? "active" : ""}`}
          onClick={() => setMode("planb")}
          type="button"
        >
          Plan B — Digital Transfer
        </button>
      </div>

      <div className="main">
        <div
          id="map"
          ref={mapElRef}
          style={{ display: mode === "planb" ? "none" : "block" }}
        />

        <div id="planb-view" className={mode === "planb" ? "visible" : ""}>
          <div className="planb-container">
            <div className="planb-title">{'// Plan B — Digital Financial Pipeline'}</div>
            <div className="planb-desc">
              When physical borders are closed or aid trucks are intercepted, this contingency routes{' '}
              <strong>liquid capital</strong> directly to verified local workers inside Gaza —
              bypassing all physical checkpoints entirely.
              <br />
              <em style={{ color: "#3a5a7a" }}>Source: Chapter 4, §4.7 — Plan B Digital Financial Contingency</em>
            </div>

            <div className="flow-why">
              <strong>WHY PLAN B EXISTS:</strong> UN OCHA (Oct 2025) documented that approximately
              <strong style={{ color: "#ff4444" }}>~80% of all humanitarian cargo</strong>{" "}
              collected inside Gaza faced interception or looting during last-mile distribution
              (May–Oct 2025). During the peak window of May 19–Aug 5, 2025, this figure rose to
              <strong style={{ color: "#ff4444" }}>over 95%</strong>. Physical supply chains alone
              cannot achieve last-mile delivery.
              <br />
              <span style={{ color: "#3a5a7a", fontSize: "0.7rem" }}>
                Source: UN OCHA, Humanitarian Situation Update #336 (Oct 2025); Gaza Humanitarian
                Response Update (Aug 2025) — Chapter 4, §4.3.6 &amp; §4.7
              </span>
            </div>

            <div className="flow-col">
              <div className="flow-row">
                <div className="flow-node">
                  <div className="fn-tier">{'// TIER 1'}</div>
                  <div className="fn-icon">🇵🇰</div>
                  <div className="fn-title">DONOR IN PAKISTAN</div>
                  <div className="fn-sub">
                    Individual, NGO (AKF, Saylani, Baitussalam), or Corporate CSR donor initiates
                    transfer
                  </div>
                  <div className="fn-tag tag-secure">ORIGIN</div>
                </div>
              </div>

              <div className="flow-arrow">
                <div>↓</div>
                <div className="fa-label">ENCRYPTED TRANSFER</div>
              </div>

              <div className="flow-row">
                <div className="flow-node">
                  <div className="fn-tier">{'// TIER 1 — DECENTRALISED GATEWAY'}</div>
                  <div className="fn-title">STABLECOIN GATEWAY</div>
                  <div className="fn-sub">
                    USDC / USDT via low-fee blockchain network — bypasses SWIFT banking delays and
                    geopolitical account-freezing mechanisms entirely
                  </div>
                  <div className="fn-tag tag-instant">INSTANT · BORDERLESS</div>
                </div>
              </div>

              <div className="flow-arrow">
                <div>↓</div>
                <div className="fa-label">VERIFIED WALLET — TIER 2</div>
              </div>

              <div className="flow-row" style={{ gap: 12, alignItems: "flex-start" }}>
                <div className="flow-col" style={{ alignItems: "center" }}>
                  <div className="flow-node" style={{ width: 200 }}>
                    <div className="fn-tier">{'// TIER 2 — CHANNEL A'}</div>
                    <div className="fn-icon">🇹🇷</div>
                    <div className="fn-title">TURKISH NGO PARTNER</div>
                    <div className="fn-sub">
                      Saylani &amp; Baitussalam route funds through Turkish NGO partners operating
                      inside Gaza. Saylani: 6,500 hot meals/day in Khan Younis. Baitussalam:
                      mechanical bread production plants &amp; orphan care.
                    </div>
                    <div className="fn-tag tag-local">ACTIVE PARTNER</div>
                  </div>
                  <div className="flow-arrow">
                    <div>↓</div>
                    <div className="fa-label">GROUND OPS</div>
                  </div>
                  <div className="flow-node" style={{ width: 200 }}>
                    <div className="fn-title">BREAD &amp; MEALS DELIVERY</div>
                    <div className="fn-sub">
                      6,500 hot meals/day in Khan Younis displacement camps (Saylani) + mechanical
                      bread plants funded by Baitussalam — all via Turkish partners
                    </div>
                    <div className="fn-tag tag-local">DAILY DELIVERY</div>
                  </div>
                </div>

                <div style={{ color: "#1e3a5f", fontSize: "1.6rem", alignSelf: "center", paddingTop: 10 }}>
                  |
                </div>

                <div className="flow-col" style={{ alignItems: "center" }}>
                  <div className="flow-node" style={{ width: 200 }}>
                    <div className="fn-tier">{'// TIER 2 — CHANNEL B'}</div>
                    <div className="fn-title">LOCAL GROUND WORKER</div>
                    <div className="fn-sub">
                      Verified social worker already inside Gaza receives capital in digital wallet
                    </div>
                    <div className="fn-tag tag-secure">VERIFIED</div>
                  </div>
                  <div className="flow-arrow">
                    <div>↓</div>
                    <div className="fa-label">LOCAL PURCHASE</div>
                  </div>
                  <div className="flow-node" style={{ width: 200 }}>
                    <div className="fn-title">LOCAL MARKET BUY</div>
                    <div className="fn-sub">
                      Worker purchases psychosocial and medical supplies directly from internal local
                      informal markets — no border crossing required whatsoever
                    </div>
                    <div className="fn-tag tag-instant">NO BORDER NEEDED</div>
                  </div>
                </div>
              </div>

              <div className="flow-arrow">
                <div>↓</div>
                <div className="fa-label">TRANSPARENT LOG — TIER 3</div>
              </div>

              <div className="flow-row">
                <div className="flow-node" style={{ width: 320 }}>
                  <div className="fn-tier">{'// TIER 3 — PUBLIC LEDGER'}</div>
                  <div className="fn-title">PUBLIC TRANSPARENCY LEDGER</div>
                  <div className="fn-sub">
                    Every transaction logged publicly on the blockchain. Donors can trace capital from
                    origin wallet to ground worker wallet — eliminating the &quot;communication gap&quot; that
                    reduces donor trust in traditional humanitarian pipelines
                  </div>
                  <div className="fn-tag tag-secure">ZERO COMMUNICATION GAP</div>
                </div>
              </div>
            </div>

            <div className="flow-stats-row">
              <div className="flow-stat">
                <div className="fs-num">$40K</div>
                <div className="fs-label">
                  Baitussalam transfer to UNRWA — funded 2,200+ food-insecure refugees
                  <br />
                  <em style={{ color: "#2a4a6a" }}>Source: UN OCHA FTS; UNRWA — Chapter 4, §4.6</em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">6,500</div>
                <div className="fs-label">
                  Hot meals/day via Saylani&apos;s Turkish partner network in Khan Younis displacement camps
                  <br />
                  <em style={{ color: "#2a4a6a" }}>Source: Business Recorder (2026) — Chapter 4, §4.6</em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">PKR 60M</div>
                <div className="fs-label">
                  Saylani Welfare Trust sea consignment value — dispatched via maritime route
                  <br />
                  <em style={{ color: "#2a4a6a" }}>Source: Business Recorder (2026) — Chapter 4, §4.6</em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">750</div>
                <div className="fs-label">
                  Orphaned children receiving $50/month direct digital stipends (AKF)
                  <br />
                  <em style={{ color: "#2a4a6a" }}>Source: Alkhidmat Foundation (2026) — Chapter 4, §4.7</em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">PKR 9.5B</div>
                <div className="fs-label">
                  AKF total emergency relief expenditure for Gaza
                  <br />
                  <em style={{ color: "#2a4a6a" }}>
                    Source: Alkhidmat Foundation Pakistan (2026) — Chapter 4, §4.7 and §4.8
                  </em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">6,524 MT</div>
                <div className="fs-label">
                  Total aid dispatched by AKF (34 air flights, 4 cargo ships, 73 trucks)
                  <br />
                  <em style={{ color: "#2a4a6a" }}>
                    Source: Alkhidmat Foundation Pakistan (2026) — Chapter 4, §4.7
                  </em>
                </div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">~80%</div>
                <div className="fs-label">
                  Overall last-mile interception rate (May–Oct 2025). Peak window (May 19–Aug 5, 2025):
                  over 95%
                  <br />
                  <em style={{ color: "#2a4a6a" }}>
                    Source: UN OCHA #336 (Oct 2025); OCHA Aug 2025 — Chapter 4, §4.3.6
                  </em>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="legend" id="map-legend" style={{ display: mode === "planb" ? "none" : "block" }}>
          <div className="legend-title">Route Key</div>
          <div className="legend-item">
            <div className="legend-line ll-main" /> Air Route (Pakistan → Egypt)
          </div>
          <div className="legend-item" id="legend-jordan" style={{ display: mode === "jordan" ? "flex" : "none" }}>
            <div className="legend-line ll-jordan" /> Alt Route (Jordan / Amman)
          </div>
          <div className="legend-item">
            <div className="legend-line ll-sea" /> Sea Route (Karachi → Port Said / Aqaba)
          </div>
          <div className="legend-item">
            <div className="legend-line ll-ground" /> Ground Transport (Egypt → Border)
          </div>
          <div className="legend-item">
            <div className="legend-line ll-blocked" /> Blocked / Critical Bottleneck
          </div>
          <div className="legend-item">
            <div className="legend-line ll-cleared" /> Cleared → Gaza Entry
          </div>
          <div className="legend-item" id="legend-philadelphi" style={{ display: mode === "planb" ? "none" : "flex" }}>
            <div className="legend-line ll-philadelphi" /> Philadelphi Corridor (Occupied)
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Share+Tech+Mono&display=swap');

        .route-assessment-map {
          --bg: #0a0f1a;
          --panel: #0f1825;
          --border: #1e3a5f;
          --accent: #00c8ff;
          --green: #00ff88;
          --orange: #ff9900;
          --red: #ff4444;
          --yellow: #ffe066;
          --text: #c8dff0;
          --muted: #5a7a9a;
          --mono: 'Share Tech Mono', monospace;
          --sans: 'Barlow', sans-serif;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          min-height: 0;
          height: auto;
          max-height: none;
          display: flex;
          flex-direction: column;
        }

        .route-assessment-map header {
          background: var(--panel);
          border-bottom: 1px solid var(--border);
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          z-index: 10;
        }

        .route-assessment-map .header-title {
          font-family: var(--mono);
          font-size: 1rem;
          color: var(--accent);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .route-assessment-map .header-sub {
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.6px;
          margin-top: 2px;
        }

        .route-assessment-map .header-badge {
          font-family: var(--mono);
          font-size: 0.68rem;
          background: rgba(0, 200, 255, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 4px 10px;
          border-radius: 3px;
        }

        .route-assessment-map .controls {
          background: var(--panel);
          border-bottom: 1px solid var(--border);
          padding: 8px 20px;
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .route-assessment-map .ctrl-label {
          font-family: var(--mono);
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 1px;
        }

        .route-assessment-map .btn {
          font-family: var(--mono);
          font-size: 0.72rem;
          padding: 5px 14px;
          border-radius: 3px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .route-assessment-map .btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .route-assessment-map .btn.active {
          background: rgba(0, 200, 255, 0.12);
          border-color: var(--accent);
          color: var(--accent);
        }

        .route-assessment-map .btn.jordan-btn.active {
          background: rgba(255, 153, 0, 0.12);
          border-color: var(--orange);
          color: var(--orange);
        }

        .route-assessment-map .btn.planb-btn.active {
          background: rgba(0, 255, 136, 0.12);
          border-color: var(--green);
          color: var(--green);
        }

        .route-assessment-map .divider {
          width: 1px;
          height: 22px;
          background: var(--border);
          margin: 0 4px;
        }

        .route-assessment-map .main {
          flex: 0 0 auto;
          display: flex;
          position: relative;
          height: clamp(360px, 55vh, 560px);
        }

        .route-assessment-map #map {
          flex: 1;
          min-height: 100%;
          height: 100%;
          width: 100%;
        }

        .route-assessment-map #planb-view {
          display: none;
          flex: 1;
          background: var(--bg);
          overflow-y: auto;
          padding: 30px;
          align-items: flex-start;
          justify-content: center;
        }

        .route-assessment-map #planb-view.visible {
          display: flex;
        }

        .route-assessment-map .planb-container {
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
        }

        .route-assessment-map .planb-title {
          font-family: var(--mono);
          font-size: 0.85rem;
          color: var(--green);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .route-assessment-map .planb-desc {
          font-size: 0.82rem;
          color: var(--muted);
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .route-assessment-map .flow-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-bottom: 0;
        }

        .route-assessment-map .flow-node {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 14px 18px;
          width: 200px;
          text-align: center;
          position: relative;
          transition: border-color 0.2s;
        }

        .route-assessment-map .flow-node:hover {
          border-color: var(--green);
        }

        .route-assessment-map .flow-node .fn-icon {
          font-size: 1.6rem;
          margin-bottom: 6px;
        }

        .route-assessment-map .flow-node .fn-title {
          font-family: var(--mono);
          font-size: 0.72rem;
          color: var(--green);
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .route-assessment-map .flow-node .fn-sub {
          font-size: 0.68rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .route-assessment-map .flow-node .fn-tag {
          display: inline-block;
          font-family: var(--mono);
          font-size: 0.6rem;
          padding: 2px 7px;
          border-radius: 20px;
          margin-top: 6px;
        }

        .route-assessment-map .fn-tier {
          font-family: var(--mono);
          font-size: 0.58rem;
          color: var(--muted);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 6px;
          opacity: 0.7;
        }

        .route-assessment-map .tag-secure {
          background: rgba(0, 255, 136, 0.12);
          color: var(--green);
          border: 1px solid var(--green);
        }

        .route-assessment-map .tag-instant {
          background: rgba(0, 200, 255, 0.12);
          color: var(--accent);
          border: 1px solid var(--accent);
        }

        .route-assessment-map .tag-local {
          background: rgba(255, 153, 0, 0.12);
          color: var(--orange);
          border: 1px solid var(--orange);
        }

        .route-assessment-map .flow-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--green);
          font-size: 1.2rem;
          padding: 6px 0;
          line-height: 1;
        }

        .route-assessment-map .flow-arrow .fa-label {
          font-family: var(--mono);
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 1px;
          margin-top: 2px;
        }

        .route-assessment-map .flow-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .route-assessment-map .flow-why {
          background: rgba(255, 68, 68, 0.07);
          border: 1px solid rgba(255, 68, 68, 0.3);
          border-radius: 6px;
          padding: 14px 18px;
          margin: 20px 0 28px;
          font-size: 0.78rem;
          color: var(--text);
          line-height: 1.7;
        }

        .route-assessment-map .flow-why strong {
          color: var(--red);
          font-family: var(--mono);
        }

        .route-assessment-map .flow-stats-row {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .route-assessment-map .flow-stat {
          flex: 1;
          min-width: 130px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 12px 14px;
          text-align: center;
        }

        .route-assessment-map .fs-num {
          font-family: var(--mono);
          font-size: 1.2rem;
          color: var(--green);
        }

        .route-assessment-map .fs-label {
          font-size: 0.65rem;
          color: var(--muted);
          margin-top: 4px;
          line-height: 1.4;
        }

        .route-assessment-map .legend {
          position: absolute;
          bottom: 20px;
          left: 16px;
          background: rgba(10, 15, 26, 0.92);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 12px 16px;
          z-index: 500;
          font-size: 0.72rem;
          min-width: 220px;
          backdrop-filter: blur(6px);
        }

        .route-assessment-map .legend-title {
          font-family: var(--mono);
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 2px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .route-assessment-map .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 5px;
          color: var(--text);
        }

        .route-assessment-map .legend-line {
          width: 24px;
          height: 3px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .route-assessment-map .ll-main {
          background: var(--accent);
        }

        .route-assessment-map .ll-jordan {
          background: var(--orange);
        }

        .route-assessment-map .ll-sea {
          background: #a78bfa;
        }

        .route-assessment-map .ll-ground {
          background: var(--yellow);
        }

        .route-assessment-map .ll-blocked {
          background: var(--red);
        }

        .route-assessment-map .ll-cleared {
          background: var(--green);
        }

        .route-assessment-map .ll-philadelphi {
          background: #A349A4;
          border: 1px dashed #A349A4;
        }

        .route-assessment-map .leaflet-popup-content-wrapper {
          background: #0f1825;
          border: 1px solid #1e3a5f;
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
          color: #c8dff0;
          font-family: 'Barlow', sans-serif;
          min-width: 240px;
          max-width: 300px;
        }

        .route-assessment-map .leaflet-popup-tip {
          background: #0f1825;
        }

        .route-assessment-map .leaflet-popup-close-button {
          color: #5a7a9a;
          font-size: 16px;
        }

        .route-assessment-map .pop-header {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00c8ff;
          margin-bottom: 6px;
          border-bottom: 1px solid #1e3a5f;
          padding-bottom: 6px;
        }

        .route-assessment-map .pop-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .route-assessment-map .pop-body {
          font-size: 0.78rem;
          color: #8ab0cc;
          line-height: 1.65;
          margin-bottom: 8px;
        }

        .route-assessment-map .pop-tag {
          display: inline-block;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.62rem;
          padding: 2px 8px;
          border-radius: 20px;
          margin: 2px 2px 0 0;
        }

        .route-assessment-map .pop-delay {
          background: rgba(255, 68, 68, 0.15);
          color: #ff6666;
          border: 1px solid rgba(255, 68, 68, 0.4);
        }

        .route-assessment-map .pop-info {
          background: rgba(0, 200, 255, 0.1);
          color: #00c8ff;
          border: 1px solid rgba(0, 200, 255, 0.3);
        }

        .route-assessment-map .pop-warn {
          background: rgba(255, 153, 0, 0.12);
          color: #ff9900;
          border: 1px solid rgba(255, 153, 0, 0.35);
        }

        .route-assessment-map .pop-ok {
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.3);
        }

        .route-assessment-map .pop-stat {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.85rem;
          color: #ffe066;
          margin: 6px 0 2px;
        }

        .route-assessment-map .pop-source {
          font-size: 0.62rem;
          color: #3a5a7a;
          margin-top: 8px;
          border-top: 1px solid #1e3a5f;
          padding-top: 5px;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .route-assessment-map .main {
            height: clamp(300px, 48vh, 420px);
          }

          .route-assessment-map header {
            padding: 10px 12px;
          }

          .route-assessment-map .controls {
            padding: 8px 12px;
          }

          .route-assessment-map .legend {
            bottom: 10px;
            left: 10px;
            min-width: 170px;
            padding: 9px 11px;
          }

        }
      `}</style>
    </section>
  );
}
