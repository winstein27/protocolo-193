import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup, Checkbox, RadioGroup, Radio, FormControlLabel, FormLabel, Grid, TextField, IconButton } from '@mui/material';
import { FileCopy as FileCopyIcon } from '@mui/icons-material';

const Formulario = () => {
    const [desmaiada, setDesmaiada] = useState(false);
    const [inconsciente, setInconsciente] = useState(false);
    const [dorNoPeito, setDorNoPeito] = useState(false);
    const [hemorragia, setHemorragia] = useState(false);
    const [respiracao, setRespiracao] = useState('Normal');
    const [texto, setTexto] = useState('');

    const [emergenciaPreHospitalar, setEmergenciaPreHospitalar] = useState(false);
    const [ocorrenciaBM, setOcorrenciaBM] = useState(true);



    useEffect(() => {
        const emergencia = inconsciente || dorNoPeito || hemorragia || respiracao !== 'Normal';
        let header = '';
        if (emergencia) {
            header = '#despachoImediato\n\n';
        }
        const text = `
${header}
Pessoa está inconsciente? ${inconsciente ? 'Sim' : 'Não'}
Sente alguma dor muito forte no peito? ${dorNoPeito ? 'Sim' : 'Não'}
Apresenta hemorragia? ${hemorragia ? 'Sim' : 'Não'}
Como está a Respiração? ${respiracao}
    `;
        setTexto(text);
    }, [inconsciente, dorNoPeito, hemorragia, respiracao]);

    const handleRespiracaoChange = (event) => {
        setRespiracao(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (name === 'emergenciaPreHospitalar') {
            setEmergenciaPreHospitalar(checked);
        }
        // Adicione aqui lógica para lidar com a alteração de outros checkboxes, se necessário
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(texto);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Breve relato"
                    multiline
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">É Ocorrência Bombeiro Militar?</FormLabel>
                    <RadioGroup row aria-label="ocorrenciaBM" name="ocorrenciaBM" value={ocorrenciaBM.toString()} onChange={(e) => setOcorrenciaBM(e.target.value === 'true')}>
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {!ocorrenciaBM &&
                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Agência(s) responsáveis pela Ocorrência</FormLabel>
                        <FormGroup aria-label="agencias">
                            <FormControlLabel control={<Checkbox />} label="SAMU" />
                            <FormControlLabel control={<Checkbox />} label="PMDF" />
                            <FormControlLabel control={<Checkbox />} label="PCDF" />
                            <FormControlLabel control={<Checkbox />} label="DETRAN" />
                            <FormControlLabel control={<Checkbox />} label="CBMGO - Formosa" />
                            <FormControlLabel control={<Checkbox />} label="CBMGO - Águas Lindas" />
                            <FormControlLabel control={<Checkbox />} label="CBMGO - Santo Antônio do Descoberto" />
                            <FormControlLabel control={<Checkbox />} label="CBMGO - Valparaíso" />
                            <FormControlLabel control={<Checkbox />} label="CBMGO - Luziânia" />
                        </FormGroup>
                    </FormControl>
                </Grid>
            }
            {ocorrenciaBM &&
                <Grid item xs={6}>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">Grupo(s)</FormLabel>
                        <FormGroup aria-label="grupos" >
                            <FormControlLabel
                                control={<Checkbox onChange={handleCheckboxChange} name="emergenciaPreHospitalar" />}
                                label="Emergência Pré-Hospitalar"
                            />
                            <FormControlLabel control={<Checkbox />} label="Incêndio" />
                            <FormControlLabel control={<Checkbox />} label="Busca e Salvamento" />
                            <FormControlLabel control={<Checkbox />} label="Operações" />
                            <FormControlLabel control={<Checkbox />} label="Outros" />
                        </FormGroup>
                    </FormControl>
                </Grid>
            }
            {ocorrenciaBM && emergenciaPreHospitalar && (
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pessoa está desmaiada?</FormLabel>
                        <RadioGroup row aria-label="desmaiada" name="desmaiada" value={desmaiada.toString()} onChange={(e) => setDesmaiada(e.target.value === 'true')}>
                            <FormControlLabel value="false" control={<Radio />} label="Não" />
                            <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}
            {ocorrenciaBM && emergenciaPreHospitalar && desmaiada && (
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">O paciente abre o olho ou se movimenta quando você chama em voz alta ou toca nele?</FormLabel>
                        <RadioGroup row aria-label="inconsciente" name="inconsciente" value={inconsciente.toString()} onChange={(e) => setInconsciente(e.target.value === 'true')}>
                            <FormControlLabel value="true" control={<Radio />} label="Não" />
                            <FormControlLabel value="false" control={<Radio />} label="Sim" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}
            {ocorrenciaBM && emergenciaPreHospitalar && !inconsciente && (
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Sente alguma dor muito forte no peito?</FormLabel>
                        <RadioGroup row aria-label="dorNoPeito" name="dorNoPeito" value={dorNoPeito.toString()} onChange={(e) => setDorNoPeito(e.target.value === 'true')}>
                            <FormControlLabel value="false" control={<Radio />} label="Não" />
                            <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}
            {ocorrenciaBM && emergenciaPreHospitalar && (
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Apresenta hemorragia?</FormLabel>
                        <RadioGroup row aria-label="hemorragia" name="hemorragia" value={hemorragia.toString()} onChange={(e) => setHemorragia(e.target.value === 'true')}>
                            <FormControlLabel value="false" control={<Radio />} label="Não" />
                            <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}
            {ocorrenciaBM && emergenciaPreHospitalar && (
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Como está a Respiração?</FormLabel>
                        <RadioGroup row aria-label="respiracao" name="respiracao" value={respiracao} onChange={handleRespiracaoChange}>
                            <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                            <FormControlLabel value="Respira com dificuldade" control={<Radio />} label="Respira com dificuldade" />
                            <FormControlLabel value="Engasgada" control={<Radio />} label="Engasgada" />
                            <FormControlLabel value="Não respira" control={<Radio />} label="Não respira" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            )}

            <Grid item xs={12}>
                <TextField
                    label="Narrativa"
                    multiline
                    fullWidth
                    value={texto}
                    InputProps={{
                        disabled: true,
                        endAdornment: (
                            <IconButton onClick={handleCopy} aria-label="copy">
                                <FileCopyIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Formulario;
