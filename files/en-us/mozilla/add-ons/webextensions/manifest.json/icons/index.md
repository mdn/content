---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.icons
---

{{AddonSidebar}}

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

The `icons` key specifies icons for your extension. Those icons represent the extension in components such as the add-ons manager (`about:addons`).

The key consists of key-value pairs specifying the image size in pixels and the image path relative to the extension's root directory.

If `icons` is not supplied, a standard extension icon is used.

You should supply an extension icon, ideally 32x32 px in size. This is the default icon that is used in the add-ons manager. You can supply icons of any size, and Firefox uses the one that fits a component best.

Firefox considers the screen resolution when choosing an icon. To deliver the best visual experience to users with high-resolution displays, such as Retina displays, provide double-sized versions of your icons.

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

> [!NOTE]
> Only Firefox is known to support SVG icons. Chromium has a bug about [unsupported SVG icons](https://crbug.com/29683).

> [!NOTE]
> Remember to include the `xmlns` attribute when creating the SVG. Otherwise, Firefox won't display the icon.

> [!NOTE]
> When using a program such as Inkscape to create SVG, save your file as a "plain SVG". Firefox isn't guaranteed to handle special namespaces and may not display an icon containing them.

## Browser compatibility

{{Compat}}
