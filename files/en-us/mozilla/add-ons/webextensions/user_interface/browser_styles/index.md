---
title: Browser styles
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles
page-type: guide
browser-compat:
  - webextensions.manifest.action
  - webextensions.manifest.browser_action
  - webextensions.manifest.page_action
  - webextensions.manifest.sidebar_action
  - webextensions.manifest.options_ui
---

{{AddonSidebar}}

Your extension can include user interface elements - browser and page action [popups](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups), [sidebars](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), and [options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) - that are specified by:

1. creating an HTML file defining the structure of the UI element.
2. adding a manifest.json key ([`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), or [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)) pointing to that HTML file.

You can style these elements to match the browser's style. The manifest.json keys include an optional property to help with this: `browser_style`. If this is included and set to `true`, your document gets one or more extra stylesheets that help make it look consistent with the browser's UI and with other extensions that use the `browser_style` property.

> [!NOTE]
> Support for `browser_style` in Manifest V3 is deprecated. Starting from Firefox 115, the default value of `options_ui.browser_style` and `sidebar_action.browser_style` changes from `true` to `false`. In Firefox 118, `"browser_style": true` will no longer be supported in Manifest V3 extensions.
> If your Manifest V3 extension depends on the `"browser_style": true` styles, follow the [Manifest V3 migration guide for `browser_style`](#manifest_v3_migration).
> See ([Firefox bug 1827910](https://bugzil.la/1827910)) for more information.
> If you want to apply the Firefox style to your extension, see the [Firefox Style Guide](https://acorn.firefox.com/latest).

When considering whether to use `browser_style: true`, test your extension with various themes (built-in or from AMO) to ensure that the extension UI behaves the way you expect it to.

> [!WARNING]
> When `browser_style: true` is included in your web extension's manifest, text selection in your extension's UI is disabled except in input controls. If this causes a problem, include `browser_style:false` instead.

> **Note:** **Google Chrome** and **Opera** use `chrome_style` instead of `browser_style` in Manifest V2. So for cross-browser extensions you need to add both keys. `chrome_style` is not available in Manifest V3.

In Firefox, the stylesheet can be seen at `chrome://browser/content/extension.css`. The extra stylesheet at `chrome://browser/content/extension-mac.css` is also included on macOS.

Most styles are automatically applied, but some elements require you to add the non-standard `browser-style` class to get their styling, as detailed in the table below:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/HTML/Element/button">&#x3C;button></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;button class="browser-style">Click me&#x3C;/button></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            ><a href="/en-US/docs/Web/HTML/Element/select"
              >&#x3C;select></a
            ></code
          >
        </p>
      </td>
      <td>
        <pre class="brush: html">
&#x3C;select class="browser-style" name="select">
  &#x3C;option value="value1">Value 1&#x3C;/option>
  &#x3C;option value="value2" selected>Value 2&#x3C;/option>
  &#x3C;option value="value3">Value 3&#x3C;/option>
&#x3C;/select></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/HTML/Element/textarea"
            >&#x3C;textarea></a
          ></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;textarea class="browser-style">Write here&#x3C;/textarea></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        Parent of an
        <code
          ><a href="/en-US/docs/Web/HTML/Element/input">&#x3C;input></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;div class="browser-style">
  &#x3C;input type="radio" id="op1" name="choices" value="op1"/>
  &#x3C;label for="op1">Option 1&#x3C;/label>

&#x3C;input type="radio" id="op2" name="choices" value="op2"/>
&#x3C;label for="op2">Option 2&#x3C;/label>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

## Manifest V3 migration

As `browser_style` is a deprecated in Manifest V3 you may want to remove support when you migrate your Manifest V2 extensions. Using `options_ui`, as an example, you would you take these steps to remove support for `browser_style`:

- Set `options_ui/browser_style` to `false`.
- Does the appearance of your extensions UI change?
  - If the appearance doesn't change, remove the key.
  - If the appearance changes, experiment to determine what dependency exist and add the relevant properties in the extension's stylesheet. The styles are most likely to cause layout changes are `box-sizing:`, `border-box`, and `display: flex`.
    If you cannot identify the dependencies, include the content of [extension.css](https://searchfox.org/mozilla-central/source/browser/components/extensions/extension.css) with the extension and delete all parts that aren't relevant, usually the `body` and `body *` blocks as most extensions don't use the `browser-style` class.

## Firefox panel components (legacy)

> [!NOTE]
> This feature is non-standard and only works in Firefox.

The `chrome://browser/content/extension.css` stylesheet also contains the styles for the legacy Firefox panel components (navigation components).

The [legacy Firefox Style Guide](https://firefoxux.github.io/StyleGuide/#/navigation) documents proper usage.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>
        <pre class="brush: html">
&#x3C;header class="panel-section panel-section-header">
  &#x3C;div class="icon-section-header">&#x3C;img src="image.svg"/>&#x3C;/div>
  &#x3C;div class="text-section-header">Header&#x3C;/div>
&#x3C;/header></pre
        >
      </td>
    </tr>
    <tr>
      <td>Footer</td>
      <td>
        <pre class="brush: html">
&#x3C;footer class="panel-section panel-section-footer">
  &#x3C;button class="panel-section-footer-button">Cancel&#x3C;/button>
  &#x3C;div class="panel-section-footer-separator">&#x3C;/div>
  &#x3C;button class="panel-section-footer-button default">Confirm&#x3C;/button>
&#x3C;/footer></pre
        >
      </td>
    </tr>
    <tr>
      <td>Tabs</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-tabs">
  &#x3C;button class="panel-section-tabs-button selected">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Form</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-formElements">
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="name01">Label:&#x3C;/label>
    &#x3C;input type="text" value="Name" id="name01" />
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="picker01">Label:&#x3C;/label>
    &#x3C;select id="picker01">
      &#x3C;option value="value1" selected="true">Dropdown&#x3C;/option>
      &#x3C;option value="value2">List Item&#x3C;/option>
      &#x3C;option value="value3">List Item&#x3C;/option>
    &#x3C;/select>
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="placeholder01">Label:&#x3C;/label>
    &#x3C;input type="text" placeholder="Placeholder" id="placeholder01" />
    &#x3C;button name="expander" class="expander">&#x3C;/button>
  &#x3C;/div>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Menu</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-list">
  &#x3C;div class="panel-list-item">
    &#x3C;div class="icon">&#x3C;/div>
    &#x3C;div class="text">List Item&#x3C;/div>
    &#x3C;div class="text-shortcut">Ctrl-L&#x3C;/div>
  &#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item disabled">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">Disabled List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

### Example

#### HTML

```html
<header class="panel-section panel-section-header">
  <div class="icon-section-header"><!-- An image goes here. --></div>
  <div class="text-section-header">Header</div>
</header>

<div class="panel-section panel-section-list">
  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut">Ctrl-L</div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item disabled">
    <div class="icon"></div>
    <div class="text">Disabled List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>
</div>

<footer class="panel-section panel-section-footer">
  <button class="panel-section-footer-button">Cancel</button>
  <div class="panel-section-footer-separator"></div>
  <button class="panel-section-footer-button default">Confirm</button>
</footer>
```

```css hidden
/* Global */
html,
body {
  background: white;
  box-sizing: border-box;
  color: #222426;
  cursor: default;
  display: flex;
  flex-direction: column;
  font: caption;
  margin: 0;
  padding: 0;
  -moz-user-select: none;
}

body * {
  box-sizing: border-box;
  text-align: start;
}

button.panel-section-footer-button,
button.panel-section-tabs-button {
  color: inherit;
  background-color: unset;
  font: inherit;
  text-shadow: inherit;
  appearance: none;
  border: none;
}

/* Panel Section */
.panel-section {
  display: flex;
  flex-direction: row;
}

.panel-section-separator {
  background-color: rgb(0 0 0 / 0.15);
  min-height: 1px;
}

/* Panel Section - Header */
.panel-section-header {
  border-bottom: 1px solid rgb(0 0 0 / 0.15);
  padding: 16px;
}

.panel-section-header > .icon-section-header {
  background-position: center center;
  background-repeat: no-repeat;
  height: 32px;
  margin-right: 16px;
  position: relative;
  width: 32px;
}

.panel-section-header > .text-section-header {
  align-self: center;
  font-size: 1.385em;
  font-weight: lighter;
}

/* Panel Section - List */
.panel-section-list {
  flex-direction: column;
  padding: 4px 0;
}

.panel-list-item {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  padding: 0 16px;
}

.panel-list-item:not(.disabled):hover {
  background-color: rgb(0 0 0 / 0.06);
  border-bottom: 1px solid rgb(0 0 0 / 0.1);
  border-top: 1px solid rgb(0 0 0 / 0.1);
}

.panel-list-item:not(.disabled):hover:active {
  background-color: rgb(0 0 0 / 0.1);
}

.panel-list-item.disabled {
  color: #999;
}

.panel-list-item > .icon {
  flex-grow: 0;
  flex-shrink: 0;
}

.panel-list-item > .text {
  flex-grow: 10;
}

.panel-list-item > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
  justify-content: flex-end;
}

.panel-section-list .panel-section-separator {
  margin: 4px 0;
}

/* Panel Section - Footer */
.panel-section-footer {
  background-color: rgb(0 0 0 / 0.06);
  border-top: 1px solid rgb(0 0 0 / 0.15);
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  height: 41px;
  margin-top: -1px;
  padding: 0;
}

.panel-section-footer-button {
  flex: 1 1 auto;
  height: 100%;
  margin: 0 -1px;
  padding: 12px;
  text-align: center;
}

.panel-section-footer-button > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
}

.panel-section-footer-button:hover {
  background-color: rgb(0 0 0 / 0.06);
}

.panel-section-footer-button:hover:active {
  background-color: rgb(0 0 0 / 0.1);
}

.panel-section-footer-button.default {
  background-color: #0996f8;
  box-shadow: 0 1px 0 #0670cc inset;
  color: #fff;
}

.panel-section-footer-button.default:hover {
  background-color: #0670cc;
  box-shadow: 0 1px 0 #005bab inset;
}

.panel-section-footer-button.default:hover:active {
  background-color: #005bab;
  box-shadow: 0 1px 0 #004480 inset;
}

.panel-section-footer-separator {
  background-color: rgb(0 0 0 / 0.1);
  width: 1px;
  z-index: 99;
}
```

```css hidden
/* Example specific – not part of chrome://browser/content/extension.css */
body {
  background: #fcfcfc;
  background-clip: padding-box;
  border: 1px solid rgb(24 26 27 / 0.2);
  box-shadow:
    0 3px 5px rgb(24 26 27 / 0.1),
    0 0 7px rgb(24 26 27 / 0.1);
  box-sizing: content-box;
  margin: 2em auto 0.5em;
  width: 384px;
}

html {
  min-height: 100vh;
}

html > body {
  margin: auto;
}

.icon-section-header {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGZpbGw9IiMzNjM5NTkiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjwvc3ZnPg==");
}
```

#### Result

{{EmbedLiveSample("Example","640","360")}}

## Browser compatibility

{{Compat}}
