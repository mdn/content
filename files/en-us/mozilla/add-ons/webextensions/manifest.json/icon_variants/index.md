---
title: icon_variants
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icon_variants
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.icon_variants
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"icon_variants": [
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The `icon_variants` key specifies icons for your extension, with a set of icons for each color scheme. The browser uses these icons wherever it represents the extension, for example, on the extension management page. It replaces [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), which can't describe light and dark icons.

When both keys are present, the browser uses `icon_variants` instead of `icons`. Declare `icons` as well so the extension has icons in browsers that don't support `icon_variants`. For the formats and sizes to provide for each browser, see [Specify icons](/en-US/docs/Mozilla/Add-ons/WebExtensions/Specify_icons).

To set icons for the extension's toolbar button, use `icon_variants` in the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key. To change the icon at runtime, use the `variants` property of {{WebExtAPIRef("action.setIcon()")}}, which takes an array of {{WebExtAPIRef("extensionTypes.IconVariant")}}.

## Syntax

The `icon_variants` key is an array of icon groups. Each icon group is an object with these properties:

- `<size>` {{optional_inline}}
  - : One or more properties named for an icon size in pixels, such as `"16"` or `"32"`. The value is the path of the image relative to the extension's root directory, as in [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons).
- `any` {{optional_inline}}
  - : The path of an image to use at any icon size, typically an SVG file.
- `color_schemes` {{optional_inline}}
  - : `Array` of `String`. The color schemes this group is for. Each entry is one of:
    - `"light"`: icons that work on light backgrounds.
    - `"dark"`: icons that work on dark backgrounds.

    A group without `color_schemes` is for any color scheme.

The browser checks the groups in order and uses the first one that matches the active color scheme. The browser decides which color scheme to match. It can differ from the operating system preference, for example, to keep icons legible against a theme. Within the group, the browser picks the icon that best fits the required size. It considers the display's pixel density, so provide larger icon versions for high-density displays.

Browsers differ in what they do when no group matches the active color scheme, how they handle a group with properties not listed here, and how they choose between `any` and a numeric size when a group has both. To make sure there is always a match, end the list with a group that has no `color_schemes`.

## Examples

### Light and dark icons

This example provides icons for dark and light backgrounds, each in two sizes:

```json
"icon_variants": [
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png"
  }
]
```

### Scalable icons

This example uses an SVG file for each color scheme:

```json
"icon_variants": [
  { "any": "icons/dark.svg", "color_schemes": ["dark"] },
  { "any": "icons/light.svg" }
]
```

### Fallback icons

This example declares `icons` for browsers that don't support `icon_variants`:

```json
"icons": {
  "16": "icons/light-16.png",
  "32": "icons/light-32.png"
},
"icon_variants": [
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png"
  }
]
```

## Browser compatibility

{{Compat}}
