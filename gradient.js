export function bwGradient (ctx, width, height, resolution) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let bwValue = y*resolution%256;
            ctx.fillStyle = "rgb("+bwValue+","+bwValue+","+bwValue+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}