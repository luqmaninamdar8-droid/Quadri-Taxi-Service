import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = "Quadri Cabs — 24/7 private taxis in South Goa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #071310 0%, #0e3d38 55%, #1a2a12 100%)",
          color: "#f7f3ea",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#0a1c16",
              border: "2px solid rgba(228,177,90,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e4b15a",
              fontSize: 42,
              fontWeight: 700,
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#e4b15a" }}>
            MARGAO · SOUTH GOA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ marginTop: 18, fontSize: 28, color: "#d7c9a8", maxWidth: 860 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#e4b15a" }}>
          Airport · Corporate · Long distance · Luxury · Minibus · 24/7
        </div>
      </div>
    ),
    size
  );
}
