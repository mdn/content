---
title: tabGroups.update
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/update
page-type: webextension-api-function
browser-compat: webextensions.api.tabGroups.update
---

{{AddonSidebar}}

Modifies the state of a tab group.

## Syntax

```js-nolint
let updatedTabGroup = await browser.tabGroups.update(
    groupId,               // integer
    updateProperties       // object
);
```

### Parameters

- `groupId`

  - : `integer` The ID of the tab group to update.

- `updateProperties`
  - : An object containing details of the properties to update for this tab group. Properties that aren't specified aren't modified.
    - `collapsed` {{optional_inline}}
      - : `boolean`. Whether the tab group is collapsed or expanded in the tab strip.
    - `color` {{optional_inline}}
      - : {{WebExtAPIRef("tabGroups.Color")}}. The name of the color to use for the tab group.
    - `title` {{optional_inline}}
      - : `string`. The name of the tab group.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef("tabGroups.TabGroup")}} object. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
