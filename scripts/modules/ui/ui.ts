import { dragUiElement } from "./window/drag.js";
import { visibilityHandler } from "./window/close.js";
import { previewColor } from "./preview/previewColor.js";

// @ts-ignore
previewColor(
  document.getElementById("colorPreview"),
  document.getElementById("colorRValue")!.value,
  document.getElementById("colorGValue")!.value,
  document.getElementById("colorBValue")!.value
);

dragUiElement(document.getElementById("toolBox"));
dragUiElement(document.getElementById("optionsMenu"));
dragUiElement(document.getElementById("colorMenu"));

//Mouse movement
document
  .getElementById("toolBoxHeaderClose")!
  .addEventListener("click", function () {
    visibilityHandler(document.getElementById("toolBoxContent"));
  });
document
  .getElementById("optionsMenuClose")!
  .addEventListener("click", function () {
    visibilityHandler(document.getElementById("optionsMenuContent"));
  });
document
  .getElementById("colorMenuClose")!
  .addEventListener("click", function () {
    visibilityHandler(document.getElementById("colorMenuContent"));
  });

document.getElementById("colorRValue")!.addEventListener("click", function () {
  // @ts-ignore
  previewColor(
    document.getElementById("colorPreview"),
    document.getElementById("colorRValue")!.value,
    document.getElementById("colorGValue")!.value,
    document.getElementById("colorBValue")!.value
  );
});
document.getElementById("colorGValue")!.addEventListener("click", function () {
  // @ts-ignore
  previewColor(
    document.getElementById("colorPreview"),
    document.getElementById("colorRValue")!.value,
    document.getElementById("colorGValue")!.value,
    document.getElementById("colorBValue")!.value
  );
});
document.getElementById("colorBValue")!.addEventListener("click", function () {
  // @ts-ignore
  previewColor(
    document.getElementById("colorPreview"),
    document.getElementById("colorRValue")!.value,
    document.getElementById("colorGValue")!.value,
    document.getElementById("colorBValue")!.value
  );
});

//Touch support
document
  .getElementById("toolBoxHeaderClose")!
  .addEventListener("touchstart", function () {
    visibilityHandler(document.getElementById("toolBoxContent"));
  });
document
  .getElementById("optionsMenuClose")!
  .addEventListener("touchstart", function () {
    visibilityHandler(document.getElementById("optionsMenuContent"));
  });
document
  .getElementById("colorMenuClose")!
  .addEventListener("touchstart", function () {
    visibilityHandler(document.getElementById("colorMenuContent"));
  });

document
  .getElementById("colorRValue")!
  .addEventListener("touchend", function () {
    // @ts-ignore
    previewColor(
      document.getElementById("colorPreview"),
      document.getElementById("colorRValue")!.value,
      document.getElementById("colorGValue")!.value,
      document.getElementById("colorBValue")!.value
    );
  });
document
  .getElementById("colorGValue")!
  .addEventListener("touchend", function () {
    // @ts-ignore
    previewColor(
      document.getElementById("colorPreview"),
      document.getElementById("colorRValue")!.value,
      document.getElementById("colorGValue")!.value,
      document.getElementById("colorBValue")!.value
    );
  });
document
  .getElementById("colorBValue")!
  .addEventListener("touchend", function () {
    // @ts-ignore
    previewColor(
      document.getElementById("colorPreview"),
      document.getElementById("colorRValue")!.value,
      document.getElementById("colorGValue")!.value,
      document.getElementById("colorBValue")!.value
    );
  });
