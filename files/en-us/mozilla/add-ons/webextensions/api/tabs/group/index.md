---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.group
---

{{AddonSidebar}}

Adds one or more tabs to a group or, if no group is specified, adds the tabs to a new group. All tabs in a tab group must be adjacent, and tabs are moved if needed. Any pinned tabs are unpinned before grouping.

If a call moves tabs out of tab groups and any of those tab groups become empty, the empty tab groups are removed.

> [!NOTE]
> The `tabs.group()` method is not the only way to group tabs. A tab also joins a tab group when {{WebExtAPIRef("tabs.move")}} places it between tabs that are part of a tab group.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameters

- `options`

  - : An object containing details about the tab grouping.

    - `createProperties` {{optional_inline}}

      - : `object`. Configuration details for a new group. Cannot be used if `groupId` is specified.

        - `windowId` {{optional_inline}}
          - : `integer`. The window of the new group. Defaults to the [current window](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

    - `groupId` {{optional_inline}}
      - : `integer`. The ID of the group to add the tabs to. If not specified, a new group is created.
    - `tabIds`
      - : `integer` or `array` of `integer`. The tab ID or list of tab IDs to add to the group. Must contain at least one tab ID.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an integer containing the `groupId` of the tab group the tabs were added to. If the `groupId` is not found, any of the `tabIds` are invalid, the `windowId` is invalid, or some other error occurs, the promise is rejected with an error message. When a validation error occurs, the tabs are not modified.

## Examples

Create two tabs and put them in a new group, then create another tab and add it to the group.

```js
// Create two tabs and put them in a new group.
const tab1 = await browser.tabs.create({});
const tab2 = await browser.tabs.create({});
const groupId = await browser.tabs.group({
  tabIds: [tab1.id, tab2.id],
});

// Create another tab and add it to the group.
const tab3 = await browser.tabs.create({});
await browser.tabs.group({
  tabIds: tab3.id,
  groupId: groupId,
});
```

Create a tab and match its grouping to that of the current tab.

```js
let [oldTab] = await browser.tabs.query({
  active: true,
  lastFocusedWindow: true,
});

let newTab = await browser.tabs.create({
  url: "https://example.com/",
  index: oldTab.index + 1,
});
// Feature detection: tab grouping is a relatively new feature.
// All tabs are ungrouped if the API does not exist.
if (browser.tabs.group) {
  if (oldTab.groupId !== -1) {
    // oldTab is in a group, add newTab to the same group
    await browser.tabs.group({ groupId: oldTab.groupId, tabIds: [newTab.id] });
  } else {
    // oldTab isn't in a group
    // Although a new tab positioned next to an ungrouped tab is
    // already ungrouped, we call ungroup() in case this example is
    // adopted for use with tabs that aren't adjacent. When oldTab
    // is not in a tab group, the only way to ensure that newTab isn't
    // in a tab group is by using ungroup().
    await browser.tabs.ungroup(newTab.id);
  }
}
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
