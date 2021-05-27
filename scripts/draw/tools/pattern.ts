import {colorRGBA} from "../util/color.js";

export function dots (ctx: any, width: number, height: number, size: number, alpha: number, r: number, g: number, b: number) {
    let fillColor: colorRGBA = new colorRGBA(r,g,b,alpha);
    for (let x = 0; x <= width/size; x++) {
        for (let y = 0; y <= height/size; y++) {
            if (x%2 && y%2) {
                ctx.fillStyle = fillColor.color;
                ctx.fillRect(x*size,y*size,size,size);
            }
        }
    }
}

export function saw (ctx: any, width: number, height: number, size: number, alpha: number, r: number, g: number, b: number) {
    let fillColor: colorRGBA = new colorRGBA(r,g,b,alpha);
    for (let x = 0; x <= width/size; x++) {
        for (let y = 0; y <= height/size; y++) {
            if ((y+x)%2 && !((y+x)%3)) {
                ctx.fillStyle = fillColor.color;
                ctx.fillRect(x*size,y*size,size,size);
            }
        }
    }
}

export function checkeredPattern (ctx: any, width: number, height: number, size: number, alpha: number, r: number, g: number, b: number) {
    let fillColor: colorRGBA = new colorRGBA(r,g,b,alpha);
    for (let x = 0; x <= width/size; x++) {
        for (let y = 0; y <= height/size; y++) {
            if ((y+x)%2) {
                ctx.fillStyle = fillColor.color;
                ctx.fillRect(x*size,y*size,size,size);
            }
        }
    }
}