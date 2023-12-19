// validation constants
export const MAX_CATEGORY_NAME_LENGTH = 40;
export const MAX_SUBCATEGORY_NAME_LENGTH = 40;
export const MAX_SERVICE_NAME_LENGTH = 40;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 56,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 64,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 72 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 30,
  NAVBAR_ITEM_HORIZONTAL: 30,
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "vertical",
  themeColorPresets: "default",
  themeStretch: false,
};
