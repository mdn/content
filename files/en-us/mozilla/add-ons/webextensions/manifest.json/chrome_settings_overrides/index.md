---
title: chrome_settings_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.chrome_settings_overrides
---

{{AddonSidebar}}

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
      <td><pre class="brush:json">
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

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>homepage</code></td>
      <td><code>String</code></td>
      <td>
        <p>Defines the page to be used as the browser's homepage.</p>
        <p>The replacement is given as a URL. The URL may:</p>
        <ul>
          <li>
            point to a file bundled with the extension, in which case it is
            given as a URL relative to the manifest.json file
          </li>
          <li>be a remote URL, such as "https://developer.mozilla.org/".</li>
        </ul>
        <p>
          If two or more extensions both set this value, then the setting from
          the most recently installed one will take precedence.
        </p>
        <p>
          To override new tabs, use "<a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides"
            >chrome_url_overrides</a
          >" instead.
        </p>
        <p>
          This is a
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >localizable property</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>search_provider</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Defines a search provider to add to the browser.</p>
        <p>
          The search provider has a name and a primary search URL. Alternative
          URLs may be provided, including URLs for more specialized searches
          like image search. In the URL you supply, use
          "<code>{searchTerms}</code>" to interpolate the search term into the
          URL, like:
          <code>https://www.discogs.com/search/?q={searchTerms}</code>. You can
          also provide POST parameters to be sent along with the search.
        </p>
        <p>
          The search provider will be presented to the user alongside the
          built-in providers. If you include the
          <code>is_default</code> property and set it to <code>true</code>, the
          new search provider will be the default option. By supplying the
          <code>keyword</code> property, you enable the user to select your
          search provider by typing the keyword into the search/address bar
          before the search term.
        </p>
        <p>
          This is an object with the properties listed below. All string
          properties are
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >localizable</a
          >.
        </p>
        <dl>
          <dt><code>name</code></dt>
          <dd>String: The search engine's name, displayed to the user.</dd>
          <dt><code>search_url</code></dt>
          <dd>
            String: URL used by the search engine. This must be an HTTPS URL.
          </dd>
          <dt><code>is_default {{optional_inline}}</code></dt>
          <dd>
            Boolean: True if the search engine should be the default choice. On
            Firefox, this is opt-in and the user will only be asked the first
            time the extension is installed. They will not be asked again if a
            search engine is added later.
          </dd>
          <dt><code>alternate_urls {{optional_inline}}</code></dt>
          <dd>
            Array of String: An array of alternative URLs that can be used
            instead of <code>search_url</code>.
          </dd>
          <dt><code>encoding {{optional_inline}}</code></dt>
          <dd>
            String: Encoding of the search term, specified as a
            <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml"
              >standard character encoding name</a
            >, such as "UTF-8".
          </dd>
          <dt><code>favicon_url {{optional_inline}}</code></dt>
          <dd>
            String: URL pointing to an icon for the search engine. In Manifest V2,
            this must be an absolute HTTP or HTTPS URL. In Manifest V3, this must
            reference an icon provided in the extension as a path relative to the
            extension's root.
          </dd>
          <dt><code>image_url {{optional_inline}}</code></dt>
          <dd>String: URL used for image search.</dd>
          <dt><code>image_url_post_params {{optional_inline}}</code></dt>
          <dd>String: POST parameters to send to <code>image_url</code>.</dd>
          <dt><code>instant_url {{optional_inline}}</code></dt>
          <dd>String: URL used for instant search.</dd>
          <dt><code>instant_url_post_params {{optional_inline}}</code></dt>
          <dd>String: POST parameters to send to <code>instant_url</code>.</dd>
          <dt><code>keyword {{optional_inline}}</code></dt>
          <dd>String: Address bar keyword for the search engine.</dd>
          <dt><code>prepopulated_id {{optional_inline}}</code></dt>
          <dd>The ID of a built-in search engine to use.</dd>
          <dt><code>search_url_post_params {{optional_inline}}</code></dt>
          <dd>String: POST parameters to send to <code>search_url</code>.</dd>
          <dt><code>suggest_url {{optional_inline}}</code></dt>
          <dd>
            String: URL used for search suggestions. This must be an HTTPS URL.
          </dd>
          <dt><code>suggest_url_post_params {{optional_inline}}</code></dt>
          <dd>String: POST parameters to send to <code>suggest_url</code>.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

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
