import React, { useState } from 'react';
import {
    Grid, Switch, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel,
    TextField, IconButton, Alert, AlertTitle, FormGroup,
    Select, MenuItem, Checkbox,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Tooltip,
    Autocomplete
} from '@mui/material';

import MaskedInput from 'react-text-mask';

import cidadesData from '@site/src/static/js/cidades.json'

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
                <FormLabel component="legend">{props.legend}</FormLabel>
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

export const CustomTextField = ({ label, name, value, onChange, copyIcon = false }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const texto = value
        navigator.clipboard.writeText(texto);
        setCopied(true);
    };

    return (
        <Grid item xs={12}>
            <FormLabel component="legend">{label}</FormLabel>
            <TextField
                fullWidth
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                InputProps={
                    copyIcon
                        ? {
                            endAdornment: (
                                <IconButton onClick={handleCopy} aria-label="copy">
                                    <Tooltip title={copied ? "Copiado!" : ""} placement="top">
                                        <FileCopyIcon />
                                    </Tooltip>
                                </IconButton>
                            )
                        }
                        : {}
                }
            />
        </Grid>
    );
};

export const UfSelect = props => {
    // Extrair as UFs do JSON
    const ufs = Object.keys(cidadesData);

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

export const CidadeSelect = props => {
    // Extrair as cidades da UF selecionada
    const cidades = cidadesData[props.uf] ? Object.keys(cidadesData[props.uf]) : [];

    return (
        <Grid item xs={12}>
            <FormControl>
                <FormLabel component="legend">{props.title}</FormLabel>
                <Select
                    labelId="cidade-select-label"
                    id="cidade-select"
                    value={props.value}
                    onChange={(e) => props.onChange(props.name, e.target.value)}
                >
                    {cidades.map((cidade, index) => (
                        <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export const UnidadesTable = props => {
    const [copied, setCopied] = useState(false);

    const handleNumberCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
    };

    const unidades = cidadesData[props.uf][props.cidade] ? cidadesData[props.uf][props.cidade]["Unidades"] : [];

    return (
        <Grid item xs={12}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Unidade</TableCell>
                            <TableCell>Contato</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {unidades.map((unidade, index) => (
                            <TableRow key={index}>
                                <TableCell>{unidade.Unidade}</TableCell>
                                <TableCell>{unidade.Contato}
                                    <IconButton onClick={() => handleNumberCopy(`${unidade.Contato}`)} aria-label="copy">
                                        <Tooltip title={copied ? "Copiado!" : ""} placement="top">
                                            <FileCopyIcon />
                                        </Tooltip>

                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export const UnidadeSelect = props => {
    // Extrair as cidades da UF selecionada
    const unidades = cidadesData[props.uf][props.cidade] ? cidadesData[props.uf][props.cidade]["Unidades"] : [];
    console.log(unidades)

    return (
        <Grid item xs={12}>
            <FormControl>
                <FormLabel component="legend">{props.title}</FormLabel>
                <Select
                    labelId="cidade-select-label"
                    id="cidade-select"
                    value={props.value}
                    onChange={(e) => props.onChange(props.name, e.target.value)}
                >
                    {unidades.map((cidade, index) => (
                        <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
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

export const InputCopy = props => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const narrativa = props.value
        navigator.clipboard.writeText(narrativa);
        setCopied(true);
    };

    return (
        <Grid item xs={12}>
            <FormLabel component="legend">{props.field}</FormLabel>
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
                            <Tooltip title={copied ? "Copiado!" : ""} placement="top">
                                <FileCopyIcon />
                            </Tooltip>
                        </IconButton>
                    ),
                }}
            />
        </Grid>
    );
};

export const EmConstrucao = props => {
    return (
        <AlertMessage severity="warning" title='Aba em Construção'>{props.message}</AlertMessage>
    )
}

export const TelefoneTextField = (props) => {
    const { onChange, value, name, ...rest } = props;

    // Função para determinar a máscara com base no número de dígitos
    const getMask = (value) => {
        const isCelular = value.length > 10; // Se tiver mais de 10 dígitos, consideramos um celular
        return isCelular ? ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] : ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    };

    return (
        <MaskedInput
            mask={getMask}
            guide={false} // Se você quiser que os caracteres não digitados sejam exibidos como espaços reservados, defina como true
            onChange={onChange}
            value={value}
            name={name}
            {...rest}
        />
    );
};
