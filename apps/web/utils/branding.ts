import { env } from "@/env";

export const BRAND_NAME = env.NEXT_PUBLIC_BRAND_NAME || "InboxJarvis";
export const BRAND_LOGO_URL = env.NEXT_PUBLIC_BRAND_LOGO_URL?.trim();
export const BRAND_ICON_URL =
  env.NEXT_PUBLIC_BRAND_ICON_URL?.trim() || "/icon.png";
export const REPOSITORY_URL = "https://github.com/sv182124/InboxJarvis";
export const LICENSE_URL = `${REPOSITORY_URL}/blob/main/LICENSE`;
export const SECURITY_URL = `${REPOSITORY_URL}/blob/main/SECURITY.md`;
export const DOCUMENTATION_URL = `${REPOSITORY_URL}/tree/main/docs`;
export const SUPPORT_EMAIL = env.NEXT_PUBLIC_SUPPORT_EMAIL;
export const SUPPORT_URL = SUPPORT_EMAIL
  ? `mailto:${SUPPORT_EMAIL}`
  : `${REPOSITORY_URL}/issues`;
export const SUPPORT_CONTACT = SUPPORT_EMAIL || `${REPOSITORY_URL}/issues`;

export function getBrandTitle(pageTitle: string) {
  return `${BRAND_NAME} | ${pageTitle}`;
}

export function getPossessiveBrandName() {
  return BRAND_NAME.endsWith("s") ? `${BRAND_NAME}'` : `${BRAND_NAME}'s`;
}

export function toAbsoluteUrl(urlOrPath: string) {
  return new URL(urlOrPath, env.NEXT_PUBLIC_BASE_URL).toString();
}
