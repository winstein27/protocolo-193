import React, { useState, useEffect } from 'react';
import { FormControl, RadioGroup, Radio, FormControlLabel, FormLabel, Grid, TextField, IconButton, Alert, AlertTitle } from '@mui/material';
import { FileCopy as FileCopyIcon } from '@mui/icons-material';

const Formulario = () => {
    const [pessoas, setPessoas] = useState(false);
    const [animais, setAnimais] = useState(false);
    const [residencias, setResidencias] = useState(false);
    const [origem, setOrigem] = useState(false);
    const [origemText, setOrigemText] = useState('');
    const [causador, setCausador] = useState(false);
    const [pessoaNoLocal, setpessoaNoLocal] = useState(false);
    const [relato, setRelato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [narrativa, setNarrativa] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [irEstrada, setIrEstrada] = useState(false);



    useEffect(() => {
        const text = `
RELATO DA OCORRÊNCIA: ${relato}

Endereço: ${endereco}
Ponto de Referência: ${pontoReferencia}

INFORMAÇÕES:
Há pessoas no local: ${pessoas ? 'Sim' : 'Não'}
Há animais no local: ${animais ? 'Sim' : 'Não'}
Incêndio ameaça residências: ${residencias ? 'Sim' : 'Não'}
Conseguiu identificar onde começou o incêndio: ${origem ? `Sim - ${origemText}` : 'Não'}
Solicitante consegue ir para ponto de melhor localização?: ${irEstrada ? 'Sim' : 'Não'}
    `;
        setNarrativa(text);
    }, [relato, endereco, pessoas, animais, residencias, origem, causador, pontoReferencia, origemText, irEstrada]);

    const handleCopy = () => {
        navigator.clipboard.writeText(narrativa);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 4 }}>
                <FormLabel component="legend">O que está acontecendo?</FormLabel>
                <TextField

                    fullWidth
                    value={relato} onChange={(e) => setRelato(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="legend">Qual o endereço?</FormLabel>
                <TextField
                    fullWidth
                    value={endereco} onChange={(e) => setEndereco(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="legend">Me dê um ponto de referência</FormLabel>
                <TextField
                    fullWidth
                    value={pontoReferencia} onChange={(e) => setPontoReferencia(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Há pessoas no local?</FormLabel>
                    <RadioGroup row aria-label="pessoasBool" name="pessoasBool" value={pessoas.toString()} onChange={(e) => setPessoas(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
                {pessoas &&
                    <Alert severity="warning">
                        <AlertTitle>Informe ao Solicitante:</AlertTitle>
                        "Tente todos em um local seguro"
                    </Alert>
                }
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Há animais no local?</FormLabel>
                    <RadioGroup row aria-label="animaisBool" name="animaisBool" value={animais.toString()} onChange={(e) => setAnimais(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
                {animais &&
                    <Alert severity="warning">
                        <AlertTitle>Informe ao Solicitante:</AlertTitle>
                        "Tente todos em um local seguro"
                    </Alert>
                }
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Incêndio está ameaçando residências?</FormLabel>
                    <RadioGroup row aria-label="residenciasBool" name="residenciasBool" value={residencias.toString()} onChange={(e) => setResidencias(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Conseguiu identificar onde começou o incêndio?</FormLabel>
                    <RadioGroup row aria-label="origemBool" name="origemBool" value={origem.toString()} onChange={(e) => setOrigem(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {origem &&
                <Grid item xs={12}>
                    <TextField
                        label="Onde começou?"
                        value={origemText}
                        onChange={(e) => setOrigemText(e.target.value)}
                        fullWidth
                    />
                </Grid>}
            {/* <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Conseguiu identificar quem ou o quê causou o incêndio?</FormLabel>
                    <RadioGroup row aria-label="causadorBool" name="causadorBool" value={causador.toString()} onChange={(e) => setCausador(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {causador &&
                <Grid item xs={12}>
                    <TextField
                        label="Quem ou o quê causou?"
                        fullWidth
                    />
                </Grid>}
            {causador &&
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pessoa está no local??</FormLabel>
                        <RadioGroup row aria-label="pessoaNoLocalBool" name="pessoaNoLocalBool" value={pessoaNoLocal.toString()} onChange={(e) => setpessoaNoLocal(e.target.value === 'true')}>
                            <FormControlLabel value="false" control={<Radio />} label="Não" />
                            <FormControlLabel value="true" control={<Radio />} label="Sim" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            } */}
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Consegue ir para a estrada ou outro
                        lugar onde possamos encontrá-lo facilmente?</FormLabel>
                    <RadioGroup row aria-label="irEstradaBool" name="irEstradaBool" value={irEstrada.toString()} onChange={(e) => setIrEstrada(e.target.value === 'true')}>
                        <FormControlLabel value="false" control={<Radio />} label="Não" />
                        <FormControlLabel value="true" control={<Radio />} label="Sim" />
                    </RadioGroup>
                </FormControl>
                {irEstrada &&
                    <Alert severity="warning">
                        <AlertTitle>Informe ao Solicitante:</AlertTitle>
                        "OK, leve o celular contigo. Vamos enviar uma equipe o quanto antes"
                    </Alert>
                }
                {!irEstrada &&
                    <Alert severity="warning">
                        <AlertTitle>Informe ao Solicitante:</AlertTitle>
                        "OK, Não permaneça em local seguro e não tente combater o incêndio, vamos
                        enviar uma equipe para o quanto antes"
                    </Alert>
                }
            </Grid>

            <Grid item xs={12} sx={{
                mt: 10,
            }}>
                <FormLabel component="legend">Copie o texto abaixo e insira na Narrativa</FormLabel>
                <TextField
                    sx={{
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    }}
                    multiline
                    fullWidth
                    value={narrativa}
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
