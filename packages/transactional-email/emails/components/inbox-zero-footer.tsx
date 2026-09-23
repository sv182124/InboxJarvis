import { Hr, Img, Link, Section } from "@react-email/components";

export function InboxZeroFooter({
  baseUrl = "http://localhost:3000",
}: {
  baseUrl?: string;
}) {
  return (
    <>
      <Hr className="m-0 border-gray-200" />
      <Section className="bg-[#FDFDFD] px-8 py-4">
        <Link href={baseUrl} className="text-[11px] text-gray-500 no-underline">
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td className="pr-1 align-middle text-[11px] text-gray-500">
                Sent via
              </td>
              <td className="pr-1.5 align-middle">
                <Img
                  src={new URL("/icon.png", baseUrl).toString()}
                  width="14"
                  height="14"
                  alt=""
                  className="block"
                />
              </td>
              <td className="align-middle text-[11px] font-semibold text-gray-700">
                InboxJarvis
              </td>
            </tr>
          </table>
        </Link>
      </Section>
    </>
  );
}
