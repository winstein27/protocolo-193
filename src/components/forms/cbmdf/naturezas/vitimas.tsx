import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material"
import { AlertMessage, CustomTextField, YesNoField } from "@site/src/components/structure"

const Vitimas = (props) => {
    const { tagState, updateTagState, emergencial } = props;
    const { estadoVitima, estadoVitimaOutroText, estadoVitimaOutroEmergencialBoolean } = tagState;

    const handleChange = (field, value) => {
        const newState = { ...tagState, [field]: value };
        updateTagState(field, newState);
    };


    return (
        <Grid>
            {/* Perguntas Emergenciais */}
            {emergencial &&
                <Grid>
                    {/* <AlertMessage severity="info" title="Quantas vítimas?"></AlertMessage> */}
                    {/* <TextField value={quantidadeVitimas} onChange={(value) => handleChange("quantidadeVitimas", value)} /> */}
                    {/* <CustomTextField value={quantidadeVitimas} onChange={handleChange} label={undefined} name={undefined} /> */}
                    <AlertMessage severity="info" title="Como está a pessoa?"></AlertMessage>
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            aria-label="Estado da Vítima"
                            name="estadoVitima"
                            value={estadoVitima}
                            onChange={(event) => handleChange("estadoVitima", event.target.value)}
                        >
                            <FormControlLabel value="Consciente" control={<Radio />} label="Consciente" />
                            <FormControlLabel value="Engasgada" control={<Radio />} label="Engasgada" />
                            <FormControlLabel value="Inconsciente" control={<Radio />} label="Inconsciente" />
                            <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                        </RadioGroup>
                    </FormControl>
                    {estadoVitima == "Outro" &&
                        <Grid>
                            <CustomTextField label="Insira outras características da vítima informadas pelo solicitante" name="estadoVitimaOutroText" value={estadoVitimaOutroText} onChange={handleChange} />
                            <YesNoField label="Exige atendimento emergencial?" value={estadoVitimaOutroEmergencialBoolean} onChange={(value) => handleChange("estadoVitimaOutroEmergencialBoolean", value)} />
                        </Grid>
                    }

                </Grid>
            }

            {/* Perguntas Não Emergenciais */}
            {/* {!emergencial &&
                <Grid>
                    <AlertMessage severity="info" title="Qual o nome das vítimas?"></AlertMessage>
                    <TextField label="Nome" />
                </Grid>
            } */}
        </Grid>
    );
};

export default Vitimas;
