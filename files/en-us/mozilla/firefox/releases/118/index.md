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

#### Removals

### CSS

- Multiple CSS [math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) are now supported: [`abs()`](/en-US/docs/Web/CSS/abs), [`sign()`](/en-US/docs/Web/CSS/sign), [`round()`](/en-US/docs/Web/CSS/round), [`mod()`](/en-US/docs/Web/CSS/mod), [`rem()`](/en-US/docs/Web/CSS/rem), [`pow()`](/en-US/docs/Web/CSS/pow), [`sqrt()`](/en-US/docs/Web/CSS/sqrt), [`hypot()`](/en-US/docs/Web/CSS/hypot), [`log()`](/en-US/docs/Web/CSS/log), and [`exp()`](/en-US/docs/Web/CSS/exp) (Firefox bug [1814589](https://bugzil.la/1814589)).

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

- The [`TextMetrics.emHeightDescent`](/en-US/docs/Web/API/TextMetrics/emHeightDescent) and [`TextMetrics.emHeightAscent`](/en-US/docs/Web/API/TextMetrics/emHeightAscent) properties are now supported (Firefox bug [1841692](https://bugzil.la/1841692)).

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
