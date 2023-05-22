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

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

- Support for [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in the manifest keys [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) is deprecated for Manifest V3 extensions ([Firefox bug 1827910](https://bugzil.la/1827910)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.

### Other

## Older versions

{{Firefox_for_developers(113)}}
