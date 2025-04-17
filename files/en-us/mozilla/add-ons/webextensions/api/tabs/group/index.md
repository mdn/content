---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.group
---

{{AddonSidebar}}

Adds one or more tabs to a group or, if no group is specified, adds the tabs to a new group. Any pinned tabs are unpinned before grouping. Tabs are moved so that tabs in a group are adjacent.

If a call moves tabs out of tab groups and any of those tab groups become empty, the empty tab groups are removed.

> [!NOTE]
> The `tabs.group()` method is not the only way to group tabs. A tab joins a tab group when {{WebExtAPIRef("tabs.move")}} places it between tabs that are part of a tab group.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameters


- `options`
  - : An object containing details about the tab grouping.
    - `createProperties`
      - : `object`. Configuration details for a new group. Cannot be used if `groupId` is specified.

        - `windowId`
          - : `integer`. The window of the new group. Defaults to the [current window](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId`
      - : `integer`. The ID of the group to add the tabs to. If not specified, a new group is created.
    - `tabIds`
      - : `integer` or `array` of `integer`. The tab ID or list of tab IDs to add to the group. Must contain at least one tab ID.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an integer containing the `groupId` of the tab group the tabs were added to. If the `groupId` is not found, any of the `tabIds` are invalid, the `windowId` is invalid, or some other error occurs, the promise is rejected with an error message. When a validation error occurs, the tabs are not modified.

## Examples

Add a tab to an existing group, for example, the group of the current tab:

```js
let [ oldTab ] = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

let newTab = await browser.tabs.create({
  url: "https://example.com/",
  index: oldTab.index + 1,
});
if (browser.tabs.group) {
  if (oldTab.groupId !== -1) {
    await browser.tabs.group({ groupId: oldTab.groupId, tabIds: [newTab.id] });
  } else {
    await browser.tabs.ungroup(newTab.id);
  }
}
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
