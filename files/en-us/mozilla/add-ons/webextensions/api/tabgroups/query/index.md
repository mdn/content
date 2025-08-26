---
title: tabGroups.query
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/query
page-type: webextension-api-function
browser-compat: webextensions.api.tabGroups.query
sidebar: addonsidebar
---

Return all tab groups or find groups with certain properties.

## Syntax

```js-nolint
let group = await browser.tabGroups.query(
    queryInfo                // object
);
```

### Parameters

- `queryInfo`
  - : An object containing details of the property values to be matched in returned tab groups.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Whether the returned tab groups are collapsed or expanded in the tab strip.
        - In Firefox, a collapsed group can contain the active tab. The active tab remains visible and inactive tabs are collapsed.
        - In Chrome, groups are collapsed completely. If the group contains the active tab when it's collapsed, the active tab is moved to the first tab to the right of the group. If there is no tab to the right of the group, it's moved to the tab immediately to the left of the group.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. The name of the color returned tab groups are using.
    - `shared` {{optional_inline}}
      - : `boolean`. Whether the returned tab groups are shared.
    - `title` {{optional_inline}}
      - : `string`. The name of the tab groups to return.
    - `windowId` {{optional_inline}}
      - : `integer`. The ID of the window the returned tab group are in.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an array of {{WebExtAPIRef("tabGroups.TabGroup")}} objects. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
