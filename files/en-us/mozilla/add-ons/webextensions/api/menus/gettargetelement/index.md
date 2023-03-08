---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
page-type: webextension-api-function
browser-compat: webextensions.api.menus.getTargetElement
---

{{AddonSidebar}}

Returns the element for a given `targetElementId`

This method is available to all extension script contexts (content scripts, background pages and other extension pages) and returns the element for a given `info.targetElementId`, provided that the element still exists in the document where the method is invoked.

The method only works in the document that includes the right-clicked element and the `targetElementId` expires when the user opens another context menu.

> **Note:** `menus.getTargetElement` only return the requested element if called in the same context as the document that contains the element, for example using content scripts (as shown in the example below).

An extension requires the "menus" permission to use this API.

## Syntax

```js-nolint
let elem = browser.menus.getTargetElement(targetElementId);
```

### Parameters

- `targetElementId`
  - : The property of the `{{WebExtAPIRef("menus.OnClickData")}}` object passed to the `{{WebExtAPIRef("menus.onClicked")}}` handler or `{{WebExtAPIRef("menus.onShown")}}` event.

### Return value

The element referred to by the `targetElementId` parameter. If the `targetElementId` parameter is not valid, the method returns `null`.

## Examples

The following example uses the `getTargetElement` method to get the element referred to by the `info.targetElementId` property and then removes it.

```js
browser.menus.create({
  title: "Remove element",
  documentUrlPatterns: ["*://*/*"],
  contexts: [
    "audio",
    "editable",
    "frame",
    "image",
    "link",
    "page",
    "password",
    "video",
  ],
  onclick(info, tab) {
    browser.tabs.executeScript(tab.id, {
      frameId: info.frameId,
      code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`,
    });
  },
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("menus.create")}}
- {{WebExtAPIRef("menus.OnClickData")}}
