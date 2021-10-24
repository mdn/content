---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
tags:
  - Add-ons
  - Extensions
  - Manifest
  - Reference
  - WebExtensions
browser-compat: webextensions.manifest.background
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
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `background` key to include one or more background scripts, and optionally a background page in your extension.

Background scripts are the place to put code that needs to maintain long-term state, or perform long-term operations, independently of the lifetime of any particular web pages or browser windows.

Background scripts are loaded as soon as the extension is loaded and stay loaded until the extension is disabled or uninstalled, unless `persistent` is specified as `false`. You can use any of the WebExtension APIs in the script, as long as you have requested the necessary [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

See the "Background pages" section in [Anatomy of an extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages) for some more details.

The `background` key is an object that may have one of the following two properties, both optional:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>scripts</code></td>
      <td>
        <p>
          An <code>Array</code> of <code>Strings</code>, each of which is a path
          to a JavaScript source. The path is relative to the manifest.json file
          itself. These are the scripts which will be executed in the
          extension's background page.
        </p>
        <p>The scripts share the same <code>window</code> global context.</p>
        <p>The scripts are loaded in the order they appear in the array.</p>
        <p>
          If you specify a value for <code>scripts</code>, then an empty page
          will be created in which your scripts are run.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> If you want to fetch a script from a remote
            location with the <code>&#x3C;script></code> tag (e.g.
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-1.7.1.min.js"></code
            >), you will also have to change the
            <code
              ><a
                href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            key in the manifest.json file of your extension.
          </p>
        </div>
        <div class="note">
          <p>
            <strong>Note:</strong> In Firefox prior to version 50, when the
            debugger is open, scripts are not always loaded in the order given
            in the array. To work around this bug, you can use the
            <code>page</code> property and include background scripts from the
            page using <code>&#x3C;script></code> tags. This bug is fixed in
            Firefox 50. From that point on, scripts are always loaded in the
            order given in the array.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td>
        <p>
          If you need some particular content in the page, you can define your
          own page using the <code>page</code> property, which is a
          <code>String</code> representing a path, relative your manifest.json
          file, to an HTML document included in your extension bundle.
        </p>
        <p>
          If you use this property, you can not specify background scripts using
          <code>scripts</code>, but you can  include your own scripts from the
          page, just like in a normal web page.
        </p>
      </td>
    </tr>
  </tbody>
</table>

The `background` key can also contain the following optional property:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p>A <code>Boolean</code> value.</p>
        <ul>
          <li>
            <code>true</code> indicates the background page is to be kept in
            memory from when the extension is loaded or the browser starts until
            the extension is unloaded or disabled, or the browser is closed
            (i.e. the background page is persistent).
          </li>
          <li>
            <code>false</code> indicates the background page may be unloaded
            from memory when idle and recreated when needed. Such background
            pages are often called Event Pages, because they are loaded into
            memory to allow the background page to handle the events to which it
            has added listeners. Registration of listeners is persistent when
            the page is unloaded from memory, but other values are not
            persistent. If you want to store data persistently in an event page,
            then you should use the
            <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage"
              >storage API</a
            >.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Example

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

Load two background scripts.

```json
  "background": {
    "page": "my-background.html"
  }
```

Load a custom background page.

## Browser compatibility

{{Compat}}
