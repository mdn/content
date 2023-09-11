---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.options_ui
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
        <pre class="brush: json;">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `options_ui` key to define an [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) for your extension.

The options page contains settings for the extension. The user can access it from the browser's add-ons manager, and you can open it from within your extension using {{WebExtAPIRef("runtime.openOptionsPage()")}}.

You specify `options_ui` as a path to an HTML file packaged with your extension. The HTML file can include CSS and JavaScript files, just like a normal web page. Unlike a normal page, though, the JavaScript can use all the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) that the extension has [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for. However, it runs in a different scope than your background scripts.

If you want to **share** data or functions between the JavaScript on your **options page** and your **background script(s)**, you can do so directly by obtaining a reference to the [Window](/en-US/docs/Web/API/Window) of your background scripts by using {{WebExtAPIRef("extension.getBackgroundPage()")}}, or a reference to the {{domxref("Window")}} of any of the pages running within your extension with {{WebExtAPIRef("extension.getViews()")}}. Alternately, you can communicate between the JavaScript for your options page and your background script(s) using {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}}, or {{WebExtAPIRef("runtime.connect()")}}.
The latter (or {{WebExtAPIRef("runtime.Port")}} equivalents) can also be used to share options between your [background script(s)](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) and your **[content script(s).](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)**

In general, you will want to store options changed on option pages using the {{WebExtAPIRef("storage", "storage API", "", "true")}} to either {{WebExtAPIRef("storage.sync()")}} (if you want the settings synchronized across all instances of that browser that the user is logged into), or {{WebExtAPIRef("storage.local()")}} (if the settings are local to the current machine/profile). If you do so and your [background script(s)](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) (or [content script(s)](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)) need to know about the change, your script(s) might choose to add a listener to {{WebExtAPIRef("storage.onChanged")}}.

## Syntax

The `options_ui` key is an object with the following contents:

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
      <td>
        <code>
          <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">
            browser_style
          </a>
        </code>
        <br />{{optional_inline}}
        <br />{{deprecated_inline}} in Manifest V3.
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, defaulting to:</p>
          <ul>
            <li><code>true</code> in Manifest V2 and prior to Firefox 115 in Manifest V3.</li>
            <li><code>false</code> in Manifest V3 from Firefox 115.</li>
          </ul>
        <div class="notecard warning">
          <p>
            Do not set <code>browser_style</code> to true: its not support in Manifest V3 from Firefox 118. See <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 migration for <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox, the stylesheet can be seen at
          <code>chrome://browser/content/extension.css</code> or
          <code>chrome://browser/content/extension-mac.css</code> on macOS. When
          setting dimensions, be aware that this stylesheet sets
          <code>box-sizing: border-box</code> (see
          <a href="/en-US/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code><br />{{optional_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <p>Defaults to <code>false</code>.</p>
        <p>
          If <code>true</code>, the options page will open in a normal browser
          tab, rather than being integrated into the browser's add-ons manager.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td><code>String</code></td>
      <td>
        <p>Mandatory.</p>
        <p>
          The path to an HTML file containing the specification of your options
          page.
        </p>
        <p>
          The path is relative to the location of
          <code>manifest.json</code> itself.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Example

```json
"options_ui": {
  "page": "options/options.html"
}
```

## Browser compatibility

{{Compat}}

## See also

- [`options_page`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) {{deprecated_inline}}
- [Browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
