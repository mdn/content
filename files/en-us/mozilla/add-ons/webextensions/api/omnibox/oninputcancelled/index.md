---
title: omnibox.onInputCancelled
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputCancelled
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onInputCancelled
browser-compat: webextensions.api.omnibox.onInputCancelled
---
{{AddonSidebar()}}

Fired when the user has cancelled their interaction with your extension (for example, by clicking outside the address bar).

## Syntax

```js
browser.omnibox.onInputCancelled.addListener(listener)
browser.omnibox.onInputCancelled.removeListener(listener)
browser.omnibox.onInputCancelled.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

The listener function is passed no parameters.

## Browser compatibility

{{Compat}}

## Examples

```js
browser.omnibox.onInputCancelled.addListener(() => {
  console.log("The user cancelled the session.");
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
