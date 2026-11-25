---
title: Firefox 162 release notes for developers (Beta)
short-title: Firefox 162 (Beta)
slug: Mozilla/Firefox/Releases/162
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 162 that affect developers.
Firefox 162 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [December 8, 2026](https://whattrainisitnow.com/release/?version=162).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The `sectionheader` and `sectionfooter` ARIA roles are now supported. They identify the header and footer of a section, distinct from the page-level landmark roles [`banner`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) and [`contentinfo`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role). ([Firefox bug 1893684](https://bugzil.la/1893684))
- The [`headingoffset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) attribute is now enabled by default, allowing you to shift the computed heading level of headings within a subtree by a specified amount. ([Firefox bug 2044348](https://bugzil.la/2044348))

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The [CSS Typed Object Model (CSS Typed OM)](/en-US/docs/Web/API/CSS_Typed_OM_API) API is now enabled by default on all channels. It exposes CSS property values as typed JavaScript objects, accessible through {{domxref("HTMLElement.attributeStyleMap")}} and {{domxref("Element.computedStyleMap()")}}, and provides [CSS numeric factory functions](/en-US/docs/Web/API/CSS/factory_functions_static) such as `CSS.px()` and `CSS.em()`. ([Firefox bug 2089681](https://bugzil.la/2089681))
- The `border-area` value for the {{cssxref("background-clip")}} property is now supported. It clips the background to the area inside the element's border, including beneath any transparent border areas. ([Firefox bug 2093287](https://bugzil.la/2093287))

<!-- #### Removals -->

### JavaScript

- Regular expression buffer boundary assertions (`\A` and `\z`) are now supported. `\A` matches only at the start of the input string and `\z` only at the end, regardless of the `m` (multiline) flag — unlike `^` and `$`, which are affected by `m`. ([Firefox bug 2059792](https://bugzil.la/2059792))
- Multiple [`<script type="importmap">`](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap) elements are now supported by default on all channels. Import maps are merged in document order, with later entries overriding earlier ones for the same specifier. ([Firefox bug 2093267](https://bugzil.la/2093267))

<!-- #### Removals -->

### HTTP

- Streaming request bodies are now supported by default on all channels. You can pass a {{domxref("ReadableStream")}} as the `body` of a {{domxref("Request")}}, enabling incremental upload without buffering the full payload first. ([Firefox bug 2089458](https://bugzil.la/2089458))

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- The `document.parsed`, `document.contentLoaded`, and `document.loaded` properties are now supported. Each returns a {{jsxref("Promise")}} that resolves when the document has finished parsing, when `DOMContentLoaded` has fired, or when `load` has fired, respectively. ([Firefox bug 2091511](https://bugzil.la/2091511))
- Cross-document [view transitions](/en-US/docs/Web/API/View_Transition_API) are now enabled by default on all channels. When two pages opt in by declaring {{cssxref("@view-transition")}} `{ navigation: auto; }` in their CSS, navigating between them plays a view transition animation. ([Firefox bug 2088945](https://bugzil.la/2088945))
- [Declarative Web Push](/en-US/docs/Web/API/Push_API) is now supported, allowing pages to subscribe to push notifications using an HTML `<link rel="push">` element, without requiring a service worker registration step in JavaScript. ([Firefox bug 1935325](https://bugzil.la/1935325))
- Mouse buttons 4 and 5 (the browser back and forward buttons found on many mice) now correctly fire {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/mouseup_event", "mouseup")}}, and {{domxref("Element/click_event", "click")}} events on web pages. They are reported as {{domxref("MouseEvent.button", "button")}} values `3` and `4` in mouse event objects. ([Firefox bug 2073171](https://bugzil.la/2073171))
- The `raw-secret` and `raw-public` key format aliases are now supported in the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API). These can be used as the `format` argument to {{domxref("SubtleCrypto.importKey()")}} and {{domxref("SubtleCrypto.exportKey()")}}. ([Firefox bug 2086697](https://bugzil.la/2086697))
- The `iceCandidatePoolSize` configuration option of {{domxref("RTCPeerConnection")}} is now supported. Setting it to a non-zero value causes ICE candidates to be pre-gathered before the peer connection is established, reducing call setup latency. ([Firefox bug 1529398](https://bugzil.la/1529398))

#### Media, WebRTC, and Web Audio

- {{domxref("RTCAudioSourceStats")}} are now supported, providing statistics about a local audio track attached to an {{domxref("RTCPeerConnection")}}, accessible via {{domxref("RTCStatsReport")}}. ([Firefox bug 1728364](https://bugzil.la/1728364))
- MP3 audio streams are now supported in [Media Source Extensions (MSE)](/en-US/docs/Web/API/Media_Source_Extensions_API). You can append MP3 data to a {{domxref("SourceBuffer")}} for use with {{domxref("MediaSource")}}. ([Firefox bug 1169485](https://bugzil.la/1169485))

#### Removals

- Some non-standard {{domxref("Gamepad")}} interface attributes that were only available in Firefox are now deprecated and will log a console warning. ([Firefox bug 2089662](https://bugzil.la/2089662))

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- {{WebExtAPIRef("omnibox.setDefaultSuggestion")}} now returns a {{jsxref("Promise")}}. Previously, it returned `undefined`. This change provides compatibility with Chrome. ([Firefox bug 2090052](https://bugzil.la/2090052))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 162 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`ident()` CSS function** (`layout.css.ident-function.enabled`): The `ident()` CSS function accepts a string argument and returns it as a CSS identifier, enabling dynamic identifier construction in CSS. ([Firefox bug 2088337](https://bugzil.la/2088337))
- **`inherit()` CSS function** (`layout.css.inherit-function.enabled`): The `inherit()` CSS function takes the inherited value of a CSS property and allows optional modifications, making it possible to derive computed values from the inherited value. ([Firefox bug 2091710](https://bugzil.la/2091710))
- **`random-item()` CSS function** (`layout.css.random-item.enabled`): The `random-item()` CSS function selects a random value from a provided list. An optional `<random-key>` parameter synchronises the selection across elements or properties sharing the same key. ([Firefox bug 2092915](https://bugzil.la/2092915))
- **Cookie blocking for `file:` URLs** (Nightly only): A new preference blocks cookies for `file:` URLs, preventing local HTML files from setting or reading cookies. ([Firefox bug 2094146](https://bugzil.la/2094146))
