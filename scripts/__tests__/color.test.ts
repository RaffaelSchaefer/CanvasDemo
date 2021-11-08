import {color} from "../modules/draw/util/color";

test("A new color without values is always black and completely visible", () => {
    let c: color = new color();
    expect(c.RGB).toBe("rgb(0, 0, 0)");
    expect(c.RGBA).toBe("rgba(0, 0, 0, 255)");
});

test("The value limit of color is 255", () => {
    let c: color = new color(256,256,256,256);
    expect(c.color).toEqual([255,255,255,255]);
});

test("A color value can not be negative", () => {
    let c: color = new color(-1,-1,-1,-1);
    expect(c.color).toEqual([0,0,0,0]);
});