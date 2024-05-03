import { Grid } from "@mui/material"
import { AlertMessage } from "@site/src/components/structure"

export const CapturaInseto = props => {
    return (
        <Grid>
            <AlertMessage severity="info" title='"Onde estão os insetos?"'></AlertMessage>
            <p>Casa, Área Verde, Comércio</p>
            <AlertMessage severity="info" title='"Eles estão atacando as pessoas?"'></AlertMessage>
            <p>Sim/Não</p>
            <AlertMessage severity="info" title='"Qual a altura aproximada do enxame?"'></AlertMessage>
            <p>Sim/Não</p>
        </Grid>
    )
}
