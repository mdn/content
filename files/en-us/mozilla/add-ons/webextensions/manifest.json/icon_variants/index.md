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
    "32": "icons/light-32.png",
    "color_schemes": ["light"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The `icon_variants` key specifies icons for your extension, with a separate set of icons for each color scheme. The browser uses these icons wherever it represents the extension, for example in the extension management page. It replaces [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons), which can't describe light and dark icons.

When both keys are present, the browser uses `icon_variants` instead of `icons`. Declare `icons` as well so the extension has icons in browsers that don't support `icon_variants`. The sizes browsers display are the same as for [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons).

To set icons for the extension's toolbar button, use `icon_variants` in the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) key. To change the icon at runtime, use the `variants` property of {{WebExtAPIRef("action.setIcon()")}}.

## Syntax

The `icon_variants` key is an array of icon groups. Each icon group is an object with these properties:

- Sizes {{optional_inline}}
  - : Properties named for an icon size in pixels, such as `"16"` or `"32"`. The value is the path of the image relative to the extension's root directory, as in [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons).
- `any` {{optional_inline}}
  - : The path of an image that scales to any size, typically an SVG file.
- `color_schemes` {{optional_inline}}
  - : `Array` of `String`. The color schemes this group is for. Each entry is one of:
    - `"light"`: icons that work on light backgrounds.
    - `"dark"`: icons that work on dark backgrounds.

    A group without `color_schemes` is for both color schemes.

The browser checks the groups in order and uses the first one that matches the current color scheme. The browser decides which color scheme to match. It can differ from the operating system preference, for example to keep icons legible against a theme. Within the group, the browser picks the icon that best fits the size it needs. It considers the display's pixel density, so provide larger versions of your icons for high-density displays.

Browsers differ in what they do when no group matches the current color scheme, in how they treat a group that contains properties not listed here, and in how they choose between `any` and a numeric size when a group has both. List a group for each color scheme to avoid depending on the first difference.

## Examples

### Light and dark icons

This example provides a separate set of icons for dark and light backgrounds, each in two sizes:

```json
"icon_variants": [
  {
    "16": "icons/dark-16.png",
    "32": "icons/dark-32.png",
    "color_schemes": ["dark"]
  },
  {
    "16": "icons/light-16.png",
    "32": "icons/light-32.png",
    "color_schemes": ["light"]
  }
]
```

### Scalable icons

This example uses a single SVG file for each color scheme:

```json
"icon_variants": [
  { "any": "icons/dark.svg", "color_schemes": ["dark"] },
  { "any": "icons/light.svg", "color_schemes": ["light"] }
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
    "32": "icons/light-32.png",
    "color_schemes": ["light"]
  }
]
```

## Browser compatibility

{{Compat}}
