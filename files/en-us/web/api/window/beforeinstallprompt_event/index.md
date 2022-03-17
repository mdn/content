---
title: 'Window: beforeinstallprompt event'
slug: Web/API/Window/beforeinstallprompt_event
tags:
  - API
  - Event
  - Manifest
  - Reference
  - Window
  - beforeinstallprompt
browser-compat: api.Window.beforeinstallprompt_event
---
{{APIRef}}

The **`beforeinstallprompt`** event fires on devices when a user is about to be prompted to "install" a web application. It may be saved for later and used to prompt the user at a more suitable time.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('beforeinstallprompt', event => { });

onbeforeinstallprompt = event => { };
```

## Event type

An {{domxref("BeforeInstallPromptEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{readonlyinline}}
  - : Returns an array of {{domxref("DOMString")}} items containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{readonlyinline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a {{domxref("DOMString")}} containing either "accepted" or "dismissed".

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
