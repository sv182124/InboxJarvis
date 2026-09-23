import { Gmail } from "@/components/new-landing/icons/Gmail";
import { Outlook } from "@/components/new-landing/icons/Outlook";
import {
  Section,
  SectionContent,
} from "@/components/new-landing/common/Section";
import {
  PageHeading,
  Paragraph,
} from "@/components/new-landing/common/Typography";
import { CallToAction } from "@/components/new-landing/CallToAction";
import { HeroReveal } from "@/components/new-landing/common/HeroReveal";
import {
  Badge,
  type BadgeVariant,
} from "@/components/new-landing/common/Badge";

interface HeroProps {
  badge?: React.ReactNode;
  badgeVariant?: BadgeVariant;
  children?: React.ReactNode;
  cta?: React.ReactNode;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
}

export function Hero({
  title,
  subtitle,
  badge,
  badgeVariant = "blue",
  children,
  cta,
}: HeroProps) {
  return (
    <Section className={badge ? "mt-7 md:mt-7" : "mt-10 md:mt-20"}>
      {badge ? (
        <HeroReveal className="mb-7 flex justify-center">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </HeroReveal>
      ) : null}
      <PageHeading>{title}</PageHeading>
      <HeroReveal delay={0.125 * 5}>
        <Paragraph size="lg" className="mx-auto mt-6 max-w-[640px]">
          {subtitle}
        </Paragraph>
      </HeroReveal>
      <SectionContent noMarginTop className="mt-6 md:mt-8">
        <div className="mb-8 space-y-3">
          <HeroReveal delay={0.125 * 7}>{cta ?? <CallToAction />}</HeroReveal>
          <HeroReveal delay={0.125 * 8}>
            <div className="mb-12 flex items-center justify-center gap-2">
              <Paragraph color="light" size="sm">
                Works with
              </Paragraph>
              <Outlook />
              <Gmail />
            </div>
          </HeroReveal>
        </div>
        {children}
      </SectionContent>
    </Section>
  );
}
