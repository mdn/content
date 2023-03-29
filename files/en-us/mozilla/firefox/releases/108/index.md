---
title: Firefox 108 for developers
slug: Mozilla/Firefox/Releases/108
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 108 that will affect developers. Firefox 108 was released on December 13, 2022.

## Changes for web developers

### HTML

- The {{HTMLElement("source")}} element supports [`height`](/en-US/docs/Web/HTML/Element/source#height) & [`width`](/en-US/docs/Web/HTML/Element/source#width) attributes when it is a child of a {{HTMLElement("picture")}} element.
  This functionality can be configured via the `dom.picture_source_dimension_attributes.enabled` preference which is now set to `true` by default ([Firefox bug 1795953](https://bugzil.la/1795953)).

### CSS

- [Trigonometric functions](/en-US/docs/Web/CSS/CSS_Functions#trigonometric_functions) are now enabled with the `layout.css.trig.enabled` preference set to `true` by default.
  This allows the use of `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` functions ([Firefox bug 1774589](https://bugzil.la/1774589), [Firefox bug 1787070](https://bugzil.la/1787070)).
- CSS [`<calc-constant>`](/en-US/docs/Web/CSS/calc-constant) type is implemented to allow for well-known constants such as `pi` and `e` within [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) ([Firefox bug 1682444](https://bugzil.la/1682444), [Firefox bug 1787070](https://bugzil.la/1787070)).
- Container query length units are now supported via the `layout.css.container-queries.enabled` preference, which is set to `false` by default.
  Setting this preference to `true` allows the use of `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, and `cqmax` units of length which are relative to the size of a query container.
  For more information on these units, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_Container_Queries#container_query_length_units) documentation ([Firefox bug 1744231](https://bugzil.la/1744231)).
- The [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji) property is now supported via the `layout.css.font-variant-emoji.enabled` preference, which is set to `false` by default. This property allows you to set a default presentation style for displaying emojis ([Firefox bug 1461589](https://bugzil.la/1461589)).

### JavaScript

No notable changes

### HTTP

- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header directives [`style-src-elem`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem) and [`style-src-attr`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr) are now supported.
  A server can use these to specify valid sources for stylesheet `<style>` elements and `<link>` elements with `rel="stylesheet"`, and for styles applied to individual elements, respectively ([Firefox bug 1529338](https://bugzil.la/1529338)).
- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header directives [`script-src-elem`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem) and [`script-src-attr`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr) are now supported.
  A server can use these to specify valid sources for JavaScript `<script>` elements, and for inline script event handlers like `onclick`, respectively ([Firefox bug 1529337](https://bugzil.la/1529337)).
- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) violation reports now include `effective-directive` and `status-code` properties.
  For more information, see [Violation report syntax](/en-US/docs/Web/HTTP/CSP#violation_report_syntax) ([Firefox bug 1192684](https://bugzil.la/1192684)).

### APIs

- [Import maps](/en-US/docs/Web/HTML/Element/script/type/importmap) are now supported.
  Import maps provide flexibility and additional control over how browsers resolve module specifiers when importing [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules).
  ([Firefox bug 1795647](https://bugzil.la/1795647)).

#### Media, WebRTC, and Web Audio

- The [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) is now available in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts).
  Calls to [`navigator.requestMIDIAccess()`](/en-US/docs/Web/API/Navigator/requestMIDIAccess) will prompt users with active MIDI devices to install a [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-add-ons), which is required to enable the API.
  For more information see [Firefox bug 1795025](https://bugzil.la/1795025).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Following a [change in the specification](https://github.com/w3c/webdriver-bidi/pull/259), log entry level `"warning"` was renamed to `"warn"` ([Firefox bug 1797115](https://bugzil.la/1797115)).
- When using `script.evaluate` and `script.callFunction` with a sandbox name equal to an empty string, the evaluation will now be done using the default realm ([Firefox bug 1793589](https://bugzil.la/1793589)).
- Added support for the `browsingContext.domContentLoaded` event ([Firefox bug 1756610](https://bugzil.la/1756610)).

#### Marionette

- Added support for the `tiltX`, `tiltY` and `twist` properties of pointer actions for `WebDriver:PerformActions` ([Firefox bug 1793832](https://bugzil.la/1793832)).
- Fixed a bug where `WebDriver:GetElementText` wasn't returning the element text for pretty-printed XML ([Firefox bug 1794099](https://bugzil.la/1794099)).
- `HTMLDocument` is no longer serialized as a `WebElement` reference ([Firefox bug 1793920](https://bugzil.la/1793920)).
- `WebDriver:NewWindow` now opens a window with an `about:blank` tab instead of `about:newtab` ([Firefox bug 1533058](https://bugzil.la/1533058)).

## Changes for add-on developers

- Firefox now issues a warning when an extension is installed if its [version number](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) doesn't follow the recommended format ([Firefox bug 1793925](https://bugzil.la/1793925)).

## Older versions

{{Firefox_for_developers(107)}}
