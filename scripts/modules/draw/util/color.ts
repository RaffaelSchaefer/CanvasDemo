export class colorRGB {
  private r: number;
  private g: number;
  private b: number;
  constructor(r: number = 0, g: number = 0, b: number = 0) {
    if (r <= 255) {
      this.r = r;
    } else {
      this.r = 255;
    }
    if (g <= 255) {
      this.g = g;
    } else {
      this.g = 255;
    }
    if (b <= 255) {
      this.b = b;
    } else {
      this.b = 255;
    }
  }
  setColor(r: number, g: number, b: number) {
    if (r <= 255) {
      this.r = r;
    } else {
      this.r = 255;
    }
    if (g <= 255) {
      this.g = g;
    } else {
      this.g = 255;
    }
    if (b <= 255) {
      this.b = b;
    } else {
      this.b = 255;
    }
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
    if (r <= 255) {
      this.r = r;
    } else {
      this.r = 255;
    }
    if (g <= 255) {
      this.g = g;
    } else {
      this.g = 255;
    }
    if (b <= 255) {
      this.b = b;
    } else {
      this.b = 255;
    }
    if (a <= 255) {
      this.a = a;
    } else {
      this.a = 255;
    }
  }
  setColor(r: number, g: number, b: number, a: number) {
    if (r <= 255) {
      this.r = r;
    } else {
      this.r = 255;
    }
    if (g <= 255) {
      this.g = g;
    } else {
      this.g = 255;
    }
    if (b <= 255) {
      this.b = b;
    } else {
      this.b = 255;
    }
    if (a <= 255) {
      this.a = a;
    } else {
      this.a = 255;
    }
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
