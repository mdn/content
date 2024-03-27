---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.imageAnimationBehavior
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to change the way the browser handles animated images, such as GIFs.

The underlying value is a string that can take one of three values:

- "normal": the default. Play animated images as normal.
- "none": don't animate images at all.
- "once": play the animation once.

## Browser compatibility

{{Compat}}

## Examples

Disable animated images:

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}
