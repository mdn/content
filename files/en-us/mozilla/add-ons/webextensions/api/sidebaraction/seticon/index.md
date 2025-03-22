---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
page-type: webextension-api-function
browser-compat: webextensions.api.sidebarAction.setIcon
---

{{AddonSidebar}}

Sets the icon for the sidebar.

You can specify a single icon as either the path to an image file or a {{WebExtAPIRef('sidebarAction.ImageDataType')}} object.

You can specify multiple icons in different sizes by supplying a dictionary containing multiple paths or `ImageData` objects. This means the icon doesn't have to be scaled for a device with a different pixel density.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Types of icon

Your extension should specify an icon for the sidebar in the [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest key. This is called the _"manifest icon"_.

If you don't specify an icon in the `sidebar_action` key, you get the browser's default icon. This is called the _"default icon"_.

If you set a new icon using `setIcon()`, and include the `tabId` option, then the icon is set only for the given tab. This icon is called the _"tab-specific icon"_.

If you set a new icon using `setIcon()`, and include the `windowId` option, then the icon is set only for the given window. This icon is called the _"window-specific icon"_, and will appear in all tabs of that window that do not have a tab-specific icon set.

If you set a new icon using `setIcon()`, and omit both the `tabId` and `windowId` options, then this sets the _"global icon"_. The global icon will then appear in all tabs that do not have a tab-specific icon set and whose window does not have a window-specific icon.

## Syntax

```js-nolint
let settingIcon = browser.sidebarAction.setIcon(
  details         // object
)
```

### Parameters

- `details`

  - : `object`. An object with the following properties:

    - `imageData` {{optional_inline}}

      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} or `object`. This is either a single `ImageData` object or a dictionary object.

        Use a dictionary object to specify multiple `ImageData` objects in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `imageData` is a dictionary, the value of each property is an `ImageData` object, and its name is its size, like this:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

    - `path` {{optional_inline}}

      - : `string` or `object`. This is either a relative path to an icon file or it is a dictionary object.

        Use a dictionary object to specify multiple icon files in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `path` is a dictionary, the value of each property is a relative path, and its name is its size, like this:

        ```js
        let settingIcon = browser.sidebarAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

        If `path` is an empty string, the browser will use the default icon.

        If `path` is not empty but does not point to an icon file, then the icon is hidden.

        If `path` is `null`, and `tabId` was specified, and the specified tab had a tab-specific icon set: then the tab-specific icon is reset to the global icon (if a global icon is set) or the manifest icon.

        if `path` is `null`, and `tabId` was omitted, and there was a global icon set, it will be reset to the manifest icon.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the icon only for the given tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the icon only for the given window.

<!---->

- If `windowId` and `tabId` are both specified, the function fails and the icon is not set.
- If `windowId` and `tabId` are both omitted, the icon is set globally.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments once the icon has been set.

## Browser compatibility

{{Compat}}

## Examples

The code below toggles the sidebar icon for the active tab when the user clicks a browser action:

```js
let on = false;

function toggle(tab) {
  if (on) {
    browser.sidebarAction.setIcon({
      path: "off.svg",
      tabId: tab.id,
    });
    on = false;
  } else {
    browser.sidebarAction.setIcon({
      path: "on.svg",
      tabId: tab.id,
    });
    on = true;
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Opera's [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.
