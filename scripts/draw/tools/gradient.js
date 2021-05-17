export function bwGradient (ctx, width, height, resolution) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let bwValue = y*resolution%256;
            ctx.fillStyle = "rgb("+bwValue+","+bwValue+","+bwValue+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}

export function rgbGradient (ctx, width, height, resolution) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let rValue = x*resolution%256;
            let bValue = y*resolution%256;
            let gValue = 0;
            ctx.fillStyle = "rgb("+rValue+","+gValue+","+bValue+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}
