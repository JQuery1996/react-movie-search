// icons
import { Icon } from "@iconify/react";
// @mui
import { Box, type BoxProps } from "@mui/material";

type TIconify = {
  icon: any;
} & BoxProps;

export function Iconify({ icon, ...other }: TIconify) {
  return <Box component={Icon} icon={icon} {...other} />;
}
