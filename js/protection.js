(() => {
  "use strict";

  // Discourage casual inspection shortcuts on the public storefront.
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  }, true);

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const primary = event.ctrlKey || event.metaKey;
    const developerCombo = event.shiftKey && (
      ["i", "j", "c", "k", "e", "m"].includes(key) ||
      (event.altKey && ["i", "j", "c"].includes(key))
    );
    const viewSource = primary && key === "u";
    const devTools = event.key === "F12" || (primary && developerCombo);

    if (viewSource || devTools) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }, true);
})();
