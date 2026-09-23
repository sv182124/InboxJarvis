import { BRAND_NAME } from "@/utils/branding";

export function FooterLineLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 180"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <text
        x="720"
        y="140"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.06"
        fontFamily="Arial, sans-serif"
        fontSize="160"
        fontWeight="700"
      >
        {BRAND_NAME}
      </text>
    </svg>
  );
}
