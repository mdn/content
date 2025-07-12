---
title: tabGroups.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onRemoved
page-type: webextension-api-event
browser-compat: webextensions.api.tabGroups.onRemoved
---

{{AddonSidebar}}

Fires when a tab group is removed. This occurs when a user closes a tab group or a tab group is closed automatically because another change means it no longer contained any tabs.

## Syntax

```js-nolint
browser.tabGroups.onRemoved.addListener(listener)
browser.tabGroups.onRemoved.removeListener(listener)
browser.tabGroups.onRemoved.hasListener(listener)
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
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details of the removed tab group's state.
    - `removeInfo`
      - : `object`. Information on why the tab group is closing.
        - `isWindowClosing`
          - : `boolean`. `true` if the tab group is removed because its window is closing.

## Examples

Listen for and log tab group removals:

```js
function tabGroupRemoved(group) {
  console.log(`Tab group with ID ${group.id} was removed.`);
}

browser.tabGroups.onRemoved.addListener(tabGroupRemoved);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
