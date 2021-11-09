export class color {
  //VARS
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
        this.r = Math.floor(r);
      }
    }
    if (g >= 255) {
      this.g = 255;
    } else {
      if (r < 0) {
        this.g = 0;
      } else {
        this.g = Math.floor(g);
      }
    }
    if (b >= 255) {
      this.b = 255;
    } else {
      if (b < 0) {
        this.b = 0;
      } else {
        this.b = Math.floor(b);
      }
    }
    if (a >= 255) {
      this.a = 255;
    } else {
      if (a < 0) {
        this.a = 0;
      } else {
        this.a = Math.floor(a);
      }
    }
  }

  setColor(r: number = this.r, g: number = this.g, b: number = this.b, a: number = this.a) {
    if (r >= 255) {
      this.r = 255;
    } else {
      if (r < 0) {
        this.r = 0;
      } else {
        this.r = Math.floor(r);
      }
    }
    if (g >= 255) {
      this.g = 255;
    } else {
      if (r < 0) {
        this.g = 0;
      } else {
        this.g = Math.floor(g);
      }
    }
    if (b >= 255) {
      this.b = 255;
    } else {
      if (b < 0) {
        this.b = 0;
      } else {
        this.b = Math.floor(b);
      }
    }
    if (a >= 255) {
      this.a = 255;
    } else {
      if (a < 0) {
        this.a = 0;
      } else {
        this.a = Math.floor(a);
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
    this.setColor(
        this.r+otherColor.color[0],
        this.g+otherColor.color[1],
        this.b+otherColor.color[2]
    );
  }

  subtraction(otherColor: color) {
    this.setColor(
        this.r-otherColor.color[0],
        this.g-otherColor.color[1],
        this.b-otherColor.color[2]
    );
  }

  multiply(otherColor: color) {
    this.setColor(
        color.factorise(this.r*otherColor.color[0]),
        color.factorise(this.g*otherColor.color[1]),
        color.factorise(this.b*otherColor.color[2])
    );
  }

  blur(otherColor: color,factor: number = color.factorise(otherColor.color[3])) {
    this.setColor(
        (this.r+(factor*otherColor.color[0]))/2,
        (this.g+(factor*otherColor.color[1]))/2,
        (this.b+(factor*otherColor.color[2]))/2
    );
  }
  //PRIVATE FUNCTIONS
  private static factorise (input: number) {
    return input/255;
  }
}
