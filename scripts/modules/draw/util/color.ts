export class color {
  private r: number;
  private g: number;
  private b: number;
  private a: number;
  //SETTERS
  constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 255) {
    if (r >= 255) {
      this.r = 255;
    } else {
      if (r < 0) {
        this.r = 0;
      } else {
        this.r = r;
      }
    }
    if (g >= 255) {
      this.g = 255;
    } else {
      if (r < 0) {
        this.g = 0;
      } else {
        this.g = g;
      }
    }
    if (b >= 255) {
      this.b = 255;
    } else {
      if (b < 0) {
        this.b = 0;
      } else {
        this.b = b;
      }
    }
    if (a >= 255) {
      this.a = 255;
    } else {
      if (a < 0) {
        this.a = 0;
      } else {
        this.a = a;
      }
    }
  }
  setColor(r: number, g: number, b: number, a: number) {
    if (r >= 255) {
      this.r = 255;
    } else {
      if (r < 0) {
        this.r = 0;
      } else {
        this.r = r;
      }
    }
    if (g >= 255) {
      this.g = 255;
    } else {
      if (r < 0) {
        this.g = 0;
      } else {
        this.g = g;
      }
    }
    if (b >= 255) {
      this.b = 255;
    } else {
      if (b < 0) {
        this.b = 0;
      } else {
        this.b = b;
      }
    }
    if (a >= 255) {
      this.a = 255;
    } else {
      if (a < 0) {
        this.a = 0;
      } else {
        this.a = a;
      }
    }
  }
  //GETTERS
  get color() {
    return [this.r, this.g, this.b, this.a];
  }
  get RGB () {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }
  get RGBA() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
  }
  //FILTERS
  addition(otherColor: color) {

  }
  subtract(otherColor: color) {

  }
}
