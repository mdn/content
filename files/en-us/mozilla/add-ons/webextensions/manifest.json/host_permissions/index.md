---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
tags:
  - Add-ons
  - Extensions
  - Permissions
  - host_permissions
  - Reference
  - WebExtensions
  - manifest.json
browser-compat: webextensions.manifest.host_permissions
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
"host_permissions": [
  "*://developer.mozilla.org/*",
  "*://*.example.org/*"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `host_permissions` key to request access for the APIs in your extension that read or modify host data, such as {{WebExtAPIRef("cookies")}}, {{WebExtAPIRef("webRequest")}}, and {{WebExtAPIRef("tabs")}}. This key is an array of strings, and each string is a request for a permission.

If you request permissions using this key, the browser may prompt the user to grant the extension access to this host data at install time. Whether the user is prompted or not, the browser allows the user to control the extension's host permissions after installation: grant or revoke them as needed.

As the request to grant host permissions may impact users' willingness to install your extension, requesting host permissions is worth careful consideration. For example, you want to avoid requesting unnecessary host permissions and may want to provide information about why you are requesting host permissions in your extension's store description. The article [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) provides more information on the issues you should consider.

For information on how to test and preview permission requests, see [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) on the Extension Workshop site.

Host permissions are specified as [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), and each pattern identifies a group of URLs for which the extension is requesting extra privileges. For example, a host permission could be `"*://developer.mozilla.org/*"`.

The extra privileges include:

- [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) and [fetch](/en-US/docs/Web/API/Fetch_API) access to those origins without cross-origin restrictions (though not for requests from content scripts, as was the case in Manifest V2).
- the ability to read tab-specific metadata without the "tabs" permission, such as the `url`, `title`, and `favIconUrl` properties of {{WebExtAPIRef("tabs.Tab")}} objects.
- the ability to inject scripts programmatically (using {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) into pages served from those origins.
- the ability to receive events from the {{webextAPIref("webrequest")}} API for these hosts.e
- the ability to access cookies for that host using the {{webextAPIref("cookies")}} API, as long as the `"cookies"` API permission is also included.
- bypassing tracking protection for extension pages where a host is specified as a full domain or with wildcards.

In Firefox extensions get host permissions for their origin, which is of the form:

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

where `60a20a9b-1ad4-af49-9b6c-c64c98c37920` is the extension's internal ID. The extension can get this URL programmatically by calling {{webextAPIref("extension/getURL", "extension.getURL()")}}:

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## Example

```json
 "host_permissions": ["*://developer.mozilla.org/*"]
```

Request privileged access to pages under `developer.mozilla.org`.

## Browser compatibility

{{Compat}}
