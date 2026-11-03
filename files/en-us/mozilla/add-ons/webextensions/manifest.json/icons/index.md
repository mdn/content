---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.icons
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
  </tbody>
</table>

The `icons` key specifies icons for your extension. Those icons represent the extension in components such as the browser's extension management page (`about:addons` in Firefox).

The key consists of key-value pairs specifying the image size in pixels and the image path relative to the extension's root directory.

If `icons` is not supplied, a standard extension icon is used.

You should supply an extension icon. The browser uses it in its extension management page. You can supply icons of any size, and the browser uses the one that fits a component best.

The browser considers the display resolution when choosing an icon. It looks for the size at which it displays the icon, multiplied by the display's device pixel ratio. For example, an icon displayed at 16 px needs a 32 px version on a 2x display, such as a Retina display, and a 48 px version on a 3x display. To deliver the best visual experience on high-resolution displays, provide larger versions of your icons.

If the browser can't find an exact match for that size, it picks the smallest icon specified that's bigger than the ideal size. If all icons are smaller than the ideal size, it picks the biggest icon specified.

Browsers show the extension icon at different sizes in their extension management interface:

| Browser | Interface       | Displayed size (pt) | Sizes to supply (px) |
| ------- | --------------- | ------------------- | -------------------- |
| Chrome  | Extensions page | 48                  | 48, 96               |
| Firefox | Add-ons Manager | 32                  | 32, 64               |
| Safari  | Settings        | 48                  | 48, 96, 144          |

Browsers can also show the icon in other places, at other sizes. To avoid supplying a set of sizes for each browser, use an SVG icon, which scales to any size.

## Example

The keys in the `icons` object specify the icon size in pixels, and values specify the relative icon file path. This example contains a 32px extension icon and a larger version for high-resolution displays.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

You can use SVG, and the browser scales your icon appropriately. There are two caveats:

1. You need to specify a viewBox in the image, e.g.:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32"
     width="32"
     height="32">
     <!-- your svg content -->
   </svg>
   ```

2. Even though you can use one SVG file, you need to specify icon sizes in your manifest, e.g.:

   ```json
   "icons": {
     "32": "icon.svg",
     "64": "icon.svg"
   }
   ```

You can use a media query on `prefers-color-scheme` to update the icon for light and dark themes. For example:

```css
#outside {
  fill: black;
}
#inside {
  fill: red;
}
@media (prefers-color-scheme: dark) {
  #outside {
    fill: white;
  }
  #inside {
    fill: black;
  }
}
```

For more information, see the [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) example.

> [!NOTE]
> Chromium-based browsers don't support this feature. See [Chromium bug 29683](https://crbug.com/29683).

> [!NOTE]
> Remember to include the `xmlns` attribute when creating the SVG. Otherwise, the browser won't display the icon.

> [!NOTE]
> When using a program such as Inkscape to create SVG, save your file as a "plain SVG". Firefox isn't guaranteed to handle special namespaces and may not display an icon containing them.

## Browser compatibility

{{Compat}}
