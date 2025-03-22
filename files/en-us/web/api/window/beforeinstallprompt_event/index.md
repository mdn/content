---
title: "Window: beforeinstallprompt event"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
page-type: web-api-event
browser-compat: api.Window.beforeinstallprompt_event
---

{{APIRef}}

The **`beforeinstallprompt`** event fires when the browser has detected that a website can be [installed as a Progressive Web App](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

There's no guaranteed time this event is fired, but it usually happens on page load.

The typical use for this event is when a web app wants to provide its own in-app UI inviting the user to install the app, rather than the generic one provided by the browser. This enables the app to provide more context about the app, explaining to the user why they might want to install it.

In this scenario, the handler for this event will:

- Keep a reference to the {{domxref("BeforeInstallPromptEvent")}} object that's passed into it
- Reveal its in-app installation UI (this should be hidden by default, because not all browsers will support installation).

When the user uses the in-app installation UI to install the app, the in-app installation UI calls the {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} method of the retained `BeforeInstallPromptEvent` object to show the installation prompt.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforeinstallprompt", (event) => {});

onbeforeinstallprompt = (event) => {};
```

## Event type

A {{domxref("BeforeInstallPromptEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns an array of string items containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to an object describing the user's choice when they were prompted to install the app.

## Event methods

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BeforeInstallPromptEvent.prompt")}}
- {{domxref("BeforeInstallPromptEvent")}}
