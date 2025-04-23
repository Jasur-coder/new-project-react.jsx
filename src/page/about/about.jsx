import React, { useContext, useReducer } from "react";
import { LanguageContext } from "../../context/useLanguage";
import globalReducer from "../../store/SLICE.JS";
import { DECREMENT, INCREMENT, RESET } from "../../store/type";

const About = () => {
    const { language, changeLanguageHandler } = useContext(LanguageContext)

    const[state, dispatch] = useReducer(globalReducer, {count: 0})

    return <>
        <h2>About</h2>
        <button onClick={changeLanguageHandler}>{language}</button>
        <h2>{language == "uz" ? "Salom" : "hii"}</h2>


        <div>
            <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: RESET })}>reset</button>
        </div>
    </>
}

export default About;