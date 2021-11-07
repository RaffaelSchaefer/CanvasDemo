export class colorRGB {
  private r: number;
  private g: number;
  private b: number;
  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  setColor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  convertRGBA(inputColor: colorRGBA) {
    this.r = inputColor.getColorValue[0];
    this.g = inputColor.getColorValue[1];
    this.b = inputColor.getColorValue[2];
  }
  get getColorValue() {
    return [this.r, this.g, this.b];
  }
  get color() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }
}

export class colorRGBA {
  private r: number;
  private g: number;
  private b: number;
  private a: number;
  constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  setColor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  convertRGB(inputColor: colorRGB, transparency: number = 255) {
    this.r = inputColor.getColorValue[0];
    this.g = inputColor.getColorValue[1];
    this.b = inputColor.getColorValue[2];
    this.a = transparency;
  }
  get getColorValue() {
    return [this.r, this.g, this.b, this.a];
  }
  get color() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
  }
}
