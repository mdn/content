---
title: tabGroups.query
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
page-type: webextension-api-function
browser-compat: webextensions.api.tabGroups.query
---

{{AddonSidebar}}

Return all tab groups or find groups with certain properties.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    groupId                // integer
);
```

### Parameters

- `queryInfo` {{optional_inline}}
  - : An object containing details of the property values to be matched in returned tab groups.
    - `collapsed` {{optional_inline}}
      - : `boolean` Whether the returned tab groups are collapsed or expanded in the tab strip.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}} The name of the color returned tab groups are using.
    - `shared` {{optional_inline}}
      - : `boolean` Whether the returned tab groups are shared.
    - `title` {{optional_inline}}
      - : `string` The name of the tab groups to return.
    - `windowId` {{optional_inline}}
      - : `integer` The ID of the window the returned tab group are in.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an array of {{WebExtAPIRef("tabGroups.TabGroup")}} objects. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
