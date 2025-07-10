---
title: tabGroups.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/onCreated
page-type: webextension-api-event
browser-compat: webextensions.api.tabGroups.onCreated
---

{{AddonSidebar}}

Fires when a tab group is created.

In Chrome, this event is also fired when a tab group is moved between windows, instead of {{WebExtAPIRef("tabGroups.onMoved")}}.

## Syntax

```js-nolint
browser.tabGroups.onCreated.addListener(listener)
browser.tabGroups.onCreated.removeListener(listener)
browser.tabGroups.onCreated.hasListener(listener)
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
      - : {{WebExtAPIRef("tabGroups.TabGroup")}}. Details of the created tab group's state.

## Examples

Listen for and log tab group creation:

```js
function tabGroupCreated(group) {
  console.log(
    `Tab group with ID ${group.id} was created in window ${group.windowId}.`,
  );
}

browser.tabGroups.onCreated.addListener(tabGroupCreated);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
