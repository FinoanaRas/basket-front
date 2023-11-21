import { useState } from "react";

function Stat({stat}){

    return(
        <>
            <tr>
                <td>{stat.joueur}</td>
                <td>{stat.equipe}</td>
                <td>{stat.match}</td>
                <td>{stat.mj}</td>
                <td>{stat.ppm}</td>
                <td>{stat.rpm}</td>
                <td>{stat.pdpm}</td>
                <td>{stat.mpm}</td>
                <td>{stat.tir}</td>
                <td>{stat.pts3}</td>
                <td>{stat.lf}</td>
            </tr>
        </>
    )
}

export default Stat;