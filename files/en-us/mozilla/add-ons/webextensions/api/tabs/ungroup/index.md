---
title: tabs.ungroup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ungroup
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.ungroup
---

{{AddonSidebar}}

Removes one or more tabs from their respective tab groups. If any groups become empty, they are deleted.

All tabs in a tab group must be adjacent. If necessary, an ungrouped tab is moved before or after the tab group to maintain this requirement.

> [!NOTE]
> The `tabs.ungroup()` method is not the only way to ungroup tabs. A tab is also ungrouped when it's moved by calling {{WebExtAPIRef("tabs.move")}} with an `index` that is outside a tab group.

For more information on tab groups, see {{WebExtAPIRef("tabGroups")}}.

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

Remove the current tab from its tab group, if any:

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
