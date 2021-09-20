---
title: Window.onbeforeinstallprompt
slug: Web/API/Window/onbeforeinstallprompt
tags:
  - API
  - Event Handler
  - Manifest
  - Property
  - Reference
  - Window
  - onbeforeinstallprompt
browser-compat: api.Window.onbeforeinstallprompt
---
{{APIRef}}

The **`Window.onbeforeinstallprompt`** property is an event
handler for processing a {{event("beforeinstallprompt")}}, which is dispatched on
devices when a user is about to be prompted to "install" a web application. [Its associated event](../BeforeInstallPromptEvent) may be saved for later and
used to prompt the user at a more suitable time.

## Syntax

```js
window.addEventListener("beforeinstallprompt", function(event) { ... });
window.onbeforeinstallprompt = function(event) { ...};
```

## Example

The following example uses the `beforeinstallprompt` event to make an
install button operable, by using the event inside a click handler.

```js
window.addEventListener("beforeinstallprompt", function(beforeInstallPromptEvent) {
  beforeInstallPromptEvent.preventDefault(); // Prevents immediate prompt display

  // Shows prompt after a user clicks an "install" button
  installButton.addEventListener("click", function(mouseEvent) {
    // you should not use the MouseEvent here, obviously
    beforeInstallPromptEvent.prompt();
  });

  installButton.hidden = false; // Make button operable
});
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BeforeInstallPromptEvent.prompt")}}
- {{domxref("BeforeInstallPromptEvent")}}
