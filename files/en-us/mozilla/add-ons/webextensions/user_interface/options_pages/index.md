---
title: Options page
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
tags:
  - WebExtensions
---
{{AddonSidebar}}

An Options page enables you to define preferences for your extension that your users can change. Users can access the options page for an extension from the browser's add-ons manager:

{{EmbedYouTube("eODy24csH5M")}}

The way users access the page, and the way it's integrated into the browser's user interface, will vary from one browser to another.

You can open the page programmatically by calling [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage "If your add-on does not have an options page, or the browser failed to create one for some other reason, runtime.lastError will be set.").

Options pages have a Content Security Policy that restricts the sources from which they can load resources, and disallows some unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). See [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for more details.

## Specifying the options page

To create an options page, write an HTML file defining the page. This page can include CSS and JavaScript files, like a normal web page. This page, from the [favourite-color](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour) example, includes a JavaScript file:

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8"/>
  </head>

  <body>
    <form>
      <label>Favorite color</label>
      <input type="text" id="color"/>
      <button type="submit">Save</button>
    </form>
    <script src="options.js"></script>
  </body>
</html>
```

JavaScript running in the page can use all the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) that the add-on has [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for. In particular, you can use the [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage "Enables WebExtensions to store and retrieve data, and listen for changes to stored items.") API to persist preferences.

Package the page's files in your extension.

You also need to include the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key in your manifest.json file, giving it the URL to the page.

```json
"options_ui": {
  "page": "options.html",
  "browser_style": true
},
```

> **Note:** **Google Chrome** and **Opera** use `chrome_style` instead of `browser_style`, so if you wish to support them, you need to add both keys.

See the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) page for **sharing options** between your options page and background or content scripts.

## Options content design

For details on how to design your options content to match the style of Firefox, see the [Photon Design System](https://design.firefox.com/photon/index.html) and [browser styles](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) documentation.

## Examples

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repository on GitHub includes the [favourite-color](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour) example which implements options page features.
