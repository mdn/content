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

- {{domxref("BeforeInstallPromptEvent.prompt()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Show a prompt asking the user if they want to install the app. This method returns a {{jsxref("Promise")}} that resolves to an object describing the user's choice when they were prompted to install the app.

## Examples

In the following example an app provides its own install button, which has an `id` of `"install"`. Initially the button is hidden.

```html
<button id="install" hidden>Install</button>
```

The `beforeinstallprompt` handler:

- Cancels the event, which prevents the browser displaying its own install UI on some platforms
- Assigns the `BeforeInstallPromptEvent` object to a variable, so it can be used later
- Reveals the app's install button.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

When clicked, the app's install button:

- Calls the {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} method of the stored event object, to trigger the installation prompt.
- Resets its state by clearing the `installPrompt` variable and hiding itself again.

```js
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});
```

## Browser compatibility

{{Compat}}

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [How to provide your own in-app install experience](https://web.dev/customize-install/) on web.dev (2021)
