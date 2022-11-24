export const setTheme = (isDarkMode: boolean): void => {
  const LIGHT_THEME = 'light-theme'
  const DARK_THEME = 'dark-theme'
  if (isDarkMode) {
    document.body.classList.remove(LIGHT_THEME)
    document.body.classList.add(DARK_THEME)
  } else {
    document.body.classList.remove(DARK_THEME)
    document.body.classList.add(LIGHT_THEME)
  }
}