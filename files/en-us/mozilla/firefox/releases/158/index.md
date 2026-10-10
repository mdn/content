---
title: Firefox 158 release notes for developers (Beta)
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 158 that affect developers.
Firefox 158 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [October 13, 2026](https://whattrainisitnow.com/release/?version=158).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Accessibility

- The [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) attribute is now supported in Firefox for Android (desktop support has been available for a long time). This ARIA state indicates whether an element is currently being modified. It allows assistive technologies to wait until changes to the content are complete before informing users of the update. For example, a screen reader can wait until a [live region](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) has finished updating before announcing the changes. ([Firefox bug 908042](https://bugzil.la/908042)).

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- [CSS typed arithmetic](/en-US/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) is now supported, which enables using functions such as {{cssxref("calc()")}} to divide two values of the same data type, even if they use different units. The resulting unitless quotients can then be converted to other data types, creating useful relationships between different values on a page. ([Firefox bug 2067411](https://bugzil.la/2067411)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

### HTTP

- The default HTTP [`Accept`](/en-US/docs/Web/HTTP/Reference/Headers/Accept) header for image requests now includes `image/jxl`, following support for the [JPEG XL](/en-US/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) image format. The new value is `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (see [List of default Accept values](/en-US/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#values_for_an_image)). ([Firefox bug 2065096](https://bugzil.la/2065096)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("WebTransport.getStats()")}} method is now supported. This method returns statistics for the transport's underlying connection and its datagrams. ([Firefox bug 2007202](https://bugzil.la/2007202)).
- The `navigate` option of the {{domxref("Notification.Notification", "Notification()")}} constructor and the {{domxref("ServiceWorkerRegistration.showNotification()")}} method is now supported. This option specifies a URL to navigate to after the user clicks the generated system notification. Once a notification is created, you can retrieve the URL from the {{domxref("Notification.navigate")}} property. ([Firefox bug 2069920](https://bugzil.la/2069920)).
- The [WebGPU](/en-US/docs/Web/API/WebGPU_API) `float32-blendable` feature is now supported (see {{domxref("GPUSupportedFeatures")}}). This allows [blending](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#blend) of {{domxref("GPUTexture")}}s that use the `r32float`, `rg32float`, or `rgba32float` [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format). ([Firefox bug 1931630](https://bugzil.la/1931630)).
- The {{domxref("PerformanceResourceTiming.deliveryType")}} property is now supported, which indicates how a resource was delivered; for example, whether it came from the cache. ([Firefox bug 1914120](https://bugzil.la/1914120)).

#### DOM

- The {{domxref("SVGGraphicsElement.getBBox()")}} method now honors the `fill` and `stroke` properties of its [`options`](/en-US/docs/Web/API/SVGGraphicsElement/getBBox#options) argument when called on {{SVGElement("tspan")}} and {{SVGElement("textPath")}} elements. This allows you to get a bounding box that includes the stroke of a text span, as you already could for a whole {{SVGElement("text")}} element. ([Firefox bug 2072680](https://bugzil.la/2072680)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Added support for setting the `camera` and `microphone` permissions with the `permissions.setPermission` command in WebDriver BiDi and the `WebDriver:SetPermission` command in Marionette. This allows tests to grant or deny access to media devices without prompting the user. ([Firefox bug 2070577](https://bugzil.la/2070577)).
- Changed the touch start and touch move tolerances to zero in automation, so that touch actions now scroll from exactly the position at which they are dispatched, without small initial movements being absorbed. ([Firefox bug 2055661](https://bugzil.la/2055661)).

#### WebDriver BiDi

- Added support for the `imageSize` argument to the `browsingContext.captureScreenshot` command, which allows clients to specify the maximum size of the resulting screenshot image. ([Firefox bug 2069002](https://bugzil.la/2069002)).
- Added support for the `destinationFolder` argument to the `browsingContext.startScreencast` command, which allows clients to choose the folder where the recorded video file is saved. ([Firefox bug 2072616](https://bugzil.la/2072616)).

#### Marionette

- Fixed the `WebDriver:TakeScreenshot` command to return an `unable to capture screen` error when the width or height of the captured image is zero. ([Firefox bug 1492357](https://bugzil.la/1492357)).

### Other

- Support for the [JPEG XL](/en-US/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) image format (`image/jxl`) is now enabled by default. JPEG XL is a royalty-free raster image format that supports lossy and lossless compression, transparency, animation, and HDR. It can also losslessly transcode existing JPEG images. ([Firefox bug 2065096](https://bugzil.la/2065096)).

## Changes for add-on developers

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} now throws an error when passed an invalid hostname, instead of returning `false`. ([Firefox bug 2066620](https://bugzil.la/2066620))
- Adds [`runtime.getVersion()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) to return the extension's version as declared in the manifest. ([Firefox bug 1992418](https://bugzil.la/1992418))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 158 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`corner-shape` properties**: `layout.css.corner-shape.enabled`

  The {{cssxref("corner-shape")}} shorthand property and its constituent longhand properties are now supported in Nightly. These properties let you customize corner shapes using one of the {{cssxref("corner-shape-value")}} keyword values or the {{cssxref("superellipse")}} function.
  ([Firefox bug 2070927](https://bugzil.la/2070927)).

- **On-device speech recognition**: `media.webspeech.recognition.enable`

  [On-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) is now supported in Nightly, on desktop only. This allows you to perform speech recognition via the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) directly in the browser, rather than relying on a cloud service.
  ([Firefox bug 2069803](https://bugzil.la/2069803)).

- **Streaming request bodies**: `dom.fetch.streaming_upload`

  Enabled in Nightly only, you can now set a {{domxref("ReadableStream")}} as a request body (for example, via the {{domxref("Request.Request", "Request()")}} constructor or the {{domxref("Window.fetch()")}} method). This allows you to stream uploads incrementally rather than having to wait for the whole body to be available.
  ([Firefox bug 1594633](https://bugzil.la/1594633)).

- **`CSSNumericValue.equals()`**: `layout.css.typed-om.enabled`

  The {{domxref("CSSNumericValue.equals()")}} method of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) is now supported in Nightly. It returns whether every value passed to it is the same as the numeric value it's called on. Values are compared as written, without converting units, so `1in` and `2.54cm` are different, and so are `calc(1px + 2px)` and `calc(2px + 1px)`. ([Firefox bug 2074503](https://bugzil.la/2074503)).
