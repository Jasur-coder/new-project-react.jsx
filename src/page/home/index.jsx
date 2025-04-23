import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../../context/useTheme";
import { DECREMENT, INCREMENT, RESET } from "../../store/type";
import globalReducer from "../../store/SLICE.JS";

const Home = () => {
    const { theme, changeThemeHandler } = useContext(ThemeContext);
    console.log(theme);

    const[state, dispatch] = useReducer(globalReducer, {count: 0})

    return (
        <>
            <h2 className={`${theme == "light" ? "text-light" : "text-dark"}`}>Home</h2>
            <button onClick={changeThemeHandler}>Theme</button>


            <div>
                <button onClick={() => dispatch({type: INCREMENT})}>+</button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({type: DECREMENT})}>-</button>
                <button onClick={() => dispatch({type: RESET})}>reset</button>
            </div>
        </>
    );
};

export default Home;