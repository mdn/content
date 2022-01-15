---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
tags:
  - Add-ons
  - WebExtensions
  - manifest.json
browser-compat: webextensions.manifest.externally_connectable
---
{{AddonSidebar}}{{SeeCompatTable}}

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
      <th scope="row">Example</th>
      <td>
        <pre>
"externally_connectable": {
  // List of extension IDs that extension wishes to communicate with
  // If "browser_action" is specified but "browser_action.ids" is not,
  // no extensions can communicate with this extension.
  // To match all extension IDs use "*".
  "ids": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "cccccccccccccccccccccccccccccccc"
  ],
  // Regular expression patterns specifying web pages
  // If "matches" is not specified, no web pages can communicate with
  // this extension
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

Externally connectable allows extension developer to control which other extensions and web pages can communicate with this extension via {{WebExtAPIRef("runtime.connect","runtime.connect()")}} and {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} message passing. If `externally_connectable` is not specified, all extensions can communicate with each other but not with web pages.

### "ids" attribute

`ids` enables communication between this extension and other installed extensions specified by extension identifiers. Use the pattern `"*"` if you wish to communicate with all extensions.

### "matches" attribute

`matches` enables communication between this extension and the web pages. This is a list of regular expressions for page URLs that you wish to communicate with.

> **Note:** If `browser_action` is not specified, communication among extensions is still allowed as if `browser_action` was `{"ids": ["*"] }`, therefore if you specify `browser_action.matches` don't forget to add `ids` if you still want to communicate with other extensions.

## Browser compatibility

{{Compat}}
