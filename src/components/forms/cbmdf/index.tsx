import { Grid } from "@mui/material";
import { ComponentsMap } from "./componentsMap";

export const CBMDFForm = (props) => {
  // const tagsArray = props.tags;
  const { tags, emergencial, tagStates, updateTagState } = props;

  return (
    <Grid>
      {tags.map((tag) => {
        const Component = ComponentsMap[tag];
        return Component ? (
          <Component
            key={tag}
            emergencial={emergencial}
            tagState={tagStates[tag]}
            updateTagState={(_, newState) => updateTagState(tag, newState)}
          />
        ) : null;
      })}
    </Grid>
  );
};
