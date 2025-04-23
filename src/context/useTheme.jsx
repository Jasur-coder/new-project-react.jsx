import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
        const [theme, setTheme] = useState("light");

        function changeThemeHandler() {
                setTheme((prew) => (prew == "light" ? "dark" : "light"));
        }

        const data = {
                theme,
                changeThemeHandler
        };

        return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider