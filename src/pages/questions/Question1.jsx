import * as React from "react";
import PageWrapper from "../../components/PageWrapper";
import StandardLayout from "../../components/StandardLayout";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";

const bodyToRender = (checkboxLabelsObj) => {
  return (
    <FormGroup color="secondary">
      {Object.entries(checkboxLabelsObj).map(([key, val]) => (
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label={val}
        />
      ))}
    </FormGroup>
  );
};

export default function Question1() {
  const { t } = useTranslation();
  const [checkboxLabelsObj, setCheckBoxLabelsObj] = useState(t("q1Checkboxes"));
  useEffect(() => {
    setCheckBoxLabelsObj(t("q1Checkboxes"));
  }, [t]);

  return (
    <PageWrapper>
      <StandardLayout
        bodyText={bodyToRender(checkboxLabelsObj)}
        smallTitle
        overline={t("question1")}
        title={t("q1Title")}
        buttonText={t("go")}
        buttonTo={"/question/2"}
      />
    </PageWrapper>
  );
}
