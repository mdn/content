---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.default_locale
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>
        Contingent: must be present if the <code>_locales</code> subdirectory is present,
        must be absent otherwise.
      </td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

This key must be present if the extension contains the `\_locales` directory, and must be absent otherwise. It identifies a subdirectory of `\_locales` where the i18n system finds the extension's default localization strings.

See [Internationalization](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) for more information.

## Example

```json
"default_locale": "en"
```

## Browser compatibility

{{Compat}}
