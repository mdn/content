---
title: Firefox 118 for developers
slug: Mozilla/Firefox/Releases/118
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 118 that affect developers. Firefox 118 was released on September 26, 2023.

## Changes for web developers

### HTML

- The {{HTMLElement('search')}} element is now supported. The `<search>` element is a group element that serves to contain all the elements used in a search or filtering operation ([Firefox bug 1824121](https://bugzil.la/1824121)).

### CSS

- The {{cssxref("font-synthesis-position")}} property and `position` value for {{cssxref("font-synthesis")}} shorthand property are now supported. These allow subscript and superscript typefaces to be disabled for fonts that do not have glyphs for them when using {{cssxref("font-variant-position")}} ([Firefox bug 1849010](https://bugzil.la/1849010)).
- Multiple CSS [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) are now supported: [`abs()`](/en-US/docs/Web/CSS/abs), [`sign()`](/en-US/docs/Web/CSS/sign), [`round()`](/en-US/docs/Web/CSS/round), [`mod()`](/en-US/docs/Web/CSS/mod), [`rem()`](/en-US/docs/Web/CSS/rem), [`pow()`](/en-US/docs/Web/CSS/pow), [`sqrt()`](/en-US/docs/Web/CSS/sqrt), [`hypot()`](/en-US/docs/Web/CSS/hypot), [`log()`](/en-US/docs/Web/CSS/log), and [`exp()`](/en-US/docs/Web/CSS/exp) (Firefox bug [1814589](https://bugzil.la/1814589)).
- A new keyword `from-font` in the CSS property [`font-size-adjust`](/en-US/docs/Web/CSS/font-size-adjust) enables picking the desired `<font-metric>` from the first available font (Firefox bug [1708240](https://bugzil.la/1708240)).
- The CSS property [`transform-box`](/en-US/docs/Web/CSS/transform-box) now supports the values `content-box` and `stroke-box`. For the reference box, the `content-box` value uses the [content box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) and the `stroke-box` value uses the stroke bounding box that contains an SVG's shape (Firefox bug [1819464](https://bugzil.la/1819464)).
- The CSS property [`font-size-adjust`](/en-US/docs/Web/CSS/font-size-adjust) supports the keyword `from-font` that enables picking the desired `<font-metric>` from the first available font (Firefox bug [1708240](https://bugzil.la/1708240)).

### JavaScript

No notable changes.

### HTTP

- The HTTP [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) header's [`publickey-credentials-get`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) directive is now supported, which can be used to enable the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) interface for retrieving public-key credentials in a cross-origin iframe ([Firefox bug 1460986](https://bugzil.la/1460986)).

### MathML

- The [`<semantics>`](/en-US/docs/Web/MathML/Element/semantics) and [`<maction>`](/en-US/docs/Web/MathML/Element/maction) elements only render the first child element by default now. The `mathml.legacy_maction_and_semantics_implementations.disabled` preference has been removed (Firefox bug [1788223](https://bugzil.la/1788223)).
- All values of the [`mathvariant`](/en-US/docs/Web/MathML/Element/mi#mathvariant) attribute other than `normal` are now deprecated. Additionally, the attribute's use is now limited to the `<mi>` element (Firefox bug [1845461](https://bugzil.la/1845461)).

### APIs

- The <kbd>⊞ Windows Logo</kbd> key on Windows and the <kbd>Command</kbd> key on macOS now return a value of `"Meta"` for [`KeyboardEvent.key`](/en-US/docs/Web/API/KeyboardEvent/key), instead of `"OS"`, and [`KeyboardEvent.code`](/en-US/docs/Web/API/KeyboardEvent/code) returns `MetaLeft`/`MetaRight` instead of `OSLeft`/`OSRight` (Firefox bug [1232918](https://bugzil.la/1232918)).
- The {{domxref("RTCRtpTransceiver.currentDirection")}} and {{domxref("RTCRtpTransceiver.direction")}} properties now support the `"stopped"` value for indicating whether a transceiver has stopped. This value should now be used instead of the deprecated {{domxref("RTCRtpTransceiver.stopped")}} property ([Firefox bug 1568296](https://bugzil.la/1568296)).
- The array returned by {{domxref("RTCPeerConnection.getTransceivers()")}} now omits stopped transceivers. Similarly, {{domxref("RTCPeerConnection.getReceivers()")}} and {{domxref("RTCPeerConnection.getSenders()")}} omit the receivers and senders associated with a stopped transceiver ([Firefox bug 1568296](https://bugzil.la/1568296)).
- The [`TextMetrics.emHeightDescent`](/en-US/docs/Web/API/TextMetrics/emHeightDescent) and [`TextMetrics.emHeightAscent`](/en-US/docs/Web/API/TextMetrics/emHeightAscent) properties are now supported (Firefox bug [1841692](https://bugzil.la/1841692)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed an internal race condition for Android that caused the returned user prompt text to be empty for both WebDriver BiDi and Marionette ([Firefox bug 1848167](https://bugzil.la/1848167)).
- Both the `WebDriver:PerformActions` command in Marionette and the `browsingContext.performActions` command in WebDriver BiDi failed to correctly scroll for a `wheel` input source in environments that have a high-resolution display connected ([Firefox bug 1849229](https://bugzil.la/1849229)).

#### WebDriver BiDi

- Added the [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) command that allows users to bring the given background tab into foreground ([Firefox bug 1841004](https://bugzil.la/1841004)).
- Added the [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) command that allows users to accept or dismiss an open user prompt of type `alert`, `confirm`, or `prompt` ([Firefox bug 1824197](https://bugzil.la/1824197)).
- Added the [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) event that is emitted when a user prompt of type `alert`, `confirm`, or `prompt` was opened ([Firefox bug 1824224](https://bugzil.la/1824224)).
- Added a `type` field to the JSON payload that is returned to clients for identifying `event` messages or the success state of a command, which can be either `success` or `error` ([Firefox bug 1844009](https://bugzil.la/1844009)).

#### Marionette

- Added support for all the [Web Authentication extension commands](https://www.w3.org/TR/webauthn-2/#sctn-automation), which allow users to authenticate themselves by Public Key Credentials ([Firefox bug 1846574](https://bugzil.la/1846574))

## Changes for add-on developers

### Removals

- Support for [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in the manifest keys [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) for Manifest V3 extensions has been removed ([Firefox bug 1830711](https://bugzil.la/1830711)). See [Browser Styles' Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.

## Older versions

{{Firefox_for_developers}}
