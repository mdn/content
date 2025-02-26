---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getBrowserInfo
---

{{AddonSidebar}}

Returns information about the browser in which the extension is installed.

This is an asynchronous function that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getBrowserInfo()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that will be fulfilled with an object which has the following properties:

- `name`
  - : string value representing the browser name, for example "Firefox".
- `vendor`
  - : string value representing the browser's vendor, for example "Mozilla".
- `version`
  - : string representing the browser's version, for example "51.0" or "51.0a2".
- `buildID`
  - : string representing the specific build of the browser, for example "20161018004015".

## Examples

Get and log the browser's name:

```js
function gotBrowserInfo(info) {
  console.log(info.name);
}

let gettingInfo = browser.runtime.getBrowserInfo();
gettingInfo.then(gotBrowserInfo);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
