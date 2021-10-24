---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - openPopup
browser-compat: webextensions.api.browserAction.openPopup
---
{{AddonSidebar()}}

Open the browser action's popup.

You can only call this function from inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions).

## Syntax

```js
browser.browserAction.openPopup()
```

### Parameters

None.

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
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() => {
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}
