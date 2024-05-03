import React, { useState, useEffect } from 'react';
import { Grid, ButtonGroup, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import {
    YesNoField, SwitchField, AlertMessage, Narrativa, CustomTextField,
    UfSelect, CheckboxGroup, Agencias, NumberTextField
} from '@site/src/components/structure';

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const Formulario = () => {

    const [victimQuantity, setVictimQuantity] = useState(0);

    const handleVictimQuantityChange = (quantity) => {
        setVictimQuantity(quantity);
    };

    const VictimPair = ({ index }) => {
        return (
            <Grid item key={index}>
                <YesNoField label="A pessoa respira?" value={transferirBoolean} onChange={(value) => handleChange("transferirBoolean", value)} />
            </Grid>
        );
    };
    const [state, setState] = useState({
        tipoAtendimento: 'Ocorrência',
        estado: 'DF',
        pessoas: false,
        animais: false,
        residencias: false,
        origem: false,
        origemText: '',
        pessoaNoLocal: false,
        relato: '',
        endereco: '',
        narrativa: '',
        pontoReferencia: '',
        irEstrada: false,
        pontoReferenciaBoolean: false,
        transferirBoolean: false,
        grupoNaturezaAPH: false,
        grupoNaturezaSalvamento: false,
        grupoNaturezaIncendio: false,
        grupoNaturezaOutros: false,
        quantidade_vitimas: 0

    });

    const { tipoAtendimento, estado, pessoas, animais, residencias, origem, origemText,
        relato, endereco, narrativa, pontoReferencia, irEstrada, pontoReferenciaBoolean,
        transferirBoolean, grupoNaturezaAPH, grupoNaturezaSalvamento, grupoNaturezaIncendio,
        grupoNaturezaOutros, quantidade_vitimas } = state;

    const handleChange = (field, value) => {
        setState(prevState => ({ ...prevState, [field]: value }));
    };

    const handleCheckboxChange = (field, checked) => {
        setState(prevState => ({ ...prevState, [field]: checked }));
    };

    useEffect(() => {
        const text = `
TIPO DE ATENDIMENTO: ${tipoAtendimento}
Relato: ${relato}

Endereço: ${endereco} - ${estado}
Ponto de Referência: ${pontoReferencia}

Transferido para outra agência: ${transferirBoolean ? 'Sim' : 'Não'}

INFORMAÇÕES:
Quantidade de Vítimas: ${quantidade_vitimas} 

Há pessoas no local: ${pessoas ? 'Sim' : 'Não'}
Há animais no local: ${animais ? 'Sim' : 'Não'}
Incêndio ameaça residências: ${residencias ? 'Sim' : 'Não'}
Conseguiu identificar onde começou o incêndio: ${origem ? `Sim - ${origemText}` : 'Não'}
Solicitante orientado a ir para ponto de melhor localização?: ${irEstrada ? 'Sim' : 'Não'}
  `;
        setState(prevState => ({ ...prevState, narrativa: text }));
    }, [tipoAtendimento, estado, relato, endereco, pessoas, animais, residencias, origem,
        origemText, irEstrada, pontoReferencia, pontoReferenciaBoolean, transferirBoolean, quantidade_vitimas]);


    return (
        <Grid container spacing={2}>
            <AlertMessage severity="info" title='"Bombeiros, Distrito Federal. No que podemos ajudar?"'>Repita até 3 vezes</AlertMessage>
            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Identifique o Tipo de Atendimento</FormLabel>
                    <RadioGroup row
                        aria-label="Tipo de Atendimento"
                        name="tipoAtendimento"
                        value={tipoAtendimento}
                        onChange={(event) => handleChange("tipoAtendimento", event.target.value)}
                    >
                        <FormControlLabel value="Ocorrência" control={<Radio color="error" />} label="OCORRÊNCIA" />
                        <FormControlLabel value="Mudo" control={<Radio />} label="Mudo" />
                        <FormControlLabel value="Queda de Ligação" control={<Radio />} label="Queda de Ligação" />
                        <FormControlLabel value="Informação" control={<Radio />} label="Informação" />
                        <FormControlLabel value="Agradecimento" control={<Radio />} label="Agradecimento" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            {tipoAtendimento === "Mudo" &&
                <Grid item xs={12}>
                    <AlertMessage severity="info" title='"Por falta de comunicação, esta ligação será encerrada"'></AlertMessage>
                    <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
                    <AlertMessage severity="error" title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
                    <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
                </Grid>
            }
            {tipoAtendimento === "Ocorrência" &&
                <Grid item xs={12}>
                    <CustomTextField label="Faça uma breve descrição do ocorrido" name="relato" value={relato} onChange={handleChange} />
                    <AlertMessage severity="info" title='"De qual cidade está falando?"'></AlertMessage>
                    <UfSelect value={estado} title="Informe a UF do solicitante" onChange={(value) => handleChange("estado", value)} />
                    <YesNoField label="Precisa transferir pra outra Agência?" value={transferirBoolean} onChange={(value) => handleChange("transferirBoolean", value)} />
                    {transferirBoolean && <Agencias />}
                    <AlertMessage severity="info" title='"Qual o endereço?"'></AlertMessage>
                    <CustomTextField label="Informe o Endereço" name="endereco" value={endereco} onChange={handleChange} />
                    <SwitchField label="Precisa de Ponto de Referência?" value={pontoReferenciaBoolean} onChange={(value) => handleChange("pontoReferenciaBoolean", value)} />
                    {pontoReferenciaBoolean &&
                        <Grid item xs={12}>
                            <AlertMessage severity="info" title='"Me dê um ponto de referência, por favor?"'></AlertMessage>
                            <CustomTextField label="Ponto de Referência" name="pontoReferencia" value={pontoReferencia} onChange={handleChange} />
                        </Grid>
                    }
                    <CheckboxGroup options={[
                        { value: 'grupoNaturezaAPH', label: 'APH' },
                        { value: 'grupoNaturezaSalvamento', label: 'Salvamento' },
                        { value: 'grupoNaturezaIncendio', label: 'Incêndio' },
                        { value: 'grupoNaturezaOutros', label: 'Outros' }
                    ]
                    } onChange={handleCheckboxChange} />
                    {grupoNaturezaAPH &&
                        <Grid container spacing={2}>
                            <Grid item>
                                <AlertMessage severity="info" title='"Quantas vítimas no local?"'></AlertMessage>
                                <Grid item>
                                    <NumberTextField onChange={handleVictimQuantityChange} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2}>
                                {Array.from({ length: victimQuantity }, (_, index) => (
                                    <VictimPair key={index} index={index + 1} />
                                ))}
                            </Grid>
                        </Grid>

                    }

                    <Narrativa value={narrativa} />
                </Grid>}
        </Grid >
    );
};

export default Formulario;
