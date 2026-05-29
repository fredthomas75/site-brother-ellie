import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131c0e",
          borderRadius: 14,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14.5" stroke="#c3cda8" strokeWidth="1" fill="none" />
          <path
            d="M16 4 C 10 9, 9 17, 16 28 C 23 17, 22 9, 16 4 Z"
            fill="#c3cda8"
          />
          <path d="M16 8 L16 27" stroke="#131c0e" strokeWidth="0.8" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
