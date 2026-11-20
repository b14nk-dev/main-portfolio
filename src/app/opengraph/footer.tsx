const STATS = [
  { value: "3 yrs", label: "In production" },
  { value: "15k+", label: "Monthly users" },
  { value: "40%", label: "Faster loads" },
];

export function OgFooter({ serif }: { serif: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(255, 255, 255, 0.14)",
        paddingTop: 28,
      }}
    >
      <div style={{ display: "flex", gap: 64 }}>
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{
                fontFamily: serif,
                fontSize: 34,
                lineHeight: 1.1,
                color: "#f1efea",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                marginTop: 8,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#7c7972",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <span style={{ fontSize: 16, color: "#8a8681" }}>
        negiritik01@gmail.com
      </span>
    </div>
  );
}
