import{colorRGBA}from"../util/color.js";export function fillCanvas(i,l,o,n,t){let e=new colorRGBA(l,o,n,t),r=window.innerHeight,c=window.innerWidth;i.fillStyle=e,i.fillRect(0,0,c,r)}