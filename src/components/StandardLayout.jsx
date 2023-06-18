import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export default function StandardLayout({
  overline,
  title,
  smallTitle,
  subTitle,
  bodyText,
  buttonText,
  buttonTo,
  buttonText2,
  buttonTo2,
  noBorder,
}) {
  return (
    <Card elevation={1} sx={{ p: 1, mt: 3 }}>
      <CardContent>
        <Typography variant="overline">{overline}</Typography>
        <Typography
          fontWeight={500}
          variant={smallTitle ? "h5" : "h4"}
          component="h2"
        >
          {title}
        </Typography>
        <Typography variant="subtitle1">{subTitle}</Typography>

        <Divider
          light
          sx={{
            border: noBorder ? "0px" : "0px",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography component={"div"} variant="body1">
          {bodyText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {buttonText && (
          <Button color="secondary" component={Link} to={buttonTo}>
            {buttonText}
          </Button>
        )}
        {buttonText2 && (
          <Button color="secondary" component={Link} to={buttonTo2}>
            {buttonText2}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
