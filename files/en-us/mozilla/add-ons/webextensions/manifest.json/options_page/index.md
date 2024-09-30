---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
page-type: webextension-manifest-key
status:
  - deprecated
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

Use the `options_page` key to define an [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) that opens in a new tab. You use this page to enable users to modify your extension's settings.

The way the user opens the page is browser-dependent. In Firefox, the page opens when the extension's icon is clicked. Your extension can also open the page using {{WebExtAPIRef("runtime.openOptionsPage()")}}.

Alternatively, you can use the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key with `open_in_tab` set to `true`. If `options_ui` is specified, `options page` is ignored.

See [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) for more information on developing a settings page.

## Example

```json
"options_page": "options/options.html"
```

## Browser compatibility

{{Compat}}
