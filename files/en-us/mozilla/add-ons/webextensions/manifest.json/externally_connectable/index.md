---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.externally_connectable
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
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
        <pre>
"externally_connectable": {
  "ids": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "cccccccccccccccccccccccccccccccc"
  ],
  "matches": [
    "https://example1.com/*",
    "*://*.example2.com/*"
  ]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Externally connectable controls which other extensions and web pages can communicate with an extension using {{WebExtAPIRef("runtime.connect","runtime.connect()")}} and {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} message passing. If `externally_connectable` is not specified, all extensions can communicate with each other but not with web pages.

> **Note:**
> For communication with web pages:
>
> - In Chrome, `chrome.runtime.connect` and `chrome.runtime.sendMessage` are used. These methods are only available when there is at least one extension listening for messages, see [chrome.runtime will no longer be defined unconditionally in Chrome 106](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/tCWVZRq77cg/m/KB6-tvCdAgAJ) for more details.
> - In Safari, `browser.runtime.connect` and `browser.runtime.sendMessage` are used.
> - In Firefox, neither API is supported. See [Firefox bug 1319168](https://bugzil.la/1319168).

### "ids" attribute

`ids` enables communication between this extension and other installed extensions specified by extension identifiers. Use the pattern `"*"` to communicate with all extensions.

### "matches" attribute

`matches` is a list of regular expressions that enables communication between an extension and the web pages that match the expression.

> **Note:** If `externally_connectable` is not specified, communication among extensions is allowed as if `externally_connectable` specified `{"ids": ["*"] }`. Therefore, if you specify `externally_connectable.matches`, don't forget to add `ids` if you want to communicate with other extensions.

## Browser compatibility

{{Compat}}
