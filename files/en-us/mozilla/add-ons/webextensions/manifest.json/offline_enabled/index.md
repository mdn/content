---
title: offline_enabled
slug: Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
page-type: webextension-manifest-key
status:
  - deprecated
browser-compat: webextensions.manifest.offline_enabled
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Boolean</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"offline_enabled": true</pre></td>
    </tr>
  </tbody>
</table>

{{Non-standard_Header}}

Whether the app or extension is expected to work offline. When Chrome detects that it is offline, apps with this field set to true will be highlighted on the New Tab page.

As of Chrome 35, apps (ChromeOS only from 2018) are assumed to be offline enabled and the default value of `"offline_enabled"` is `true` unless `"webview"` permission is requested. In this case, network connectivity is assumed to be required and `"offline_enabled"` defaults to `false`.

The `"offline_enabled"` value is also used to determine whether a network connectivity check will be performed when launching an app in [ChromeOS kiosk mode](https://developer.chrome.com/docs/apps/manifest/kiosk_enabled/). A network connectivity check will be performed when apps are not offline enabled, and app launching put on hold until the device obtains connectivity to the Internet.

## Browser compatibility

{{Compat}}
