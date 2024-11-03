---
title: Firefox 133 for developers
slug: Mozilla/Firefox/Releases/133
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 133 that affect developers. Firefox 133 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [November 26, 2024](https://whattrainisitnow.com/release/?version=133).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- Support for {{jsxref("Uint8Array")}} methods to ease conversions between {{glossary("base64")}}- and hex-encoded strings and byte arrays. ([Firefox bug 1917885](https://bugzil.la/1917885) and [Firefox bug 1862220](https://bugzil.la/1862220)).

  The new methods include:

  - {{jsxref("Uint8Array.fromBase64()")}} and {{jsxref("Uint8Array.fromHex()")}} static methods for constructing a new `Uint8Array` object from a base64- and hex-encoded string, respectively.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, and {{jsxref("Uint8Array.prototype.setFromHex()")}} instance methods for populating an existing `Uint8Array` object with bytes from a base64- or hex-encoded string.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} and {{jsxref("Uint8Array.prototype.toHex()")}} instance methods, which return a base64- and hex- encoded string from the data in a `Uint8Array` object.

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref('WorkerNavigator.permissions')}} property is now supported, allowing the [Permissions API](/en-US/docs/Web/API/Permissions_API) to be used in [workers](/en-US/docs/Web/API/Web_Workers_API) as well as the main window thread. ([Firefox bug 1193373](https://bugzil.la/1193373)).
- The {{domxref("EventSource")}} interface to handle [server-sent events](/en-US/docs/Web/API/Server-sent_events) is now supported in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1681218](https://bugzil.la/1681218)).
- The {{domxref("ImageDecoder")}}, {{domxref("ImageTrackList")}}, and {{domxref("ImageTrack")}} interfaces of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) are now supported, enabling the decoding images from the main and worker threads. ([Firefox bug 1923755](https://bugzil.la/1923755)).

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

These features are newly shipped in Firefox 133 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
