import { themes } from "./themes"
import { ThemeContext } from "./ThemeContex"
import ThemedButton from "./ThemeButton"

function ButtonTest() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemedButton />
    </ThemeContext.Provider>
  )
}

export default ButtonTest
