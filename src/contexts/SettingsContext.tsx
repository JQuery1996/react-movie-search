import { createContext, type ReactNode } from "react";
// hooks
import { useLocalStorage } from "hooks";
// config
import { defaultSettings } from "config";

const initialState = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

type TSettingsProvider = {
  children: ReactNode;
};

function SettingsProvider({ children }: TSettingsProvider) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
  });

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (event: any) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,

        // Mode
        onToggleMode,
        onChangeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
