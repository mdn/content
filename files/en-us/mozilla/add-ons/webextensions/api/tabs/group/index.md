---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.group
---

{{AddonSidebar}}

Adds one or more tabs to a group or, if no group is specified, adds the tabs to a new group.

As part of grouping, tabs may be moved to ensure that the tabs in the new group are adjacent to each other.

If tabs were part of a tab group before re-grouping, and that previous tab group becomes empty, that previous tab is removed.

If any of the tabs are pinned, they are unpinned before grouping.

Note: the `tabs.group()` method is not the only way to group tabs; a tab may join an existing tab group by calling {{WebExtAPIRef("tabs.move")}} with an `index` between tabs that are part of an existing tab group.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  options    // object
)
```

### Parameters

- `createProperties`

  - : `object`. Configuration details for a new group. Cannot be used if `groupId` is specified.

    - `windowId`
      - : `integer`. The window of the new group. Defaults to the [current window](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/getCurrent).

- `groupId`
  - : `integer`. The ID of the group to add the tabs to. If not specified, a new group is created.
- `tabIds`
  - : `integer` or `array` of `integer`. The tab ID or list of tab IDs to add to the group. Must contain at least one tab ID.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an integer containing the `groupId` of the tab group the tabs were added to. If the `groupId` is not found, any of the `tabIds` is invalid, the `windowId` is invalid, or some other error occurs, the promise is rejected with an error message. When a validation error occurs, the tabs are not modified.

## Examples

Add two tab to a new tab group:

```js
function onAdded(groupInfo) {
  console.log(`New group ID: ${groupInfo.groupId}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let adding = browser.tabs.group( { tabIds: [2, 13] } );
adding.then(onAdded, onError);
```

Add a tab to an existing group, for example the group of the current tab:

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
