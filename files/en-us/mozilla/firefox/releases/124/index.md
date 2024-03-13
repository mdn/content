---
title: Firefox 124 for developers
slug: Mozilla/Firefox/Releases/124
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 124 that affect developers. Firefox 124 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [March 19, 2024](https://whattrainisitnow.com/release/?version=124).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

- The {{cssxref("::first-letter")}} and {{cssxref("::first-line")}} CSS pseudo-elements can now be applied to the {{SVGElement("text")}} SVG element. This allows you to change the fill, stroke or font of the first letter/line of a `<text>` element using CSS, for example. ([Firefox bug 1302722](https://bugzil.la/1302722)).

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) is now supported, allowing a web application to request that the screen not be dimmed or locked while it is active. This is useful for navigation and reading applications, and other applications where the screen doesn't get regular tactile input when in use, which would otherwise keep the screen awake. The API is accessed through {{domxref("Navigator.wakeLock")}} in secure contexts, which returns a {{domxref("WakeLock")}}. This can be used to request a {{domxref("WakeLockSentinel")}} that can be used to monitor the status of the wake lock, and release it manually.
  ([Firefox bug 1874849](https://bugzil.la/1874849)).
- [`AbortSignal.any()`](/en-US/docs/Web/API/AbortSignal/any_static) is now supported, allowing a composite signal to be created that can be used to abort an operation from multiple signal sources. ([Firefox bug 1830781](https://bugzil.la/1830781)).

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

These features are newly shipped in Firefox 124 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Growable `SharedArrayBuffer`:** `javascript.options.experimental.sharedarraybuffer_growable`.

  The {{jsxref("SharedArrayBuffer")}} is now growable using the {{jsxref("SharedArrayBuffer.prototype.grow()")}} method.
  The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`SharedArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength).
  The {{jsxref("SharedArrayBuffer.prototype.growable")}} and {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can be grow, and its maximum allowed size, respectively.
  ([Firefox bug 1842773](https://bugzil.la/1842773).)

- **Resizable `ArrayBuffer`:** `javascript.options.experimental.arraybuffer_resizable`.

  The {{jsxref("ArrayBuffer")}} can now be resized using the {{jsxref("ArrayBuffer.prototype.resize()")}} method.
  The maximum allowed size of the buffer is specified using the `options.maxByteLength` parameter to the [`ArrayBuffer()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength).
  The {{jsxref("ArrayBuffer.prototype.resizable")}} and {{jsxref("ArrayBuffer.prototype.maxByteLength")}} properties indicate whether the buffer can be resized, and its maximum allowed size, respectively.
  ([Firefox bug 1842773](https://bugzil.la/1842773).)

## Older versions

{{Firefox_for_developers}}
