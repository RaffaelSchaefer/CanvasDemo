export function colorNoise (ctx: any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            ctx.fillStyle = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}

export function bwNoise (ctx: any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let randomColor = Math.floor(Math.random()*255);
            ctx.fillStyle = "rgb("+randomColor+","+randomColor+","+randomColor+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}