import { ThemeContext } from "./ThemeContex"
import themes from "./themes"
import Toolbar from "./Toolbar"

function Tes() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default Tes
