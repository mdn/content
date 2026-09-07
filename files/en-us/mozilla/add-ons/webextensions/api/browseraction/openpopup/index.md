---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
page-type: webextension-api-function
browser-compat: webextensions.api.browserAction.openPopup
sidebar: addonsidebar
---

Open the browser action's popup.

## Syntax

```js-nolint
browser.browserAction.openPopup(
  options // optional object
)
```

### Parameters

- `details` {{optional_inline}}
  - : An object with these properties:
    - `windowId` {{optional_inline}}
      - : `integer`. Window to open the popup in. Defaults to the focused (active) window. In Chrome and from Firefox 149, if the window ID is for an unfocused window, the API call is rejected. A window can be focused by calling {{WebExtAPIRef("windows.update")}} with `focused: true`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with no arguments. If the popup isn't opened, rejects with an error message.

## Examples

Open the popup when the user selects a context menu item:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
