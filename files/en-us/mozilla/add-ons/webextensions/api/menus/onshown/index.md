---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - menus
  - onShown
browser-compat: webextensions.api.menus.onShown
---
{{AddonSidebar()}}

Fired when the browser has shown a menu.

An extension can use this event to update its menu items using information that's only available once the menu is shown. Typically an extension will figure out the update in its `onShown` handler and then call {{WebExtAPIRef("menus.refresh()")}} to update the menu itself.

The handler can add, remove, or update menu items.

For example, the [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/master/menu-labelled-open) example extension adds a menu item that's shown when the user clicks a link, and that, when clicked, just opens the link. It uses `onShown` and `refresh()` to annotate the menu item with the hostname for the link, so the user can easily see where they will go before they click.

Note that an extension should not take too much time before calling `refresh()`, or the update will be noticeable to the user.

The handler is passed some information about the menu and its contents, and some information from the page (such as the link and/or selection text). To get access to the information from the page, your extension must have the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for it.

If the `onShown` handler calls any asynchronous APIs, then it's possible that the menu has been closed again before the handler resumes execution. Because of this, if a handler calls any asynchronous APIs, it should check that the menu is still being displayed before it updates the menu. For example:

```js
let lastMenuInstanceId = 0;
let nextMenuInstanceId = 1;

browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  // Call an async function
  await /* the function to call */ ;

  // After completing the async operation, check whether the menu is still shown.
  if (menuInstanceId !== lastMenuInstanceId) {
    return; // Menu was closed and shown again.
  }
  // Now use menus.create/update + menus.refresh.
});

browser.menus.onHidden.addListener(() => {
  lastMenuInstanceId = 0;
});
```

Note that it is possible to call menus API functions synchronously, and in this case you don't have to perform this check:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  browser.menus.update(menuId /*, …*/);
   // Note: Not waiting for returned promise.
  browser.menus.refresh();
});
```

However, if you call these APIs asynchronously, then you do have to perform the check:

```js
browser.menus.onShown.addListener(async (info, tab) => {
  let menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  await browser.menus.update(menuId /*, …*/);
  // must now perform the check
  if (menuInstanceId !== lastMenuInstanceId) {
    return;
  }
  browser.menus.refresh();
});
```

Firefox makes this event available via the `contextMenus` namespace as well as the `menus` namespace.

## Syntax

```js
browser.menus.onShown.addListener(listener)
browser.menus.onShown.removeListener(listener)
browser.menus.onShown.hasListener(listener)
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

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `info`

      - : `Object`. This is just like the {{WebExtAPIRef('menus.OnClickData')}} object, except it contains two extra properties:

        - `contexts`: an array of all the {{WebExtAPIRef("menus.ContextType", "contexts")}} that are applicable to this menu.
        - `menuIds`: an array of IDs of all menu items belonging to this extension that are being shown in this menu.

        Compared with `menus.OnClickData`, the `info` object also omits the `menuItemId` and `modifiers` properties, because of course these are not available until a menu item has been selected.

        The `contexts`, `menuIds`, `frameId`, and `editable` properties are always provided. All the other properties in `info` are only provided if the extension has the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the page.

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The details of the tab where the click took place. If the click did not take place in or on a tab, this parameter will be missing.

## Examples

This example listens for the context menu to be shown over a link, then updates the `openLabelledId` menu item with the link's hostname:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener((info) => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
