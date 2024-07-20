---
title: optional_host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.optional_host_permissions
---

{{AddonSidebar}}

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
      <td>3 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json;">
"optional_host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `optional_host_permissions` key to enable runtime requests for access (access granted by the user after your extension has been installed) for the APIs in your extension that read or modify host data, such as {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}}, and {{WebExtAPIRef("tabs")}}. This key is an array of strings.

See [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) for more information on defining hosts.

Use the {{webextapiref("permissions")}} API to request an optional host permission at runtime. Requesting a host permission may present the user with a dialog asking whether they want to grant the permission to your extension.

## Example

```json
 "optional_host_permissions": ["*://developer.mozilla.org/*"]
```

Enables your extension to make a runtime request for privileged access to pages under `developer.mozilla.org`.

## Browser compatibility

{{Compat}}
