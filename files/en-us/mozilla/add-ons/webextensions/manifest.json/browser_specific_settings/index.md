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
        Must be provided with details specified for <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> for new extension submitted to addons.mozilla.org from November 3, 2025.
        <br/>
        Otherwise, usually not required (but see also
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >When do you need an Add-on ID?</a
        >). Mandatory if the extension ID cannot be determined, see
        <a href="#id"
          ><code>browser_specific_settings.gecko.id</code></a
        >.
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

Firefox stores browser-specific settings in these sub-keys:

- `gecko` for the desktop version of Firefox.
- `gecko_android` for the Android version of Firefox.

The `gecko` sub-key supports these properties:

- `data_collection_permissions`
  - : The optional and required data types that the extension collects and transmits for storage and processing outside the extension. These are represented by the properties:
    - `required`
      - : The data that the extension requires to be collected and transmitted for its operation. Must contain the value `none`, or one or more of `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity`, or `websiteContent`.
    - `optional` {{optional_inline}}
      - : The data that the user can opt to provide. Can contain one or more of `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity`, or `websiteContent`.

    For more information, see the Extension Workshop article [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : The extension ID. When provided, this property must contain 80 characters or less. See [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) to determine when to specify the ID.
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

The extension ID must be one of the following:

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
