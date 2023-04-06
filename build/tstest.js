"use strict";
function getproduct() {
    return fetch('/json.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getproduct()
    .then(product => {
    console.log(product.map(p => " red: " + p.colorname + " pink: " + p.colorname + " purple: " + p.colorname + " deep purple: " + p.colorname +
        " Indigo: " + p.colorname + " Blue: " + p.colorname + " Lightblue: " + p.colorname + " Cyan: " + p.colorname +
        " Teal: " + p.colorname + " Green: " + p.colorname + " Lightgreen: " + p.colorname + " Lime: " + p.colorname +
        " Yellow: " + p.colorname + " Amber: " + p.colorname + " Orange: " + p.colorname + " Deeporange: " + p.colorname +
        " Brown: " + p.colorname + " Grey: " + p.colorname + " White: " + p.colorname).toString());
});
