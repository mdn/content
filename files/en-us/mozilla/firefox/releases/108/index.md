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

This article provides information about the changes in Firefox 108 that will affect developers. Firefox 108 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [December 13, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### HTML

- The {{HTMLElement("source")}} element supports [`height`](/en-US/docs/Web/HTML/Element/source#attr-height) & [`width`](/en-US/docs/Web/HTML/Element/source#attr-width) attributes when it is a child of a {{HTMLElement("picture")}} element.
  This functionality can be configured via the `dom.picture_source_dimension_attributes.enabled` preference which is now set to `true` by default ({{bug(1795953)}}).

#### Removals

### CSS

- [Trigonometric functions](/en-US/docs/Web/CSS/CSS_Functions#trigonometric_functions) are now enabled with the `layout.css.trig.enabled` preference set to `true` by default.
  This allows the use of `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, and `atan2()` functions ({{bug(1774589)}}, {{bug(1787070)}}).
- CSS [`<calc-constant>`](/en-US/docs/Web/CSS/calc-constant) type is implemented to allow for well-known constants such as `pi` and `e` within [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) ({{bug(1682444)}}, {{bug(1787070)}}).
- Container query length units are now supported via the the `layout.css.container-queries.enabled` preference, which is set to `false` by default.
  Setting this preference to `true` allows the use of `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, and `cqmax` units of length which are relative to the size of a query container.
  For more information on these units, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_Container_Queries#container_query_length_units) documentation ({{bug(1744231)}}).

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
  Calls to [`navigator.requestMIDIAccess()`](/en-US/docs/Web/API/Navigator/requestMIDIAccess) will prompt users with active MIDI devices to install a [Site Permission Add-On](https://support.mozilla.org/en-US/kb/site-permission-addons), which is required to enable the API.
  For more information see {{bug(1795025)}}.

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Firefox now issues a warning when an extension is installed if its [version number](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) doesn't follow the recommended format ({{bug(1793925)}}).

### Removals

### Other

## Older versions

{{Firefox_for_developers(107)}}
