export function drawLineOnCanvas(e,n,t,o,i,a,r){let s=e.offsetX,f=e.offsetY;n.lineWidth=t,n.strokeStyle="rgba("+i+","+a+","+r+","+o+")",n.beginPath(),n.moveTo(s-e.movementX,f-e.movementY),n.lineTo(s,f),n.stroke()}export function brushMoveHandler(e,n,t,o,i,a,r,s){1===e.buttons&&i?drawLineOnCanvas(e,n,t,o,a,r,s):n.lineWidth=1}