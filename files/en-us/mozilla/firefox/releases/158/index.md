---
title: Firefox 158 release notes for developers
short-title: Firefox 158
slug: Mozilla/Firefox/Releases/158
page-type: firefox-release-notes
sidebar: firefox
---

This article provides information about the changes in Firefox 158 that affect developers.
Firefox 158 was released on [October 13, 2026](https://whattrainisitnow.com/release/?version=158).

## Changes for web developers

### Accessibility

- The [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) attribute is now supported in Firefox for Android (desktop support has been available for a long time). This ARIA state indicates whether an element is currently being modified. It allows assistive technologies to wait until changes to the content are complete before informing users of the update. For example, a screen reader can wait until a [live region](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) has finished updating before announcing the changes. ([Firefox bug 908042](https://bugzil.la/908042)).

### HTML

No notable changes.

### CSS

- [CSS typed arithmetic](/en-US/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) is now supported, which enables using functions such as {{cssxref("calc()")}} to divide two values of the same data type, even if they use different units. The resulting unitless quotients can then be converted to other data types, creating useful relationships between different values on a page. ([Firefox bug 2067411](https://bugzil.la/2067411)).

### JavaScript

No notable changes.

### HTTP

- The default HTTP [`Accept`](/en-US/docs/Web/HTTP/Reference/Headers/Accept) header for image requests now includes `image/jxl`, following support for the [JPEG XL](/en-US/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) image format. The new value is `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (see [List of default Accept values](/en-US/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#values_for_an_image)). ([Firefox bug 2065096](https://bugzil.la/2065096)).

### APIs

- The {{domxref("WebTransport.getStats()")}} method is now supported. This method returns statistics for the transport's underlying connection and its datagrams. ([Firefox bug 2007202](https://bugzil.la/2007202)).
- The {{domxref("WebTransport.supportsReliableOnly_static", "WebTransport.supportsReliableOnly")}} static property is now supported. This property indicates whether the browser supports [WebTransport](/en-US/docs/Web/API/WebTransport_API) sessions over exclusively reliable transports, such as HTTP/2. Firefox doesn't support WebTransport over HTTP/2 yet, so the property always returns `false`. ([Firefox bug 2007783](https://bugzil.la/2007783)).
- The `navigate` option of the {{domxref("Notification.Notification", "Notification()")}} constructor and the {{domxref("ServiceWorkerRegistration.showNotification()")}} method is now supported. This option specifies a URL to navigate to after the user clicks the generated system notification. Once a notification is created, you can retrieve the URL from the {{domxref("Notification.navigate")}} property. ([Firefox bug 2069920](https://bugzil.la/2069920)).
- The [WebGPU](/en-US/docs/Web/API/WebGPU_API) `float32-blendable` feature is now supported (see {{domxref("GPUSupportedFeatures")}}). This allows [blending](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#blend) of {{domxref("GPUTexture")}}s that use the `r32float`, `rg32float`, or `rgba32float` [`format`](/en-US/docs/Web/API/GPUDevice/createTexture#format). ([Firefox bug 1931630](https://bugzil.la/1931630)).
- The [WebGPU](/en-US/docs/Web/API/WebGPU_API) `clip-distances` feature is now supported on macOS (see {{domxref("GPUSupportedFeatures")}}). This allows vertex shaders to output [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL, which cut away the parts of a triangle or line that fall on one side of a custom plane, while the rest is still drawn. This is useful for effects such as reflections in water or cutaway views in CAD applications. ([Firefox bug 1931629](https://bugzil.la/1931629)).
- The [WebGL](/en-US/docs/Web/API/WebGL_API) {{domxref("EXT_polygon_offset_clamp")}} extension is now available on compatible devices. Its {{domxref("EXT_polygon_offset_clamp.polygonOffsetClampEXT()", "polygonOffsetClampEXT()")}} method works like {{domxref("WebGLRenderingContext.polygonOffset()", "polygonOffset()")}}, with an extra argument that limits the depth offset. This helps avoid holes in shadows when using shadow mapping. ([Firefox bug 1854003](https://bugzil.la/1854003)).
- The {{domxref("PerformanceResourceTiming.deliveryType")}} property is now supported, which indicates how a resource was delivered. The initial release supports the `cache` value, which indicates that the resource came from the cache. ([Firefox bug 1914120](https://bugzil.la/1914120), [Firefox bug 2071913](https://bugzil.la/2071913)).

#### DOM

- The {{domxref("SVGGraphicsElement.getBBox()")}} method now honors the `fill` and `stroke` properties of its [`options`](/en-US/docs/Web/API/SVGGraphicsElement/getBBox#options) argument when called on {{SVGElement("tspan")}} and {{SVGElement("textPath")}} elements. This allows you to get a bounding box that includes the stroke of a text span, as you already could for a whole {{SVGElement("text")}} element. ([Firefox bug 2072680](https://bugzil.la/2072680)).
- The [`javascriptURLs`](/en-US/docs/Web/API/SanitizerConfig#javascripturls) option of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) configuration and the {{domxref("Sanitizer.setJavascriptURLs()")}} method are now supported. They set whether a sanitizer removes attributes that contain [`javascript:` URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript), such as `<a href="javascript:…">`, when it's used with an unsafe method like {{domxref("Element.setHTMLUnsafe()")}}. The safe methods, like {{domxref("Element.setHTML()")}}, still always remove them. As a result, the unsafe methods now remove `javascript:` URLs when used with the default sanitizer, or with a sanitizer after {{domxref("Sanitizer.removeUnsafe()")}} is called. ([Firefox bug 2068934](https://bugzil.la/2068934)).

#### Media, WebRTC, and Web Audio

- When sending H.264 or AV1 video with [WebRTC](/en-US/docs/Web/API/WebRTC_API), Firefox now lowers the resolution and frame rate as needed to stay within the codec level negotiated with the remote peer, set by the `profile-level-id` parameter for [H.264](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs#avc_h.264) and `level-idx` for [AV1](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1). As a result, {{domxref("MediaCapabilities.encodingInfo()")}} now reports a `webrtc` configuration as supported even if its resolution and frame rate exceed the level in its `contentType`. ([Firefox bug 2013936](https://bugzil.la/2013936)).

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

## Experimental web features

These features are shipping in Firefox 158 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`random()` CSS function**: `layout.css.random.enabled`

  The {{cssxref("random")}} CSS function generates a random value within a specified range, optionally limiting the possible values to step size intervals between those limits. An optional `<random-key>` parameter controls which `random()` functions share a random value, for example across elements or properties.
  ([Firefox bug 2071165](https://bugzil.la/2071165)).

- **`corner-shape` properties**: `layout.css.corner-shape.enabled`

  The {{cssxref("corner-shape")}} shorthand property and its constituent longhand properties are now supported in Nightly. These properties let you customize corner shapes using one of the {{cssxref("corner-shape-value")}} keyword values or the {{cssxref("superellipse")}} function.
  ([Firefox bug 2070927](https://bugzil.la/2070927)).

- **Deferred module evaluation** (Nightly): `javascript.options.experimental.defer_import_eval`

  The [`import defer`](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer) declaration and the [`import.defer()`](/en-US/docs/Web/JavaScript/Reference/Operators/import/defer) syntax are now available in Nightly behind a preference. They load a module and its dependencies up front, but run the module's code only when one of its exports is first accessed, so modules that aren't needed right away don't slow down startup. Modules that use top-level `await` still run right away. ([Firefox bug 1952263](https://bugzil.la/1952263)).

- **On-device speech recognition**: `media.webspeech.recognition.enable`

  [On-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) is now supported in Nightly, on desktop only. This allows you to perform speech recognition via the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) directly in the browser, rather than relying on a cloud service.
  ([Firefox bug 2069803](https://bugzil.la/2069803)).

- **Speculation rules: moderate eagerness**: `dom.speculation_rules.enabled`

  The [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) provides a mechanism to improve performance for future navigations by specifying which resources should be prefetched or prerendered based on factors such as user behavior towards links. Firefox 158 Nightly adds support for [`moderate`](/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate) eagerness: a matching prefetch starts once the user hovers over a link for a short time (200 milliseconds by default).
  ([Firefox bug 2061013](https://bugzil.la/2061013)).

- **Streaming request bodies**: `dom.fetch.streaming_upload`

  Enabled in Nightly only, you can now set a {{domxref("ReadableStream")}} as a request body (for example, via the {{domxref("Request.Request", "Request()")}} constructor or the {{domxref("Window.fetch()")}} method). This allows you to stream uploads incrementally rather than having to wait for the whole body to be available.
  ([Firefox bug 1594633](https://bugzil.la/1594633)).

- **`CSSNumericValue.equals()`**: `layout.css.typed-om.enabled`

  The {{domxref("CSSNumericValue.equals()")}} method of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) is now supported in Nightly. It returns `true` if every value passed to it is the same as the numeric value it's called on, and `false` otherwise. Values are compared as written, without converting units. For example, `1in` and `2.54cm` are different, as are `calc(1px + 2px)` and `calc(2px + 1px)`. ([Firefox bug 2074503](https://bugzil.la/2074503)).
