---
title: contentScripts.RegisteredContentScript.unregister()
slug: >-
  Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript/unregister
tags:
  - API
  - Extensions
  - Reference
  - RegisteredContentScript.unregister
  - contentScripts
browser-compat: webextensions.api.contentScripts.RegisteredContentScript.unregister
---
{{AddonSidebar()}}

Unregisters the content scripts represented by this `RegisteredContentScript` object.

## Syntax

```js
registered.unregister()
```

### Parameters

None.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

This code toggles a registered content script on a browser action click:

```js
var registered = null;

async function register() {

  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [{
      code: "document.body.innerHTML = '<h1>This page has been eaten<h1>'"
    }],
    runAt: "document_idle"
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
