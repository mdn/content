---
title: tabGroups.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onUpdated
page-type: webextension-api-event
browser-compat: webextensions.api.tabGroups.onUpdated
---

{{AddonSidebar}}

Fires when a tab group's state changes.

This event does not fire when the group's membership changes or when a tab group is moved. Those updates are covered by {{WebExtAPIRef("tabs.onUpdated")}} and {{WebExtAPIRef("tabGroups.onMoved")}} respectively.

To detect `windowId` changes, use {{WebExtAPIRef("tabGroups.onMoved")}} instead.

## Syntax

```js-nolint
browser.tabGroups.onUpdated.addListener(listener)
browser.tabGroups.onUpdated.removeListener(listener)
browser.tabGroups.onUpdated.hasListener(listener)
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
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details of the updated tab group's state.

## Examples

Listen for and log tab group updates:

```js
function tabGroupUpdated(group) {
  console.log(`Tab group with ID ${group.id} was updated.`, group);
}

browser.tabGroups.onUpdated.addListener(tabGroupUpdated);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
