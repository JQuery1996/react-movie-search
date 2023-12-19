import { IconButton } from "@mui/material";
import { AnimatePresence, m as motion } from "framer-motion";
import { useSettings } from "hooks";
import { orange, purple } from "@mui/material/colors";
import { Iconify } from "./Iconify";
export function ToggleTheme() {
  const { onToggleMode, themeMode } = useSettings();
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        style={{ display: "inline-block" }}
        key={themeMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton onClick={onToggleMode}>
          {themeMode === "light" ? (
            <Iconify
              icon="fluent:weather-sunny-24-filled"
              sx={{ width: 25, height: 25, color: orange[500] }}
            />
          ) : (
            <Iconify
              icon="material-symbols-light:mode-night-rounded"
              sx={{ width: 25, height: 25, color: purple[500] }}
            />
          )}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
}
