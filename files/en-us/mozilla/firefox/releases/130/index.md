---
title: Firefox 130 for developers
slug: Mozilla/Firefox/Releases/130
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 130 that affect developers. Firefox 130 was released on [September 3, 2024](https://whattrainisitnow.com/release/?version=130).

## Changes for web developers

### HTML

- The [`name`](/en-US/docs/Web/HTML/Element/details#name) attribute of the `<details>` element now allows the grouping of `<details>` elements, where only one element within a group can be open at a time. This allows you to create an exclusive accordion without using JavaScript ([Firefox bug 1856460](https://bugzil.la/1856460) and [Firefox bug 1909613](https://bugzil.la/1909613)).
- The [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) and [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) [global attributes](/en-US/docs/Web/HTML/Global_attributes) now have improved inheritance, including how they work with [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox bug 1876163](https://bugzil.la/1876163)).

### CSS

- The [`hyphens`](/en-US/docs/Web/CSS/hyphens) CSS property is now properly supported for Czech and Slovak languages.
  Among other things, this ensures that words will no longer split on syllables ([Firefox bug 1908931](https://bugzil.la/1908931)).

### APIs

- The [X25519](/en-US/docs/Web/API/SubtleCrypto/deriveKey#x25519) digital signature algorithm is supported by the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API), and can be used in the {{domxref("SubtleCrypto")}} methods: {{domxref("SubtleCrypto.deriveKey()", "deriveKey()")}}, {{domxref("SubtleCrypto.deriveBits()", "deriveBits()")}}, {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, {{domxref("SubtleCrypto.importKey()", "importKey()")}} and {{domxref("SubtleCrypto.exportKey()", "exportKey()")}} ([Firefox bug 1904836](https://bugzil.la/1904836)).
- The [Web Codecs API](/en-US/docs/Web/API/WebCodecs_API) is supported on desktop releases, giving web developers low-level access to the individual frames of a video stream and chunks of audio. Android support is enabled in the Nightly release. The new interfaces include: [`VideoEncoder`](/en-US/docs/Web/API/VideoEncoder), [`VideoDecoder`](/en-US/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/en-US/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/en-US/docs/Web/API/VideoFrame), [`VideoColorSpace`](/en-US/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/en-US/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/en-US/docs/Web/API/EncodedAudioChunk), [`AudioData`](/en-US/docs/Web/API/AudioData), and [`AudioDecoder`](/en-US/docs/Web/API/AudioDecoder). ([Firefox bug 1908572](https://bugzil.la/1908572)).

#### Removals

- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} and [`WebGL2RenderingContext.drawingBufferColorSpace`](/en-US/docs/Web/API/WebGL2RenderingContext) were prematurely released (without an an implementation) in [Firefox 127](/en-US/docs/Mozilla/Firefox/Releases/127), and have been removed ([Firefox bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### General

- System add-ons are now completely disabled by default ([Firefox bug 1904310](https://bugzil.la/1904310)).
- Fixed an issue with the internal prompt listener to correctly select the appropriate user prompt on Android ([Firefox bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Added support for the `browsingContext.navigationFailed` event, which is triggered when a navigation attempt fails to complete ([Firefox bug 1846601](https://bugzil.la/1846601)).
- The `network.setCacheBehavior` command now allows defining the network cache behavior both globally and for individual navigables simultaneously ([Firefox bug 1905307](https://bugzil.la/1905307)).
- The `network.responseCompleted` and `network.fetchError`events are now emitted when the actual request stops, eliminating a race condition where `browsingContext.domContentLoaded` and `browsingContext.load` events were emitted before the `network.responseCompleted` event ([Firefox bug 1882803](https://bugzil.la/1882803)).
- Data URLs (e.g., for background images or fetch requests) are now fully supported across all network events ([Firefox bug 1904343](https://bugzil.la/1904343)).
- Fixed an issue where the `network.authRequired` event was sent out multiple times with each call to the `network.continueWithAuth` command ([Firefox bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Fixed an issue in `WebDriver:ElementSendKeys` so that it only scrolls the element into view if it is not already visible ([Firefox bug 1906095](https://bugzil.la/1906095)).

## Changes for add-on developers

- The `options` parameter of {{WebExtAPIRef("webRequest.getSecurityInfo")}} is now optional ([Firefox bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (and the deprecated {{WebExtAPIRef("extension.getURL")}}) now always prepended the extension origin to the path, without further normalization. Previously, when an absolute URL was provided, instead of a relatively URL, the absolute URL was returned. ([Firefox bug 1795082](https://bugzil.la/1795082)).

## Experimental web features

These features are newly shipped in Firefox 130 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Request video frame callback:** `media.rvfc.enabled`.

  The {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} method of the {{domxref('HTMLVideoElement')}} interface registers a callback function that runs when a new video frame is sent to the compositor. This enables developers to perform efficient operations on each video frame, such as video analysis, painting to a canvas, synchronization with external audio sources, and so on. The method returns a callback handle that can be passed to {{domxref('HTMLVideoElement.cancelVideoFrameCallback()')}} in order to cancel the outstanding callback request.
  Both methods are enabled by default on the nightly build. ([Firefox bug 1800882](https://bugzil.la/1800882)).

- **CSP violation reports using the Reporting API:** `dom.reporting.enabled`.

  The [Reporting API](/en-US/docs/Web/API/Reporting_API) can be used for reporting [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violations.
  This includes support for {{domxref('Report')}} objects that have a `type` property with the value `"csp-violation"` and `body` property that is an instance of the {{domxref('CSPViolationReportBody')}} interface, the {{CSP("report-to")}} directive of the {{httpheader('Content-Security-Policy')}} HTTP response header, and the {{httpheader('Reporting-Endpoints')}} and {{httpheader('Report-To')}} HTTP response headers.
  This feature is disabled by default.
  ([Firefox bug 1391243](https://bugzil.la/1391243)).

## Older versions

{{Firefox_for_developers}}
