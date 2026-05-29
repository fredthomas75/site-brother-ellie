import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Brother Ellie — Études environnementales partout au Québec";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#131c0e",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(157,171,126,0.30), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(216,200,158,0.18), transparent 60%)",
          color: "#faf6ec",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* topographic lines */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0, opacity: 0.18 }}
        >
          <g fill="none" stroke="#9dab7e" strokeWidth="1">
            <path d="M0 380 Q 300 320 600 360 T 1200 360" />
            <path d="M0 410 Q 300 350 600 390 T 1200 390" />
            <path d="M0 440 Q 300 380 600 420 T 1200 420" />
            <path d="M0 470 Q 300 410 600 450 T 1200 450" />
            <path d="M0 500 Q 300 440 600 480 T 1200 480" />
            <path d="M0 350 Q 300 290 600 330 T 1200 330" />
            <path d="M0 320 Q 300 260 600 300 T 1200 300" />
          </g>
        </svg>

        {/* top — brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="48" height="48" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14.5" stroke="#9dab7e" strokeWidth="1" fill="none" />
            <path d="M16 4 C 10 9, 9 17, 16 28 C 23 17, 22 9, 16 4 Z" fill="#9dab7e" />
          </svg>
          <div
            style={{
              fontSize: 30,
              letterSpacing: "-0.02em",
              color: "#eef1e6",
            }}
          >
            Brother <span style={{ fontStyle: "italic" }}>Ellie</span>
          </div>
        </div>

        {/* center — headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#faf6ec",
              maxWidth: 980,
            }}
          >
            Études environnementales
            <br />
            <span style={{ fontStyle: "italic", color: "#c3cda8" }}>
              rigoureuses.
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: "rgba(250,246,236,0.7)",
              fontFamily: "Helvetica, Arial, sans-serif",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Caractérisation de sites · Études d'impact · Demandes MELCCFP — partout au Québec
          </div>
        </div>

        {/* bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(250,246,236,0.55)",
            fontFamily: "Helvetica, Arial, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          <div>brother-ellie.ca</div>
          <div>Devis · 24 h ouvrables</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
