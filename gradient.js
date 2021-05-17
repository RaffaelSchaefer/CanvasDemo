export function bwGradient (ctx, width, height) {
    for (let x = 0; x <= width; x++) {
        for (let y = 0; y <= height; y++) {
            let bwValue = y%256;
            ctx.fillStyle = "rgb("+bwValue+","+bwValue+","+bwValue+")";
            ctx.fillRect(x,y,1,1);
        }
    }
}

export function colorGradient (ctx, width, height) {
    for (let x = 0; x <= width; x++) {
        for (let y = 0; y <= height; y++) {
            let rValue = x%256;
            let gValue = y%256;
            let bValue = Math.abs((x-y)%256);
            ctx.fillStyle = "rgb("+rValue+","+gValue+","+bValue+")";
            ctx.fillRect(x,y,1,1);
        }
    }
}