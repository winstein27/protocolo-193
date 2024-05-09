import { Grid } from "@mui/material"
import { AlertMessage } from "@site/src/components/structure"

export const CapturaInseto = props => {
    return (
        <Grid >

            {/* Perguntas Emergenciais */}

            {props.emergencial &&
                <Grid>
                    <AlertMessage severity="info" title='"Os insetos estão atacando as pessoas?"'></AlertMessage>
                    <p>Sim/Não</p>
                </Grid>
            }

            {/* Perguntas Não Emergenciais */}

            {!props.emergencial &&
                <Grid>
                    <AlertMessage severity="info" title='"Onde estão os insetos?"'></AlertMessage>
                    <AlertMessage severity="info" title='"Qual a altura aproximada do enxame?"'></AlertMessage>
                    <AlertMessage severity="info" title='"A ocorrência foi cadastrada e o quartel da região entrará em contato para colher mais informações, ok?"'></AlertMessage>
                </Grid>
            }
        </Grid>
    )
}
