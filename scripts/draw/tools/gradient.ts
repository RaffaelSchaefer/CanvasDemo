export function bwGradient (ctx: any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let bwValue = y*resolution%256;
            ctx.fillStyle = "rgba("+bwValue+","+bwValue+","+bwValue+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}

export function rbGradient (ctx:any, width: number, height: number, resolution: number, alpha: number) {
    for (let x = 0; x <= width/resolution; x++) {
        for (let y = 0; y <= height/resolution; y++) {
            let rValue: number = x*resolution%256;
            let bValue: number = y*resolution%256;
            let gValue: number = 0;
            ctx.fillStyle = "rgb("+rValue+","+gValue+","+bValue+","+alpha+")";
            ctx.fillRect(x*resolution,y*resolution,resolution,resolution);
        }
    }
}

//TODO Add colorGradient