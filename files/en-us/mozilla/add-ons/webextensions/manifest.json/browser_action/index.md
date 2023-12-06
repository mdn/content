---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.browser_action
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
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html",
  "theme_icons": [{
    "light": "icons/geo-16-light.png",
    "dark": "icons/geo-16.png",
    "size": 16
  }, {
    "light": "icons/geo-32-light.png",
    "dark": "icons/geo-32.png",
    "size": 32
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

A browser action is a button that your extension adds to the browser's toolbar. The button has an icon, and may optionally have a popup whose content is specified using HTML, CSS, and JavaScript.

This key is replaced by [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) in Manifest V3 extensions.

If you supply a popup, then the popup is opened when the user clicks the button, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) when the user clicks the button.

You can also create and manipulate browser actions programmatically using the [browserAction API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction).

## Syntax

The `browser_action` key is an object that may have any of the following properties, all optional:

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
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, defaulting to <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Do not set <code>browser_style</code> to true: its not support in Manifest V3 from Firefox 118. See <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 migration for <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox, the stylesheet can be seen at
          chrome://browser/content/extension.css or
          chrome://browser/content/extension-mac.css on macOS. When setting
          dimensions, be aware that this stylesheet sets
          <code>box-sizing: border-box</code> (see
          <a href="/en-US/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browser styles</a
          > describes the classes you can apply to elements in the popup
          to get particular styles.
        </p>
        <p>
          The
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          >
          example extension uses <code>browser_style</code> in its popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Setting <code>browser_style</code> to
            <code>true</code> prevents users from selecting text in an
            extension's popup or sidebar content. This is normal behavior. You
            can't select parts of the UI in the browser. However, you can work
            around this limitation to allow your users to select text in two
            ways:
          </p>
          <ol>
            <li>Set <code>browser_style</code> to <code>false</code>.</li>
            <li>
              Use CSS styling on the body of your sidebar or popup's HTML to
              allow text selection by adding the rule
              <code>-moz-user-select</code> with a value of <code>all</code> or
              <code>text</code>.
            </li>
          </ol>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>default_area</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Defines the part of the browser in which the button is initially
          placed. This is a string that may take one of four values:
        </p>
        <ul>
          <li>
            "navbar": the button is placed in the main browser toolbar,
            alongside the URL bar.
          </li>
          <li>"menupanel": the button is placed in a popup panel.</li>
          <li>
            "tabstrip": the button is placed in the toolbar that contains
            browser tabs.
          </li>
          <li>
            "personaltoolbar": the button is placed in the bookmarks toolbar.
          </li>
        </ul>
        <p>This property is only supported in Firefox.</p>
        <p>This property is optional, and defaults to "menupanel".</p>
        <p>
          Firefox remembers the <code>default_area</code> setting for an
          extension, even if that extension is uninstalled and subsequently
          reinstalled. To force the browser to acknowledge a new value for
          <code>default_area</code>, the id of the extension must be changed.
        </p>
        <p>
          An extension can't change the location of the button after it has been
          installed, but the user may be able to move the button using the
          browser's built-in UI customization mechanism.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> or <code>String</code></td>
      <td>
        <p>
          Use this to specify one or more icons for the browser action. The icon
          is shown in the browser toolbar by default.
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
          You cannot specify multiple icons of the same sizes.<br /><br />See
          <a
            href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes"
            >Choosing icon sizes</a
          >
          for more guidance on this.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          The path to an HTML file containing the specification of the popup.
        </p>
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
          elements, just like a normal web page. However,
          <code
            ><a href="/en-US/docs/Web/HTML/Element/script"
              >&#x3C;script>
            </a></code
          >must have
          <code><a href="/en-US/docs/Web/HTML/Element/script">src</a></code>
          attribute to load a file. Don't use
          <code
            ><a href="/en-US/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          with embedded code, because you'll get a confusing Content Violation
          Policy error.
        </p>
        <p>
          Unlike a normal web page, JavaScript running in the popup can access
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
      <td><code>default_title</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip for the button, displayed when the user moves their mouse over
          it. If the button is added to the browser's menu panel, this is also
          shown under the app icon.
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
      <td><code>theme_icons</code>
      <br />{{optional_inline}}</td>
      <td><code>Array</code></td>
      <td>
        <p>
          This property enables you to specify different icons for themes
          depending on whether Firefox detects that the theme uses dark or light
          text.
        </p>
        <p>
          If this property is present, it's an array containing at least one
          <code>ThemeIcons</code> object. A <code>ThemeIcons</code> object
          contains three mandatory properties:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            A URL pointing to an icon. This icon displays when a theme using
            dark text is active (such as the Firefox Light theme, and the
            Default theme if no default_icon is specified).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            A URL pointing to an icon. This icon displays when a theme using
            light text is active (such as the Firefox Dark theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>The size of the two icons in pixels.</dd>
        </dl>
        <p>Icons are specified as URLs relative to the manifest.json file.</p>
        <p>
          You should supply 16x16 and 32x32 (for retina display)
          <code>ThemeIcons</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Choosing icon sizes

The browser action's icon may need to be displayed in different sizes in different contexts:

- The icon is displayed in the browser toolbar. Older versions of Firefox supported the option of placing the icon in the browser's menu panel (the panel that opens when the user clicks the "hamburger" icon). In those versions of Firefox the icon in the menu panel was larger than the icon in the toolbar.
- On a high-density display like a Retina screen, icons needs to be twice as big.

If the browser can't find an icon of the right size in a given situation, it will pick the best match and scale it. Scaling may make the icon appear blurry, so it's important to choose icon sizes carefully.

There are two main approaches to this. You can supply a single icon as an SVG file, and it will be scaled correctly:

```json
"default_icon": "path/to/geo.svg"
```

Alternatively, you can supply several icons in different sizes, and the browser will pick the best match.

In Firefox:

- The default height and width for icons in the toolbar is 16 \* [`window.devicePixelRatio`](/en-US/docs/Web/API/Window/devicePixelRatio).
- The default height and width for icons in the menu panel is 32 \* [`window.devicePixelRatio`](/en-US/docs/Web/API/Window/devicePixelRatio).

So you can specify icons that match exactly, on both normal and Retina displays, by supplying three icon files, and specifying them like this:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

If Firefox can't find an exact match for the size it wants, then it will pick the smallest icon specified that's bigger than the ideal size. If all icons are smaller than the ideal size, it will pick the biggest icon specified.

## Example

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

A browser action with just an icon, specified in 2 different sizes. The extension's background scripts can receive click events when the user clicks the icon using code like this:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

A browser action with an icon, a title, and a popup. The popup will be shown when the user clicks the button.

For a simple, but complete, extension that uses a browser action, see the [walkthrough tutorial](/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser compatibility

{{Compat}}

## See also

- [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
