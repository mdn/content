---
title: 'Window: beforeinstallprompt event'
slug: Web/API/Window/beforeinstallprompt_event
page-type: web-api-event
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
addEventListener('beforeinstallprompt', (event) => { });

onbeforeinstallprompt = (event) => { };
```

## Event type

A {{domxref("BeforeInstallPromptEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}
  - : Returns an array of strings containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a string containing either "accepted" or "dismissed".

## Example

The following example uses the `beforeinstallprompt` event to make an
install button operable, by using the event inside a click handler.

```js
window.addEventListener("beforeinstallprompt", (beforeInstallPromptEvent) => {
  beforeInstallPromptEvent.preventDefault(); // Prevents immediate prompt display

  // Shows prompt after a user clicks an "install" button
  installButton.addEventListener("click", (mouseEvent) => {
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
