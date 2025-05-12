---
title: tabGroups.get
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/get
page-type: webextension-api-function
browser-compat: webextensions.api.tabGroups.get
---

{{AddonSidebar}}

Returns details about a tab group.

## Syntax

```js-nolint
let tabGroupDetails = await browser.tabGroups.get(
    groupId                // integer
);
```

### Parameters

- `groupId`
  - : `integer`. The ID of the tab group to return details for.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef("tabGroups.TabGroup")}} object. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
