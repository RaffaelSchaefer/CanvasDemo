import {colorRGB,colorRGBA} from "../modules/draw/util/color";

test("A new colorRGB cant be empty instead it should be black", () => {
    let c: colorRGB = new colorRGB();
    expect(c.color).toBe("rgb(0, 0, 0)")
});

test("A new colorRGBA cant be empty instead it should be black without transparency", () => {
    let c: colorRGBA = new colorRGBA();
    expect(c.color).toBe("rgba(0, 0, 0, 255)")
});

test("A colorRGB can be converted to a colorRGBA just trough the colorRGBA function convertRGB", () => {
    let cRGB: colorRGB = new colorRGB(255,255,255);
    let cRGBA: colorRGBA = new colorRGBA();
    cRGBA.convertRGB(cRGB,50);
    expect(cRGBA.color).toBe("rgba(255, 255, 255, 50)")
});

test("A colorRGBA can be converted to a colorRGB just trough the colorRGB function convertRGBA", () => {
    let cRGB: colorRGB = new colorRGB();
    let cRGBA: colorRGBA = new colorRGBA(255,255,255,10);
    cRGB.convertRGBA(cRGBA);
    expect(cRGB.color).toBe("rgb(255, 255, 255)")
});