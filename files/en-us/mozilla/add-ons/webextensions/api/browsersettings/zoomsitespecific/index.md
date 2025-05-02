---
title: browserSettings.zoomSiteSpecific
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/zoomSiteSpecific
page-type: webextension-api-property
browser-compat: webextensions.api.browserSettings.zoomSiteSpecific
---

{{AddonSidebar}}

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object whose underlying value is a boolean.

This property sets the [configuration setting](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) `browser.zoom.siteSpecific`, which controls how zoom settings are applied to sites and tabs.

If `browser.zoom.siteSpecific` is true, zoom operations apply to all pages from the same site so that:

- when a page loads, if there is a zoom level for that site it is applied to the page otherwise the global default zoom level is applied.
- when the zoom level for a page changes, the zoom levels of other pages from the site in other tabs are also changed.

If `browser.zoom.siteSpecific` is set false, zoom operations apply to the active tab only so that:

- when a new tab opens, the global default zoom level is applied.
- when the zoom level in a tab changes, it persists across page loads and does not affect the zoom level in any other tab.

When Firefox is installed, `browser.zoom.siteSpecific` is true.

If [`privacy.websites.resistFingerprinting`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) is true, this setting has no effect and zoom is set on a per-tab basis.

## Browser compatibility

{{Compat}}

## Examples

Set the setting to `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.zoomSiteSpecific.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
