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
  keremShalom: [31.2167, 34.2667] as [number, number],
  gazaCity: [31.5017, 34.4668] as [number, number],
  portSaid: [31.2565, 32.2841] as [number, number],
  ashdod: [31.8167, 34.65] as [number, number],
  zikim: [31.598, 34.527] as [number, number],
};

const seaLaneKarachiToPortSaid: [number, number][] = [
  [24.8607, 67.0011],
  [23.5, 63],
  [20, 58],
  [15.5, 52],
  [11.5, 44],
  [12.5, 43.5],
  [14, 42.5],
  [18, 39.5],
  [22.5, 37],
  [27.5, 34],
  [28.126229, 33.503208],
  [28.691795, 32.989329],
  [29.9, 32.55],
  [29.921462, 32.540392],
  [29.937526, 32.569195],
  [29.94971, 32.58049],
  [29.970433, 32.586994],
  [29.991606, 32.584582],
  [30.052736, 32.572937],
  [30.20446, 32.566163],
  [30.257767, 32.513494],
  [30.300927, 32.378188],
  [30.5382331, 32.3270697],
  [30.7, 32.34],
  [31.236087, 32.303729],
  [31.25299, 32.307597],
  [31.255766, 32.300697],
  [31.2565, 32.2841],
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
  lahore:
    '<div class="pop-header">// ORIGIN NODE 01</div><div class="pop-title">Allama Iqbal Int\'l Airport - Lahore</div><div class="pop-body">Primary dispatch hub for NDMA chartered flights. Standard payload: 100 metric tons per chartered flight.</div><span class="pop-tag pop-ok">PRIMARY HUB</span><span class="pop-tag pop-info">100 TONS / FLIGHT</span>',
  karachi:
    '<div class="pop-header">// ORIGIN NODE 02</div><div class="pop-title">Jinnah Int\'l Airport + SAPT Seaport - Karachi</div><div class="pop-body">Secondary aviation dispatch hub and sea-shipment origin from SAPT Karachi to Port Said.</div><span class="pop-tag pop-ok">AVIATION + SEA</span>',
  islamabad:
    '<div class="pop-header">// ORIGIN NODE 03</div><div class="pop-title">Islamabad Int\'l Airport</div><div class="pop-body">Used in early consignments via PAF C-130 and later chartered flights.</div><span class="pop-tag pop-info">PAF C-130 PHASE</span>',
  portSaid:
    '<div class="pop-header">// SEA ROUTE NODE</div><div class="pop-title">Port Said, Egypt</div><div class="pop-body">Arrival point for 300 metric tons sea consignment, then moved overland.</div><div class="pop-stat">300 TONS - 7th CONSIGNMENT</div>',
  ashdod:
    '<div class="pop-header">// SECONDARY SEA NODE</div><div class="pop-title">Ashdod Port, Israel</div><div class="pop-body">Operational entry point, constrained by scanning capacity and reduced crossing activity.</div><span class="pop-tag pop-delay">SCANNING BOTTLENECK</span>',
  elArish:
    '<div class="pop-header">// TRANSIT HUB</div><div class="pop-title">El Arish Int\'l Airport</div><div class="pop-body">Main cargo handover point to ERCS before border transfer.</div><span class="pop-tag pop-delay">BOTTLENECK</span>',
  rafah:
    '<div class="pop-header">// BORDER CROSSING</div><div class="pop-title">Rafah Crossing</div><div class="pop-body">Restricted for aid cargo. Trucks often diverted to Kerem Shalom.</div><span class="pop-tag pop-delay">RESTRICTED</span>',
  keremShalom:
    '<div class="pop-header">// FINAL CHECKPOINT</div><div class="pop-title">Kerem Shalom Crossing</div><div class="pop-body">Primary inspection and clearance point for humanitarian trucks.</div><span class="pop-tag pop-warn">COGAT INSPECTION</span>',
  gazaCity:
    '<div class="pop-header">// DESTINATION</div><div class="pop-title">Gaza Strip</div><div class="pop-body">Last-mile delivery remains the highest-risk stage of distribution.</div><span class="pop-tag pop-delay">LAST-MILE RISK</span>',
  amman:
    '<div class="pop-header">// ALTERNATE HUB</div><div class="pop-title">Queen Alia Int\'l Airport - Amman</div><div class="pop-body">Alternate route hub in coordination with JHCO and Jordan services.</div><span class="pop-tag pop-warn">ALT ROUTE</span>',
  zikim:
    '<div class="pop-header">// NORTHERN CROSSING</div><div class="pop-title">Zikim Crossing</div><div class="pop-body">Intermittent entry for North Gaza access.</div><span class="pop-tag pop-info">INTERMITTENT</span>',
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
        drawSolidLine([coords.islamabad, coords.elArish], "#00a8dd").addTo(layer);
        drawDashedLine(seaLaneKarachiToPortSaid, "#a78bfa", "10,7", 2).addTo(layer);
        drawDashedLine(truckLanePortSaidToAlArish, "#ffe066", "6,5", 1.5).addTo(layer);
        drawDashedLine(roadElArishToRafah, "#ffe066", "6,5", 2.5).addTo(layer);
        drawDashedLine([coords.rafah, coords.keremShalom], "#ff4444", "4,4", 2.5).addTo(layer);
        drawSolidLine(roadKeremToGaza, "#00ff88", 2.5).addTo(layer);
        drawDashedLine([coords.keremShalom, coords.zikim], "#00ff88", "6,4", 1.8).addTo(layer);

        layer.addTo(map);
        layersRef.current.mainLayer = layer;

        addMarker("lahore", coords.lahore, makeIcon("LAHORE", "#00c8ff"), popups.lahore);
        addMarker("karachi", coords.karachi, makeIcon("KARACHI", "#00c8ff"), popups.karachi);
        addMarker("islamabad", coords.islamabad, makeIcon("ISLAMABAD", "#00a8dd"), popups.islamabad);
        addMarker("portSaid", coords.portSaid, makeIcon("PORT SAID", "#a78bfa"), popups.portSaid);
        addMarker("ashdod", coords.ashdod, makeIcon("ASHDOD", "#a78bfa"), popups.ashdod);
        addMarker("elArish", coords.elArish, makeIcon("EL ARISH", "#ffe066"), popups.elArish);
        addMarker("rafah", coords.rafah, makeIcon("RAFAH", "#ff4444"), popups.rafah);
        addMarker(
          "keremShalom",
          coords.keremShalom,
          makeIcon("KEREM SHALOM", "#ff4444"),
          popups.keremShalom,
        );
        addMarker("gazaCity", coords.gazaCity, makeIcon("GAZA", "#00ff88"), popups.gazaCity);
        addMarker("zikim", coords.zikim, makeIcon("ZIKIM", "#00ff88"), popups.zikim);

        map.setView([28, 48], 4);
      };

      const buildJordan = () => {
        clearAllLayers();
        const layer = L.layerGroup();

        drawSolidLine([coords.lahore, coords.elArish], "#1a3a55").addTo(layer);
        drawSolidLine([coords.karachi, coords.elArish], "#1a3a55").addTo(layer);
        drawDashedLine(roadElArishToRafah, "#1a3a55", "6,5", 1.5).addTo(layer);
        drawDashedLine([coords.rafah, coords.keremShalom], "#1a3a55", "4,4", 1.5).addTo(layer);
        drawSolidLine(roadKeremToGaza, "#1a3a55", 1.5).addTo(layer);

        drawSolidLine([coords.karachi, coords.amman], "#ff9900").addTo(layer);
        drawSolidLine([coords.islamabad, coords.amman], "#ff9900").addTo(layer);
        drawDashedLine(roadAmmanToKerem, "#ff9900", "8,5", 2.5).addTo(layer);
        drawSolidLine(roadKeremToGaza, "#00ff88", 2.5).addTo(layer);
        drawDashedLine([coords.keremShalom, coords.zikim], "#00ff88", "6,4", 1.8).addTo(layer);

        layer.addTo(map);
        layersRef.current.jordanLayer = layer;

        addMarker("lahore", coords.lahore, makeIcon("LAHORE", "#5a7a9a"), popups.lahore);
        addMarker("karachi", coords.karachi, makeIcon("KARACHI", "#ff9900"), popups.karachi);
        addMarker("islamabad", coords.islamabad, makeIcon("ISLAMABAD", "#ff9900"), popups.islamabad);
        addMarker("amman", coords.amman, makeIcon("AMMAN", "#ff9900"), popups.amman);
        addMarker("elArish", coords.elArish, makeIcon("EL ARISH", "#2a4a6a"), popups.elArish);
        addMarker("rafah", coords.rafah, makeIcon("RAFAH", "#ff4444"), popups.rafah);
        addMarker(
          "keremShalom",
          coords.keremShalom,
          makeIcon("KEREM SHALOM", "#ff4444"),
          popups.keremShalom,
        );
        addMarker("gazaCity", coords.gazaCity, makeIcon("GAZA", "#00ff88"), popups.gazaCity);
        addMarker("zikim", coords.zikim, makeIcon("ZIKIM", "#00ff88"), popups.zikim);

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
          <div className="header-title">// Cell 2 - Route Assessment & Logistics Tracker</div>
          <div className="header-sub">
            Pakistan to Gaza Strip - Humanitarian Aid Supply Chain - SWP Assessment 2025-26
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
          Main Route (Egypt)
        </button>
        <button
          className={`btn jordan-btn ${mode === "jordan" ? "active" : ""}`}
          onClick={() => setMode("jordan")}
          type="button"
        >
          Alt Route (Jordan)
        </button>
        <div className="divider" />
        <span className="ctrl-label">CONTINGENCY //</span>
        <button
          className={`btn planb-btn ${mode === "planb" ? "active" : ""}`}
          onClick={() => setMode("planb")}
          type="button"
        >
          Plan B - Digital Transfer
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
            <div className="planb-title">// Plan B - Digital Financial Pipeline</div>
            <div className="planb-desc">
              When physical borders are closed or aid trucks are intercepted, this contingency routes
              liquid capital directly to verified local workers inside Gaza, bypassing physical checkpoints.
            </div>
            <div className="flow-why">
              <strong>WHY PLAN B EXISTS:</strong> Physical supply chains can fail under blockade and
              interception pressure, so financial transfer channels provide a fallback delivery mode.
            </div>
            <div className="flow-stats-row">
              <div className="flow-stat">
                <div className="fs-num">$40K</div>
                <div className="fs-label">Example transfer supporting food-insecure refugees</div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">6,500</div>
                <div className="fs-label">Hot meals/day through partner ground operations</div>
              </div>
              <div className="flow-stat">
                <div className="fs-num">95%</div>
                <div className="fs-label">Last-mile failure risk indicator behind Plan B strategy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="legend" id="map-legend" style={{ display: mode === "planb" ? "none" : "block" }}>
          <div className="legend-title">Route Key</div>
          <div className="legend-item">
            <div className="legend-line ll-main" /> Air Route (Pakistan to Egypt/Jordan)
          </div>
          {mode === "jordan" ? (
            <div className="legend-item">
              <div className="legend-line ll-jordan" /> Alt Route (Jordan / Amman)
            </div>
          ) : null}
          <div className="legend-item">
            <div className="legend-line ll-sea" /> Sea Route (Karachi to Port Said)
          </div>
          <div className="legend-item">
            <div className="legend-line ll-ground" /> Ground Transport (Egypt to Border)
          </div>
          <div className="legend-item">
            <div className="legend-line ll-blocked" /> Blocked / Critical Bottleneck
          </div>
          <div className="legend-item">
            <div className="legend-line ll-cleared" /> Cleared to Gaza Entry
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
          padding: 24px;
          align-items: flex-start;
          justify-content: center;
        }

        .route-assessment-map #planb-view.visible {
          display: flex;
        }

        .route-assessment-map .planb-container {
          max-width: 780px;
        }

        .route-assessment-map .planb-title {
          font-family: var(--mono);
          font-size: 0.85rem;
          color: var(--green);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .route-assessment-map .planb-desc {
          margin-top: 10px;
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .route-assessment-map .flow-why {
          background: rgba(255, 68, 68, 0.07);
          border: 1px solid rgba(255, 68, 68, 0.3);
          border-radius: 6px;
          padding: 14px 18px;
          margin: 20px 0 28px;
          font-size: 0.78rem;
          line-height: 1.7;
        }

        .route-assessment-map .flow-why strong {
          color: var(--red);
          font-family: var(--mono);
        }

        .route-assessment-map .flow-stats-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .route-assessment-map .flow-stat {
          flex: 1;
          min-width: 150px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 12px;
          text-align: center;
        }

        .route-assessment-map .fs-num {
          font-family: var(--mono);
          font-size: 1.2rem;
          color: var(--green);
        }

        .route-assessment-map .fs-label {
          font-size: 0.68rem;
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
          min-width: 200px;
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
