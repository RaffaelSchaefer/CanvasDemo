export function exportCanvas(canvas) {
    let link = document.createElement('a');
    link.download = 'Noise-Art.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
    // @ts-ignore
    link.delete;
    let notification = new Notification('Noise-Art', { body: 'Your artwork has been exported' });
}
