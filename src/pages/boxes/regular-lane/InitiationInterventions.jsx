import * as React from "react";
import PageWrapper from "../../../components/PageWrapper";
import StandardLayout from "../../../components/StandardLayout";
import BoxCard from "../../../components/BoxCard";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const data = [
  {
    text: "Push the use of the Inception phase so hazards and benefits of collaboration become explicit leading to shared hazards and benefits of collaboration",
  },
  {
    text: "Give Idea description, Fit with objectives and Support of parent organizations emphasis in the beginning as they create a sense of continuation in key-players leading to motivation for next phases",
  },
  {
    text: "Provide the key-participants with a learning module about Inception phase Approach since having the same competences leads to a shared view on tools and outcomes",
  },
];

export default function InitiationInterventions() {
  return (
    <PageWrapper>
      <StandardLayout
        bodyText={
          <>
            <BoxCard title=" Box: 1A: Initiation > Support" boxList={data} />
            <BoxCard title=" Box: 2A: Initiation > Support" boxList={data} />
          </>
        }
        noBorder
        subTitle="Set of direct interventions for nomination, first meetings, introduction."
        title="Initiation Interventions"
        buttonText=""
        buttonTo="/"
      />
    </PageWrapper>
  );
}
