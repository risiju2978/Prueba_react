import React, { Dispatch, SetStateAction } from "react";
import { style } from "../containers/App";

interface Iprops {
    setStyle: Dispatch<SetStateAction<style>>;
}

export const NavBar = ({setStyle}: Iprops) => {
    return (
        <div>
        <button onClick={() => setStyle('dark')}>Dark</button>
        <button onClick={() => setStyle('light')}>Light</button>
    </div>
    )
}