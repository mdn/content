---
title: Firefox 130 for developers
slug: Mozilla/Firefox/Releases/130
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 130 that affect developers. Firefox 130 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [September 3, 2024](https://whattrainisitnow.com/release/?version=130).

## Changes for web developers

### Developer Tools

### HTML

- The [`name`](/en-US/docs/Web/HTML/Element/details#name) attribute of the `<details>` element now allows the grouping of `<details>` elements, where only one element within a group can be open at a time. This allows you to create an exclusive accordion without using JavaScript ([Firefox bug 1856460](https://bugzil.la/1856460) and [Firefox bug 1909613](https://bugzil.la/1909613)).

#### Removals

### CSS

- The [`hyphens`](/en-US/docs/Web/CSS/hyphens) CSS property is now properly supported for Czech and Slovak languages.
  Among other things, this ensures that words will will no longer split on syllables ([Firefox bug 1908931](https://bugzil.la/1908931)).

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [X25519](/en-US/docs/Web/API/SubtleCrypto/deriveKey#x25519) digital signature algorithm is supported by the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API), and can be used in the {{domxref("SubtleCrypto")}} methods: {{domxref("SubtleCrypto.deriveKey()", "deriveKey()")}}, {{domxref("SubtleCrypto.deriveBits()", "deriveBits()")}}, {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, {{domxref("SubtleCrypto.importKey()", "importKey()")}} and {{domxref("SubtleCrypto.exportKey()", "exportKey()")}} ([Firefox bug 1904836](https://bugzil.la/1904836)).

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

- The `options` parameter of {{WebExtAPIRef("webRequest.getSecurityInfo")}} is now optional ([Firefox bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (and the deprecated {{WebExtAPIRef("extension.getURL")}}) now always prepended the extension origin to the path, without further normalization. Previously, when an absolute URL was provided, instead of a relatively URL, the absolute URL was returned. ([Firefox bug 1795082](https://bugzil.la/1795082)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 130 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Request video frame callback:** `media.rvfc.enabled`.

  The {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} method of the {{domxref('HTMLVideoElement')}} interface registers a callback function that runs when a new video frame is sent to the compositor. This enables developers to perform efficient operations on each video frame, such as video analysis, painting to a canvas, synchronization with external audio sources, and so on. The method returns a callback handle that can be passed to {{domxref('HTMLVideoElement.cancelVideoFrameCallback()')}} in order to cancel the outstanding callback request.
  Both methods are are enabled by default on the nightly build. ([Firefox bug 1800882](https://bugzil.la/1800882)).

## Older versions

{{Firefox_for_developers}}
