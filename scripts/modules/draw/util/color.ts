export class colorRGB {
  r: number;
  g: number;
  b: number;
  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  colorGenerate(r: number, g: number, b: number) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  get color() {
    return this.colorGenerate(this.r, this.g, this.b);
  }
}

export class colorRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
  constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  colorGenerate(r: number, g: number, b: number, a: number) {
    return "rgb(" + r + ", " + g + ", " + b + ", " + a + ")";
  }
  get color() {
    return this.colorGenerate(this.r, this.g, this.b, this.a);
  }
}
