import { Grid } from "@mui/material";
import { AlertMessage, YesNoField } from "@site/src/components/structure";

const Ovace = (props) => {
  const { tagState, updateTagState, emergencial } = props;
  const { confirmaOVACE } = tagState;

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
            title="Me confirme por favor. A pessoa está engasgada?"
          ></AlertMessage>
          <YesNoField
            value={confirmaOVACE}
            onChange={(value) => handleChange("confirmaOVACE", value)}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Ovace;
