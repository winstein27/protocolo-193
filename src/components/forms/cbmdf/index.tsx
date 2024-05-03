import { Grid } from "@mui/material"
import { ComponentsMap } from "./componentsMap";

export const CBMDFForm = props => {
    const tagsArray = props.tags;

    return (
        <Grid>
            <p>No início, perguntas emergenciais</p>
            <p>No final, perguntas não emergenciais</p>
            {tagsArray.map(tag => {
                const Component = ComponentsMap[tag];
                return Component ? <Component key={tag} /> : null;
            })}
        </Grid>
    );
};
