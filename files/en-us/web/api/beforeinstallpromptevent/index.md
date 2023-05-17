---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
page-type: web-api-interface
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`BeforeInstallPromptEvent`** is the interface of the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event fired at the {{domxref("Window")}} object before a user is prompted to "install" a website to a home screen on mobile.

This interface inherits from the {{domxref("Event")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Creates a new `BeforeInstallPromptEvent` object.

## Instance properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns an array of string items containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to an object describing the user's choice when they were prompted to install the app.

## Instance methods

- {{domxref("BeforeInstallPromptEvent.prompt()")}} {{Experimental_Inline}}
  - : Allows a developer to show the install prompt at a time of their own choosing. This method returns a {{jsxref("Promise")}} that resolves to an object describing the user's choice when they were prompted to install the app.

## Example

In this example we listen for the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event. When it fires, we cancel the default behavior, which prevents the browser's built-in install prompt from showing. Next we show the app's custom install UI, and when the user clicks this UI, we call `prompt()` on the `BeforeInstallPromptEvent` that was passed into the `beforeinstallprompt` listener.

```js
window.addEventListener("beforeinstallprompt", (beforeInstallPromptEvent) => {
  // Prevent browser's own prompt display
  beforeInstallPromptEvent.preventDefault();
  // Show the app's custom install button
  const customInstallButton = document.querySelector("#install");
  customInstallButton.hidden = false;
  // Prompt the user to install when they press the custom install button
  customInstallButton.addEventListener("click", async () => {
    const result = await beforeInstallPromptEvent.prompt();
    console.log(`Outcome: ${result.outcome}`);
  });
});

## Browser compatibility

{{Compat}}
```
