---
title: Implement a settings page
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
page-type: guide
---

{{AddonSidebar}}

A settings page gives users a way to see and change settings (sometimes also called "preferences" or "options") for the extension.

With WebExtension APIs, settings are generally stored using the [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) API.
Implementing a settings page is a three-step process:

- Write an HTML file that displays settings and lets the user change them.
- Write a script, included from the HTML file, that populates the settings page from storage and updates stored settings when the user changes them.
- Set the path to the HTML file as the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key in `manifest.json`. By doing this, the HTML document will be shown in the browser's add-on manager, alongside the extension's name and description.

> [!NOTE]
> You can also open this page programmatically using the [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) function.

## A simple extension

First, we'll write an extension that adds a blue border to every page the user visits.

Create a new directory called `settings`, then create a file called `manifest.json` inside it with the following contents:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ]
}
```

This extension instructs the browser to load a content script called "borderify.js" into all web pages the user visits.

Next, create a file called `borderify.js` inside the `settings` directory, and give it these contents:

```js
document.body.style.border = "10px solid blue";
```

This just adds a blue border to the page.

Now [install](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) and test the extension.

## Adding settings

Now let's create a settings page to allow the user to set the color of the border.

First, update `manifest.json` so it has these contents:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"],

  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com"
    }
  }
}
```

We've added three new manifest keys:

- [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
  - : This sets an HTML document to be the settings page (also called options page) for this extension.
- [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  - : We'll use the [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) API to store the settings, and we need to ask permission to use this API.
- [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : You have to include an extension id in order to save and retrieve settings from synchronized storage.

Next, because we've promised to provide `options.html`, let's create it. Create a file with that name inside the `settings` directory, and give it the following contents:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color <input type="text" id="color" name="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

This defines a {{htmlelement("form")}} with a labeled text {{htmlelement("input")}} and a submit {{htmlelement("button")}}. It also includes a script called `options.js`.

Create `options.js`, again in the `settings` directory, and give it the following contents:

```js
function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

This does two things:

- When the document has loaded, it fetches the value of `"color"` from storage using [`storage.sync.get()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get). If the value isn't set, it uses the default `"blue"`. This retrieves the values from the `sync` storage area.
- When the user submits the form by clicking Save, it stores the value of the textbox using [`storage.sync.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set). This saves the value to the `sync` storage area.

> [!NOTE]
> Specifying a separate `.js` file is required. You cannot use inline JavaScript.

You could store the settings values in local storage instead if you feel that local storage is preferable for your extension.

> [!NOTE]
> The implementation of `storage.sync` in Firefox relies on the Add-on ID. If you use `storage.sync`, you must set an ID for your extension using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in `manifest.json`, as shown in the example manifest above. See [Firefox bug 1323228](https://bugzil.la/1323228) for related information.

Finally, update `borderify.js` to read the border color from storage:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  let color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = `10px solid ${color}`;
}

const getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
```

At this point, the complete extension should look like this:

```plain
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Now:

- [reload the extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)
- load a web page
- visit "`about:addons`" to open the settings and click the Preferences button next to the extension's entry and change the border color.
- reload the web page to see the difference.

## Learn more

- [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key of `manifest.json` reference documentation
- [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage) API reference documentation
- open the settings page directly from your extension using the [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Settings page example:

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
