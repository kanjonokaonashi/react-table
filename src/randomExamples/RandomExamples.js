import React from "react";
import CounterClass from "./ CounterChangeWithScroll/CounterClass";
import CounterFunction from "./ CounterChangeWithScroll/CounterFunction";
import Parent from "./PrimitivesVSRefTypes/Parent";

const RandomExamples = (props) => {
    return (
        <div style={{display: "flex"}}>
            <CounterClass />
            <CounterFunction />
            <Parent />
        </div>
    )
}

export default RandomExamples;