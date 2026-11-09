---
title: Firefox 160 release notes for developers (Beta)
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 160 that affect developers.
Firefox 160 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [November 10, 2026](https://whattrainisitnow.com/release/?version=160).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The `::-webkit-input-placeholder` pseudo-element is now supported as an alias of {{cssxref("::placeholder")}}, for compatibility with websites that use it to style the placeholder text of {{htmlelement("input")}} and {{htmlelement("textarea")}} elements. ([Firefox bug 2083700](https://bugzil.la/2083700)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor now accepts the [`headers`](/en-US/docs/Web/API/WebTransport/WebTransport#headers) option, which adds custom HTTP headers to the [extended `CONNECT`](/en-US/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) request that sets up the session.
  The headers that the server sends in its response are available in the {{domxref("WebTransport.responseHeaders")}} property once the session is established.
  ([Firefox bug 2081470](https://bugzil.la/2081470), [Firefox bug 2033220](https://bugzil.la/2033220)).
- The {{domxref("WebTransport.exportKeyingMaterial()")}} method has been updated to match the current specification.
  The `context` argument is now required, and a new [`outputLength`](/en-US/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) argument specifies the number of bytes of keying material to derive.
  Previously, the method always returned 32 bytes.
  Code that omits either argument will need to be updated.
  ([Firefox bug 2079306](https://bugzil.la/2079306)).
- The {{domxref("WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams", "incomingMaxBufferedDatagrams")}} and {{domxref("WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams", "outgoingMaxBufferedDatagrams")}} properties of the {{domxref("WebTransportDatagramDuplexStream")}} interface are now supported.
  They replace the non-standard {{domxref("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}} and {{domxref("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}} properties, which have been removed.
  These properties represent the maximum number of incoming datagrams that can be queued while waiting to be read, and the maximum number of outgoing datagrams that can be queued for sending before backpressure is applied.
  ([Firefox bug 2023587](https://bugzil.la/2023587)).
- The {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor now supports the [`datagramsReadableType`](/en-US/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype) option.
  Setting it to `bytes` makes the transport's stream of incoming datagrams, {{domxref("WebTransportDatagramDuplexStream.readable", "transport.datagrams.readable")}}, a [readable byte stream](/en-US/docs/Web/API/Streams_API/Using_readable_byte_streams).
  You can then use a {{domxref("ReadableStreamBYOBReader")}} to read each datagram into a buffer that you supply and reuse, instead of receiving a new {{jsxref("Uint8Array")}} for every datagram.
  ([Firefox bug 2007755](https://bugzil.la/2007755)).
- The {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} and {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} properties of the `WebTransport` interface are now supported, along with the corresponding `options` properties that can be used to set them in the {{domxref("WebTransport/WebTransport", "WebTransport()")}} constructor.
  These properties represent the maximum number of incoming unidirectional and bidirectional streams, respectively, that the application expects the server to have open at the same time.
  ([Firefox bug 2007825](https://bugzil.la/2007825)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- {{WebExtAPIRef("runtime.PlatformInfo")}} now returns `arch` as `arm64` for ARM64 platforms. Previously, it returned `aarch64`. This aligns the value returned by Firefox for ARM64 platforms with Chrome. ([Firefox bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 160 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Render blocking**: `dom.element.blocking.enabled`

  The `blocking="render"` attribute and value is now supported for the {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}}, and {{HTMLElement("style",,"blocking")}} HTML elements. This allows for rendering to be blocked until the element's stylesheet has loaded or its script has run, including for elements that don't block rendering by default, such as scripts and stylesheets added with JavaScript. ([Firefox bug 1751383](https://bugzil.la/1751383)).

- **Lazy loading for video and audio**: `media.lazy_loading.enabled`

  The `loading` attribute of the {{HTMLElement("video", "", "#loading")}} and {{HTMLElement("audio", "", "#loading")}} elements, and the {{domxref("HTMLMediaElement.loading")}} property that reflects it, are now supported. With `loading="lazy"`, the browser defers loading the media, loading the video's poster image, and starting`autoplay` playback until the element is near the viewport. ([Firefox bug 2005072](https://bugzil.la/2005072)).

- **Speculation rules: `Speculation-Rules` header**: `dom.speculation_rules.enabled`

  Support for the {{httpheader("Speculation-Rules")}} HTTP response header is enabled by default in Nightly. It lists the URLs of external files containing [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API), as an alternative to an inline [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules) element. The header applies to top-level documents only, and each file must be served with the `application/speculationrules+json` MIME type. ([Firefox bug 2020709](https://bugzil.la/2020709)).

- **`CSSNumericValue` arithmetic methods**: `layout.css.typed-om.enabled`

  The {{domxref("CSSNumericValue.add()", "add()")}}, {{domxref("CSSNumericValue.sub()", "sub()")}}, {{domxref("CSSNumericValue.mul()", "mul()")}}, and {{domxref("CSSNumericValue.div()", "div()")}} methods of the {{domxref("CSSNumericValue")}} interface in the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) are now supported in Nightly.
  They add, subtract, multiply, or divide numeric values, respectively; for example, `CSS.px(10).add(CSS.px(5))` adds two pixel values.
  The result is a {{domxref("CSSUnitValue")}} (`15px` in this example) when it can be simplified to a single unit, or a math expression such as a {{domxref("CSSMathSum")}} when it can't be simplified (for example, when adding `px` to `%`). ([Firefox bug 2081689](https://bugzil.la/2081689)).

- **Canvas 2D color space**: `gfx.canvas.colorspace.enabled`

  The [`colorSpace`](/en-US/docs/Web/API/HTMLCanvasElement/getContext#colorspace) option of {{domxref("HTMLCanvasElement.getContext()")}} and {{domxref("OffscreenCanvas.getContext()")}} is now supported for `2d` contexts. {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} returns the selected color space. Image data also has a color space: the {{domxref("ImageData.colorSpace")}} property returns it. The `colorSpace` setting of the {{domxref("ImageData.ImageData", "ImageData()")}} constructor and the {{domxref("CanvasRenderingContext2D.createImageData()", "createImageData()")}} and {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} methods sets it. The supported values are `"srgb"` and `"display-p3"`. Pixel data isn't converted between color spaces yet, so `getImageData()` returns the same pixels whichever color space is requested. ([Firefox bug 1841326](https://bugzil.la/1841326)).
