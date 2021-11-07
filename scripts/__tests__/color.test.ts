import {colorRGB,colorRGBA} from "../modules/draw/util/color";

test("A new color without values is always black and completely visible", () => {
    let cRGB: colorRGB = new colorRGB();
    let cRGBA: colorRGBA = new colorRGBA();
    expect(cRGB.color).toBe("rgb(0, 0, 0)");
    expect(cRGBA.color).toBe("rgba(0, 0, 0, 255)");
});

test("Color classes can be converted", () => {
    let cRGB: colorRGB = new colorRGB(255,255,255);
    let cRGBA: colorRGBA = new colorRGBA();
    cRGBA.convertRGB(cRGB,50);
    expect(cRGBA.color).toBe("rgba(255, 255, 255, 50)");
    cRGB.setColor(60,21,99);
    cRGB.convertRGBA(cRGBA);
    expect(cRGB.color).toBe("rgb(255, 255, 255)");
});

test("The value Limit of colorRGB and ColorRGBA is 255", () => {
    let cRGB: colorRGB = new colorRGB(256,256,256);
    let cRGBA: colorRGBA = new colorRGBA(256,256,256,256);
    expect(cRGB.color).toBe("rgb(255, 255, 255)");
    expect(cRGBA.color).toBe("rgba(255, 255, 255, 255)");
});