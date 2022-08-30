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

This article provides information about the changes in Firefox 104 that will affect developers. Firefox 104 was released on August 23, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

### JavaScript

- The methods {{jsxref("Array.prototype.findLast()")}}, {{jsxref("Array.prototype.findLastIndex()")}}, {{jsxref("TypedArray.prototype.findLast()")}}, and {{jsxref("TypedArray.prototype.findLastIndex()")}} are now supported.
  These are used to find the value and index (respectively) of the last element in an {{jsxref("Array")}} or {{jsxref("TypedArray")}} that matches a supplied test function.
  (See {{bug(1775026)}} for more details.)

- Serialization of [native Error types](h/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) additionally includes the [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) property when used with [`window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) and [`structuredClone()`](/en-US/docs/Web/API/structuredClone) (on error types that include `stack`).
  The `stack` is not yet serialized when errors are sent using other APIs, such as [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage)
  (See {{bug(1774866)}} for more details.)

### HTTP

No notable changes.

### Security

No notable changes.

### APIs

#### DOM

- [`HTMLElement.focus()`](/en-US/docs/Web/API/HTMLElement/focus) now supports the parameter [`option.focusVisible`](/en-US/docs/Web/API/HTMLElement/focus#focusvisible), which can be used force a browser to display visual indication after the element is focused.
  Note that browsers may automatically provide visual indication on focused elements if the implementation determines that it will improve accessibility.
  (See {{bug(1765083)}} for more details.)

#### Media, WebRTC, and Web Audio

#### SVG

- The [`SVGStyleElement.disabled`](/en-US/docs/Web/API/SVGStyleElement/disabled) property can now be used to disable or enable an SVG style element, or to check its disabled state.
  This mirrors the behavior of [`HTMLStyleElement.disabled`](/en-US/docs/Web/API/HTMLStyleElement/disabled).
  (See {{bug(1712623)}} for more details.)

#### Removals

- The `options` argument to the [`IDBFactory.open()`](/en-US/docs/Web/API/IDBFactory/open) method has been removed.
  This this option provided a non-standard, and Firefox-only way to make the indicated database persistent.
  The option was previously deprecated, and users that need this functionality should already have migrated to {{domxref("StorageManager.persist()")}}.
  (See {{bug(1354500)}} for more details.)

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for `source` to the `log.entryAdded` event ({{bug(1770792)}}).
- Updated the `url` sent for `browsingContext.contextCreated` events to be `about:blank` for newly opened browsing contexts ({{bug(1775141)}}).

#### Marionette

- Improved stability and performance when minimizing or restoring windows on Linux ({{bug(1780212)}}).
- Added support for `touch` actions ({{bug(1543337)}}).

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(103)}}
