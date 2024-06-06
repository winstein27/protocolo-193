import { Grid } from "@mui/material";
import { ComponentsMap } from "./componentsMap";

export const CBMDFForm = (props) => {
  const { tags } = props;

  return (
    <Grid>
      {tags.map((tag) => {
        const Component = ComponentsMap[tag];
        return Component ? <Component /> : null;
      })}
    </Grid>
  );
};
