---
title: Firefox 113 for developers
slug: Mozilla/Firefox/Releases/113
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 113 that affect developers. Firefox 113 was released on May 09, 2023.

## Changes for web developers

### HTML

No notable changes.

### CSS

- The [`color()`](/en-US/docs/Web/CSS/color_value/color), [`lab()`](/en-US/docs/Web/CSS/color_value/lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch), and [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) functional notations are now supported, along with the [`forced-color-adjust`](/en-US/docs/Web/CSS/forced-color-adjust) property.
  For more information on the functional notations, see the [CSS color value](/en-US/docs/Web/CSS/color_value) documentation.
  ([Firefox bug 1352753](https://bugzil.la/1352753), [Firefox bug 1813497](https://bugzil.la/1813497), [Firefox bug 1818819](https://bugzil.la/1818819), [Firefox bug 1824526](https://bugzil.la/1824526)).
- The [`:nth-child of <selector>` syntax](/en-US/docs/Web/CSS/:nth-child#the_of_selector_syntax) allows you to target a group of children based upon the `An+B` rule that also matches a defined selector.
  See ([Firefox bug 1808229](https://bugzil.la/1808229)) for more details.
- The [`scripting`](/en-US/docs/Web/CSS/@media/scripting) media feature is now supported. See ([Firefox bug 1166581](https://bugzil.la/1166581)) for more details.
- The [`content`](/en-US/docs/Web/CSS/content) property now supports all image type including, `<gradient>`, `image-set()` and `url()`. See ([Firefox bug 1684958](https://bugzil.la/1684958)) for more details. There is currently an issue with the `::before` and `::after` pseudo selectors that means that they don't paint `<gradient>`s. See ([Firefox bug 1832901](https://bugzil.la/1832901)) for more details.

### JavaScript

No notable changes.

### APIs

- [`CanvasRenderingContext2D.reset()`](/en-US/docs/Web/API/CanvasRenderingContext2D/reset) and [`OffscreenCanvasRenderingContext2D.reset()`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) are now supported, and can be used to return the associated rendering context to its default state.
  ([Firefox bug 1709347](https://bugzil.la/1709347)).
- The [Compression Streams API](/en-US/docs/Web/API/Compression_Streams_API) is now supported.
  The interfaces provided by this API are used to compress and decompress data using the `gzip` and `deflate` formats ([Firefox bug 1823619](https://bugzil.la/1823619)).
- The deprecated and non-standard `mozImageSmoothingEnabled` property is now disabled.
  See the [`imageSmoothingEnabled`](/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) property for smoothing in scaled images ([Firefox bug 1822955](https://bugzil.la/1822955)).

#### Media, WebRTC, and Web Audio

- The [AV1 video codec](/en-US/docs/Web/Media/Formats/Video_codecs#av1) is now enabled on Android. Hardware accelerated decoding is used if supported by the device ([Firefox bug 1672276](https://bugzil.la/1672276)).
- The following WebRTC methods, properties, and dictionaries are now supported: [`RTCRtpSender.getCapabilities()`](/en-US/docs/Web/API/RTCRtpSender/getCapabilities_static), [`RTCRtpReceiver.getCapabilities()`](/en-US/docs/Web/API/RTCRtpReceiver/getCapabilities_static), [`RTCRtpSender.setStreams()`](/en-US/docs/Web/API/RTCRtpSender/setStreams), [`RTCSctpTransport`](/en-US/docs/Web/API/RTCSctpTransport) & [`RTCPeerConnection.sctp`](/en-US/docs/Web/API/RTCPeerConnection/sctp), [`RTCMediaSourceStats`](/en-US/docs/Web/API/RTCMediaSourceStats), [`RTCPeerConnection.connectionState`](/en-US/docs/Web/API/RTCPeerConnection/connectionState), and [`RTCPeerConnectionStats`](/en-US/docs/Web/API/RTCPeerConnectionStats).
  The corresponding bug reports are, respectively: [Firefox bug 1531460](https://bugzil.la/1531460), [Firefox bug 1531461](https://bugzil.la/1531461), [Firefox bug 1510802](https://bugzil.la/1510802), [Firefox bug 1278299](https://bugzil.la/1278299), [Firefox bug 1804678](https://bugzil.la/1804678), [Firefox bug 1265827](https://bugzil.la/1265827), and [Firefox bug 1531087](https://bugzil.la/1531087).

#### Removals

- The deprecated and non-standard `CanvasRenderingContext2D.mozTextStyle` attribute was permanently removed. This was previously hidden behind a preference. ([Firefox bug 1294362](https://bugzil.la/1294362)).
- The deprecated and non-standard attributes `mozRTCPeerConnection`, `mozRTCIceCandidate`, and `mozRTCSessionDescription` were permanently removed ([Firefox bug 1531812](https://bugzil.la/1531812)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for serializing `Node` objects within a Shadow DOM and the `shadowRoot` property on `Node` objects ([Firefox bug 1802137](https://bugzil.la/1802137)).
- Added support for cached responses for the `network.responseStarted` and `network.responseCompleted` events ([Firefox bug 1806802](https://bugzil.la/1806802) and [Firefox bug 1806794](https://bugzil.la/1806794)).
- Fixed an issue where the `browsingContext.domContentLoaded` and `browsingContext.load` events were missing for navigations using `document.open()` and `document.close()` ([Firefox bug 1822772](https://bugzil.la/1822772)).
- Fixed an issue where the `script.callFunction` command was throwing an `invalid argument` error if an unknown object was passed as an argument, instead of the expected `no such handle` error ([Firefox bug 1821039](https://bugzil.la/1821039)).

#### Marionette

- The `moz:useNonSpecCompliantPointerOrigin` capability is now deprecated and will be fully removed in Firefox 116 ([Firefox bug 1824911](https://bugzil.la/1824911)).
- Implemented the `WebDriver:FindElementFromShadowRoot` and `WebDriver:FindElementsFromShadowRoot` commands ([Firefox bug 1700095](https://bugzil.la/1700095)).
- Implemented the `WebDriver:GetComputedLabel` and `WebDriver:GetComputedRole` commands ([Firefox bug 1585622](https://bugzil.la/1585622)).
- Added support for the `background` parameter of the `WebDriver:Print` command ([Firefox bug 1783086](https://bugzil.la/1783086)).
- Added support for the `orientation` parameter of the `WebDriver:Print` command ([Firefox bug 1791819](https://bugzil.la/1791819)).
- Fixed an issue with `DOMTokenList` instances, which are now returned as collections instead of arbitrary objects ([Firefox bug 1823464](https://bugzil.la/1823464)).

## Changes for add-on developers

- When an extension registers multiple listeners for the same event, all the event listeners are called when the event page wakes up, instead of only the first one ([Firefox bug 1798655](https://bugzil.la/1798655)).
- Support is now provided for the {{WebExtAPIRef("declarativeNetRequest")}} API ([Firefox bug 1782685](https://bugzil.la/1782685)).
- The `gecko_android` subkey has been added to the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key. This subkey enables an extension to specify the range of Firefox for Android versions it is compatible with ([Firefox bug 1824237](https://bugzil.la/1824237)).

## Older versions

{{Firefox_for_developers(112)}}
