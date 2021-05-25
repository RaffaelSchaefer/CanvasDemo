export function dragUiElement(element: any) {
    let posX = 0, posY = 0, posXFetch = 0, posYFetch = 0;
    if (document.getElementById(element.id + "Header")) {
        document.getElementById(element.id + "Header")!.onmousedown = dragMouseDown;
        document.getElementById(element.id + "Header")!.ontouchstart = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e: any) {
        e = e || window.event;
        //e.preventDefault();
        posXFetch = e.clientX;
        posYFetch = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e: any) {
        e = e || window.event;
        e.preventDefault();
        posX = posXFetch - e.clientX;
        posY = posYFetch - e.clientY;
        posXFetch = e.clientX;
        posYFetch = e.clientY;
        element.style.top = (element.offsetTop - posY) + "px";
        element.style.left = (element.offsetLeft - posX) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
    }
}