import React, { createContext , useState , ReactNode} from "react";
import { LightTheme,DarkTheme , ThemeType  } from "./theme";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

type ThemeProps = 
{
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: DarkTheme, // Default to light theme
  setTheme: () => {},
});

export const ThemeProvider: React.FC <ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(DarkTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? DarkTheme : LightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
