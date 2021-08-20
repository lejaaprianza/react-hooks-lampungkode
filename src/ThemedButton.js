import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { themes } from "./themes"

function ThemedButton() {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <ThemeContext.Provider value={themes.dark}>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    </ThemeContext.Provider>
  )
}

export default ThemedButton
