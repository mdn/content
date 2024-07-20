---
title: optional_permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.optional_permissions
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
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"optional_permissions": [
  "webRequest"
]</pre>
      </td>
    </tr>
  </tbody>
</table>

Use the `optional_permissions` key to list permissions that you want to ask for at runtime, after your extension has been installed.

The [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key lists permissions that your extension needs before it can be installed. In contrast, `optional_permissions` lists permissions that your extension doesn't need at install time but it may ask for after it has been installed. To ask for a permission, use the {{webextapiref("permissions")}} API. Asking for a permission may present the user with a dialog requesting them to grant the permission to your extension.

For advice on designing your request for runtime permissions, to maximize the likelihood that users grant them, see [Request permissions at runtime](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime).

Starting with Firefox 84, users can manage optional permissions from the Firefox Add-ons Manager. Extensions that use optional permissions can listen for [browser.permissions.onAdded](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) and [browser.permissions.onRemoved](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API events to know when a user grants or revokes these permissions.

The key can contain two kinds of permissions: host permissions and API permissions.

## Host permissions

These are the same as the host permissions you can specify in the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) key.

> **Note:** When using Manifest V3 or higher optional host permissions should be specified using the [`optional_host_permission`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) manifest key. Firefox introduced `optional_host_permission`in release 128, see [bug 1766026](https://bugzil.la/1766026), and allows for the continued use of `optional_permissions` to specify optional hosts. Use of `optional_host_permission` however is recommended.

## API permissions

You can include any of the following here, but not in all browsers: check the compatibility table for browser-specific details.

- `activeTab`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `cookies`
- `debugger`
- `declarativeNetRequest`
- `declarativeNetRequestFeedback`
- `declarativeNetRequestWithHostAccess`
- `devtools`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `idle`
- `management`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `proxy`
- `scripting`
- `search`
- `sessions`
- `tabHide`
- `tabs`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

Note that this is a subset of the API permissions allowed in [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).

Of this set, the following permissions are granted silently, without a user prompt:

- `activeTab`
- `cookies`
- `idle`
- `webRequest`
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

## Example

```json
 "optional_permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 only, enable the extension to ask for privileged access to pages under developer.mozilla.org.

```json
  "optional_permissions": ["tabs"]
```

Enable the extension to ask for access to the privileged pieces of the `tabs` API.

```json
  "optional_permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 only, enable the extension to ask for both of the above permissions.

## Browser compatibility

{{Compat}}
