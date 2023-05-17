---
title: "BeforeInstallPromptEvent: prompt() method"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.BeforeInstallPromptEvent.prompt
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

The **`prompt()`** method of the
{{domxref("BeforeInstallPromptEvent")}} interface allows a developer to show the
install prompt at a time of their own choosing.

## Syntax

```js-nolint
prompt()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to an object containing the following properties:

- `outcome` {{experimental_inline}} {{non-standard_inline}}

  - : A string indicating whether the user chose to install the app or not. It must be one of the following values:
    - `"accepted"`: The user installed the app.
    - `"dismissed"`: The user did not install the app.

- `platform` {{experimental_inline}} {{non-standard_inline}}
  - : If the user chose to install the app, this is a string naming the selected platform, which is one of the values from the {{domxref("BeforeInstallPromptEvent.platforms")}} property. If the user chose not to install the app, this is an empty string.

## Examples

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
```

## Browser compatibility

{{Compat}}
