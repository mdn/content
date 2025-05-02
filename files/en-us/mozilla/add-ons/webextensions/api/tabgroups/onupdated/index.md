---
title: tabGroups.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onUpdated
page-type: webextension-api-event
browser-compat: webextensions.api.tabGroups.onUpdated
---

{{AddonSidebar}}

Fires when a tab group is updated.

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
  console.log(`Tab with ID ${group.id} was updated.`);
}

browser.tabGroups.onUpdated.addListener(tabGroupUpdated);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
