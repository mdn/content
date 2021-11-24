---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
tags:
  - API
  - BeforeInstallPromptEvent
  - Event
  - Experimental
  - Interface
  - Reference
browser-compat: api.BeforeInstallPromptEvent
---
The **`BeforeInstallPromptEvent`** is fired at the {{domxref("Window.onbeforeinstallprompt")}} handler before a user is prompted to "install" a web site to a home screen on mobile.

This interface inherits from the {{domxref("Event")}} interface.

{{InheritanceDiagram(700, 60, 20)}}

## Constructor

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}
  - : Creates a new **`BeforeInstallPromptEvent`**.

## Properties

_Inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{readonlyinline}}
  - : Returns an array of {{domxref("DOMString")}} items containing the platforms on which the event was dispatched. This is provided for user agents that want to present a choice of versions to the user such as, for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{readonlyinline}}
  - : Returns a {{jsxref("Promise")}} that resolves to a {{domxref("DOMString")}} containing either "accepted" or "dismissed".

## Methods

- {{domxref("BeforeInstallPromptEvent.prompt()")}}
  - : Allows a developer to show the install prompt at a time of their own choosing. This method returns a  {{jsxref("Promise")}}.

## Example

```js
window.addEventListener("beforeinstallprompt", function(e) {
  // log the platforms provided as options in an install prompt
  console.log(e.platforms); // e.g., ["web", "android", "windows"]
  e.userChoice.then(function(choiceResult) {
    console.log(choiceResult.outcome); // either "accepted" or "dismissed"
  }, handleError);
});
```

## Browser compatibility

{{Compat}}
