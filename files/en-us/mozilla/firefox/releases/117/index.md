---
title: Firefox 117 for developers
slug: Mozilla/Firefox/Releases/117
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 117 that affect developers. Firefox 117 was released on August 29, 2023.

## Changes for web developers

### HTML

No notable changes.

### CSS

- The [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting) module is now supported in Firefox, along with the the [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector). This allows developers to write nested CSS, which helps with the readability, modularity, and maintainability of CSS stylesheets. It also potentially helps reduce CSS file size, decreasing download sizes. ([Firefox bug 1835066](https://bugzil.la/1835066), [Firefox bug 1840781](https://bugzil.la/1840781))

- The [`math-style`](/en-US/docs/Web/CSS/math-style) and [`math-depth`](/en-US/docs/Web/CSS/math-depth) properties are now supported, as well as the `math` value for the [`font-size`](/en-US/docs/Web/CSS/font-size#values) property ([Firefox bug 1845516](https://bugzil.la/1845516)).

- The [`contain-intrinsic-size: auto none`](/en-US/docs/Web/CSS/contain-intrinsic-size) syntax is now supported, which allows for using the last-remembered size of an element if possible and falls back to `contain-intrinsic-size: none` otherwise.
  This is useful for grid and multi-column layouts to allow elements to be laid out as though they have no contents instead of 0px height ([Firefox bug 1835813](https://bugzil.la/1835813)).

### JavaScript

No notable changes.

### SVG

- Inline SVGs now support `<script>` elements with `type="module"`, `defer`, and `async` attributes.
  This allows SVGs to use modern JavaScript features, including ES modules, and to load scripts asynchronously ([Firefox bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Fixed a bug where the [Content-Security-Policy](/en-US/docs/Web/HTTP/CSP) `'strict-dynamic'` source expression was not being enforced in `default-src` directives.
  The behavior now matches the specification where `default-src` directive values are used as a fallback when `script-src` is not provided ([Firefox bug 1313937](https://bugzil.la/1313937)).

- The `Range` header is now a [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header) when the value is a single byte range (e.g., `bytes=100-200`).
  This allows the `Range` header to be used in cross-origin requests without triggering a preflight request, which is useful for requesting media and resuming downloads ([Firefox bug 1733981](https://bugzil.la/1733981)).

### APIs

- The {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} method can now be used to get the 2D context attributes being used by the browser ([Firefox bug 1517786](https://bugzil.la/1517786)).
- The {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} static member is now supported, allowing developers to construct a readable stream from any iterable or async iterable object ([Firefox bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) are now supported, allowing web applications to modify incoming and outgoing WebRTC encoded video and audio frames using a {{DOMxRef("TransformStream")}} running in a worker.
  The supported interfaces include: {{domxref("RTCRtpScriptTransform")}}, {{domxref("RTCRtpScriptTransformer")}}, {{domxref("RTCRtpSender.transform")}}, {{domxref("RTCRtpReceiver.transform")}}, {{domxref("RTCEncodedVideoFrame")}}, and {{domxref("RTCEncodedAudioFrame")}}, and the {{domxref("RTCTransformEvent")}} and worker {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event ([Firefox bug 1631263](https://bugzil.la/1631263)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added the `browser.close` command that allows users to terminate all WebDriver sessions and close the browser ([Firefox bug 1829334](https://bugzil.la/1829334)).
- Added the `browsingContext.setViewport` command that allows users to change the dimensions of a top level browsing context ([Firefox bug 1838664](https://bugzil.la/1838664)).
- Added the `browsingContext.fragmentNavigated` event which is emitted for same-document navigations ([Firefox bug 1841039](https://bugzil.la/1841039)).
- Added support for the `background` argument of the `browsingContext.create` command, which will force the new context to be created in the background. This argument is optional and defaults to `false`, meaning that `browsingContext.create` now opens new contexts in the foreground by default ([Firefox bug 1843507](https://bugzil.la/1843507)).
- Added support for the `clip` argument of the `browsingContext.captureScreenshot` command, which allows to restrict the screenshot either to a specific area or to an element. When clipping to an element, you can optionally scroll the element into view before taking the screenshot ([Firefox bug 1840998](https://bugzil.la/1840998)).
- All commands and events related to a navigation will now provide a `navigation` id, which is a `UUID` identifying a specific navigation. This property is available in the `browsingContext.navigate` response, in the `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` events, as well as in all `network` events created for a navigation request ([Firefox bug 1763122](https://bugzil.la/1763122), [Firefox bug 1789484](https://bugzil.la/1789484), [Firefox bug 1805405](https://bugzil.la/1805405)).
- `headers` and `cookies` in `network` events are now serialized as `network.BytesValue`, which will provide a better support for non-UTF8 values ([Firefox bug 1842619](https://bugzil.la/1842619)).
- The `browsingContext.create` command will now wait until the created context has a valid size ([Firefox bug 1847044](https://bugzil.la/1847044)).

### Developer tools

- The Network Monitor now shows information about proxied requests, including the proxy address, the proxy status, and the proxy HTTP version in the [Headers tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox bug 1707192](https://bugzil.la/1707192)).

- The area selected by the [Measuring Tool](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) can now be resized and moved using keyboard shortcuts.
  Pressing the arrow keys moves the selected area, while pressing <kbd>Ctrl</kbd> + arrow keys (or <kbd>Cmd</kbd> + arrow keys on a Mac) resizes the selected area.
  Holding down the <kbd>Shift</kbd> key accelerates the moving and resizing actions when using these key combinations ([Firefox bug 1262782](https://bugzil.la/1262782)).

- Properties that are not supported in highlight pseudo-elements ([`::highlight()`](/en-US/docs/Web/CSS/::highlight), [`::target-text`](/en-US/docs/Web/CSS/::target-text), [`::spelling-error`](/en-US/docs/Web/CSS/::spelling-error), [`::grammar-error`](/en-US/docs/Web/CSS/::grammar-error), and [`::selection`](/en-US/docs/Web/CSS/::selection)) are now reported in the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) CSS rules panel ([Firefox bug 1842157](https://bugzil.la/1842157)).

## Changes for add-on developers

No notable changes.

## Older versions

{{Firefox_for_developers(116)}}
