---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
page-type: webextension-api-function
browser-compat: webextensions.api.management.install
---

{{AddonSidebar()}}

Installs and enables a theme extension from the given URL.

This API requires the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and will only work with signed themes.

This is an asynchronous function that returns a [Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.management.install(options)
```

### Parameters

- options
  - : An object that includes the URL of the XPI file of the theme at [addons.mozilla.org](https://addons.mozilla.org) and an optional a hash of the XPI file, using sha256 or stronger.

### Return value

A [Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object, containing the `ExtensionID` defined for the theme in manifest.json.

## Browser compatibility

{{Compat}}

## Examples

Cycle through a list of themes:

```js
"use strict";

const themes = [
  "https://addons.mozilla.org/firefox/downloads/file/1063216/insightscare-1.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/1063419/orange_roses-1.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/1062647/sticktoyourguns-2.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/0/bad_url.xpi",
];

let current;

async function install(url) {
  try {
    current = url;
    const { id } = await browser.management.install({ url });
    console.log(`Theme installed: ${id}`);
  } catch (e) {
    console.error(`Installation failed: ${e}`);
  }
}

browser.browserAction.onClicked.addListener(() => {
  const id = themes.indexOf(current);
  install(themes[(id + 1) % themes.length]);
});

for (const url of themes) {
  browser.menus.create({
    title: url,
    onclick: () => install(url),
    contexts: ["browser_action"],
  });
}
```

{{WebExtExamples}}
