import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { Home, RootLayout, About, Contact } from "./page";
import ThemeContextProvider from "./context/useTheme";
import LanguageContextProvider from "./context/useLanguage";



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    }
  ]);
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
      <RouterProvider router={routes} />
      </LanguageContextProvider>
    </ThemeContextProvider>
  )
  
}

export default App