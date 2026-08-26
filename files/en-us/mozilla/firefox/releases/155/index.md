---
title: Firefox 155 release notes for developers (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 155 that affect developers.
Firefox 155 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 1, 2026](https://whattrainisitnow.com/release/?version=155).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Developer Tools

- The media feature emulation buttons in the [Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) are now collected into a dedicated emulation panel, which is opened using the `@` button.
  The panel also adds emulation of the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} media feature.
  ([Firefox bug 1692434](https://bugzil.la/1692434) and [Firefox bug 1477920](https://bugzil.la/1477920)).
- The [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) now opens [JSON Lines](https://jsonlines.org/) (NDJSON) documents, which are served as `application/jsonlines`, `application/x-ndjson`, or `text/jsonl`, or have a `.jsonl` file extension.
  Each line is parsed separately into its own collapsible entry, labeled with the line number it came from, and a line that fails to parse is reported inline without affecting the rest of the document.
  ([Firefox bug 2055774](https://bugzil.la/2055774), [Firefox bug 2060972](https://bugzil.la/2060972), and [Firefox bug 2060529](https://bugzil.la/2060529)).
- Added a keyboard shortcut for disabling breakpoints in the [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html).
  ([Firefox bug 1642578](https://bugzil.la/1642578)).

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("attr")}} CSS function can now be used in any CSS property, rather than only in {{cssxref("content")}}.
  This lets you drive styling from HTML attributes, such as `width: attr(data-size px)`, without using JavaScript.
  [`<attr-type>`](/en-US/docs/Web/CSS/Reference/Values/attr#attr-type) values (including unit identifiers such as `px` and `s`), [fallback values](/en-US/docs/Web/CSS/Reference/Values/attr#fallback-value), and [namespaced attributes](/en-US/docs/Web/CSS/Reference/Values/attr#namespaces) are now supported.
  You can now also use `attr()` inside [container style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries).
  ([Firefox bug 2038940](https://bugzil.la/2038940)).
- The {{cssxref("progress")}} CSS function is now supported.
  This returns a {{cssxref("number")}} representing how far a value has progressed between a start and an end value.
  The result can then be used to calculate other values, for example `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox bug 2047345](https://bugzil.la/2047345)).
- The {{cssxref("color_value/alpha", "alpha()")}} CSS function is now supported.
  It allows you to pass a color and get back the color with a different alpha (transparency) value, leaving other components of the color unchanged.
  Inside the function, you can use the `alpha` keyword to refer to the alpha channel of the original color, for example `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox bug 2059738](https://bugzil.la/2059738) and [Firefox bug 2059988](https://bugzil.la/2059988)).
- The {{cssxref("font-width")}} CSS property is now supported, along with the {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} descriptor and the `CSSStyleDeclaration.fontWidth` property.
  This is the new name for the {{cssxref("font-stretch")}} property, which continues to work as a legacy alias.
  Note that computed style enumeration now returns `font-width` rather than `font-stretch`.
  ([Firefox bug 1911075](https://bugzil.la/1911075)).

<!-- #### Removals -->

### JavaScript

- The {{jsxref("Promise.allKeyed()")}} and {{jsxref("Promise.allSettledKeyed()")}} static methods are now supported, as defined in the [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary).
  These behave like {{jsxref("Promise.all()")}} and {{jsxref("Promise.allSettled()")}}, respectively, except that they take an object of promises instead of an iterable. They fulfill with an object that has the same keys, so results can be read by name instead of by position.

  ([Firefox bug 2057270](https://bugzil.la/2057270)).

- A [module](/en-US/docs/Web/JavaScript/Guide/Modules) that fails to load because of a network error or an incorrect [MIME type](/en-US/docs/Web/HTTP/Guides/MIME_types) is no longer cached as a failure, so importing the same module specifier again can succeed once the server recovers.
  This applies to JavaScript, [JSON](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json), [CSS](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css), and [text](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) modules, loaded either statically or with [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import), in both windows and workers.
  Relatedly, [`<link rel="modulepreload">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload) now fires the {{domxref("HTMLElement/load_event", "load")}} event rather than {{domxref("HTMLElement/error_event", "error")}} for modules that are already fetched or still fetching, and a module script now loads even if an earlier `modulepreload` of the same URL failed its [integrity check](/en-US/docs/Web/Security/Defenses/Subresource_Integrity).
  ([Firefox bug 2055211](https://bugzil.la/2055211) and [Firefox bug 2052949](https://bugzil.la/2052949)).

<!-- #### Removals -->

### HTTP

- Firefox now uses [Happy Eyeballs version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) when establishing connections, racing IPv6 and IPv4 addresses so that connection setup is not delayed by an unreachable address family.
  Note that this is currently supported on some platforms only.
  ([Firefox bug 2062892](https://bugzil.la/2062892)).
- {{glossary("QUIC")}} version negotiation is now supported, allowing {{glossary("HTTP_3", "HTTP/3")}} connections to negotiate QUIC version 2.
  ([Firefox bug 2059947](https://bugzil.la/2059947)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Several [WebTransport API](/en-US/docs/Web/API/WebTransport_API) features are now supported:
  - Send groups, which let you group streams that should share bandwidth, and prioritize streams relative to each other within a group.
    These are created using {{domxref("WebTransport.createSendGroup()")}}, which returns a {{domxref("WebTransportSendGroup")}}, and are then passed in the `sendGroup` option of {{domxref("WebTransport.createBidirectionalStream()")}} and {{domxref("WebTransport.createUnidirectionalStream()")}}.
    ([Firefox bug 2007165](https://bugzil.la/2007165)).
  - The `WebTransport.exportKeyingMaterial()` method, which derives keying material from the underlying TLS connection for a given label and context, so that both endpoints can obtain the same shared secret.
    ([Firefox bug 2007200](https://bugzil.la/2007200)).
  - The {{domxref("WebTransportDatagramDuplexStream.createWritable()")}} method, which returns a {{domxref("WebTransportDatagramsWritable")}} stream for sending datagrams, with {{domxref("WebTransportDatagramsWritable.sendGroup", "sendGroup")}} and {{domxref("WebTransportDatagramsWritable.sendOrder", "sendOrder")}} properties for prioritizing it against other senders.
    ([Firefox bug 2007174](https://bugzil.la/2007174)).
  - Subprotocol negotiation. The {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor now accepts a `protocols` option listing the application protocols the client supports, which is sent to the server in the `wt-available-protocols` request header, and the protocol chosen by the server is exposed in the `WebTransport.protocol` property.
    ([Firefox bug 2007150](https://bugzil.la/2007150)).
  - The {{domxref("WebTransport.draining")}} property is supported for indicating that the server has requested that the client start graceful shutdown of the session.
    ([Firefox bug 2007160](https://bugzil.la/2007160)).
- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API) now supports the [`dual-source-blending`](/en-US/docs/Web/API/GPUSupportedFeatures#available_features) feature on desktop, which can be requested in {{domxref("GPUAdapter.requestDevice()")}}.
  This allows `src1`, `one-minus-src1`, `src1-alpha`, and `one-minus-src1-alpha` to be specified in the [`srcFactor`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) and [`dstFactor`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) properties of {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} and {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}}. The WGSL `dual_source_blending` extension is also supported.
  ([Firefox bug 1924328](https://bugzil.la/1924328)).

#### DOM

- The {{domxref("SVGAElement")}} interface now implements the [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) mixin. As a result, SVG {{SVGElement("a")}} elements expose the same URL component properties as HTML {{HTMLElement("a")}} elements: {{domxref("SVGAElement.protocol", "protocol")}}, {{domxref("SVGAElement.username", "username")}}, {{domxref("SVGAElement.password", "password")}}, {{domxref("SVGAElement.host", "host")}}, {{domxref("SVGAElement.hostname", "hostname")}}, {{domxref("SVGAElement.port", "port")}}, {{domxref("SVGAElement.pathname", "pathname")}}, {{domxref("SVGAElement.search", "search")}}, and {{domxref("SVGAElement.hash", "hash")}}. The read-only {{domxref("SVGAElement.origin", "origin")}} property is also exposed.
  ([Firefox bug 2058578](https://bugzil.la/2058578)).
- The {{domxref("SVGNumberList")}}, {{domxref("SVGPointList")}}, {{domxref("SVGStringList")}}, and {{domxref("SVGTransformList")}} interfaces now support indexed setters. This means you can replace an item in the list using bracket notation, such as `transformList[0] = newTransform`, instead of calling {{domxref("SVGTransformList.replaceItem", "replaceItem()")}}.
  The {{domxref("SVGLengthList")}} interface already supports indexed setters.
  ([Firefox bug 2059426](https://bugzil.la/2059426)).
- The {{domxref("SVGGraphicsElement.getBBox()")}} method now honors its [`options`](/en-US/docs/Web/API/SVGGraphicsElement/getBBox#options) argument, with the `fill`, `stroke`, `markers`, and `clipped` properties.
  This allows you to get a bounding box that accounts for the stroke, markers, and clipping applied to an element, rather than only its fill geometry.
  ([Firefox bug 2060873](https://bugzil.la/2060873)).
- Elements that are not rendered, such as those inside {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}}, and {{svgelement("defs")}}, now return an empty rectangle from {{domxref("Element.getBoundingClientRect()")}} and an empty list from {{domxref("Element.getClientRects()")}}, instead of reporting a box that was never painted.
  ([Firefox bug 2061646](https://bugzil.la/2061646)).

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCDataChannel/error_event", "error")}} event fired on an {{domxref("RTCDataChannel")}} object may now report [`sctp-failure`](/en-US/docs/Web/API/RTCError/errorDetail#sctp-failure) in its {{domxref("RTCError.errorDetail", "error.errorDetail")}} property if the transport is closed due to an error.
  In addition, {{domxref("RTCError")}} and {{domxref("RTCErrorEvent")}} are now available in dedicated workers (this exposure is not yet in the specification).
  ([Firefox bug 1814460](https://bugzil.la/1814460)).
- The {{domxref("RTCPeerConnection.sctp")}} property now returns an {{domxref("RTCSctpTransport")}} at the times required by the specification, including in the `have-remote-offer` signaling state, where it was previously `null`.
  The transport now also reaches the `connected` and `closed` states, and its {{domxref("RTCSctpTransport.maxChannels", "maxChannels")}} and {{domxref("RTCSctpTransport.maxMessageSize", "maxMessageSize")}} properties are populated correctly.
  ([Firefox bug 2019361](https://bugzil.la/2019361) and [Firefox bug 2056412](https://bugzil.la/2056412)).
- Two-byte RTP header extensions are now supported, so header extensions with an id of 15 or above can be negotiated instead of causing an `OperationError`.
  ([Firefox bug 2014357](https://bugzil.la/2014357)).
- The {{domxref("RTCTransportStats.selectedCandidatePairChanges", "selectedCandidatePairChanges")}} property is now reported in {{domxref("RTCTransportStats")}}.
  ([Firefox bug 2055911](https://bugzil.la/2055911)).
- The `transport` statistics returned by {{domxref("RTCPeerConnection.getStats()")}} are now correct before negotiation, in other words after {{domxref("RTCPeerConnection.setLocalDescription()", "setLocalDescription()")}} but before a remote description has been set.
  The {{domxref("RTCTransportStats.dtlsRole", "dtlsRole")}} property is now reported as `unknown` until the DTLS handshake selects a role, where previously it was not reported at all ([Firefox bug 2053296](https://bugzil.la/2053296)), and the {{domxref("RTCTransportStats.iceState", "iceState")}} property now starts as `new` rather than `checking`, which incorrectly indicated that connectivity checks were already underway ([Firefox bug 2053297](https://bugzil.la/2053297)).

<!-- #### Removals -->

### WebAssembly

- The [compact import section](https://github.com/WebAssembly/compact-import-section) binary format extension is now supported, which reduces the size of modules that have many imports.
  ([Firefox bug 2062344](https://bugzil.la/2062344)).
- The [wide arithmetic](https://github.com/WebAssembly/wide-arithmetic) proposal is now supported, adding the `i64.add128`, `i64.sub128`, `i64.mul_wide_s`, and `i64.mul_wide_u` instructions.
  These produce 128-bit results from 64-bit operands, which previously had to be emulated in code compiled to WebAssembly, such as bignum and cryptography libraries.
  ([Firefox bug 2062374](https://bugzil.la/2062374)).

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Disabled the download panel to prevent the current document from losing focus when a download begins. ([Firefox bug 2035439](https://bugzil.la/2035439)).
- Fixed the Actions API so that the `dblclick` event is fired when performing a double-click while holding down the `Ctrl` key on non-macOS platforms. ([Firefox bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Updated the Mozilla-specific `moz:debugging` module to no longer rely on the same nested event loop API as DevTools, which prevents conflicts when WebDriver BiDi and DevTools are used in parallel. ([Firefox bug 2041335](https://bugzil.la/2041335)).
- Fixed the `browsingContext.reload` command failing when used for frames. ([Firefox bug 2030909](https://bugzil.la/2030909)).
- Removed support for the `contexts` argument in the `session.unsubscribe` command. From now on, clients can unsubscribe only by event name or subscription ID. ([Firefox bug 1988723](https://bugzil.la/1988723)).

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 155 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Scroll-driven animations**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) let an animation progress with the scroll position of a scroller, or with the position of an element within its scroller, rather than with time.
  This preference covers the {{cssxref("scroll-timeline")}} and {{cssxref("view-timeline")}} properties and their longhands, including the {{cssxref("view-timeline-inset")}} property, along with the {{cssxref("animation-timeline/scroll", "scroll()")}} and {{cssxref("animation-timeline/view", "view()")}} functional notations.
  In this release the `view-timeline-inset` longhand was added to the `view-timeline` shorthand. ([Firefox bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  The [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) exposes CSS values as typed JavaScript objects rather than strings, which simplifies manipulating CSS from script. ([Firefox bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` support queries**: `layout.css.supports.at-rule.enabled`

  The [`at-rule()`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#at-rule) function in the {{cssxref("@supports")}} at-rule lets you test whether the browser supports a given CSS at-rule, for example `@supports at-rule(@scope)`. ([Firefox bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  The [Audio Session API](/en-US/docs/Web/API/Audio_Session_API) lets a site declare how its audio should behave relative to other audio playing on the device, such as whether it should mix with, duck, or interrupt other audio. ([Firefox bug 2055710](https://bugzil.la/2055710)).

- **CSS basic shapes allow `farthest-corner` and `closest-corner` keywords**: `layout.css.ellipse-corners.enabled`

  The `farthest-corner` and `closest-corner` keywords can be used for specifying the radii values of the {{cssxref("basic-shape/ellipse", "ellipse()")}} and {{cssxref("basic-shape/circle", "circle()")}} CSS basic shapes. ([Firefox bug 2037673](https://bugzil.la/2037673)).

- **Customizable `<select>` elements**: `dom.select.customizable_select.enabled`

  [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) let you fully style a {{htmlelement("select")}} element and its picker, using the {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}, and {{cssxref("::picker-icon")}} pseudo-elements together with the [`base-select`](/en-US/docs/Web/CSS/Reference/Properties/appearance#base-select) value of the {{cssxref("appearance")}} property. ([Firefox bug 1974787](https://bugzil.la/1974787)).

- **Truncating content with `line-clamp`**: `layout.css.line-clamp.enabled`

  The {{cssxref("line-clamp")}} CSS property works without the `-webkit-` vendor prefix, and now also supports the `no-ellipsis` keyword and `<string>` values for choosing what is shown where the text is clamped. ([Firefox bug 2042999](https://bugzil.la/2042999) and [Firefox bug 2043000](https://bugzil.la/2043000)).

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  A {{domxref("CustomElementRegistry")}} can be constructed and passed to {{domxref("Element.attachShadow()")}}, so that a shadow root can define custom elements that do not clash with those defined in the global registry. ([Firefox bug 2018900](https://bugzil.la/2018900)).
  This release also adds the `customelementregistry` global attribute, for selecting the registry an element is associated with from markup. ([Firefox bug 2029965](https://bugzil.la/2029965)).

- **Buffer boundary assertions in regular expressions**: `javascript.options.experimental.regexp_buffer_boundaries`

  The [TC39 RegExp buffer boundaries proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries) adds the [`\A`, `\z`, and `\Z` assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) to regular expressions. These match the start or end of the entire input regardless of whether the {{jsxref("RegExp/multiline", "m")}} flag is set. ([Firefox bug 2047706](https://bugzil.la/2047706)).

- **`border-area` value for `background-clip`**: `layout.css.background-clip.border-area.enabled`

  The [`border-area`](/en-US/docs/Web/CSS/Reference/Properties/background-clip#border-area) value of the {{cssxref("background-clip")}} CSS property clips the background to the area painted by the element's border, which makes it possible to use a gradient or image as a border. ([Firefox bug 2045230](https://bugzil.la/2045230)).
