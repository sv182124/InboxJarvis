import { Anchor } from "@/components/new-landing/common/Anchor";
import { Card, CardContent } from "@/components/new-landing/common/Card";
import { CardWrapper } from "@/components/new-landing/common/CardWrapper";
import {
  Section,
  SectionContent,
} from "@/components/new-landing/common/Section";
import {
  Paragraph,
  SectionHeading,
} from "@/components/new-landing/common/Typography";
import { BRAND_NAME } from "@/utils/branding";

const faqs: {
  question: string;
  answer: React.ReactNode;
  answerText?: string;
}[] = [
  {
    question: `Which email providers does ${BRAND_NAME} support?`,
    answer:
      "We support Gmail, Google Workspace, and Microsoft Outlook email accounts.",
  },
  {
    question: "How can I request a feature?",
    answer: (
      <span>
        Post an issue on{" "}
        <Anchor href="/github" newTab>
          GitHub
        </Anchor>
        . We're happy to hear how we can improve your email experience.
      </span>
    ),
    answerText:
      "Post an issue on GitHub. We're happy to hear how we can improve your email experience.",
  },
  {
    question: `Will ${BRAND_NAME} replace my current email client?`,
    answer: `No! ${BRAND_NAME} isn't an email client. It's used alongside your existing email client. You use Google or Outlook as normal.`,
  },
  {
    question: "Is the code open-source?",
    answer: (
      <span>
        You can read the source code and license terms in our{" "}
        <Anchor href="/github" newTab>
          GitHub repo
        </Anchor>
        .
      </span>
    ),
    answerText:
      "You can read the source code and license terms in our GitHub repo.",
  },
  {
    question: `Where can I run ${BRAND_NAME}?`,
    answer:
      "Run it locally or deploy it on your own infrastructure. See the repository documentation for setup instructions.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .map((faq) => {
      const text = typeof faq.answer === "string" ? faq.answer : faq.answerText;
      if (!text) return null;
      return {
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: { "@type": "Answer" as const, text },
      };
    })
    .filter(Boolean),
};

export function FAQs() {
  return (
    <Section>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify on controlled object is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionHeading>Frequently asked questions</SectionHeading>
      <SectionContent>
        <CardWrapper>
          <dl className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <Card
                variant="extra-rounding"
                className="gap-4"
                key={faq.question}
              >
                <CardContent>
                  <Paragraph
                    as="dt"
                    color="gray-900"
                    className="font-semibold tracking-tight mb-4"
                  >
                    {faq.question}
                  </Paragraph>
                  <dd>
                    <Paragraph>{faq.answer}</Paragraph>
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </CardWrapper>
      </SectionContent>
    </Section>
  );
}
