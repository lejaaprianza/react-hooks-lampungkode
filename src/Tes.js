import { ThemeContext, themes } from "./ThemeContex"
import Toolbar from "./Toolbar"

function Tes() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default Tes
