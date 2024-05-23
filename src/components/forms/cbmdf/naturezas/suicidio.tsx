import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import { AlertMessage, EmConstrucao, YesNoField } from "@site/src/components/structure"

const Suicidio = (props) => {
    const { tagState, updateTagState, emergencial } = props;
    const { statusSuicidio, tentante } = tagState;

    const handleChange = (field, value) => {
        const newState = { ...tagState, [field]: value };
        updateTagState(field, newState);
    };


    return (
        <Grid>
            {/* Perguntas Emergenciais */}
            {emergencial &&
                <Grid>
                    <AlertMessage severity="error" title="Marque se o suicídio está EM ANDAMENTO ou CONSUMADO"></AlertMessage>
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
                            <AlertMessage severity="error" title="Marque quem está tentando o suicídio"></AlertMessage>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    row
                                    name="tentante"
                                    value={tentante}
                                    onChange={(event) => handleChange("tentante", event.target.value)}
                                >
                                    <FormControlLabel value="Próprio Solicitante" control={<Radio />} label="Próprio Solicitante" />
                                    <FormControlLabel value="Outra Pessoa" control={<Radio />} label="Outra Pessoa" />
                                </RadioGroup>
                            </FormControl>
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
