import { Grid, Switch, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel, TextField, IconButton, Alert, AlertTitle, ClickAwayListener } from '@mui/material';
import { FileCopy as FileCopyIcon } from '@mui/icons-material';

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
    return (
        <Grid item xs={12}>
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