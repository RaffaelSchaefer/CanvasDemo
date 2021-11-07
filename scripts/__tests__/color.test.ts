import {colorRGB,colorRGBA} from "../modules/draw/util/color";

test("A new colorRGB cant be empty instead it should be black", () => {
    let c: colorRGB = new colorRGB();
    expect(c.color).toBe("rgb(0, 0, 0)")
});

test("A new colorRGBA cant be empty instead it should be black without transparency", () => {
    let c: colorRGBA = new colorRGBA();
    expect(c.color).toBe("rgba(0, 0, 0, 255)")
});