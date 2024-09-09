---
title: Options page
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
page-type: guide
---

{{AddonSidebar}}

An Options page enables you to define preferences for your extension that your users can change. Users can access the options page for an extension from the browser's add-ons manager:

{{EmbedYouTube("eODy24csH5M")}}

The way users access the page, and the way it's integrated into the browser's user interface, will vary from one browser to another.

You can open the page programmatically by calling [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage).

Options pages have a Content Security Policy that restricts the sources from which they can load resources, and disallows some unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). See [Content Security Policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for more details.

## Specifying the options page

To create an options page, write an HTML file defining the page. This page can include CSS and JavaScript files, like a normal web page. This page, from the [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) example, includes a JavaScript file:

```html
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="dark light" />
  </head>

  <body>
    <form>
      <label for="color">Favorite color</label>
      <input type="text" id="color" name="color" />
      <button type="submit">Save</button>
    </form>
    <script src="options.js"></script>
  </body>
</html>
```

Note the use of `<meta name="color-scheme" content="dark light">`. This enables automatic switching between light and dark themes in the embedded UI based on the user's browser preferences.

JavaScript running in the page can use all the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) that the add-on has [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for. In particular, you can use the [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) API to persist preferences.

Package the page's files in your extension.

You also need to include the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key in your manifest.json file, giving it the URL to the page.

```json
"options_ui": {
  "page": "options.html"
},
```

See the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) page for **sharing options** between your options page and background or content scripts.

## Options content design

For details on how to design your options content to match the style of Firefox, see the [Acorn Design System](https://acorn.firefox.com/latest).

## Examples

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repository on GitHub includes the [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) example which implements options page features.
