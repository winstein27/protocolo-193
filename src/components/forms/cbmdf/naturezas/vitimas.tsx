import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material"
import { AlertMessage, CustomTextField } from "@site/src/components/structure"
import { useState } from "react";

const Vitimas = (props) => {
    const { tagState, updateTagState, emergencial } = props;
    const { estadoVitima, quantidadeVitimas } = tagState;

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
                    <AlertMessage severity="info" title="Como está a vítima?"></AlertMessage>
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
                            <FormControlLabel value="Respirando com Dificuldade" control={<Radio />} label="Respirando com Dificuldade" />
                            <FormControlLabel value="Inconsciente" control={<Radio />} label="Inconsciente" />
                        </RadioGroup>
                    </FormControl>
                    {/* {estadoVitima == "Engasgada" &&
                        <Grid>
                            PROTOCOLO OVACE
                        </Grid>
                    }
                    {estadoVitima == "Respiração Difícil" &&
                        <Grid>
                            PROTOCOLO OVACE
                        </Grid>
                    }
                    {estadoVitima == "Inconsciente" &&
                        <Grid>
                            PROTOCOLO PCR
                        </Grid>
                    } */}
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
