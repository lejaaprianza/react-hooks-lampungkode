import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContex"

function ThemedButton() {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}

export default ThemedButton
