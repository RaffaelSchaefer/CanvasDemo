export function dots (ctx: any, width: number, height: number, size: number, alpha: number, r: number, g: number, b: number) {
    for (let x = 0; x <= width/size; x++) {
        for (let y = 0; y <= height/size; y++) {
            if (x%2 && y%2) {
                ctx.fillStyle = "rgb("+r+","+g+","+b+","+alpha+")";
                ctx.fillRect(x*size,y*size,size,size);
            }
        }
    }
}

//TODO Add more patterns