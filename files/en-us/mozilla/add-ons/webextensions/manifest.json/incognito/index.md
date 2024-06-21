---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.incognito
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
        <pre class="brush: json">"incognito": "spanning"</pre>
        <pre class="brush: json">"incognito": "split"</pre>
        <pre class="brush: json">"incognito": "not_allowed"</pre>
      </td>
    </tr>
  </tbody>
</table>

Use the `incognito` key to control how the extension works with private browsing windows.

> **Warning:** If your extension is designed to maintain the privacy expectations of Private browsing mode, don't use the `incognito` key. Using the `incognito` key risks leaking state details from private to non-private browsing.
>
> For example, a common mistake is for an extension to send data from a content script (potentially in a tab in a private browsing window) to an external server through a background page network request. As the background script shares cookies with the main browsing session, activity from the private browsing window could leak to the non-private browsing session. This can be avoided by using the `credentials: "omit"` flag in {{DOMxRef("fetch")}} (along with `cache: "no-cache"`) or the `mozAnon: true` option in {{DOMxRef("XMLHttpRequest")}}. See the [cross-origin access](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts#cross-origin_access) section of the guide on using background scripts.

> **Note:** By default, extensions do not run in private browsing windows. Whether an extension can access private browsing windows is under user control. For details, see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Your extension can check whether it can access private browsing windows using {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}}.

This is a string that can take any of these values:

- "spanning" (the default): the extension sees events from private and non-private windows and tabs. Windows and tabs gets an `incognito` property in the [`Window`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) or [`Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) that represents them. This property indicates whether or not the object is private:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": the extension is split between private and non-private windows. There are effectively two copies of the extension running: one sees only non-private windows, the other sees only private windows. Each copy has isolated access to Web APIs (so, for example, [`localStorage`](/en-US/docs/Web/API/Window/localStorage) is not shared). However, the WebExtension API [`storage.local`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) is shared.

  > **Note:** Firefox doesn't support "split" mode. Extensions that request this option in Firefox are installed using "not_allowed".

- "not_allowed": private tabs and windows are invisible to the extension.

## Example

```json
"incognito": "spanning"
```

```json
"incognito": "split"
```

```json
"incognito": "not_allowed"
```

## Browser compatibility

{{Compat}}
