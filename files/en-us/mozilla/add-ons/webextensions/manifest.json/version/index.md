---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.version
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
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

The **version string** for the extension.

## Version format

The version string consists of 1 to 4 numbers separated by dots, for example, `1.2.3.4`. Non-zero numbers must not include a leading zero. For example, `2.01` is not allowed; however, `0.2`, `2.0.1`, and `2.10` are allowed.

Extension stores and browsers may enforce or warn if the version string doesn't comply with this format. They may also apply restrictions to the range of numbers available. For example:

- [addons.mozilla.org](https://addons.mozilla.org/) (AMO) allows version strings using numbers of up to nine digits, complying with this regular expression `^(0|[1-9][0-9]{0,8})([.](0|[1-9][0-9]{0,8})){0,3}$`. Also, from Firefox 108, a warning is provided if an extension is installed with a version number that doesn't match this format.
- The Chrome Web Store requires [numbers between 0 and 65535](https://developer.chrome.com/docs/extensions/mv3/manifest/version/) and does not permit all-zero extension strings. For example, 0.0 or 0.0.0.0 are not permitted.

It may be possible to create an extension that appears to have a valid version number when run in a browser but doesn't comply with store requirements. Particular care should be taken when developing cross-browser extensions that use large number elements.

Some browsers and web stores may recognize the [version_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) key. This key enables you to provide a descriptive version string that may be displayed instead of the version number. For example, `1.0 beta`.

### Comparing versions

To determine which of two extension versions is the most recent, the version string numbers are compared left to right. A missing version string element is equivalent to `0`. For example, 1.0 is equivalent to 1.0.0.0. The first version string with a number greater than the corresponding number in the other version string is the most recent. For example, 1.10 is a more recent version than 1.9.

## Legacy version formats

See [Legacy version formats](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) for details of previously supported version strings.

## Access the version number in code

You obtain the extension version in your JavaScript code using:

```js
console.log(browser.runtime.getManifest().version);
```

If the manifest contains:

```json
"version": "0.1"
```

You see this in the console log:

```text
"0.1"
```

## Browser compatibility

{{Compat}}
