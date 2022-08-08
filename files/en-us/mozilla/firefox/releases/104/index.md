---
title: Firefox 104 for developers
slug: Mozilla/Firefox/Releases/104
tags:
  - '104'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 104 that will affect developers. Firefox 104 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [August 23, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The methods {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}}, and {{jsxref("TypedArray.prototype.findLastIndex()")}} are now supported.
  These are used to find the value and index (respectively) of the last element in an {{jsxref("Array")}} or {{jsxref("TypedArray")}} that matches a supplied test function.
  (See {{bug(1775026)}} for more details.)

- Serialization of [native Error types](h/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) additionally includes the [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) property when used with [`window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) and [`structuredClone()`](/en-US/docs/Web/API/structuredClone) (on error types that include `stack`).
  The `stack` is not yet serialized when errors are sent using other APIs, such as [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
  (See {{bug(1774866)}} for more details.)

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

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(103)}}
