---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
page-type: webextension-api-function
browser-compat: webextensions.api.browserAction.openPopup
---

{{AddonSidebar}}

Open the browser action's popup.

In stable versions of Firefox, you can only call this function from inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions). See [Browser compatibility](#browser_compatibility) for details.

## Syntax

```js-nolint
browser.browserAction.openPopup(
  options // optional object
)
```

### Parameters

- `details` {{optional_inline}}

  - : An object with the following properties:

    - `windowId` {{optional_inline}}
      - : `integer`. Window to open the popup for. Defaults to the current window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Browser compatibility

{{Compat}}

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
