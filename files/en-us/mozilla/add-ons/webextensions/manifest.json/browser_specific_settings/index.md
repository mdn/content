---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.browser_specific_settings
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
      <td>
        Usually, no (but see also
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >When do you need an Add-on ID?</a
        >). Mandatory if the extension ID cannot be determined, see
        <a href="#firefox_gecko_properties"
          ><code>browser_specific_settings.gecko.id</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json;">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
  }
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Description

The `browser_specific_settings` key contains keys that are specific to a particular host application.

### Firefox (Gecko) properties

Firefox stores browser-specific settings in these sub-keys:

- `gecko` for the desktop version of Firefox.
- `gecko_android` for the Android version of Firefox.

The `gecko` subkey supports these properties:

- `id`
  - : The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID.
- `strict_min_version`
  - : Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "\*" is not valid in this field.
- `strict_max_version`
  - : Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "\*", which disables checking for a maximum version.
- `update_url`
  - : A link to an [extension update manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO).

The `gecko_android` subkey supports these properties:

- `strict_min_version`
  - : Minimum version of Gecko to support on Android. If the Firefox for Android version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, defaults to the version determined by `gecko.strict_min_version`. "\*" is not valid in this field.
- `strict_max_version`
  - : Maximum version of Gecko to support on Android. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to the version determined by `gecko.strict_max_version`.

See the list of [valid Gecko versions](https://addons.mozilla.org/api/v5/applications/firefox/).

#### Extension ID format

The extension ID must be one of the following:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- A string formatted like an email address: `extensionname@example.org`

The latter format is easier to generate and manipulate. Be aware that using a real email address here may attract spam.

For example:

```json
"id": "extensionname@example.org"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari properties

Safari stores its browser-specific settings in the `safari` subkey, which has these properties:

- `strict_min_version`
  - : Minimum version of Safari to support.
- `strict_max_version`
  - : Maximum version of Safari to support.

## Examples

Example with all possible keys. Note that most extensions omit `strict_max_version` and `update_url`.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  },
  "safari": {
    "strict_min_version": "14",
    "strict_max_version": "20"
  }
}
```

## Browser compatibility

{{Compat}}
