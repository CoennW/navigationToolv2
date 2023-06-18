import * as React from "react";
import PageWrapper from "../../components/PageWrapper";
import StandardLayout from "../../components/StandardLayout";
import { useTranslation } from "react-i18next";
import BoxCard from "../../components/BoxCard";

const bodyToRender = (t) => {
  return null;
};

export default function Question4() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <StandardLayout
        bodyText={bodyToRender(t)}
        smallTitle
        overline={t("question4")}
        title={t("q4")}
        buttonText={t("yes")}
        buttonTo={"/"}
        buttonText2={t("no")}
        buttonTo2={"/"}
      />
    </PageWrapper>
  );
}
