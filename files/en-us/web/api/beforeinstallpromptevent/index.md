---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
page-type: web-api-interface
tags:
  - API
  - BeforeInstallPromptEvent
  - Event
  - Experimental
  - Interface
  - Reference
  - Non-standard
browser-compat: api.BeforeInstallPromptEvent
---
{{SeeCompatTable}}{{Non-standard_header}}

The **`BeforeInstallPromptEvent`** is the interface of the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event fired at the {{domxref("Window")}} object before a user is prompted to "install" a website to a home screen on mobile.

This interface inherits from the {{domxref("Event")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Creates a new `BeforeInstallPromptEvent` object.

## Properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns an array of string items containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a string containing either "accepted" or "dismissed".

## Methods

- {{domxref("BeforeInstallPromptEvent.prompt()")}} {{Experimental_Inline}}
  - : Allows a developer to show the install prompt at a time of their own choosing. This method returns a {{jsxref("Promise")}}.

## Example

```js
window.addEventListener("beforeinstallprompt", (e) => {
  // log the platforms provided as options in an install prompt
  console.log(e.platforms); // e.g., ["web", "android", "windows"]
  e.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome); // either "accepted" or "dismissed"
  }, handleError);
});
```

## Browser compatibility

{{Compat}}
