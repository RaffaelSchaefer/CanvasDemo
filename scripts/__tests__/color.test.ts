//TODO working on CMYK
import {color} from "../modules/draw/util/color";

test("A new color without values is always black and completely visible", () => {
    let c: color = new color();
    expect(c.color).toEqual([0,0,0,255]);
});

test("A color value is always an integer value", () => {
    let c: color = new color(2.4,2.4,2.4,2.4);
    expect(c.color).toEqual([2,2,2,2]);
    c.setColor(5.4,5.4,5.4,5.4);
    expect(c.color).toEqual([5,5,5,5]);
});

test("The setValue defaults on its own values", () => {
    let c: color = new color(255,255,255,255);
    c.setColor(1);
    expect(c.color).toEqual([1,255,255,255]);
});

test("The value limit of color is 255", () => {
    let c: color = new color(256,256,256,256);
    expect(c.color).toEqual([255,255,255,255]);
});

test("A color value can not be negative", () => {
    let c: color = new color(-1,-1,-1,-1);
    expect(c.color).toEqual([0,0,0,0]);
});

test("Two color can be added to an other", () => {
    let c1: color = new color(50,40,80,255);
    let c2: color = new color(100,80,150,255);
    c1.addition(c2);
    expect(c1.color).toEqual([150,120,230,255]);
});

test("The maximum result of an addition is 255", () => {
    let c1: color = new color(200,76,99,255);
    let c2: color = new color(180,200,200,255);
    c1.addition(c2);
    expect(c1.color).toEqual([255,255,255,255]);
});

test("Two color can be subtracted from an other", () => {
    let c1: color = new color(200,160,80,255);
    let c2: color = new color(100,80,80,255);
    c1.subtraction(c2);
    expect(c1.color).toEqual([100,80,0,255]);
});

test("The minimum result of an subtraction is 0", () => {
    let c1: color = new color(200,76,99,255);
    let c2: color = new color(255,255,255,255);
    c1.subtraction(c2);
    expect(c1.color).toEqual([0,0,0,255]);
});

test("Colors can be multiplied", () => {
    let c1: color = new color(255,240,80,255);
    let c2: color = new color(70,23,250,255);
    c1.multiply(c2);
    expect(c1.color).toEqual([70,21,78,255]);
});

test("A Color can be blurred", () => {
    let c1: color = new color(200,76,99,255);
    let c2: color = new color(255,255,255,60);
    c1.blur(c2);
    expect(c1.color).toEqual([130,68,79,255]);
});