export function colorNoise(ctx,width, height) {
    for (let x = 0; x <= width; x++) {
        for (let y = 0; y <= height; y++) {
            ctx.fillStyle = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
            ctx.fillRect(x,y,1,1);
        }
    }
}

export function bwNoise (ctx,width, height) {
    for (let x = 0; x <= width; x++) {
        for (let y = 0; y <= height; y++) {
            let randomColor = Math.floor(Math.random()*255);
            ctx.fillStyle = "rgb("+randomColor+","+randomColor+","+randomColor+")";
            ctx.fillRect(x,y,1,1);
        }
    }
}