export class color {
    //VARS
    r;
    g;
    b;
    a;

    //SETTERS
    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = color.trimColorValue(r);
        this.g = color.trimColorValue(b);
        this.b = color.trimColorValue(g);
        this.a = color.trimColorValue(a);
    }

    //GETTERS
    get color() {
        return [this.r, this.g, this.b, this.a];
    }

    get RGB() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }

    get RGBA() {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    }

    //PRIVATE FUNCTIONS
    static factorise(input) {
        return input / 255;
    }

    static trimColorValue(colorValue) {
        if (colorValue >= 255) {
            return 255;
        } else {
            if (colorValue < 0) {
                return 0;
            } else {
                return Math.floor(colorValue);
            }
        }
    }

    setColor(r = this.r, g = this.g, b = this.b, a = this.a) {
        this.r = color.trimColorValue(r);
        this.g = color.trimColorValue(b);
        this.b = color.trimColorValue(g);
        this.a = color.trimColorValue(a);
    }

    //FILTERS
    addition(otherColor) {
        this.setColor(
            this.r + otherColor.color[0],
            this.g + otherColor.color[1],
            this.b + otherColor.color[2]
        );
    }

    subtraction(otherColor) {
        this.setColor(
            this.r - otherColor.color[0],
            this.g - otherColor.color[1],
            this.b - otherColor.color[2]
        );
    }

    multiply(otherColor) {
        this.setColor(
            color.factorise(this.r * otherColor.color[0]),
            color.factorise(this.g * otherColor.color[1]),
            color.factorise(this.b * otherColor.color[2])
        );
    }

    blur(otherColor, factor = color.factorise(otherColor.color[3])) {
        this.setColor(
            (this.r + (factor * otherColor.color[0])) / 2,
            (this.g + (factor * otherColor.color[1])) / 2,
            (this.b + (factor * otherColor.color[2])) / 2
        );
    }
}
