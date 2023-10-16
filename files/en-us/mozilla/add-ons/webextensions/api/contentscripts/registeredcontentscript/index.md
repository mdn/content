---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
page-type: webextension-api-type
browser-compat: webextensions.api.contentScripts.RegisteredContentScript
---

{{AddonSidebar()}}

A `RegisteredContentScript` is returned by a call to {{WebExtAPIRef("contentScripts.register()")}} and represents the content scripts registered in that call.

It defines a single function {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister", "unregister()")}}, which can be used to unregister the content scripts.

> **Note:** If this object is destroyed (for example because it goes out of scope) then the content scripts will be unregistered automatically, so you should keep a reference to this object for as long as you want the content scripts to stay registered.

## Methods

- {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}
  - : Unregisters the content scripts represented by this object.

## Browser compatibility

{{Compat}}

## Examples

This code toggles a registered content script on a browser action click:

```js
let registered = null;

async function register() {
  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [
      {
        code: "document.body.innerHTML = '<h1>This page has been eaten<h1>'",
      },
    ],
    runAt: "document_idle",
  });
}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}
