---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.ungroup
---

{{AddonSidebar}}

Removes one or more tabs from their respective groups. If any groups become empty, they are deleted.

## Syntax

```js-nolint
let ungrouping = browser.tabs.ungroup(
  tabIds              // array
)
```

### Parameters

- `tabIds`
  - : `array`. The tab ID or list of tab IDs to remove from groups.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Examples

Remove two tabs from their tab groups:

```js
function onRemoved() {
  console.log(`Tabs removed from groups`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.ungroup( tabIds: [2, 13] );
removing.then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
