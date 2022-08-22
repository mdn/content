---
title: omnibox.onInputStarted
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputStarted
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onInputStarted
browser-compat: webextensions.api.omnibox.onInputStarted
---
{{AddonSidebar()}}

Fired when the user starts interacting with your extension by entering its keyword in the address bar and then pressing the space key.

This will be sent before any {{WebExtAPIRef("omnibox.onInputChanged")}} events.

## Syntax

```js
browser.omnibox.onInputStarted.addListener(listener)
browser.omnibox.onInputStarted.removeListener(listener)
browser.omnibox.onInputStarted.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`
  - : Function that will be called when this event occurs. The function will be passed no arguments.

## Browser compatibility

{{Compat}}

## Examples

```js
browser.omnibox.onInputStarted.addListener(() => {
  console.log("User has started interacting with me.")
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/omnibox/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
