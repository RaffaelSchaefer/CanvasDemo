export function bwGradient (ctx: any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let bwValue = y*resolution%256;
            ctx.fillStyle = "rgba("+bwValue+","+bwValue+","+bwValue+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}

export function rgbGradient (ctx:any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let rValue = x*resolution%256;
            let bValue = y*resolution%256;
            let gValue = 0;
            ctx.fillStyle = "rgb("+rValue+","+gValue+","+bValue+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}