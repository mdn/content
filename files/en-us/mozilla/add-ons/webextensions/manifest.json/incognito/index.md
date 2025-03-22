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

> [!NOTE]
> By default, extensions do not run in private browsing windows. Whether an extension can access private browsing windows is under user control. For details, see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Your extension can check whether it can access private browsing windows using {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}}.

This is a string that can take any of these values:

- "spanning" (the default): the extension sees events from private and non-private windows and tabs. Windows and tabs gets an `incognito` property in the [`Window`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) or [`Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) that represents them. This property indicates whether or not the object is private:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": the extension is split between private and non-private windows. There are effectively two copies of the extension running: one sees only non-private windows, the other sees only private windows. Each copy has isolated access to Web APIs (so, for example, [`localStorage`](/en-US/docs/Web/API/Window/localStorage) is not shared). However, the WebExtension API [`storage.local`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) is shared.

  > [!NOTE]
  > Firefox doesn't support "split" mode. Extensions that request this option in Firefox are installed using "not_allowed".

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
