---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.browser_specific_settings
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>
        <ul>
          <li>In Firefox:
            <ul>
              <li>Manifest V3: Mandatory for signing extensions, i.e., distribution through addons.mozilla.org (AMO) or self-distribution, to provide an extension ID.</li>
              <li>Manifest V2: Not required unless an extension ID must be specified. However, setting the ID is recommended.</li>
            </ul>
            See <a href="#id"
              ><code>browser_specific_settings.gecko.id</code></a
            >
            for more information.</li>
          <li>In Safari, not required.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"browser_specific_settings": {
  "gecko": {
    "id": "@addon-example",
    "strict_min_version": "58.0"
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

Firefox stores browser-specific settings in these properties:

- `gecko` for the desktop version of Firefox.
- `gecko_android` for the Android version of Firefox.

The `gecko` sub-key supports these properties:

- `id`
  - : The extension ID. Optional for Manifest V2 (although setting an ID is recommended) and required for signing Manifest V3 extensions. If you don't provide a value for Manifest V2 extensions, AMO assigns a GUID to the extension when it is signed. You must create an ID for signing Manifest V3 extensions; AMO does not assign an ID. When provided, this property must be a:
    - (recommended) string contain 80 characters or less formatted like an email address. (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). While you can use a real email address (remembering that this may attract spam) any correctly formatted string can be used. For example, `great_app@developers.company`.
    - [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`)

    When signing extensions for the first time, addons.mozilla.org (AMO) checks that the ID is unique.

    For example:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) for more information about setting extension IDs.

- `strict_min_version`
  - : Minimum version of Gecko to support. If the Firefox version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than `strict_max_version` are supported. "\*" is not valid in this field.
- `strict_max_version`
  - : Maximum version of Gecko to support. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "\*", which disables checking for a maximum version.
- `update_url`
  - : A link to an [extension update manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Note that the link must begin with "https". This key is for managing extension updates yourself (i.e., not through AMO).

The `gecko_android` sub-key supports these properties:

- `strict_min_version`
  - : Minimum version of Gecko to support on Android. If the Firefox for Android version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, defaults to the version determined by `gecko.strict_min_version`. "\*" is not valid in this field.
- `strict_max_version`
  - : Maximum version of Gecko to support on Android. If the Firefox version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to the version determined by `gecko.strict_max_version`.

See the list of [valid Gecko versions](https://addons.mozilla.org/api/v5/applications/firefox/).

To support Firefox for Android without specifying a version range, the `gecko_android` sub-key must be an empty object, i.e., `"gecko_android": {}`. Otherwise, the extension is only made available on desktop Firefox.

#### Extension ID format

The extension ID must be one of these:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- A string formatted like an email address: `extensionname@example.org` However, use of an `@string` format is recommended.

The latter format is easier to generate and manipulate. Be aware that using a real email address here may attract spam.

For example:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari properties

Safari stores its browser-specific settings in the `safari` sub-key, which has these properties:

- `strict_min_version`
  - : Minimum version of Safari to support.
- `strict_max_version`
  - : Maximum version of Safari to support.

### Chrome properties

Chrome doesn't use this key and ignores it if present in an extension's `manifest.json` file.

## Examples

Example with all possible keys. Note that most extensions omit `strict_max_version` and `update_url`.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "@addon-example",
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
