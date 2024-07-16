---
title: Firefox 129 for developers
slug: Mozilla/Firefox/Releases/129
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 129 that affect developers. Firefox 129 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [August 6, 2024](https://whattrainisitnow.com/release/?version=129).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- {{jsxref("Float16Array")}} typed arrays are now supported, along with {{jsxref("DataView.prototype.getFloat16()")}} and {{jsxref("DataView.prototype.setFloat16()")}} for reading and setting `Float16Array` values from a {{jsxref("DataView")}}, and the {{jsxref("Math.f16round()")}} static method, which can be used to round numbers to 16 bits. The new type is useful for sharing data with a GPU, in particular for use cases where it makes sense to trade off precision for memory consumption. ([Firefox bug 1903329](https://bugzil.la/1903329).)

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 129 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
