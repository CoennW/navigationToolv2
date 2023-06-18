import * as React from "react";
import PageWrapper from "../../components/PageWrapper";
import StandardLayout from "../../components/StandardLayout";
import { useTranslation } from "react-i18next";
import BoxCard from "../../components/BoxCard";

const bodyToRender = (t) => {
  return <BoxCard boxList={[{ text: t("q2a") }, { text: t("q2b") }]} />;
};

export default function Question2() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <StandardLayout
        bodyText={bodyToRender(t)}
        smallTitle
        overline={t("question2")}
        title={t("q2")}
        buttonText={t("yes")}
        buttonTo={"/"}
        buttonText2={t("no")}
        buttonTo2={"/"}
        noBorder
      />
    </PageWrapper>
  );
}
