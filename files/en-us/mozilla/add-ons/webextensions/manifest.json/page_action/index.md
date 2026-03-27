---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.page_action
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
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

A page action is an icon that your extension adds inside the browser's URL bar.

Your extension may optionally also supply an associated popup whose content is specified using HTML, CSS, and JavaScript.

You must specify this key to include a page action in your extension. When specified, you can manipulate the button programmatically using the {{WebExtAPIRef("pageAction")}} API.

If you supply a popup, then the popup is opened when the user clicks the icon, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) when the user clicks the icon.

Page actions are like browser actions, except that they are associated with particular web pages rather than with the browser as a whole. If an action is only relevant on certain pages, then you should use a page action and display it only on relevant pages. If an action is relevant to all pages or to the browser itself, use a browser action.

While browser actions are displayed by default, page actions are hidden by default. They can be shown for a particular tab by calling {{WebExtAPIRef("pageAction.show()")}}, passing in the tab's `id`. You can also change this default behavior using the `show_matches` property.

## Syntax

The `page_action` key is an object that may have any of three properties, all optional:

- [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Defaults to `false`.

    > [!WARNING]
    > Do not set `browser_style` to true: it's not supported in Manifest V3, starting from Firefox 118. See [Manifest V3 migration for `browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox, the stylesheet can be seen at `chrome://browser/content/extension.css` or `chrome://browser/content/extension-mac.css` on macOS. The [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) example extension uses `browser_style` in its popup.

- `default_icon` {{optional_inline}}
  - : `Object` or `String`. Use this to specify an icon for the action.

    It's recommended that you supply two icons here (19×19 pixels and 38×38 pixels), and specify them in an object with properties named `"19"` and `"38"`, like this:

    ```json
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }
    ```

    If you do this, then the browser will pick the right size icon for the screen's pixel density.

    You can just supply a string here:

    ```json
    "default_icon": "geo.png"
    ```

    If you do this, then the icon will be scaled to fit the toolbar, and may appear blurry.

    You can use an SVG icon. You can also have the icon adapt to light and dark themes using a media query on `prefers-color-scheme`. For example:

    ```css
    #outside {
      fill: black;
    }
    #inside {
      fill: red;
    }
    @media (prefers-color-scheme: dark) {
      #outside {
        fill: white;
      }
      #inside {
        fill: black;
      }
    }
    ```

    For more information, see the [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) example.

    > [!NOTE]
    > An implicit CSS filter applies to SVG icons in dark UI themes. This filter will be deactivated in Firefox Desktop version 152 ([Firefox bug 2016509](https://bugzil.la/2016509)). You can test SVG icons with the CSS filter disabled by creating a boolean `about:config` preference called `extensions.webextensions.pageActionIconDarkModeFilter.enabled` and setting it to `false`. The filter is deactivated by default in Firefox Desktop Nightly from 149.

- `default_popup` {{optional_inline}}
  - : `String`. The path to an HTML file containing the specification of the popup. The HTML file may include CSS and JavaScript files using `<link>` and `<script>` elements, just like a normal web page.

    However, don't use `<script>` with embedded code, because you'll get a Content Violation Policy error. Instead, `<script>` must use the `src` attribute to load a separate script file.

    Unlike a normal web page, JavaScript running in the popup can access all the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) (subject to the extension having the appropriate [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip for the icon, displayed when the user moves their mouse over it. This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `hide_matches` {{optional_inline}}
  - : `Array` of `MatchPattern` except `<all_urls>`. Hide the page action by default for pages whose URLs match any of the given [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

    Note that page actions are always hidden by default unless `show_matches` is given. Therefore, it only makes sense to include this property if `show_matches` is also given, and will override the patterns in `show_matches`.

    For example, consider a value like:

    ```json
    "page_action": {
      "show_matches": ["https://*.mozilla.org/*"],
      "hide_matches": ["https://developer.mozilla.org/*"]
    }
    ```

    This shows the page action by default for all HTTPS URLs under the `"mozilla.org"` domain, except for pages under `"developer.mozilla.org"`.

- `show_matches` {{optional_inline}}
  - : `Array` of `MatchPattern`. Show the page action by default for pages whose URLs match any of the given patterns. See also `hide_matches`.

- `pinned` {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional. Defaults to `true`. Controls whether or not the page action should appear in the location bar by default when the user installs the extension. This property is no longer supported since Firefox 89.

## Example

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

A page action with just an icon, specified in 2 different sizes. The extension's background scripts can receive click events when the user clicks the icon using code like this:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

A page action with an icon, a title, and a popup. The popup will be shown when the user clicks the icon.

## Browser compatibility

{{Compat}}

## See also

- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
