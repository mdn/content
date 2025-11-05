---
title: Your first extension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
page-type: guide
sidebar: addonsidebar
---

This article walks through creating an extension for Firefox, from start to finish. The extension adds a red border to any pages loaded from `mozilla.org` or any of its subdomains.

The source code for this example is available on GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Writing the extension

In a suitable location, such as the `Documents` directory, create a directory named `borderify`, then navigate to it. You can do this using your computer's file explorer or command line terminal.

Understanding how to use the command line terminal is a handy skill, as it helps with your more advanced extension development. If you need to get started with terminal, check out the [Command line crash course](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Using the terminal, create the directory like this:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Using a suitable [text editor](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors), create a file called "manifest.json" under the "borderify" directory. Give it this content:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "@borderifyexample.mozilla",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]

}
```

- The first three keys—[`manifest_version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), and [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)—are mandatory and contain basic metadata for the extension.
- [`description`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) is optional, but recommended: it's displayed in the add-ons manager (`about:addons`).
- [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) is optional, but recommended: it enables you to specify an icon for the extension.
- [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) is required. The `gecko` property provides addons.mozilla.org and Firefox with extra configuration information about the extension:
  - [`id`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) defines a unique identifier for the extension. This ID is needed before an extension can be published on addons.mozilla.org (AMO).
  - [`data_collection_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) provides information on whether the extension collects and transmits personally identifiable information. This example doesn't collect or transmit any data.

So far, these `manifest.json` keys have been providing information about the extension. The next key, [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), starts to define the extension's functionality. This key tells Firefox to load a script into web pages whose URL matches a specific pattern. In this case, the extension is asking Firefox to load a script called "borderify.js" into all HTTP or HTTPS pages served from "mozilla.org" or any of its subdomains.

- [Learn more about content scripts.](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Learn more about match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

### icons/border-48.png

Firefox identifies extensions by an icon in various parts of its interface, such as the toolbar and add-ons manager (`about:addons`). Firefox uses a default icon unless you provide one. As you move into publishing extensions, an icon is a useful way for users to identify your extension.

The example manifest.json tells Firefox that an icon is at "icons/border-48.png".

Create the "icons" directory under the "borderify" directory. Save an icon there named "border-48.png". You could use [the one from the example](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png), which is taken from the Google Material Design iconset, and is used under the terms of the [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) license.

If you choose to supply an icon, it should be 48x48 pixels. You could also supply a 96x96 pixel icon, for high-resolution displays, and if you do this, it's specified as the `96` property of the `icons` object in manifest.json, like this:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternatively, you can supply an SVG file, which is automatically scaled by Firefox as needed. (Tip: If you're using SVG and your icon includes text, use your SVG editor's "convert to path" tool to flatten the text, so that it scales with a consistent size and position.)

- [Learn more about specifying icons.](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Finally, create a file called "borderify.js" under the "borderify" directory. Give it this content:

```js
document.body.style.border = "5px solid red";
```

Firefox loads this script into the pages that match the pattern given in the `content_scripts` manifest.json key. The script has direct access to the document, just as scripts loaded by the page itself do.

- [Learn more about content scripts.](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Trying it out

First, double-check that you have the right files in the right places:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installing

In Firefox, open the [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) page, click **This Firefox**, then **Load Temporary Add-on**, and select any file in your extension's directory.

The extension now installs, and remains installed until you restart Firefox.

Alternatively, you can run the extension from the command line using the [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) tool.

### Testing

> [!NOTE]
> By default [extensions don't work in private browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). If you want to test this extension in private browsing open `about:addons`, click on the extension, and select **Allow** under Run in Private Windows.

Now, visit a page under `https://www.mozilla.org/en-US/`, and you see a red border round the page.

![Border displayed on mozilla.org](border_on_mozilla_org.png)

> [!NOTE]
> However, it doesn't work on `addons.mozilla.org` because content scripts are blocked on that domain.

Try experimenting: edit the content script to change the color of the border, or do something else to the page content. Save the content script, then reload the extension's files by clicking **Reload** in `about:debugging`. You see the changes right away.

- [Learn more about loading extensions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Packaging and publishing

For other people to use your extension, you need to package it and submit it to Mozilla for signing. To learn more about that, see ["Publishing your extension"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## What's next?

Now you've had an introduction to the process of developing a WebExtension for Firefox:

- [write a more complex extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [read more about the anatomy of an extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [explore the extension examples](/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [find out what you need to develop, test, and publish your extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [take your learning further](/en-US/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
