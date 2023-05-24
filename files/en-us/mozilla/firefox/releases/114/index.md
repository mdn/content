---
title: Firefox 114 for developers
slug: Mozilla/Firefox/Releases/114
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 114 that affect developers. Firefox 114 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [June 06, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [-webkit-text-security](/en-US/Web/CSS/-webkit-text-security) property that lets you replace characters with shapes is now supported. You can now control the rendering of text security using this property. ([Firefox bug 1826629](https://bugzil.la/1826629)).

#### Removals

### JavaScript

- [Workers](/en-US/docs/Web/API/Web_Workers_API) now support loading [ECMAScript modules](/en-US/docs/Web/JavaScript/Guide/Modules).
  You can load modules into workers by specifying the `{type: "module"}` option in the [`Worker`](/en-US/docs/Web/API/Worker/Worker#type) and [`SharedWorker` constructors](/en-US/docs/Web/API/SharedWorker/SharedWorker#type).
  Worker scripts can also statically or dynamically import modules using [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), respectively ([Firefox bug 1812591](https://bugzil.la/1812591)).
- [Worklets](/en-US/docs/Web/API/Worklet) can now use [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) to statically import [ECMAscript/JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) ([Firefox bug 1812591](https://bugzil.la/1812591)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- [`Window.print()`](/en-US/docs/Web/API/Window/print) now opens a print dialog on Firefox for Android, allowing the current document to be printed ([Firefox bug 1809922](https://bugzil.la/1809922)).
- The [WebTransport API](/en-US/docs/Web/API/WebTransport_API) is now supported, which includes the following interfaces: [`WebTransport`](/en-US/docs/Web/API/WebTransport), [`WebTransportBidirectionalStream`](/en-US/docs/Web/API/WebTransportBidirectionalStream), [`WebTransportDatagramDuplexStream`](/en-US/docs/Web/API/WebTransportDatagramDuplexStream), [`WebTransportReceiveStream`](/en-US/docs/Web/API/WebTransportReceiveStream), [`WebTransportDatagramDuplexStream`](/en-US/docs/Web/API/WebTransportDatagramDuplexStream) and [`WebTransportError`](/en-US/docs/Web/API/WebTransportError).
  For more information see [Firefox bug 1692754](https://bugzil.la/16927541), [Firefox bug 1818754](https://bugzil.la/1818754), and [Firefox bug 1791835](https://bugzil.la/1791835).

- [`CSSImportRule.supportsText`](/en-US/docs/Web/API/CSSImportRule/supportsText) can now be used for getting any `supports()` conditions that were specified when using the {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule) ([Firefox bug 1829590](https://bugzil.la/1829590)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The deprecated and non-standard `mozImageSmoothingEnabled` property is permanently removed.
  See the [`imageSmoothingEnabled`](/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) property for smoothing in scaled images ([Firefox bug 1228850](https://bugzil.la/1228850)).

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

- Support for [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in the manifest keys [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) is deprecated for Manifest V3 extensions ([Firefox bug 1827910](https://bugzil.la/1827910)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.

### Other

## Older versions

{{Firefox_for_developers(113)}}
