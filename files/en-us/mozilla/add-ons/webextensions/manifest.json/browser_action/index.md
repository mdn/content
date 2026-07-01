---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.browser_action
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

You must specify this key to include a browser toolbar button in your extension. When specified, you can manipulate the button programmatically using the {{WebExtAPIRef("browserAction")}} API.

If you supply a popup, then the popup is opened when the user clicks the button, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) when the user clicks the button.

## Syntax

The `browser_action` key is an object that may have any of the following properties, all optional:

- [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, defaulting to `false`.

    > [!WARNING]
    > Do not set `browser_style` to true: it isn't supported in Manifest V3, starting with Firefox 118. See [Manifest V3 migration for `browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox, the stylesheet can be seen at `chrome://browser/content/extension.css` or `chrome://browser/content/extension-mac.css` on macOS. When setting dimensions, be aware that this stylesheet sets `box-sizing: border-box` (see [box-sizing](/en-US/docs/Web/CSS/Reference/Properties/box-sizing)).

    [Browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) describes the classes you can apply to elements in the popup to get particular styles. The [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) example extension uses `browser_style` in its popup.

    > [!NOTE]
    > Setting `browser_style` to `true` prevents users from selecting text in an extension's popup or sidebar content. This is normal behavior. You can't select parts of the UI in the browser. However, you can work around this limitation to allow your users to select text in two ways:
    >
    > 1. Set `browser_style` to `false`.
    > 2. Use CSS styling on the body of your sidebar or popup's HTML to allow text selection by adding the rule `-moz-user-select` with a value of `all` or `text`.

- `default_area` {{optional_inline}}
  - : `String`. Defines the part of the browser in which the button is initially placed. This is a string that may take one of four values:
    - `"navbar"`: the button is placed in the main browser toolbar, alongside the URL bar.
    - `"menupanel"`: the button is placed in a popup panel.
    - `"tabstrip"`: the button is placed in the toolbar that contains browser tabs.
    - `"personaltoolbar"`: the button is placed in the bookmarks toolbar.

    This property is only supported in Firefox. It is optional and defaults to `"menupanel"`. Firefox remembers the `default_area` setting for an extension, even if that extension is uninstalled and subsequently reinstalled. To force the browser to acknowledge a new value, the id of the extension must be changed. An extension can't change the location of the button after installation, but the user may move it using the browser's built-in UI customization mechanism.

- `default_icon` {{optional_inline}}
  - : `Object` or `String`. Use this to specify one or more icons for the browser action. The icon is shown in the browser toolbar by default. Icons are specified as URLs relative to the manifest.json file itself.

    You can specify a single icon file by supplying a string here:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    To specify multiple icons in different sizes, specify an object here. The name of each property is the icon's height in pixels and must be convertible to an integer. The value is the URL. For example:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    You cannot specify multiple icons of the same sizes. See [Choosing icon sizes](#choosing_icon_sizes) for more guidance.

- `default_popup` {{optional_inline}}
  - : `String`. The path to an HTML file containing the specification of the popup.

    The HTML file may include CSS and JavaScript files using `<link>` and `<script>` elements, just like a normal web page. However, `<script>` elements must have an `src` attribute to load a file. Don't use `<script>` with embedded code, because you'll get a confusing Content Violation Policy error.

    Unlike a normal web page, JavaScript running in the popup can access all the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) (subject to the extension having the appropriate [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip for the button, displayed when the user moves their mouse over it. If the button is added to the browser's menu panel, this is also shown under the app icon. This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `theme_icons` {{optional_inline}}
  - : `Array`. This property enables you to specify different icons for themes depending on whether Firefox detects that the theme uses dark or light text. If present, it's an array containing at least one `ThemeIcons` object. A ThemeIcons object contains three mandatory properties:
    - `"dark"`
      - : A URL pointing to an icon. This icon displays when a theme using dark text is active (such as the Firefox Light theme and, if no `default_icon` is specified, the Default theme).
    - `"light"`
      - : A URL pointing to an icon. This icon displays when a theme using light text is active (such as the Firefox Dark theme).
    - `"size"`
      - : The size of the two icons in pixels.

    Icons are specified as URLs relative to the manifest.json file. You should supply 16x16 and 32x32 (for retina display) `ThemeIcons`.

    > [!NOTE]
    > Alternatively, you can specify an SVG icon in `default_icon` and use a media query on `prefers-color-scheme` to update the icon for light and dark themes. For example:
    >
    > ```css
    > #outside {
    >   fill: black;
    > }
    > #inside {
    >   fill: red;
    > }
    > @media (prefers-color-scheme: dark) {
    >   #outside {
    >     fill: white;
    >   }
    >   #inside {
    >     fill: black;
    >   }
    > }
    > ```
    >
    > For more information, see the [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) example.

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
