import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BoxCard from "./BoxCard";

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
  {
    text: "Give Idea description, Fit with objectives and Support of parent organizations emphasis in the beginning as they create a sense of continuation in key-players leading to motivation for next phases",
  },
  {
    text: "Provide the key-participants with a learning module about Inception phase Approach since having the same competences leads to a shared view on tools and outcomes",
  },
  {
    text: "Give Idea description, Fit with objectives and Support of parent organizations emphasis in the beginning as they create a sense of continuation in key-players leading to motivation for next phases",
  },
  {
    text: "Provide the key-participants with a learning module about Inception phase Approach since having the same competences leads to a shared view on tools and outcomes",
  },
  {
    text: "Give Idea description, Fit with objectives and Support of parent organizations emphasis in the beginning as they create a sense of continuation in key-players leading to motivation for next phases",
  },
  {
    text: "Provide the key-participants with a learning module about Inception phase Approach since having the same competences leads to a shared view on tools and outcomes",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabView({ FastLane }) {
  const [value, setValue] = React.useState(0);
  console.log(FastLane);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant={"scrollable"}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Support" {...a11yProps(0)} />
          <Tab label="Idea and it's characteristics" {...a11yProps(1)} />
          <Tab label="Fit with objectives" {...a11yProps(2)} />
          <Tab label="Cooperation NExt pahses" {...a11yProps(3)} />
          <Tab label="Cooperation NExt es" {...a11yProps(4)} />
          <Tab label="Cooperation NExt pahss" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BoxCard boxList={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BoxCard boxList={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </>
  );
}
