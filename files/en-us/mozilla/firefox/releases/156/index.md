---
title: Firefox 156 release notes for developers (Nightly)
short-title: Firefox 156 (Nightly)
slug: Mozilla/Firefox/Releases/156
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 156 that affect developers.
Firefox 156 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [September 15, 2026](https://whattrainisitnow.com/release/?version=156).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Developer Tools

- The [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) now resolves substitution functions — {{cssxref("var")}}, {{cssxref("attr")}}, and {{cssxref("env")}} — when computing the steps shown for a declaration, so a value that comes from a custom property or an attribute is traced to its source rather than shown unresolved.
  ([Firefox bug 2041622](https://bugzil.la/2041622)).
- The viewport size readout in the Inspector's highlighter no longer rounds the width and height, which previously reported a misleading size at fractional zoom levels or on high-density displays.
  ([Firefox bug 2055445](https://bugzil.la/2055445)).
- DevTools can now connect to a debugger server up to three versions older than the client, up from the previous limit. This matters when remotely debugging an older Firefox or GeckoView build.
  ([Firefox bug 2064221](https://bugzil.la/2064221)).
- Fixed the rulers highlighter remaining visible after being turned off, when the Inspector was not the selected panel.
  ([Firefox bug 2063982](https://bugzil.la/2063982)).
- Fixed <kbd>F2</kbd> invoking "Edit as HTML" on nodes that do not support it, and showing stale content from a previous edit.
  ([Firefox bug 2064213](https://bugzil.la/2064213)).
- Fixed the position of the "Device Settings" modal in [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
  ([Firefox bug 2062153](https://bugzil.la/2062153)).

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} are now measured from the origin of the outermost {{SVGElement("svg")}} element for events targeting a {{SVGElement("tspan")}}, which previously used the wrong origin.
  ([Firefox bug 2066045](https://bugzil.la/2066045)).
- The {{domxref("SVGSVGElement.currentScale")}} setter is now a no-op on a nested `<svg>` element, as required by the specification. It continues to work on the outermost `<svg>` element.
  ([Firefox bug 2063188](https://bugzil.la/2063188)).

<!-- #### Removals -->

### CSS

- The {{cssxref("text-box-trim")}} and {{cssxref("text-box-edge")}} properties now trim correctly in several cases that previously produced the wrong result:
  trimming uses the font metrics of the {{cssxref("::first-line")}} pseudo-element when one applies ([Firefox bug 2063835](https://bugzil.la/2063835)),
  the correct line is trimmed when an inline box on the last line is fragmented ([Firefox bug 2063909](https://bugzil.la/2063909)),
  and trimming on an inline box no longer removes its border and padding ([Firefox bug 2064596](https://bugzil.la/2064596)).
  Note that {{cssxref("text-box-trim")}} still has no effect in combination with {{cssxref("line-clamp")}}.
- {{cssxref("@supports")}} no longer reports support for the `::-webkit-scrollbar` pseudo-element, so `@supports selector(::-webkit-scrollbar)` is now false.
  Sites commonly used this as a signal that `::-webkit-scrollbar-thumb` could be styled, which Firefox does not implement, so claiming support led to worse styling than reporting the gap.
  Use {{cssxref("scrollbar-width")}} and {{cssxref("scrollbar-color")}} instead.
  ([Firefox bug 2062782](https://bugzil.la/2062782)).

<!-- #### Removals -->

### JavaScript

- {{jsxref("Promise.try()")}} now resolves the value returned by its callback using `PromiseResolve`, so a promise returned by the callback is passed through rather than wrapped in a new promise.
  `Promise.try(() => p)` is now the same promise as `p` when `p` is a native promise. This follows a normative change to the specification.
  ([Firefox bug 2062293](https://bugzil.la/2062293)).
- [`using`](/en-US/docs/Web/JavaScript/Reference/Statements/using) declarations can no longer be reassigned, matching the const-like semantics required by the specification. Previously such a binding could be silently mutated.
  ([Firefox bug 2040286](https://bugzil.la/2040286)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

### Security

- The `ffdhe2048` and `ffdhe3072` finite-field Diffie-Hellman groups are no longer offered by default in TLS handshakes.
  Servers that support only these groups will fail to negotiate a connection; nearly all servers support ECDHE key exchange instead.
  ([Firefox bug 1992340](https://bugzil.la/1992340)).

<!-- #### Removals -->

### APIs

- The `length` parameter of {{domxref("SubtleCrypto.deriveBits()")}} is now declared [`[EnforceRange]`](https://webidl.spec.whatwg.org/#EnforceRange), so a value that is `NaN`, `Infinity`, negative, or greater than 2<sup>32</sup>−1 throws a {{jsxref("TypeError")}}.
  Previously these values were either accepted or rejected the returned promise with an `OperationError`. This affects the `HKDF`, `PBKDF2`, `ECDH`, and `X25519` algorithms.
  ([Firefox bug 2065212](https://bugzil.la/2065212)).
- {{domxref("Scheduler.yield()")}} now inherits the enclosing task's priority and abort signal across an `await` that settles synchronously, such as an already-resolved promise, a non-promise value, or a `then()` callback on a settled promise.
  Previously the continuation lost the inherited state in these cases and silently fell back to the default `user-visible` priority.
- {{domxref("Cache.addAll()")}} now succeeds when the requests it is given differ only by a `Vary` header, instead of rejecting with an `InvalidStateError`.

#### DOM

- {{domxref("Range.deleteContents()")}} and {{domxref("Range.extractContents()")}} now operate on the DOM tree rather than the flat tree.
  As a result, a range that spans a [shadow root](/en-US/docs/Web/API/ShadowRoot) boundary now deletes and extracts the nodes the specification requires, including when the range starts or ends inside a shadow tree.
  Previously such a range could remove content from inside the shadow tree while leaving unassigned children of the host in place, and {{domxref("Range.extractContents()")}} could throw instead of returning a fragment.
  The same fix applies to {{domxref("Selection.deleteFromDocument()")}}.
  ([Firefox bug 2053997](https://bugzil.la/2053997)).

#### Media, WebRTC, and Web Audio

- The `alwaysNegotiateDataChannels` member of the configuration object passed to {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} is now supported.
  When set to `true`, the SDP produced by the connection always includes a data channel m-line, so {{domxref("RTCPeerConnection.createDataChannel()")}} can be called later without requiring a new round of negotiation.
  The member defaults to `false`, is returned by {{domxref("RTCPeerConnection.getConfiguration()")}}, and cannot be changed by {{domxref("RTCPeerConnection.setConfiguration()")}}.
  ([Firefox bug 2062561](https://bugzil.la/2062561)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed the Actions API so that `moveOverTime` timer delays no longer cause intermediate pointer move events to be skipped. ([Firefox bug 2054442](https://bugzil.la/2054442)).
- Releasing a character sequence held with a modifier key now emits the `keyup` events in reverse order, in both the classic and WebDriver BiDi endpoints.

#### WebDriver BiDi

- Fixed the `browsingContext.startScreencast` command failing with `NS_ERROR_FAILURE`. ([Firefox bug 2066782](https://bugzil.la/2066782)).
- Fixed the Mozilla-specific `moz:debugging` module to correctly handle nested pauses. ([Firefox bug 2060460](https://bugzil.la/2060460)).
- User context state is now cleaned up when a user context is removed without WebDriver BiDi being involved. ([Firefox bug 1969880](https://bugzil.la/1969880)).

#### Marionette

- The `WebDriver:GetElementTagName` command no longer capitalizes the returned tag name, so SVG elements, elements created with a namespace prefix, and custom elements now report their correct case. ([Firefox bug 2026697](https://bugzil.la/2026697)).

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 156 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  A {{domxref("CustomElementRegistry")}} can be constructed and passed to {{domxref("Element.attachShadow()")}}, so that a shadow root can define custom elements that do not clash with those defined in the global registry.
  In this release the feature is enabled by default in Nightly builds. ([Firefox bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()` support queries**: `layout.css.supports.at-rule.enabled`

  The `named-feature()` function in the {{cssxref("@supports")}} at-rule lets you test whether the browser supports a feature that has no other detectable syntax, for example `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox bug 2042977](https://bugzil.la/2042977) and [Firefox bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  The Container Timing API reports when the contents of a container element are painted, letting you measure the render time of a region of the page rather than of the whole viewport.
  ([Firefox bug 1940240](https://bugzil.la/1940240)).

- **MathML `<a>` elements**: `mathml.a.element.enabled`

  The MathML `<a>` element creates a hyperlink from MathML content, exposing the `MathMLAnchorElement` interface with the same URL component properties as HTML {{HTMLElement("a")}} elements.
  This release adds support for the `rel` and `relList` IDL attributes. ([Firefox bug 2063819](https://bugzil.la/2063819)).
