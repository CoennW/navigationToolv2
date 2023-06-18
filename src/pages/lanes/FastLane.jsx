import * as React from "react";
import PageWrapper from "../../components/PageWrapper";
import StandardLayout from "../../components/StandardLayout";
import TabView from "../../components/TabView";
import { useTranslation } from "react-i18next";

export default function FastLane() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <StandardLayout
        bodyText={<TabView FastLane />}
        subTitle={t("fastText")}
        title={t("fast")}
        overline={t("fastSubTitle")}
        buttonText=""
        buttonTo="/"
      />
    </PageWrapper>
  );
}
