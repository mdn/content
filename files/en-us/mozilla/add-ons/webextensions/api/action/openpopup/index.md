---
title: action.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/openPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - action
  - openPopup
browser-compat: webextensions.api.action.openPopup
---
{{AddonSidebar()}}

Open the browser action's popup.

> **Note:** This API is available in Manifest V3 or higher.

You can only call this function from inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions).

## Syntax

```js
browser.action.openPopup()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Examples

Open the popup when the user selects a context menu item:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() => {
  browser.action.openPopup();
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
