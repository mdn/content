---
title: tabGroups.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onMoved
page-type: webextension-api-event
browser-compat: webextensions.api.tabGroups.onMoved
---

{{AddonSidebar}}

Fires when a tab group is moved within a window or to another window. {{WebExtAPIRef("tabs.onMoved")}} also fire for the tabs within the group.

The event is passed a {{WebExtAPIRef("tabGroups.TabGroup")}} object. This includes the `windowId` but not the position of the tab group. To determine the position of the tab group, use {{WebExtAPIRef("tabs.query()")}} with the `groupId`, and read the `index` property of the returned tab.

In Chrome, this event doesn't fire when a tab group is moved between windows; instead, the group is removed from one window and created in another (firing {{WebExtAPIRef("tabGroups.onRemoved")}} and {{WebExtAPIRef("tabGroups.onCreated")}}.

## Syntax

```js-nolint
browser.tabGroups.onMoved.addListener(listener)
browser.tabGroups.onMoved.removeListener(listener)
browser.tabGroups.onMoved.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stops listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs. The function is passed this argument:
    - `group`
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details of the moved tab group's state.

## Examples

Listen for and log tab group movement:

```js
function tabGroupMoved(group) {
  console.log(
    `Tab group with ID ${group.id} was moved to window ${group.windowId}.`,
  );
}

browser.tabGroups.onMoved.addListener(tabGroupMoved);
```

Locate a tab group moved to another window.

```js
browser.tabGroups.onMoved.addListener(group => {
  let tabs = await browser.tabs.query({
    groupId: group.id,
  });
  console.log(`Moved tab group to ${tabs[0].index} in window ${group.windowId}`);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
