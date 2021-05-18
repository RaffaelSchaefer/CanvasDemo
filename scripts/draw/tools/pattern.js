export function dotsWhite (ctx, width, height, resolution,alpha) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            if (x%resolution===0&&y%resolution===0) {
                ctx.fillStyle = "rgb(255,255,255,"+alpha+")";
                ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
            } else {
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
            }
        }
    }
}

export function dotsBlack (ctx, width, height, resolution,alpha) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            if (x%resolution===0&&y%resolution===0) {
                ctx.fillStyle = "rgb(0,0,0,"+alpha+")";
                ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
            } else {
                ctx.fillStyle = "rgb(0,0,0,0)";
                ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
            }
        }
    }
}