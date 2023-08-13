---
title: menus.overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
page-type: webextension-api-function
browser-compat: webextensions.api.menus.overrideContext
---

{{AddonSidebar}}

Hide all default Firefox menu items in favor of providing a custom context menu UI.

The overrideContext method will cause the matching menu items from this extension to be shown instead of the default menu. This method should be called from a {{domxref("Element/contextmenu_event", "contextmenu")}} DOM event handler, and only applies to the menu that opens after this event.

This interface requires the `menus.overrideContext` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.menus.overrideContext(
  contextOptions // object
)
```

### Parameters

- `contextOptions`

  - : `object`. Options for how the context menus will be overridden.

    - `showDefaults` {{optional_inline}}
      - : `boolean`. Whether to also include default menu items in the menu.
    - `context` {{optional_inline}}
      - : `string`. ContextType to override, to allow menu items from other extensions in the menu. Currently only `'bookmark'` and `'tab'` are supported. `showDefaults` cannot be used with this option.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Required when context is `'bookmark'`. Requires 'bookmark' permission.
    - `tabId` {{optional_inline}}
      - : `integer`. Required when context is `'tab'`. Requires 'tabs' permission.

## Examples

Open the tab context menu on your custom UI, in this case:

```js
document.addEventListener(
  "contextmenu",
  (event) => {
    const foo = event.target.closest(".foo");
    if (foo) {
      // When the context menu is opened on an element with the foo class
      // set the context to "opening a tab context menu".
      browser.menus.overrideContext({
        context: "tab",
        tabId: parseInt(foo.dataset.tabId),
      });
    }
  },
  { capture: true },
);
```

See [this blog post](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) for more details.

## Browser compatibility

{{ Compat }}
