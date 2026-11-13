(() => {
  "use strict";

  // Disable right-click context menu.
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  }, true);

  // Block common developer tools and source-view shortcuts.
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const ctrlOrCmd = event.ctrlKey || event.metaKey;

    const blocked =
      event.key === "F12" ||
      (ctrlOrCmd && key === "u") ||
      (ctrlOrCmd && event.shiftKey &&
        ["i", "j", "c", "k", "e", "m"].includes(key));

    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }, true);
})();
