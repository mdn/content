---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - menus
  - onHidden
browser-compat: webextensions.api.menus.onHidden
---
{{AddonSidebar()}}

Fired when the browser stops displaying a menu: for example because the user clicked outside it or selected an item.

It is only triggered for menus that can be manipulated using the {{WebExtAPIRef("menus")}} API itself: this includes the context menu, the browser's tools menu, and the bookmarks menu.

This is most likely to be used in combination with the {{WebExtAPIRef("menus.onShown")}} and {{WebExtAPIRef("menus.refresh()")}} APIs: an extension can update the menu when it is shown, then undo the changes when it is hidden.

Firefox makes this event available via the `contextMenus` namespace as well as the `menus` namespace.

## Syntax

```js
browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`
  - : Function that will be called when this event occurs. The function will be passed no parameters.

## Browser compatibility

{{Compat}}

## Examples

This example just logs a message whenever a menu is hidden:

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}
