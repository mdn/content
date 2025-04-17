---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.ungroup
---

{{AddonSidebar}}

Removes one or more tabs from their respective tab groups. If any groups become empty, the empty tab groups are deleted.

If a tab is between other tabs of the same tab group before ungrouping, the tab may be moved to ensure that the remaining tabs of the group stay adjacent to each other.

Note: the `tabs.ungroup()` method is not the only way to ungroup tabs; a tab may also be ungrouped when it is moved by calling {{WebExtAPIRef("tabs.move")}} with an `index` away from the tab group.

## Syntax

```js-nolint
let ungrouping = browser.tabs.ungroup(
  tabIds              // array
)
```

### Parameters

- `tabIds`
  - : `integer` or `array` of `integer`. The tab ID or list of tab IDs to remove from groups.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

If any of the `tabIds` are invalid, the promise is rejected without modifying the tabs.

## Examples

Remove a tab from their tab group, if any:

```js
let tabs = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

await browser.tabs.ungroup([tabs[0].id]);
console.log("Current tab is ungrouped");
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
