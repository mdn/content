---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
tags:
  - Add-ons
  - Deprecated
  - Extensions
  - Manifest
  - Options
  - WebExtensions
  - options_page
browser-compat: webextensions.manifest.options_page
---
{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
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
        <pre class="brush: json;">"options_page": "options/options.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

{{Deprecated_Header}}

> **Warning:** This manifest key has been deprecated. Use [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) instead.

Use the `options_page` key to define an [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) for your extension.

The options page contains settings for the extension. The user can access it from the browser's add-ons manager, and you can open it from within your extension using {{WebExtAPIRef("runtime.openOptionsPage()")}}.

Unlike options pages specified using the newer `options_ui` key, options pages specified using the deprecated `options_page` key don't receive browser styles and always open in a normal browser tab.

## Example

```json
"options_page": "options/options.html"
```

## Browser compatibility

{{Compat}}

## See also

- [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- [Options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
