import { Grid } from "@mui/material"
import { AlertMessage } from "@site/src/components/structure"

export const Vitimas = props => {
    return (
        <Grid >
            <AlertMessage severity="info" title='"Quantas vítimas no local?"'></AlertMessage>
            <p>0 a ...</p>
        </Grid>
    )
}
