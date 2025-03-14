import React from "react";

const NavRoutes = ({page}) => {
    return(
        <div className = 'tc dib br-pill pa2 ma2 grow bw1 shadow-5'>
            <div>
                <a className='no-underline black' href='#0'>{page}</a>
            </div>
        </div>
    )
}

export default NavRoutes;