import { useState } from "react";
export default function TabButtons({children,isActive,onSelect}){
    return (
        <li>
        <button className={isActive ? 'active' : '' } onClick={onSelect}>{children}</button>
        </li>
   
)
}