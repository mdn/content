---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
tags:
  - API
  - Add-ons
  - Extensions
  - Property
  - Reference
  - WebExtensions
  - browserSettings
  - colorManagement
browser-compat: webextensions.api.browserSettings.colorManagement
---
{{AddonSidebar()}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object used to query and set the browser's color management features.

By default, Firefox applies color management to tagged media and defaults to sRGB for untagged media. This behavior means that some untagged media, such as that used in animation and movie production, may have undesired color corrections made to it. Use these settings to prevent that.

The object has these properties:

- `mode`
  - : A string that represents the mode used for color management. Valid values are `off`, `full`, and `tagged_only`.
- `useNativeSRGB`
  - : A boolean representing whether or not built-in sRGB color management is used.
- `useWebRenderCompositor`
  - : A boolean representing whether or not the WebRender compositor is used.

## Browser compatibility

{{Compat}}

## Examples

Set color mode to "full":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.colorManagement.mode.set({value: "full"}).
  then(logResult);
```

Get the native sRGB color management color mode:

```js
function logResult(result) {
  console.log(`Current useNativeSRGB value: ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).
  then(logResult);
```

{{WebExtExamples}}
