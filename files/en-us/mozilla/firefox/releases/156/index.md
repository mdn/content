---
title: Firefox 156 release notes for developers (Stable)
short-title: Firefox 156 (Stable)
slug: Mozilla/Firefox/Releases/156
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 156 that affect developers.
Firefox 156 was released on [September 15, 2026](https://whattrainisitnow.com/release/?version=156).

## Changes for web developers

### Developer Tools

- The viewport size readout in the Inspector's highlighter no longer rounds the width and height, which previously reported a misleading size at fractional zoom levels or on high-density displays.
  ([Firefox bug 2055445](https://bugzil.la/2055445)).
- DevTools can now connect to a debugger server up to three versions older than the client, up from the previous limit. This matters when remotely debugging an older Firefox or GeckoView build.
  ([Firefox bug 2064221](https://bugzil.la/2064221)).

### HTML

No notable changes.

### SVG

- {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} are now measured from the origin of the outermost {{SVGElement("svg")}} element for events targeting a {{SVGElement("tspan")}}, which previously used the wrong origin.
  ([Firefox bug 2066045](https://bugzil.la/2066045)).
- The {{domxref("SVGSVGElement.currentScale")}} setter is now a no-op on a nested `<svg>` element, as required by the specification. It continues to work on the outermost `<svg>` element.
  ([Firefox bug 2063188](https://bugzil.la/2063188)).

### CSS

- The non-standard {{cssxref("::-webkit-scrollbar")}} pseudo-element is now reported as unsupported in {{cssxref("@supports")}} conditions on every site, so `@supports selector(::-webkit-scrollbar)` returns `false` and `@supports not (selector(::-webkit-scrollbar))` returns `true`. This includes the sites listed in the `layout.css.fake-webkit-scrollbar.enabled-domains` preference introduced in [Firefox 155](/en-US/docs/Mozilla/Firefox/Releases/155#css). Firefox still acts on `::-webkit-scrollbar` rules on those sites, but it no longer reports the pseudo-element as supported. Sites use this check as a signal that the whole `::-webkit-scrollbar-*` family is supported, but Firefox doesn't doesn't support the other pseudo-elements in this family. Sites that guard their standard scrollbar styles behind `@supports not (selector(::-webkit-scrollbar))` now get those styles applied in Firefox. ([Firefox bug 2062782](https://bugzil.la/2062782)).
- The {{cssxref("text-box-trim")}} and {{cssxref("text-box-edge")}} properties now trim correctly in several cases that previously produced the wrong result:
  trimming uses the font metrics of the {{cssxref("::first-line")}} pseudo-element when one applies ([Firefox bug 2063835](https://bugzil.la/2063835)),
  the correct line is trimmed when an inline box on the last line is fragmented ([Firefox bug 2063909](https://bugzil.la/2063909)),
  and trimming on an inline box no longer removes its border and padding ([Firefox bug 2064596](https://bugzil.la/2064596)).
  Note that {{cssxref("text-box-trim")}} still has no effect in combination with {{cssxref("line-clamp")}}.

### JavaScript

- {{jsxref("Promise.try()")}} now resolves the value returned by its callback using `PromiseResolve`, so a promise returned by the callback is passed through rather than wrapped in a new promise.
  `Promise.try(() => p)` is now the same promise as `p` when `p` is a native promise. This follows a normative change to the specification.
  ([Firefox bug 2062293](https://bugzil.la/2062293)).
- [`using`](/en-US/docs/Web/JavaScript/Reference/Statements/using) declarations can no longer be reassigned, matching the const-like semantics required by the specification. Previously such a binding could be silently mutated.
  ([Firefox bug 2040286](https://bugzil.la/2040286)).

### Security

- The `ffdhe2048` and `ffdhe3072` finite-field Diffie-Hellman groups are no longer offered by default in TLS handshakes.
  Servers that support only these groups will fail to negotiate a connection; nearly all servers support ECDHE key exchange instead.
  ([Firefox bug 1992340](https://bugzil.la/1992340)).

### APIs

- {{domxref("SubtleCrypto.deriveBits()")}} now throws a {{jsxref("TypeError")}} if the passed `length` parameter is `NaN`, `Infinity`, negative, or greater than 2<sup>32</sup>−1.
  Previously these values were either accepted or rejected the returned promise with an `OperationError`.
  ([Firefox bug 2065212](https://bugzil.la/2065212)).
- {{domxref("Scheduler.yield()")}} now inherits the enclosing task's priority and abort signal across an `await` that settles synchronously, such as an already-resolved promise, a non-promise value, or a `then()` callback on a settled promise.
  Previously the continuation lost the inherited state in these cases and silently fell back to the default `user-visible` priority.

#### DOM

- {{domxref("Range.deleteContents()")}} and {{domxref("Range.extractContents()")}} now operate on the DOM tree rather than the flat tree.
  As a result, a range that spans a [shadow root](/en-US/docs/Web/API/ShadowRoot) boundary now deletes and extracts the nodes the specification requires, including when the range starts or ends inside a shadow tree.
  Previously such a range could remove content from inside the shadow tree while leaving unassigned children of the host in place, and {{domxref("Range.extractContents()")}} could throw instead of returning a fragment.
  The same fix applies to {{domxref("Selection.deleteFromDocument()")}}.
  ([Firefox bug 2053997](https://bugzil.la/2053997)).

#### Media, WebRTC, and Web Audio

- The `alwaysNegotiateDataChannels` member of the configuration object passed to the {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} constructor is now supported. When set to `true`, the SDP produced by the connection always includes a data channel m-line, so {{domxref("RTCPeerConnection.createDataChannel()")}} can be called later without requiring a new round of negotiation. The member defaults to `false`, is returned by {{domxref("RTCPeerConnection.getConfiguration()")}}, and cannot be changed by {{domxref("RTCPeerConnection.setConfiguration()")}}. ([Firefox bug 2062561](https://bugzil.la/2062561)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Marionette and RemoteAgent now both use a custom exit code (69) when their server fails to start. ([Firefox bug 2040974](https://bugzil.la/2040974)).
- Improved the timing of intermediary events for actions with a duration greater than 0, to be closer to a 16ms interval and avoid inflating the overall duration even if the content process is overloaded. ([Firefox bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` will now safely pick a valid download folder and should no longer throw if the default download folder (`DfltDwnld`) is not available. ([Firefox bug 2066782](https://bugzil.la/2066782)).
- Fixed the Mozilla-specific `moz:debugging` module to correctly handle nested pauses. ([Firefox bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- The `WebDriver:GetElementTagName` command was updated to match the [latest specification changes](https://github.com/w3c/webdriver/pull/1968) and now returns the DOM element's [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name). This command used to always lowercase the return value. In practice, this change is backward compatible for HTML elements, but it is a non-backward-compatible change for elements with a case-sensitive qualified name, such as SVG elements.([Firefox bug 2026697](https://bugzil.la/2026697)).

## Changes for add-on developers

- The [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key adds the `backgrounds_area` property. This property enables a theme to specify where its background images and gradients are drawn. Setting it to `"window"` draws them across the whole browser window, while `"top_toolbars"` restricts them to the horizontal toolbars at the top of the window. When `backgrounds_area` is omitted or set to `"auto"`, Firefox chooses the area based on `properties.additional_backgrounds_alignment`. ([Firefox bug 2059526](https://bugzil.la/2059526))

## Experimental web features

These features are shipping in Firefox 156 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Scoped custom element registries** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Scoped custom element registries](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) are now supported, so that a shadow root can define custom elements that do not clash with those defined in the global registry.
  This release enables the feature by default in Nightly builds. ([Firefox bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()` support queries**: `layout.css.supports.at-rule.enabled`

  The `named-feature()` function in the {{cssxref("@supports")}} at-rule lets you test whether the browser supports a feature that has no other detectable syntax, for example `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox bug 2042977](https://bugzil.la/2042977) and [Firefox bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  The Container Timing API reports when the contents of a container element are painted, letting you measure the render time of a region of the page rather than of the whole viewport.
  ([Firefox bug 1940240](https://bugzil.la/1940240)).

- **MathML `<a>` elements**: `mathml.a.element.enabled`

  The MathML `<a>` element creates a hyperlink from MathML content, exposing the `MathMLAnchorElement` interface with the same URL component properties as HTML {{HTMLElement("a")}} elements.
  This release adds support for the `rel` and `relList` IDL attributes. ([Firefox bug 2063819](https://bugzil.la/2063819)).
