import { ThemeContext } from "./ThemeContext"
import { themes } from "./themes"
import ThemedButton from "./ThemedButton"

function ButtonTest() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemedButton />
    </ThemeContext.Provider>
  )
}

export default ButtonTest
