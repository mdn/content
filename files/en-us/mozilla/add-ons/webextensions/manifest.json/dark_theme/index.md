---
title: dark_theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.dark_theme
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Optional</th>
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
"dark_theme": {
  "images": {
    "theme_frame": "images/moon.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `dark_theme` key to define a static theme to apply when Firefox is using the dark color scheme. The `dark_theme` key uses the same syntax and supports the same image, color, and property objects as the `theme` key.

See the [`theme` key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) for more information.

## Browser compatibility

{{Compat}}
