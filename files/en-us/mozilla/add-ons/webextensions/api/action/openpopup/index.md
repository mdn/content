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

## Syntax

```js-nolint
browser.action.openPopup(
  options // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `windowId` {{optional_inline}}
      - : `integer`. Window to open the popup for. Defaults to the current window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Examples

Open the popup when the user selects a context menu item:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.action.openPopup();
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
