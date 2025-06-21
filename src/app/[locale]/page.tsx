import type { FC } from "react";
import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import { MyComponent } from "@/components/MyComponent";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

const PageContent: FC = () => {
  const content = useIntlayer("page");

  return (
    <>
      <p>{content.getStarted.main}</p>
      <code>{content.getStarted.pageLink}</code>
    </>
  );
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <MyComponent/>
        <LocaleSwitcher/>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Page;