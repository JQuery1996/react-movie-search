// @mui
import {
  FormControl,
  InputLabel,
  type TextFieldProps,
  useTheme,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useSettings } from "hooks";

type TRHFTextField = {
  name: string;
} & TextFieldProps;

export function ETextField({ name, ...other }: TRHFTextField) {
  const theme = useTheme();
  const { themeMode } = useSettings();
  const { sx, helperText, error, ...rest } = other;
  return (
    <FormControl variant="standard" fullWidth>
      {other.label && (
        <InputLabel shrink htmlFor={`text-input-${name}`}>
          {other.label}{" "}
          {other.required && (
            <Typography
              variant="caption"
              style={{ color: theme.palette.error.main }}
            >
              *
            </Typography>
          )}
        </InputLabel>
      )}

      <TextField
        name={name}
        id={`text-input-${name}`}
        sx={{
          "label + &": {
            marginTop: 3,
          },
          borderRadius: 1,
          backgroundColor:
            themeMode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[400],
          },
          "& .MuiOutlinedInput-input": {
            padding: "10px 14px",
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.grey[600],
            transform: "translate(14px, 16px) scale(1)",
          },
          "&.Mui-focused .MuiInputLabel-root": {
            color: theme.palette.grey[600],
            transform: "translate(14px, 8px) scale(0.75)",
          },
          ...sx,
        }}
        error={error}
        {...rest}
        label=""
      />
      { error && 

      <FormHelperText error>{helperText}</FormHelperText>
      }
    </FormControl>
  );
}
