import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../../context/useTheme";
import { DECREMENT, INCREMENT, RESET } from "../../store/type";
import globalReduce from "../../store/SLICE.JS";

const Home = () => {
    const { theme, changeThemeHandler } = useContext(ThemeContext);
    console.log(theme);

    const[state, dispatch] = useReducer(globalReduce, {count: 0})

    function increment() {
        dispatch({type: INCREMENT, payload: "This is increment payloud"});
    }

    function decrement() { 
        dispatch({type: DECREMENT, payload: "This is DECREMENT payloud"});
    }

    return (
        <>
            <h2 className={`${theme == "light" ? "text-light" : "text-dark"}`}>Home</h2>
            <button onClick={changeThemeHandler}>Theme</button>


            <div>
                <button onClick={increment}>+</button>
                <span>{state.count}</span>
                <button onClick={decrement}>-</button>
                <button onClick={() => dispatch({type: RESET})}>reset</button>
            </div>
        </>
    );
};

export default Home;