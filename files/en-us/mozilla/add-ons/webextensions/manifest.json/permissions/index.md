---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.permissions
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
"permissions": [
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `permissions` key to request special powers for your extension. This key is an array of strings, each of which is a permission request.

If you request permissions using this key, the browser may inform the user at install time that the extension is requesting certain privileges and ask them to confirm they are happy to grant privileges. The browser may also allow the user to inspect an extension's privileges after installation. As requesting privileges may impact users' willingness to install your extension, it's worth careful consideration. For example, avoid requesting unnecessary permissions and explain why you are requesting permissions in your extension's store description. For more information on the issues you should consider, see the article [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/).

For information on how to test and preview permission requests, see [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) on the Extension Workshop site.

The key can contain three kinds of permissions:

- host permissions (Manifest V2 only, host permissions are specified in the [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) manifest key for Manifest V3 or higher.)
- API permissions
- the [`activeTab` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission)

## Host permissions

> [!NOTE]
> How you request host permissions depends on whether you want them at install time or runtime and which manifest version your extension is using.
>
> - Manifest V2:
>   - install time request with this (`permissions`) manifest key.
>   - runtime request with the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest key.
> - Manifest V3 or higher:
>   - install time request with the [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) manifest key.
>   - runtime request with the [`optional_host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) manifest key.

Host permissions are specified as [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), and each pattern identifies a group of URLs for which the extension is requesting extra privileges. For example, a host permission could be `"*://developer.mozilla.org/*"`.

The extra privileges include:

- [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) and [fetch](/en-US/docs/Web/API/Fetch_API) access to those origins without cross-origin restrictions.
  > [!NOTE]
  > For Manifest V2 extensions in Firefox only, this includes requests made from content scripts.
- the ability to read tab-specific metadata without the "tabs" permission, such as the `url`, `title`, and `favIconUrl` properties of {{WebExtAPIRef("tabs.Tab")}} objects
- the ability to [inject content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts) and styles programmatically into pages served from those origins.
- the ability to receive events from the {{webextAPIref("webRequest")}} API for these hosts
- the ability to access cookies for that host using the {{webextAPIref("cookies")}} API, as long as the `"cookies"` API permission.
- bypassing tracking protection for extension pages where a host is specified as a full domain or with wildcards. Content scripts, however, can only bypass tracking protection for hosts specified with a full domain.
- the ability to create and retrieve WebAuthn credentials. See [Use Web Authn API in web extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) for details.

## API permissions

You specify API permissions as keywords, and each keyword names a [WebExtension API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) that the extension would like to use.

These permissions are available in Manifest V2 and above unless otherwise noted:

- `activeTab`
- `alarms`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `captivePortal`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `debugger`
- `declarativeNetRequest`
- `declarativeNetRequestFeedback`
- `declarativeNetRequestWithHostAccess`
- `devtools` (This permission is granted implicitly when the [`devtools_page`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest key is present.)
- `dns`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `menus.overrideContext`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `publicSuffix`
- `proxy`
- `scripting`
- `search`
- `sessions`
- `storage`
- `tabGroups`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `userScripts` (see [userScripts permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions))
- `webNavigation`
- `webRequest`
- `webRequestAuthProvider` (Manifest V3 and above)
- `webRequestBlocking`
- `webRequestFilterResponse`
- `webRequestFilterResponse.serviceWorkerScript`

In most cases, the permission grants access to the API only, with these exceptions:

- `tabs` gives you access to [privileged parts of the `tabs` API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs) without the need for [host permissions](#host_permissions): `Tab.url`, `Tab.title`, and `Tab.faviconUrl`.
  - In Firefox 85 and earlier, you also need `tabs` if you want to include `url` in the `queryInfo` parameter to {{webextAPIref("tabs/query", "tabs.query()")}}. The extension can use the rest of the `tabs` API without requesting any permission.
  - As of Firefox 86 and Chrome 50, matching [host permissions](#host_permissions) can also be used instead of the "tabs" permission.

- `webRequestBlocking` enables you to use the `"blocking"` argument, so you can [modify and cancel requests](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
- `downloads.open` lets you use the {{WebExtAPIRef("downloads.open()")}} API.
- `tabHide` lets you use the {{WebExtAPIRef("tabs.hide()")}} API.

## activeTab permission

When a user interacts with an extension that has the `activeTab` permission, the extension is granted extra privileges for the tab where the interaction occurred. This lets an extension act on the current page when the user asks, without requesting broad [host permissions](#host_permissions).

For details of how the permission is granted, what it enables, when the access ends, and how behavior differs among browsers, see the [`activeTab` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) page.

## Clipboard access

Two permissions enable an extension to interact with the clipboard:

- `clipboardWrite`
  - : Write to the clipboard using {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}, `document.execCommand("copy")` or `document.execCommand("cut")`.
- `clipboardRead`
  - : Read from the clipboard using {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}} or `document.execCommand("paste")`.

See [Interact with the clipboard](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) for more details.

## Unlimited storage

The `unlimitedStorage` permission:

- Enables extensions to exceed any quota imposed by the {{WebExtAPIRef("storage/local", "storage.local")}} API
- In Firefox, enables extensions to create a ["persistent" IndexedDB database](/en-US/docs/Web/API/IndexedDB_API) without the browser prompting the user for permission at the time the database is created.

## Examples

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

In Manifest V2 only, request privileged access to pages under `developer.mozilla.org`.

```json
  "permissions": ["tabs"]
```

Request access to the privileged pieces of the `tabs` API.

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

In Manifest V2 only, request both of the above permissions.

## Browser compatibility

{{Compat}}
