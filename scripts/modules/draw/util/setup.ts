export function setupHighDpiCanvas (canvas: HTMLCanvasElement) {
    let dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height *dpr;
    let ctx = canvas.getContext('2d');
    ctx!.scale(dpr, dpr);
    return ctx;
}