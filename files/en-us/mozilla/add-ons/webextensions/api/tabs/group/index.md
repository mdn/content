---
title: tabs.group()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/group
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.group
---

{{AddonSidebar}}

Adds one or more tabs to a group or, if no group is specified, adds the tabs to a new group.

## Syntax

```js-nolint
let grouping = browser.tabs.group(
  createProperties,    // object
  groupId,             // integer
  tabIds               // array
)
```

### Parameters

- `createProperties`
  - : `object`. Configuration details for a new group. Cannot be used if `groupId` is specified.

    - `windowId`
      - : `integer`. The window of the new group. Defaults to the current window.

- `groupId`
  - : `integer`. The ID of the group to add the tabs to. If not specified, a new group is created.
- `tabIds`
  - : `array`. The tab ID or list of tab IDs to add to the group.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an integer containing the `groupId` of the tab group the tabs were added to. If the `groupId` is not found or some other error occurs, the promise is rejected with an error message.

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

Add a tab to an existing group:

```js
function onAdded() {
  console.log(Tab added to group);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let adding = browser.tabs.group( { groupId: 3, tabIds: [2]} );
adding.then(onAdded, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
