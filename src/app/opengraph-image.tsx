import { ImageResponse } from "next/og";
import { initials, portfolio, totalExperienceYears } from "@/lib/portfolio";

export const alt = `${portfolio.profile.name} — Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  const { profile } = portfolio;
  const years = totalExperienceYears(portfolio.experience);
  const tags = [`${years}+ years`, ...portfolio.main_skills.slice(0, 5)];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "#0a0a0b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
              borderRadius: 28,
              background: "#3d1830",
              color: "#f472b6",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            {initials(profile.name)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", fontSize: 60, fontWeight: 700, letterSpacing: -1 }}>
              {profile.name}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
              Software Developer · {profile.location}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #27272a",
                background: "#131316",
                fontSize: 26,
                color: "#f4f4f5",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
