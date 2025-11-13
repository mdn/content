---
title: Firefox 145 release notes for developers (Stable)
short-title: Firefox 145 (Stable)
slug: Mozilla/Firefox/Releases/145
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 145 that affect developers.
Firefox 145 was released on [November 11, 2025](https://whattrainisitnow.com/release/?version=145).

## Changes for web developers

### HTML

No notable changes.

### CSS

- The {{cssxref("text-autospace")}} property is now supported, allowing automatic spacing adjustments between characters from different scripts ([Firefox bug 1981086](https://bugzil.la/1981086), [Firefox bug 1869577](https://bugzil.la/1869577)).

- The [`math`](/en-US/docs/Web/CSS/Reference/Properties/font-family#math) generic font family is now supported as a value of the `font-family` property, allowing mathematical expressions to use appropriate fonts.
  ([Firefox bug 1788937](https://bugzil.la/1788937)).

- Separators can appear in {{htmlelement("select")}} menus since {{htmlelement("hr")}} in `<select>` was implemented.
  These are now also supported in Firefox for Android. ([Firefox bug 1867045](https://bugzil.la/1867045), [Firefox bug 1830909](https://bugzil.la/1830909)).

### JavaScript

- Firefox now supports the {{jsxref("Atomics.waitAsync()")}} static method, which allows synchronization of threads based upon the value in a shared memory location.
  The method waits asynchronously on the value and returns an object representing the result of the operation. It is non-blocking and usable on the main thread.
  ([Firefox bug 1884148](https://bugzil.la/1884148)).

### HTTP

- The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers are now supported for script resources. These allow websites to enforce [subresource integrity guarantees](/en-US/docs/Web/Security/Subresource_Integrity) for _scripts_.
  Note that the [`endpoints`](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) key is not yet supported (violations are logged to console).
  ([Firefox bug 1984973](https://bugzil.la/1984973)).

### APIs

- The {{domxref("ToggleEvent/source", "source")}} property of the {{domxref("ToggleEvent")}} interface is now supported.
  If a [popover](/en-US/docs/Web/API/Popover_API) is triggered to open or close by an HTML element such as a {{htmlelement("button")}}, the event's `source` property will contain the element that triggered the popover.
  ([Firefox bug 1968987](https://bugzil.la/1968987)).
- A {{domxref("CSSStyleProperties")}} instance is now returned for the `style` property on {{domxref("HTMLElement.style", "HTMLElement")}}, {{domxref("MathMLElement.style", "MathMLElement")}}, {{domxref("SVGElement.style", "SVGElement")}}, and {{domxref("CSSStyleRule.style", "CSSStyleRule")}}, and the {{domxref("Window.getComputedStyle()")}} method. Previously a {{domxref("CSSStyleDeclaration")}} instance was returned.
  ([Firefox bug 1989925](https://bugzil.la/1989925))

#### Media, WebRTC, and Web Audio

- {{domxref("RTCEncodedVideoFrame")}} and {{domxref("RTCEncodedAudioFrame")}} are now {{glossary("Serializable object", "serializable objects")}}, and {{domxref("RTCEncodedAudioFrame/RTCEncodedAudioFrame", "RTCEncodedAudioFrame()")}} and {{domxref("RTCEncodedVideoFrame/RTCEncodedVideoFrame", "RTCEncodedVideoFrame()")}} copy constructors are supported. These changes allow frames to be cloned, and to be shared between workers and the main thread. ([Firefox bug 1868223](https://bugzil.la/1868223) and [Firefox bug 1975032](https://bugzil.la/1975032)).

- The [Matroska container](/en-US/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) is now supported for the most commonly-used codecs: AVC, HEVC, VP8, VP9, AV1, AAC, Opus, and Vorbis. ([Firefox bug 1991752](https://bugzil.la/1991752)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implemented the `emulation.setUserAgentOverride` command, which allows to override the user-agent string used by the browser either for a set of contexts, user contexts or globally. ([Firefox bug 1987935](https://bugzil.la/1987935)).
- Implemented the `browsingContext.downloadEnd` event, which is emitted when a download finishes (whether it is successful or canceled) ([Firefox bug 1970293](https://bugzil.la/1970293)).
- Updated the `destination` property of the `network.beforeRequestSent` event to `document` for top-level navigations. ([Firefox bug 1985552](https://bugzil.la/1985552)).
- Updated the `browsingContext` download events to reuse the same navigation id as the previous `browsingContext.navigationStarted` event. ([Firefox bug 1986938](https://bugzil.la/1986938)).
- Fixed a bug for network data collection, where non-ASCII characters in response bodies were not properly encoded. ([Firefox bug 1986022](https://bugzil.la/1986022)).
- Fixed a bug with the `network.getData` command, which would fail requests with an empty response body. ([Firefox bug 1986025](https://bugzil.la/1986025)).
- Fixed a bug where some `network` events could be flagged as blocked even if they were not. ([Firefox bug 1989919](https://bugzil.la/1989919)).

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} are now validated, and invalid cookies are rejected. This change was implemented in Nightly only from Firefox 142. ([Firefox bug 1976509](https://bugzil.la/1976509))

## Experimental web features

These features are shipping in Firefox 145 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **CSS anchor positioning** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly builds now support [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) by default, which allows you to tether elements together.
  The anchor-positioned elements can then have their size and position set relative to the size and location of the anchor elements to which they are bound.
  (General: [Firefox bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox bug 1924086](https://bugzil.la/1924086), custom {{cssxref("@position-try")}} fallbacks: [Firefox bug 1962598](https://bugzil.la/1962598)).

- **CSS module scripts:** (Nightly) and `layout.css.module-scripts.enabled`.

  CSS module scripts are now supported, allowing a stylesheet to be loaded into a script as a {{domxref("CSSStyleSheet")}} instance using the [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) keyword and the [`type` import attribute](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) set to `type="css"`. ([Firefox bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  The CSS `text-decoration-trim` property is supported but currently disabled by default.
  It allows you to specify {{cssxref("text-decoration")}} start and end offsets to shorten, lengthen, or shift the position of text decorations with respect to the text ([Firefox bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** for scripts (Nightly/Early Beta): `dom.security.trusted_types.enabled`

  The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) is now enabled in early beta releases. ([Firefox bug 1976656](https://bugzil.la/1976656)).

  The changes include:

- Addition of the {{domxref("TrustedTypePolicyFactory")}}, {{domxref("TrustedTypePolicy")}}, {{domxref("TrustedHTML")}}, {{domxref("TrustedScript")}}, {{domxref("TrustedScriptURL")}} interfaces, and the `trustedTypes` property on {{domxref("Window/trustedTypes", "Window")}} and {{domxref("WorkerGlobalScope/trustedTypes", "WorkerGlobalScope")}}.
  - Updates to [injection sink interfaces](/en-US/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs, such as {{domxref("Element.innerHTML")}} and {{domxref("Document.write()", "document.write()")}}, to allow the `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` to be passed as well as strings.
  - Support for the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) and [`trusted-types`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) directives, and the [`'trusted-types-eval'`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) keyword, of the {{HTTPHeader("Content-Security-Policy")}} HTTP header.
    These can be used to enforce trusted types instead of strings, name the specific policies that are allowed, and to enable [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and similar functions to be used when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are supported and enforced.

- **Storage Access headers** (Nightly): `dom.storage_access.headers.enabled`.
  The {{httpheader("Sec-Fetch-Storage-Access")}} and {{httpheader("Activate-Storage-Access")}} HTTP headers are now supported, enabling a more efficient [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) workflow. ([Firefox bug 1991688](https://bugzil.la/1991688)).
