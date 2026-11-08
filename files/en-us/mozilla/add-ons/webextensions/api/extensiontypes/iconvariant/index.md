---
title: extensionTypes.IconVariant
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/IconVariant
page-type: webextension-api-type
browser-compat: webextensions.api.extensionTypes.IconVariant
sidebar: addonsidebar
---

A set of icons for one or more color schemes, called an icon group. APIs that accept icons for light and dark appearance, such as {{WebExtAPIRef("action.setIcon()")}} and {{WebExtAPIRef("menus.create()")}}, take an array of these.

## Type

Values of this type are objects. They contain the following properties:

- `<size>` {{optional_inline}}
  - : One or more properties named for an icon size in pixels, such as `16` or `32`. The value is a relative path to an icon or, where the API accepts one, an `ImageData` object.
- `any` {{optional_inline}}
  - : A relative path or `ImageData` object for an icon to use at any size, typically an SVG file.
- `colorSchemes` {{optional_inline}}
  - : `Array` of `String`. The color schemes this group is for: `"light"` for icons that work on light backgrounds, `"dark"` for icons that work on dark backgrounds, or both. A group without `colorSchemes` is for both color schemes.

The [`icon_variants`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants) manifest key uses the same structure, with `color_schemes` in place of `colorSchemes`. For the formats and sizes to provide, see [Specify icons](/en-US/docs/Mozilla/Add-ons/WebExtensions/Specify_icons).

## Browser compatibility

{{Compat}}
