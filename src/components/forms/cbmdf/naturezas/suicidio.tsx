import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { AlertMessage, EmConstrucao, YesNoField } from "@site/src/components/structure"

const Suicidio = (props) => {
    const { tagState, updateTagState, emergencial } = props;
    const { statusSuicidio } = tagState;

    const handleChange = (field, value) => {
        const newState = { ...tagState, [field]: value };
        updateTagState(field, newState);
    };


    return (
        <Grid>
            {/* Perguntas Emergenciais */}
            {emergencial &&
                <Grid>
                    <AlertMessage severity="error" title="Marque se o suicidio está EM ANDAMENTO ou CONSUMADO"></AlertMessage>
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            name="statusSuicidio"
                            value={statusSuicidio}
                            onChange={(event) => handleChange("statusSuicidio", event.target.value)}
                        >
                            <FormControlLabel value="Em Andamento" control={<Radio />} label="Em Andamento" />
                            <FormControlLabel value="Consumado" control={<Radio />} label="Consumado" />
                        </RadioGroup>
                    </FormControl>
                    {statusSuicidio == "Em Andamento" &&
                        <Grid>
                            <EmConstrucao message="Procedimentos para Suicídio em Andamento" />
                        </Grid>
                    }
                    {statusSuicidio == "Consumado" &&
                        <Grid>
                            <EmConstrucao message="Procedimentos para Suicídio consumado" />
                        </Grid>
                    }
                </Grid>
            }

        </Grid>
    );
};

export default Suicidio;
