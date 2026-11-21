---
title: Specify icons
slug: Mozilla/Add-ons/WebExtensions/Specify_icons
page-type: guide
sidebar: addonsidebar
---

Browsers show your extension's icon in several places, including the browser's extension manager and the extension's action button. Each browser decides how large the icon is, how to pick one from the icons you provide, and which image formats it supports.

This guide explains how to provide icons that work across browsers, using the [`icon_variants`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants) and [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) manifest keys, the `icon_variants` and `default_icon` properties of the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key, and the {{WebExtAPIRef("action.setIcon()")}} method. It assumes that you know the [anatomy of an extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension), including the `manifest.json` file. Use it when you add icons to an extension, or when your icons look wrong in one browser.

## Where icons are used

These manifest keys and APIs set icons:

- The [`icon_variants`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants) and [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) manifest keys set the icon for the extension in the browser's interface, for example in its extension manager.
- The `icon_variants` and `default_icon` properties of the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) manifest key set the icon of the extension's action button. You can change the icon while the extension runs with {{WebExtAPIRef("action.setIcon()")}}, which accepts icon variants in its `variants` property. Manifest V2 extensions use [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) or [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) instead.
- The `iconUrl` property of {{WebExtAPIRef("notifications.create()")}} sets the icon of a notification.
- The `iconVariants` and `icons` properties of {{WebExtAPIRef("menus.create()")}} and {{WebExtAPIRef("menus.update()")}} set the icon of a menu item. Browsers that support them show these icons next to menu items.

Use `icon_variants` to provide a different set of icons for light and dark appearance, or icons in different formats. Refer to the [Provide icons for dark mode](#provide_icons_for_dark_mode) and [Provide more than one format](#provide_more_than_one_format) sections.

The browser chooses the icon of the action button in this order. It uses the first icon that the extension defines, and it skips a key that it doesn't support:

1. An icon set with {{WebExtAPIRef("action.setIcon()")}}
2. `icon_variants` in the `action` key
3. `default_icon` in the `action` key
4. `icon_variants` in the manifest
5. `icons` in the manifest

If the extension doesn't define an icon for the action button, the browser uses the extension's icon, which is the last two items.

## Choose image formats

PNG and SVG are the recommended formats for icons. An SVG icon scales to any size, and PNG icons work in every browser. Browsers can support other image formats, but support varies.

> [!NOTE]
> Browsers differ in the image formats they support. Firefox and Safari support SVG icons, and Chrome supports only bitmap icons.

To provide icons in more than one format, refer to the [Provide more than one format](#provide_more_than_one_format) section.

### Use one SVG icon

Firefox and Safari recommend an SVG icon for the action button, because the interface can scale, for example when the user changes the text size or the display scale, and an SVG icon stays sharp at any size. To use one SVG icon for the action button, set `default_icon` in the `action` key to the path of the resource:

```json
"action": {
  "default_icon": "icons/action.svg"
}
```

For the extension icon, name the SVG resource in `icons`:

```json
"icons": {
  "16": "icons/icon.svg"
}
```

> [!NOTE]
> An SVG icon needs a `viewBox` attribute and an `xmlns` attribute. Refer to the [SVG](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons#svg) section of the `icons` page.

### Use PNG icons

PNG icons work in every browser, including those that don't support SVG icons. Provide several sizes in `icons` and in `default_icon`. Refer to the [Choose icon sizes](#choose_icon_sizes) section for the sizes to provide:

```json
"action": {
  "default_icon": {
    "16": "icons/action-16.png",
    "32": "icons/action-32.png",
    "48": "icons/action-48.png"
  }
}
```

## Choose icon sizes

You need to choose sizes for bitmap icons, such as PNG. You can also use explicit sizes for SVG icons as an art direction choice, for example to provide a simpler version of an SVG icon for small sizes. An SVG icon that works at any size doesn't need explicit sizes. Refer to the [Provide more than one format](#provide_more_than_one_format) section.

The size of an icon is the number of pixels along its width and height. The browser looks for an icon with a pixel count that matches the icon's display size multiplied by the display's pixel density. If the browser can't find an exact match, it picks the smallest icon that's bigger than the ideal size. If all icons are smaller than the ideal size, it picks the biggest icon. The browser scales the icon it picks, which can make it look blurry.

The pixel density depends on the display:

- On a 2x display, such as a Retina display, an icon needs twice as many pixels.
- On a 3x display, such as an iPhone, an icon needs three times as many pixels.
- Displays with fractional scale factors, such as 1.5x, are becoming more common, and Windows lets the user choose scales like these. For a 16 point icon, the browser looks for 24 pixels on a 1.5x display. Provide several sizes, such as 16, 24, 32 and 48 pixels, so the browser can pick a close match.

Browsers display icons at different sizes. This table shows the size at which each browser displays the icon in the extension manager, and the recommended set of pixel sizes to provide for 1x and 2x displays and, in Safari, 3x displays:

| Browser | Interface       | Displayed size (pt) | Recommended set (px) |
| ------- | --------------- | ------------------- | -------------------- |
| Chrome  | Extensions page | 48                  | 48, 96               |
| Firefox | Add-ons Manager | 32                  | 32, 64               |
| Safari  | Settings        | 48                  | 48, 96, 144          |

Browsers can also show your icon in other places, such as alerts and permission prompts, at other sizes. For example, Chrome and Safari use a 16 point icon as the favicon of the extension's pages, and Chrome uses a 128 pixel icon during installation and in the Chrome Web Store. Providing icons in a range of sizes, from 16 pixels to 256 pixels, helps the browser find a close match as the places and sizes change.

This table shows the same for the icon of the action button. If you don't specify an action icon, the browser uses the extension's icon at this size:

| Browser | Interface     | Displayed size (pt) | Recommended set (px) |
| ------- | ------------- | ------------------- | -------------------- |
| Chrome  | Action button | 16                  | 16, 32               |
| Firefox | Action button | 16                  | 16, 32               |
| Firefox | Menu panel    | 32                  | 32, 64               |
| Safari  | Action button | 19                  | 19, 38, 57           |

## Provide icons for dark mode

An icon that works on a light background can be hard to see on a dark one. Use the [`icon_variants`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants) manifest key to provide icons for both. It is a list of icon groups, and each group can have matching criteria, such as a `color_schemes` property. It is an array of the color schemes the icons in the group are for: `"light"`, `"dark"`, or both. A group without `color_schemes` is for any color scheme. The browser uses the first group that matches the current color scheme and has an icon in a format it supports, so end the list with a group that has no `color_schemes`.

### Set the extension icon

In this example, `icon_variants` has a group of icons for dark backgrounds, followed by a group that has no `color_schemes`. The `icons` key is for browsers that don't support `icon_variants`:

```json
"icon_variants": [
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "48": "icons/dark-48.png",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png",
    "48": "icons/light-48.png"
  }
],
"icons": {
  "16": "icons/light-16.png",
  "32": "icons/light-32.png",
  "48": "icons/light-48.png"
}
```

A browser that doesn't support `icon_variants` uses `icons`.

### Set the action icon

In this example, the `action` key has the same groups for the icon of the action button. The `default_icon` property is for browsers that don't support `icon_variants`:

```json
"action": {
  "icon_variants": [
    {
      "16": "icons/action-dark-16.png",
      "32": "icons/action-dark-32.png",
      "48": "icons/action-dark-48.png",
      "color_schemes": ["dark"]
    },
    {
      "16": "icons/action-light-16.png",
      "32": "icons/action-light-32.png",
      "48": "icons/action-light-48.png"
    }
  ],
  "default_icon": {
    "16": "icons/action-light-16.png",
    "32": "icons/action-light-32.png",
    "48": "icons/action-light-48.png"
  }
}
```

The browser uses the groups in `action` for the action button, and it uses `default_icon` if it doesn't support `icon_variants`.

### Other options in Firefox

Firefox has two more ways to provide icons for dark mode:

- The `theme_icons` property of the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key provides a light and dark icon for each size. In `theme_icons`, the `dark` icon is the one for themes with dark text, which is the reverse of `color_schemes` in `icon_variants`. These icons work with `default_icon` and replace its icons for the same sizes.
- An SVG icon can use a media query on `prefers-color-scheme`.

## Provide more than one format

To use an SVG icon in the browsers that support it and PNG icons in the others, you can:

- List an SVG group and a PNG group in `icon_variants`. Browsers that support `icon_variants` use the first group that matches the color scheme and contains an icon in a format they support.
- Build a separate manifest for each browser, with SVG icons in the manifest for Firefox and Safari and PNG icons in the manifest for Chrome.

In `icon_variants`, an icon group can have an `any` entry, which is an icon to use at any size. To provide an SVG icon, add a group with an `any` entry, and add a group of PNG icons after it. If your SVG icon works at any size, one SVG icon for each color scheme is a good starting point. For explicit sizes instead of `any`, refer to the [Choose icon sizes](#choose_icon_sizes) section.

Use one image type in each icon group. In this example, the dark color scheme has an SVG group followed by a PNG group, and the groups after them have no `color_schemes`:

```json
"icon_variants": [
  {
    "any": "icons/dark.svg",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "48": "icons/dark-48.png",
    "color_schemes": ["dark"]
  },
  {
    "any": "icons/light.svg"
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png",
    "48": "icons/light-48.png"
  }
]
```

A browser that supports SVG icons uses the SVG group for the current color scheme. A browser that doesn't support SVG icons skips the SVG group and uses the PNG group for the same color scheme.

## How Safari displays the action icon

Safari shows whether the user has granted an extension access to the current page by changing how it renders the action icon. It also adjusts the image before rendering it:

- When the extension has access, Safari shows a color icon unchanged and tints a grayscale icon with a system color.
- When the extension doesn't have access, Safari renders any icon in grayscale, following light and dark appearance.
- Fully transparent borders are removed, and the icon is scaled to a consistent size.

## See also

- [`icon_variants`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants): manifest key for icons by color scheme
- [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons): manifest key for the extension icon
- [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action): manifest key for the action button
- {{WebExtAPIRef("action.setIcon()")}}: set the action icon while the extension runs
