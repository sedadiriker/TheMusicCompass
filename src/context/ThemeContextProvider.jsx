import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material";

const ThemeContext = createContext()

export const useThemeContext = ()=> {
    return useContext(ThemeContext)
}

const ThemeContextProvider = ({children}) => {
  let theme = createTheme({
    typography:{
      logo:'"Caveat", cursive;',
      
    },
    palette: {
      background:'rgb(70, 68, 68)',
      logoColor: "rgb(237, 204, 15)",
      background_2:'rgb(37, 36, 36)',
  },
  
  
  })
  return (
   <ThemeContext.Provider>
    <ThemeProvider theme={theme} >{children}</ThemeProvider>
   </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
