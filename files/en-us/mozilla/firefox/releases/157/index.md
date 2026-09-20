---
title: Firefox 157 release notes for developers (Beta)
short-title: Firefox 157 (Beta)
slug: Mozilla/Firefox/Releases/157
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 157 that affect developers.
Firefox 157 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 29, 2026](https://whattrainisitnow.com/release/?version=157).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Developer Tools

- The Network Monitor now displays [JSON Lines](https://jsonlines.org/) (JSONL/NDJSON) responses as an expandable tree in the **Response** panel, instead of as raw text.
  This complements the [JSON Viewer support for JSON Lines documents](/en-US/docs/Mozilla/Firefox/Releases/155#developer_tools) added in Firefox 155.
  ([Firefox bug 2059673](https://bugzil.la/2059673)).
- The Network Monitor's **Raw Response** footer gains a search toolbar, matching the one in the Debugger.
  ([Firefox bug 1941575](https://bugzil.la/1941575)).
- Two {{cssxref("attr")}} problems in the Inspector's Rules view are fixed: autocomplete no longer reports a {{cssxref("var")}} function inside an `attr()` [fallback value](/en-US/docs/Web/CSS/Reference/Values/attr#using_a_fallback_value) as invalid ([Firefox bug 2068479](https://bugzil.la/2068479)), and hovering an attribute name inside `attr()` no longer shows the value from the wrong element for inherited rules ([Firefox bug 2068480](https://bugzil.la/2068480)).
- Opening DevTools on a page with many CSS grid containers no longer hangs the tab.
  ([Firefox bug 1988868](https://bugzil.la/1988868)).

### HTML

- A {{domxref("HTMLSelectElement.selectedOptions", "selectedOptions")}} collection retrieved from a script-created {{HTMLElement("select")}} element no longer goes stale.
  Because the collection is live, a reference held across a change that re-runs the selectedness setting algorithm — such as a form reset, or removing another {{HTMLElement("option")}} — previously kept reporting that nothing was selected, while {{domxref("HTMLOptionElement.selected")}} reported otherwise.
  ([Firefox bug 2068632](https://bugzil.la/2068632)).
- The rate limit on content-initiated navigations is now much tighter: **200** per browsing context in a 10-second window, down from 1000. It covers the {{domxref("History")}} and {{domxref("Location")}} APIs, so it applies to {{domxref("History.pushState()")}}, {{domxref("History.replaceState()")}}, {{domxref("History.go()")}}, and fragment navigation. Once the limit is reached, calls are silently ignored: no exception is thrown and {{domxref("Location.href", "location.href")}} does not change. Argument validation still happens first, so an invalid URL or an unserializable state object throws as before.

  The count and the window are set by the `dom.navigation.navigationRateLimit.count` and `dom.navigation.navigationRateLimit.timespan` preferences. If you drive history from a scroll handler, a drag, a `mousemove` handler, or a {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}} callback, throttle those calls.
  ([Firefox bug 1922677](https://bugzil.la/1922677)).

### MathML

No notable changes.

### SVG

- {{domxref("SVGAElement")}} now supports the {{domxref("SVGAElement.referrerPolicy", "referrerPolicy")}} IDL attribute and honors the `referrerpolicy` content attribute when making the request.
  Previously the property reflected as an empty string and the attribute was ignored, so an SVG link always sent the document's default referrer.
  ([Firefox bug 2069550](https://bugzil.la/2069550)).
- Percentage values for {{SVGAttr("stroke-dasharray")}}, `marker`, and `filter` are now re-resolved and repainted when the SVG viewport is resized. Previously the rendering kept the values resolved against the old viewport size.
  ([Firefox bug 2069724](https://bugzil.la/2069724)).
- {{domxref("Range.getBoundingClientRect()")}} now returns geometry that matches the glyph positions for a range inside SVG text that is scaled by a CSS {{cssxref("transform")}} or by a scaled {{SVGAttr("viewBox")}}.
  ([Firefox bug 2051654](https://bugzil.la/2051654)).
- The {{domxref("SVGSVGElement.currentTranslate")}} property is now read-only on a nested `<svg>` element, as required by the specification. This follows the equivalent {{domxref("SVGSVGElement.currentScale")}} fix in [Firefox 156](/en-US/docs/Mozilla/Firefox/Releases/156#svg).
  ([Firefox bug 2033233](https://bugzil.la/2033233)).
- A negative {{SVGAttr("stdDeviation")}} on {{SVGElement("feGaussianBlur")}} or {{SVGElement("feDropShadow")}} is now treated as zero rather than disabling the filter, including per-axis values such as `stdDeviation="1 -1"`.
  ([Firefox bug 2069349](https://bugzil.la/2069349)).

### CSS

- The [`at-rule()`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#at-rule) function in the {{cssxref("@supports")}} at-rule is now enabled by default.
  This lets you test whether the browser supports a given [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules), which previously could only be inferred from a property the at-rule happens to enable:

  ```css
  @supports at-rule(@starting-style) {
    .toast {
      transition: opacity 0.3s;
    }
  }
  ```

  It is also available through {{domxref("CSS.supports_static", "CSS.supports()")}} and as an {{cssxref("@import")}} condition, and composes with the rest of the `@supports` grammar in either order, for example `at-rule(@media) and (display: flex)` or `(color: red) and at-rule(@supports)`.
  At-rules that are only valid in a particular position, such as `@import` and `@starting-style`, report correctly, while `@charset` reports `false` because it is not an at-rule. Descriptors are not accepted, so `at-rule(@counter-style; system: fixed)` is `false`.
  {{domxref("CSSConditionRule.conditionText")}} now also serializes these conditions canonically, normalizing whitespace so that `at-rule( @supports )` round-trips as `at-rule(@supports)`.
  ([Firefox bug 2060755](https://bugzil.la/2060755)).

- The {{cssxref("overscroll-behavior")}} property and its {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-inline")}}, and {{cssxref("overscroll-behavior-block")}} longhands accept a new `chain` value.
  Like `auto`, `chain` allows a scroll to propagate to an ancestor scroll container, but unlike `auto` it disables the local boundary default action — the overscroll affordances such as pull-to-refresh or the rubber-band glow.

  ```css
  .panel {
    overflow: auto;
    /* Scrolling can chain to the page, but don't trigger pull-to-refresh here */
    overscroll-behavior-y: chain;
  }
  ```

  Because `chain` can be set per axis, this also lets you keep scroll propagation on one axis while blocking it with `none` on the other.
  ([Firefox bug 2036966](https://bugzil.la/2036966)).

- Text decorations are now positioned correctly on an inline box that uses {{cssxref("text-box-trim")}}, rather than being drawn relative to the untrimmed box.
  ([Firefox bug 2067858](https://bugzil.la/2067858)).

- A custom property whose value comes from the {{cssxref("attr")}} function can now be the subject of a [container style query](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries).
  Both features shipped in [Firefox 155](/en-US/docs/Mozilla/Firefox/Releases/155#css) but did not work together:

  ```css
  #container {
    --state: attr(data-state);
  }
  #child {
    background-color: red;
    @container style(--state: "good") {
      background-color: green;
    }
  }
  ```

  ([Firefox bug 2070531](https://bugzil.la/2070531)).

- Clicking an element nested inside an {{HTMLElement("a")}} element now matches {{cssxref(":active")}} on that element.
  ([Firefox bug 2067272](https://bugzil.la/2067272)).
- Collapsed table borders ({{cssxref("border-collapse", "border-collapse: collapse")}}) are no longer missing from pages after the first when printing or generating a PDF.
  ([Firefox bug 2033184](https://bugzil.la/2033184)).

### JavaScript

No notable changes.

### HTTP

No notable changes.

### Security

- A cookie using the `__Host-` [prefix](/en-US/docs/Web/HTTP/Guides/Cookies#cookie_prefixes) is now rejected unless it has an explicit `Path=/` attribute. A missing `Path` attribute, an empty `Path=`, and a valueless `Path` are all rejected, as the prefix specification requires.

  ```js
  // All three of these are now rejected
  document.cookie = "__Host-a=1; Secure";
  document.cookie = "__Host-b=1; Secure; Path=";
  document.cookie = "__Host-c=1; Secure; Path";

  // This is the only accepted form
  document.cookie = "__Host-d=1; Secure; Path=/";
  ```

  ([Firefox bug 2066910](https://bugzil.la/2066910)).

- Under a nonce-based {{HTTPHeader("Content-Security-Policy")}}, a {{HTMLElement("script")}} element is now treated as non-nonceable — and so does not execute — when any of its attribute names or values contains an ASCII case-insensitive match for `<link`. Firefox already did this for `<script` and `<style`; `<link` was missing. Such markup is the signature of a dangling markup injection, where attacker-supplied text has been swallowed into an attribute of a script the author gave a nonce to.

  ```html
  <!-- Content-Security-Policy: script-src 'nonce-secret' -->
  <script nonce="secret" data="<link">
    ran = true; /* Blocked in 157, executed in 156 */
  </script>
  ```

  ([Firefox bug 2066321](https://bugzil.la/2066321)).

### APIs

- {{domxref("TextDecoder.decode()")}} now decodes a multibyte character correctly when it is split across two calls made with `{ stream: true }` in the `big5`, `shift_jis`, and `euc-kr` encodings. Previously the decoder produced the wrong character:

  ```js
  const decoder = new TextDecoder("big5");
  decoder.decode(new Uint8Array([0xfe]), { stream: true });
  decoder.decode(new Uint8Array([0x40]), { stream: true }); // Now "鑂", previously "@"
  ```

  ([Firefox bug 2061103](https://bugzil.la/2061103) and [Firefox bug 2069897](https://bugzil.la/2069897)).

#### DOM

No notable changes.

#### Media, WebRTC, and Web Audio

- The `urn:3gpp:video-orientation` RTP header extension (CVO) is now supported, and is negotiated in SDP.
  Firefox rotates received video to the orientation the sender declares, so a participant on a device whose camera is physically inverted — such as an iPad Pro — no longer appears upside down.
  Firefox also reports its own camera orientation on outgoing video, and honors it when rendering a local {{domxref("MediaDevices.getUserMedia()", "getUserMedia()")}} preview.
  A {{HTMLElement("video")}} element's {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}} reflect the rotation, and a {{domxref("HTMLVideoElement/resize_event", "resize")}} event fires when the rotation changes.
  ([Firefox bug 1340372](https://bugzil.la/1340372)).
- Copy-constructing an {{domxref("RTCEncodedVideoFrame")}} or {{domxref("RTCEncodedAudioFrame")}}, with or without a metadata override, no longer crashes the content process. The same applies to passing one to {{domxref("Window.structuredClone", "structuredClone()")}}.
  ([Firefox bug 2049215](https://bugzil.la/2049215)).
- A {{HTMLElement("video")}} element rendering a {{domxref("MediaStreamTrack")}} whose {{domxref("MediaStreamTrack.enabled", "enabled")}} property is `false` now reports its correct {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}}.

### WebAssembly

No notable changes.

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Recommended preferences are now restored early enough during shutdown to be persisted to the profile. ([Firefox bug 2066531](https://bugzil.la/2066531)).
- Recommended preferences are no longer applied when the remote agent is started dynamically rather than from the command line. ([Firefox bug 2067187](https://bugzil.la/2067187)).
- The `async-event-dispatching` test variant expires on 2026-10-01. ([Firefox bug 2068563](https://bugzil.la/2068563)).

#### WebDriver BiDi

- The `destinationFolder` field is now mandatory for `browser.setDownloadBehavior` when `downloadBehavior.type` is `"allowed"`. Omitting it raises an `invalid argument` error instead of being silently accepted. ([Firefox bug 2069952](https://bugzil.la/2069952)).
- The `browsingContext.locateNodes` command now returns its result in a `nodes` field rather than `result`, matching the specification. Update any client that reads the old field name. ([Firefox bug 2046450](https://bugzil.la/2046450)).

#### Marionette

- A failed event dispatch no longer replies with a non-cloneable error, which previously masked the real failure. ([Firefox bug 2068874](https://bugzil.la/2068874)).

## Changes for add-on developers

- {{WebExtAPIRef("alarms.clearAll()")}} now fulfills with `undefined` instead of a boolean, matching Chrome and the specification. ([Firefox bug 2067229](https://bugzil.la/2067229)).

## Experimental web features

These features are shipping in Firefox 157 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Key encapsulation in Web Crypto** (Nightly): `dom.webcrypto.encapsulation.enabled`

  {{domxref("SubtleCrypto")}} gains the post-quantum ML-KEM key encapsulation mechanism, along with the `encapsulateKey`, `encapsulateBits`, `decapsulateKey`, and `decapsulateBits` key usages.
  This release enables the feature by default in Nightly builds. ([Firefox bug 1943614](https://bugzil.la/1943614)).

- **`export * from "mod"` exports the default export**: `javascript.options.experimental.export_star_default`

  The [TC39 export `*` default proposal](https://tc39.es/proposal-export-star-default/) makes [`export * from "mod"`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting__aggregating) also provide the module's default export, which it currently omits.
  Note that this preference can only be set in Nightly builds. ([Firefox bug 2065611](https://bugzil.la/2065611)).

- **`Notification.navigate()`**: `dom.webnotifications.navigate.enabled`

  {{domxref("Notification.navigate()")}} lets a service worker navigate an existing client to a URL in response to a notification being activated, rather than opening a new window.
  ([Firefox bug 2066184](https://bugzil.la/2066184)).

- **Sanitizer API sanitization while parsing**: `dom.security.sanitizer.while-parsing`

  Applies a {{domxref("Sanitizer")}} configuration during HTML parsing rather than after the tree has been built, so unsafe markup is never inserted into the document in the first place.
  ([Firefox bug 2062652](https://bugzil.la/2062652)).

- **On-device speech recognition**: `media.webspeech.recognition.enable`

  The [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) can now perform speech recognition locally, without sending audio to a remote service, using a model downloaded on demand.
  ([Firefox bug 1940906](https://bugzil.la/1940906)).
