export class color {
    //VARS
    private r: number;
    private g: number;
    private b: number;
    private a: number;

    //SETTERS
    constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 255) {
        this.r = color.trimColorValue(r);
        this.g = color.trimColorValue(b);
        this.b = color.trimColorValue(g);
        this.a = color.trimColorValue(a);
    }

    setColor(r: number = this.r, g: number = this.g, b: number = this.b, a: number = this.a) {
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

    //FILTERS
    addition(otherColor: color) {
        this.setColor(
            this.r + otherColor.color[0],
            this.g + otherColor.color[1],
            this.b + otherColor.color[2]
        );
    }

    subtraction(otherColor: color) {
        this.setColor(
            this.r - otherColor.color[0],
            this.g - otherColor.color[1],
            this.b - otherColor.color[2]
        );
    }

    multiply(otherColor: color) {
        this.setColor(
            color.factorise(this.r * otherColor.color[0]),
            color.factorise(this.g * otherColor.color[1]),
            color.factorise(this.b * otherColor.color[2])
        );
    }

    blur(otherColor: color, factor: number = color.factorise(otherColor.color[3])) {
        this.setColor(
            (this.r + (factor * otherColor.color[0])) / 2,
            (this.g + (factor * otherColor.color[1])) / 2,
            (this.b + (factor * otherColor.color[2])) / 2
        );
    }

    //PRIVATE FUNCTIONS
    private static factorise(input: number) {
        return input / 255;
    }

    private static trimColorValue(colorValue: number) {
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
}
