import { ThemeContext } from "./ThemeContex"
import { themes } from "./themes"

import Toolbar from "./Toolbar"

function ButtonTest() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default ButtonTest
