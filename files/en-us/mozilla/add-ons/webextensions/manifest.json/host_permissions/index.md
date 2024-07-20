---
title: host_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions
page-type: webextension-manifest-key
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

### Requested permissions and user prompts

Users can [grant or revoke host permissions](https://support.mozilla.org/en-US/kb/extensions-button#w_website-permissions) on an ad hoc basis. Therefore., most browsers treat `host_permissions` as optional.

On installation, when you request permissions using this key:

- Until Firefox 126, a Manifest V3 extension's requested host permissions weren't displayed in the install prompt. From Firefox 127, host permissions listed in `host_permissions` and `content_scripts` are displayed in the install prompt. However, if an extension update requests new host permissions, these are not shown to the user. See ([Firefox bug 1893232](https://bugzil.la/1893232)).
- Chrome displays the permissions in the install prompt.
- Safari doesn't display requested host permissions in the install prompt.

Your extension can check whether it has all the required permissions immediately after installation using {{WebExtAPIRef("permissions.contains")}}. If it doesn't have the necessary permissions, it can request them using {{WebExtAPIRef("permissions.request")}}. Providing an onboarding step to explain why some permissions are necessary before requesting them might also be helpful.

As the request to grant host permissions may impact users' willingness to install your extension, requesting host permissions is worth careful consideration. For example, you want to avoid requesting unnecessary host permissions and may want to provide information about why you are requesting host permissions in your extension's store description. The article [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) provides more information on the issues you should consider.

For information on how to test and preview permission requests, see [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) on the Extension Workshop site.

### Format

Host permissions are specified as [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), and each pattern identifies a group of URLs for which the extension is requesting extra privileges. For example, a host permission could be `"*://developer.mozilla.org/*"`.

The extra privileges include:

- [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) and [fetch](/en-US/docs/Web/API/Fetch_API) access to those origins without cross-origin restrictions (though not for requests from content scripts, as was the case in Manifest V2).
- the ability to read tab-specific metadata without the "tabs" permission, such as the `url`, `title`, and `favIconUrl` properties of {{WebExtAPIRef("tabs.Tab")}} objects.
- the ability to inject scripts programmatically (using {{webextAPIref("tabs/executeScript", "tabs.executeScript()")}}) into pages served from those origins.
- the ability to receive events from the {{webextAPIref("webrequest")}} API for these hosts.
- the ability to access cookies for that host using the {{webextAPIref("cookies")}} API, as long as the `"cookies"` API permission is also included.
- bypassing tracking protection for extension pages where a host is specified as a full domain or with wildcards.

In Firefox extensions get host permissions for their origin, which is of the form:

```url
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

## Example extensions

<!-- Ideally we'd use the WebExtExamples template, but examples are not categorized by manifest keys yet - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser compatibility

{{Compat}}
