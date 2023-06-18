import * as React from "react";
import PageWrapper from "../components/PageWrapper";
import StandardLayout from "../components/StandardLayout";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const bodyToRender = (t) => {
  return (
    <>
      <Box component={"p"}>{t("intro")}</Box>
      <Box sx={{ mb: 0 }} component={"p"}>
        {t("intro2")}
      </Box>
    </>
  );
};

export default function Welcome() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <StandardLayout
        title={t("introTitle")}
        bodyText={bodyToRender(t)}
        buttonText={"Start"}
        buttonTo={"question/1"}
      />
    </PageWrapper>
  );
}
