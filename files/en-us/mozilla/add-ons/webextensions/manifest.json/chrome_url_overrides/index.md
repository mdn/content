---
title: chrome_url_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.chrome_url_overrides
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
        <pre class="brush: json">
  "chrome_url_overrides" : {
    "newtab": "my-new-tab.html"
  }</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `chrome_url_overrides` key to provide a custom replacement for the documents loaded into various special pages usually provided by the browser itself.

## Syntax

The `chrome_url_overrides` key is an object that may have the following properties:

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
      <td><code>bookmarks</code></td>
      <td><code>String</code></td>
      <td>
        <p>Provide a replacement for the page that shows the bookmarks. </p>
      </td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Provide a replacement for the page that shows the browsing history.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>newtab</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Provide a replacement for the document that's shown in the "new tab"
          page. This is the page that's shown when the user has opened a new tab
          but has not loaded any document into it: for example, by using the
          <kbd>Ctrl</kbd>/<kbd>Command</kbd>+<kbd>T</kbd> keyboard shortcut.
        </p>
        <p>
          The replacement is given as a URL to an HTML file. The file must be
          bundled with the extension: you can't specify a remote URL here. You
          can specify it relative to the extension's root folder, like:
          "path/to/newtab.html".
        </p>
        <p>
          The document can load CSS and JavaScript, just like a normal web page.
          JavaScript running in the page gets access to the same
          <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API"
            >privileged "browser.*" APIs</a
          >
          as the extension's background script.
        </p>
        <p>
          It's very good practice to include a
          <a href="/en-US/docs/Web/HTML/Element/title">&#x3C;title></a> for the
          page, or the tab's title will be the "moz-extension://..." URL.
        </p>
        <p>
          A common use case is to let the user define a new tab page: to do
          this, provide a custom new tab page that navigates to the page the
          user defined.
        </p>
        <p>
          If two or more extensions both define custom new tab pages, then the
          last one to be installed or enabled gets to use its value.
        </p>
        <p>
          To override the browser's homepage, use "<a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides"
            >chrome_settings_overrides</a
          >" instead.
        </p>
      </td>
    </tr>
  </tbody>
</table>

All properties are [localizable](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"chrome_url_overrides" : {
  "newtab": "my-new-tab.html"
}
```

## Browser compatibility

{{Compat}}
