import Image from "next/image";
import { BRAND_LOGO_URL, BRAND_NAME } from "@/utils/branding";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  if (BRAND_LOGO_URL) {
    return (
      <Image
        src={BRAND_LOGO_URL}
        alt={`${BRAND_NAME} logo`}
        width={209}
        height={25}
        className={className}
        unoptimized
      />
    );
  }

  return (
    <svg viewBox="0 0 209 25" fill="none" className={className}>
      <title>{BRAND_NAME}</title>
      <text
        x="0"
        y="21"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="25"
        fontWeight="700"
        textLength="209"
        lengthAdjust="spacingAndGlyphs"
      >
        {BRAND_NAME}
      </text>
    </svg>
  );
}
