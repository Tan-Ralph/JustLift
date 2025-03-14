import React from "react";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent.js";

const Frontpage = () => {
    return(
        <div className='dt center pv4 pv6-m pv4-ns'>
            <LeftContent/>
            <RightContent text='Lorem ipsum'/>
        </div>
    )
}

export default Frontpage;