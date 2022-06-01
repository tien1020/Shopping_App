import React from "react";
import systemStyles from "./systemStyles";

export function getStyle(colorId: number, headerId: number) {
    let style = {}
    let scaleFactor = 0.5

    systemStyles.colormap.forEach(
        (item) => {
            if(colorId == item.id) {
                style =[style,{color: item.color}]
            }
        }
    )

    systemStyles.headingmap.forEach(
        (item) => {
            if(headerId == item.id) {
                style =[style,{fontSize: item.fontSize * scaleFactor, fontWeight: item.fontWeight.toString()}]
            }
        }
    )

    return style
}