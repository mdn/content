---
title: Firefox 108 for developers
slug: Mozilla/Firefox/Releases/108
tags:
  - "108"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 108 that will affect developers. Firefox 108 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and will ship on [December 13, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- Trigonometric functions are enabled with the `layout.css.trig.enabled` preference set to `true` by default.
  This allows the use of `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` functions within the CSS [`calc()`](/en-US/docs/Web/CSS/calc) function.
  Additionally, a CSS [`<calc-constant>`](/en-US/docs/Web/CSS/calc-constant) type is implemented to allow for well-known constants such as `pi` and `e` within the `calc()` function ({{bug(1774589)}}, {{bug(1682444)}}).

#### Removals

### JavaScript

#### Removals

### HTTP

- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header directives [`style-src-elem`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem) and [`style-src-attr`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr) are now supported.
  A server can use these to specify valid sources for stylesheet `<style>` elements and `<link>` elements with `rel="stylesheet"`, and for styles applied to individual elements, respectively ({{bug(1529338)}}).
- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP header directives [`script-src-elem`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem) and [`script-src-attr`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr) are now supported.
  A server can use these to specify valid sources for JavaScript `<script>` elements, and for inline script event handlers like `onclick`, respectively ({{bug(1529337)}}).

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

- The [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) is now available in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts).
  Users must grants permission by accepting a prompt to install a [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-addons).
  For more information see {{bug(1795025)}}.

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

- Firefox now issues a warning when an extension is installed if its [version number](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) doesn't follow the recommended format ({{bug(1793925)}}).

### Removals

### Other

## Older versions

{{Firefox_for_developers(107)}}
