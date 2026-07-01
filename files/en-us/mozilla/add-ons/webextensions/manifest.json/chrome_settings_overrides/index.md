---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.chrome_settings_overrides
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
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
      <td><pre class="brush: json">
"chrome_settings_overrides" : {
  "homepage": "https://developer.mozilla.org/"
 },
</pre></td>
    </tr>
  </tbody>
</table>

Use the `chrome_settings_overrides` key to override the browser's home page and add a new search engine.

## Syntax

The `chrome_settings_overrides` key is an object that may have the following properties:

- `homepage`
  - : `string`. Defines the page to be used as the browser's homepage.

    The replacement is given as a URL. The URL may:
    - point to a file bundled with the extension, in which case it is
      given as a URL relative to the manifest.json file
    - be a remote URL, such as "https://developer.mozilla.org/".

    If two or more extensions both set this value, then the setting from
    the most recently installed one will take precedence.

    To override new tabs, use [chrome_url_overrides](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) instead.

    This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `search_provider`
  - : `object`. Defines a search provider to add to the browser.

    The search provider has a name and a primary search URL. Alternative
    URLs may be provided, including URLs for more specialized searches
    like image search. In the URL you supply, use
    `{searchTerms}` to interpolate the search term into the
    URL, like:
    `https://www.discogs.com/search/?q={searchTerms}`. You can
    also provide POST parameters to be sent along with the search.

    The search provider will be presented to the user alongside the
    built-in providers. If you include the
    `is_default` property and set it to `true`, the
    new search provider will be the default option. By supplying the
    `keyword` property, you enable the user to select your
    search provider by typing the keyword into the search/address bar
    before the search term.

    This object has these properties. All string
    properties are [localizable](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
    - `name`
      - : `string`. The search engine's name, displayed to the user.

    - `search_url`
      - : `string`. URL used by the search engine. This must be an HTTPS URL.

    - `is_default` {{optional_inline}}
      - : `boolean`. True if the search engine should be the default choice. On
        Firefox, this is opt-in and the user will only be asked the first
        time the extension is installed. They will not be asked again if a
        search engine is added later.

    - `alternate_urls` {{optional_inline}}
      - : `array` of `string`. An array of alternative URLs that can be used instead of `search_url`.

    - `encoding` {{optional_inline}}
      - : `string`. Encoding of the search term, specified as a [standard character encoding name](https://www.iana.org/assignments/character-sets/character-sets.xhtml), such as "UTF-8".

    - `favicon_url` {{optional_inline}}
      - : `string`. URL pointing to an icon for the search engine. In Manifest V2,
        this must be an absolute HTTP or HTTPS URL. In Manifest V3, this must
        reference an icon provided in the extension as a path relative to the
        extension's root.

    - `image_url` {{optional_inline}}
      - : `string`. URL used for image search.

    - `image_url_post_params` {{optional_inline}}
      - : `string`. POST parameters to send to `image_url`.

    - `instant_url` {{optional_inline}}
      - : `string`. URL used for instant search.

    - `instant_url_post_params` {{optional_inline}}
      - : `string`. POST parameters to send to `instant_url`.

    - `keyword` {{optional_inline}}
      - : `string`. Address bar keyword for the search engine.

    - `prepopulated_id` {{optional_inline}}
      - : `string`. The ID of a built-in search engine to use.

    - `search_url_get_params` {{optional_inline}}
      - : `string`. GET parameters to send to `search_url`. Available only in Firefox, for optimal cross-browser compatibility use `search_url` instead.

    - `search_url_post_params` {{optional_inline}}
      - : `string`. POST parameters to send to `search_url`.

    - `suggest_url` {{optional_inline}}
      - : `string`. URL used for search suggestions. This must be an HTTPS URL.

    - `suggest_url_get_params` {{optional_inline}}
      - : `string`. GET parameters to send to `suggest_url`. Available only in Firefox, for optimal cross-browser compatibility use `suggest_url` instead.

    - `suggest_url_post_params` {{optional_inline}}
      - : `string`. POST parameters to send to `suggest_url`.

## Example

This example shows how to set a search provider.

```json
"chrome_settings_overrides": {
  "search_provider": {
    "name": "Discogs",
    "search_url": "https://www.discogs.com/search/?q={searchTerms}",
    "keyword": "disc",
    "favicon_url": "https://www.discogs.com/favicon.ico"
  }
}
```

## Browser compatibility

{{Compat}}
