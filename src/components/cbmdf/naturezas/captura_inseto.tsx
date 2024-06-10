import { Grid } from "@mui/material";
import {
  AlertMessage,
  CustomTextField,
  YesNoField,
} from "@site/src/components/structure";

export const CapturaInseto = (props) => {
  const { tagState, updateTagState, emergencial } = props;
  const { insetosAtacandoBoolean, localInsetos, alturaEnxame } = tagState;

  const handleChange = (field, value) => {
    const newState = { ...tagState, [field]: value };
    updateTagState(field, newState);
  };

  return (
    <Grid>
      {/* Perguntas Emergenciais */}

      {emergencial && (
        <Grid>
          <AlertMessage
            severity="info"
            title='"Os insetos estão atacando as pessoas?"'
          ></AlertMessage>
          <YesNoField
            value={insetosAtacandoBoolean}
            onChange={(value) => handleChange("insetosAtacandoBoolean", value)}
          />
        </Grid>
      )}

      {/* Perguntas Não Emergenciais */}

      {!emergencial && (
        <Grid>
          <AlertMessage
            severity="info"
            title='"Onde estão os insetos?"'
          ></AlertMessage>
          <CustomTextField
            label="Local dos insetos"
            name="localInsetos"
            value={localInsetos}
            onChange={handleChange}
          />
          <AlertMessage
            severity="info"
            title='"Consegue dizer a altura aproximada do enxame?"'
          ></AlertMessage>
          <CustomTextField
            label="Altura do enxame"
            name="origemText"
            value={alturaEnxame}
            onChange={handleChange}
          />
        </Grid>
      )}
    </Grid>
  );
};
