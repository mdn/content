---
title: sidebar_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
tags:
  - WebExtensions
browser-compat: webextensions.manifest.sidebar_action
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
"sidebar_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "My sidebar",
  "default_panel": "sidebar/sidebar.html",
  "open_at_install":true
}</pre
        >
      </td>
    </tr>
    <tr>
      <th scope="row"> </th>
      <td></td>
    </tr>
  </tbody>
</table>

A [sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) is a pane that is displayed at the left-hand side of the browser window, next to the web page. The browser provides a UI that enables the user to see the currently available sidebars and to select a sidebar to display.

The sidebar_action key enables you to define the default properties for the sidebar. You can change these properties at runtime using the {{WebExtAPIRef("sidebarAction")}} API.

## Syntax

The `sidebar_action` key is an object that may have any of the properties listed below. The only mandatory property is `default_panel`.

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
        <code
          ><a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >browser_style</a
          ></code
        >
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, defaulting to <code>true</code>.</p>
        <p>
          Use this to include a stylesheet in your popup that will make it look
          consistent with the browser's UI and with other extensions that use
          the <code>browser_style</code> property.
        </p>
        <p>
          In Firefox, the stylesheet can be seen at
          chrome://browser/content/extension.css, or
          chrome://browser/content/extension-mac.css on macOS. When setting
          dimensions, be aware that this style sheet currently sets
          <code>box-sizing: border-box</code> (see
          <a href="/en-US/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          The
          <a
            class="external external-icon"
            href="https://firefoxux.github.io/StyleGuide/#/controls"
            >Firefox Style Guide</a
          >
          describes the classes you can apply to elements in the sidebar in
          order to get particular styles.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> or <code>String</code></td>
      <td>
        <p>
          Use this to specify one or more icons for the sidebar. The icon is
          shown in the browser's UI for opening and closing sidebars.
        </p>
        <p>
          Icons are specified as URLs relative to the manifest.json file itself.
        </p>
        <p>You can specify a single icon file by supplying a string here:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          To specify multiple icons in different sizes, specify an object here.
          The name of each property is the icon's height in pixels, and must be
          convertible to an integer. The value is the URL. For example:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          See
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes"
            >Choosing icon sizes</a
          >
          for more guidance on this.
        </p>
        <p>
          This property is optional: if it is omitted, the sidebar doesn't get
          an icon.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_panel</code></td>
      <td><code>String</code></td>
      <td>
        <p>The path to an HTML file that specifies the sidebar's contents.</p>
        <p>
          The HTML file may include CSS and JavaScript files using
          <code
            ><a href="/en-US/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          and
          <code
            ><a href="/en-US/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          elements, just like a normal web page.
        </p>
        <p>
          Unlike a normal web page, JavaScript running in the panel can access
          all the
          <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
          >
          (subject, of course, to the extension having the appropriate
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >permissions</a
          >).
        </p>
        <p>This property is mandatory.</p>
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
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Title for the sidebar. This is used in the browser UI for listing and
          opening sidebars, and is displayed at the top of the sidebar when it
          is open.
        </p>
        <p>
          This property is optional: if it is omitted, the sidebar's title is
          the extension's
          <code
            ><a
              href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name"
              >name</a
            ></code
          >.
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
      <td><code>open_at_install</code></td>
      <td>Boolean</td>
      <td>
        Optional, defaulting to <code>true</code>. Determines whether the
        sidebar should open on install. The default behavior is to open the
        sidebar when installation is completed.
      </td>
    </tr>
  </tbody>
</table>

## Example

```json
"sidebar_action": {
  "default_icon": "sidebar.svg",
  "default_title": "My sidebar!",
  "default_panel": "sidebar.html",
  "browser_style": true
}
```

For a simple example of an extension that uses a sidebar, see [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

## Browser compatibility

{{Compat}}

## See also

- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [Browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
