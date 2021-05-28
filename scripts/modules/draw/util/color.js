export class colorRGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    colorGenerate(r, g, b) {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    get color() {
        return this.colorGenerate(this.r, this.g, this.b);
    }
}
export class colorRGBA {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    colorGenerate(r, g, b, a) {
        return "rgb(" + r + ", " + g + ", " + b + ", " + a + ")";
    }
    get color() {
        return this.colorGenerate(this.r, this.g, this.b, this.a);
    }
}
