import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { YesNoField, AlertMessage, CustomTextField } from '@site/src/components/structure';

export const IncendioVegetacao = props => {
    // const [state, setState] = useState({
    //     pessoas: false,
    //     animais: false,
    // residencias: false,
    // origem: false,
    // origemText: '',
    // pessoaNoLocal: false,
    // relato: '',
    // narrativa: '',
    // pontoReferencia: '',
    // irEstrada: false,
    // pontoReferenciaBoolean: false
    // });

    // const { pessoas, animais, residencias, origem, origemText, irEstrada } = state;

    // const handleChange = (field, value) => {
    //     setState(prevState => ({ ...prevState, [field]: value }));
    // };

    const { tagState, updateTagState, emergencial } = props;
    const { pessoasBoolean, animaisBoolean, residenciasBoolean, origemBoolean, origemText, irEstradaBoolean } = tagState;

    const handleChange = (field, value) => {
        const newState = { ...tagState, [field]: value };
        updateTagState(field, newState);
    };

    return (
        <Grid >

            {/* Perguntas Emergenciais */}

            {emergencial &&
                <Grid>
                    <AlertMessage severity="info" title='"Há pessoas no local?"' />
                    <YesNoField value={pessoasBoolean} onChange={(value) => handleChange("pessoasBoolean", value)} />

                    <AlertMessage severity="info" title='"Há animais no local?"' />
                    <YesNoField value={animaisBoolean} onChange={(value) => handleChange("animaisBoolean", value)} />

                    <AlertMessage severity="info" title='"Incêndio está ameaçando residências?"' />
                    <YesNoField value={residenciasBoolean} onChange={(value) => handleChange("residenciasBoolean", value)} />

                    {/* AlertMessages consolidados no final */}
                    {pessoasBoolean || animaisBoolean || residenciasBoolean ? (
                        <AlertMessage severity="warning" title="Informe ao Solicitante:">
                            Primeiramente, tome medidas para garantir a segurança de todos:
                            {pessoasBoolean && " Afaste todas as pessoas para um local seguro."}
                            {animaisBoolean && " \nAfaste todos os animais para um local seguro."}
                            {residenciasBoolean && " \nAfaste-se da residência ameaçada e procurar um local seguro."}
                        </AlertMessage>
                    ) : null}
                </Grid>

            }

            {/* Perguntas Não Emergenciais */}

            {!emergencial &&
                <Grid>
                    <AlertMessage severity="info" title='"Conseguiu ver onde o incêndio começou aproximadamente?"' />
                    <YesNoField value={origemBoolean} onChange={(value) => handleChange("origemBoolean", value)} />
                    {origemBoolean &&
                        <Grid>
                            <AlertMessage severity="info" title='"Qual o local?"' />
                            <CustomTextField label="Local de Início do Incêndio" name="origemText" value={origemText} onChange={handleChange} />
                        </Grid>
                    }
                    <AlertMessage severity="info" title='"Consegue ir para a estrada ou outro lugar onde possamos encontrá-lo facilmente?"' />
                    <YesNoField value={irEstradaBoolean} onChange={(value) => handleChange("irEstradaBoolean", value)} />
                    <AlertMessage severity="warning" title="Informe ao Solicitante:">
                        {irEstradaBoolean ? "OK, leve o celular contigo para fazermos contato" : "OK, permaneça em local seguro e não tente combater o incêndio"}
                    </AlertMessage>
                </Grid>
            }
        </Grid>
    )
}
