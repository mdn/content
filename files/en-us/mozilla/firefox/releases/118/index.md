---
title: Firefox 118 for developers
slug: Mozilla/Firefox/Releases/118
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 118 that affect developers. Firefox 118 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [September 26, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

- The {{HTMLElement('search')}} element is now supported. The `<search>` element is a group element that serves to contain all the elements used in a search or filtering operation ([Firefox bug 1824121](https://bugzil.la/1824121)).

### MathML

- The `mathml.legacy_maction_and_semantics_implementations.disabled` preference is now removed, which means that the [`<semantics>`](/en-US/docs/Web/MathML/Element/semantics) and [`<maction>`](/en-US/docs/Web/MathML/Element/maction) elements only render the first child element by default (Firefox bug [1788223](https://bugzil.la/1788223)).

#### Removals

### CSS

- Multiple CSS [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) are now supported: [`abs()`](/en-US/docs/Web/CSS/abs), [`sign()`](/en-US/docs/Web/CSS/sign), [`round()`](/en-US/docs/Web/CSS/round), [`mod()`](/en-US/docs/Web/CSS/mod), [`rem()`](/en-US/docs/Web/CSS/rem), [`pow()`](/en-US/docs/Web/CSS/pow), [`sqrt()`](/en-US/docs/Web/CSS/sqrt), [`hypot()`](/en-US/docs/Web/CSS/hypot), [`log()`](/en-US/docs/Web/CSS/log), and [`exp()`](/en-US/docs/Web/CSS/exp) (Firefox bug [1814589](https://bugzil.la/1814589)).
- A new keyword `from-font` in the CSS property [`font-size-adjust`](/en-US/docs/Web/CSS/font-size-adjust) enables picking the desired `<font-metric>` from the first available font (Firefox bug [1708240](https://bugzil.la/1708240)).

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("RTCRtpTransceiver.currentDirection")}} and {{domxref("RTCRtpTransceiver.direction")}} properties now support the `"stopped"` value for indicating whether a transceiver has stopped, and should be used instead of the deprecated {{domxref("RTCRtpTransceiver.stopped")}} property ([Firefox bug 1568296](https://bugzil.la/1568296)).
- The array returned by {{domxref("RTCPeerConnection.getTransceivers()")}} now omits stopped transcievers. Similarly, {{domxref("RTCPeerConnection.getReceivers()")}} and {{domxref("RTCPeerConnection.getSenders()")}} omit the receivers and senders associated with a stopped transceiver ([Firefox bug 1568296](https://bugzil.la/1568296)).
- The [`TextMetrics.emHeightDescent`](/en-US/docs/Web/API/TextMetrics/emHeightDescent) and [`TextMetrics.emHeightAscent`](/en-US/docs/Web/API/TextMetrics/emHeightAscent) properties are now supported (Firefox bug [1841692](https://bugzil.la/1841692)).
- [`CSSStyleRule`](/en-US/docs/Web/API/CSSStyleRule) now inherits from [`CSSGroupingRule`](/en-US/docs/Web/API/CSSGroupingRule) instead of directly from [`CSSRule`](/en-US/docs/Web/API/CSSRule), with the result that it additionally implements the property [`cssRules`](/en-US/docs/Web/API/CSSGroupingRule/cssRules) and the methods [`deleteRule()`](/en-US/docs/Web/API/CSSGroupingRule/cssRules) and [`insertRule()`](/en-US/docs/Web/API/CSSGroupingRule/insertRule) (Firefox bug [1846251](https://bugzil.la/1846251)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

- Support for [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in the manifest keys [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) for Manifest V3 extensions has been removed ([Firefox bug 1830711](https://bugzil.la/1830711)). See [Browser Styles' Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.

### Other

## Older versions

{{Firefox_for_developers(117)}}
