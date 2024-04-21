import React, { useState } from 'react';
import {
    Grid, Switch, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel,
    TextField, IconButton, Alert, AlertTitle, FormGroup,
    Select, MenuItem, Checkbox
} from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopy';

export const CheckboxGroup = props => {
    const [checkedItems, setCheckedItems] = useState(
        Object.fromEntries(props.options.map(option => [option.value, false]))
    );

    const handleCheckboxChange = (event) => {
        const updatedCheckedItems = {
            ...checkedItems,
            [event.target.name]: event.target.checked
        };
        setCheckedItems(updatedCheckedItems);
        props.onChange(event.target.name, event.target.checked);
    };

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Selecione a Natureza do Atendimento</FormLabel>
                <FormGroup>
                    {props.options.map(option => (
                        <FormControlLabel
                            key={option.value}
                            control={
                                <Checkbox
                                    checked={checkedItems[option.value]}
                                    onChange={handleCheckboxChange}
                                    name={option.value} // adicionando o atributo name
                                />
                            }
                            label={option.label}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Grid>
    );
};


export const YesNoField = props => {
    const handleChange = (event) => {
        const newValue = event.target.value === 'true';
        props.onChange(newValue);
    };
    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{props.label}</FormLabel>
                <RadioGroup row aria-label={props.label} name={props.label} value={props.value.toString()} onChange={handleChange}>
                    <FormControlLabel value="false" control={<Radio />} label="Não" />
                    <FormControlLabel value="true" control={<Radio />} label="Sim" />
                </RadioGroup>
            </FormControl>
        </Grid>
    );
};

export const SwitchField = props => {
    const handleChange = (event) => {
        props.onChange(event.target.checked);
    };
    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{props.label}</FormLabel>
                <Switch
                    checked={props.value}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': props.label }}
                />
            </FormControl>
        </Grid>
    );
};

export const AlertMessage = props => {

    const getTitle = () => {
        switch (props.severity) {
            case "info":
                return "Informe ao solicitante";
            case "error":
                return "Registre no sistema";
            default:
                return null;
        }
    };

    const title = getTitle();

    return (
        <Grid item xs={12} sx={{ mt: 4, mb: 4 }}>
            <FormLabel component="legend">{title}</FormLabel>
            <Alert severity={props.severity}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </Grid>
    );
};

export const CustomTextField = ({ label, name, value, onChange }) => {
    return (
        <Grid item xs={12}>
            <FormLabel component="legend">{label}</FormLabel>
            <TextField
                fullWidth
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            />
        </Grid>
    );
};

export const UfSelect = props => {
    // Lista de UFs do Brasil
    const ufs = [
        'DF', 'GO', 'MG', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'MA', 'MT',
        'MS', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO',
        'RR', 'SC', 'SP', 'SE', 'TO'
    ];

    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Grid item xs={12}>
            <FormControl>
                <FormLabel component="legend">{props.title}</FormLabel>
                <Select
                    labelId="uf-select-label"
                    id="uf-select"
                    value={props.value}
                    onChange={(e) => props.onChange(props.name, e.target.value)}
                >
                    {ufs.map((uf, index) => (
                        <MenuItem key={index} value={uf}>{uf}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export const SelectNumber = ({ start = 0, end = 1, defaultNumber = 0, onChange }) => {
    const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Grid item xs={12}>
            <FormControl>
                <FormLabel component="legend">Selecionar Número</FormLabel>
                <Select
                    labelId="number-select-label"
                    id="number-select"
                    value={defaultNumber}
                    onChange={handleChange}
                >
                    {numbers.map((number, index) => (
                        <MenuItem key={index} value={number}>{number}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
};

export const NumberTextField = ({ onChange }) => {
    const [quantity, setQuantity] = useState(0);

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(value);
        onChange(value);
    };

    return (
        <Grid item xs={12}>
            <TextField
                label="Quantidade de Vítimas"
                name="quantidade_vitimas"
                type="number"
                value={quantity}
                onChange={handleChange}
                fullWidth
            />
        </Grid>
    );
};

export const Agencias = () => {
    const options = [
        { value: 'bombeiro', label: 'CBMDF', checked: true },
        { value: 'samu', label: 'SAMU' },
        { value: 'policia_militar', label: 'PMDF' },
        { value: 'policia_civil', label: 'PCDF' },
        { value: 'transito_urbano', label: 'DETRAN' },
        { value: 'transito_rodovia', label: 'DER' },
        { value: 'outros', label: 'Outros' }
    ];

    return <CheckboxGroup options={options} legend="Quais Agências podem atuar nessa ocorrência?" />;
};

export const Narrativa = props => {

    const handleCopy = () => {
        const narrativa = props.value
        navigator.clipboard.writeText(narrativa);
    };

    return (
        <Grid item xs={12} sx={{ mt: 10 }}>
            <FormLabel component="legend">Copie o texto abaixo e insira na Narrativa</FormLabel>
            <TextField
                sx={{
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                }}
                multiline
                fullWidth
                value={props.value}
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
    );
};