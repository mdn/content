---
title: tabGroups.move
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/move
page-type: webextension-api-function
browser-compat: webextensions.api.tabGroups.move
---

{{AddonSidebar}}

Moves a tab group within or to another window. Groups can't be moved before a pinned tab or inside another tab group.

## Syntax

```js-nolint
let movedTabGroup = await browser.tabGroups.move(
    groupId,                // integer
    moveProperties          // object
);
```

### Parameters

- `groupId`
  - : `integer` The ID of the tab group to move.

- `moveProperties`
  - : An object containing details of the location to move the tab group to.
    - `index`
      - : `integer`. The position to move the group to. After moving, the first tab in the tab group is at this index in the tab strip. Use -1 to place the group at the end of the window.
    - `windowId` {{optional_inline}}
      - : `integer`. The window to move the group to. Defaults to the window the group is in. Groups can only be moved to and from windows with {{WebExtAPIRef("windows.WindowType")}} type `"normal"`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef("tabGroups.TabGroup")}} object. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
