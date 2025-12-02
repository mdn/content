---
title: Firefox 146 release notes for developers (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 146 that affect developers.
Firefox 146 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [December 9, 2025](https://whattrainisitnow.com/release/?version=146).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

- Operator mirroring in right-to-left (RTL) modes and stretching now work properly when used in combination.
  ([Firefox bug 1994172](https://bugzil.la/1994172)).

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("color_value/contrast-color()")}} function is now supported. This function takes a [`<color>`](/en-US/docs/Web/CSS/Reference/Values/color_value) value and returns a contrasting color that ensures at least [WCAG AA minimum contrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum).
  ([Firefox bug 1682439](https://bugzil.la/1682439)).

- The [`<color>`](/en-US/docs/Web/CSS/Reference/Values/color_value) data type now supports the `display-p3-linear` color space. This space is similar to [`display-p3`](/en-US/docs/Glossary/Color_space#display-p3), except that it uses a linear-light transfer function and has no gamma-encoding, which allows for a higher precision in the colors displayed.
  ([Firefox bug 1996318](https://bugzil.la/1996318)).

- The [`text-decoration-inset`](/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset) property is now supported, which enables adjusting the start and end points of an element's {{cssxref("text-decoration")}} so it can be shortened, lengthened, or have its position shifted with respect to the rendered text.
  ([Firefox bug 1979915](https://bugzil.la/1979915), [Firefox bug 1997157](https://bugzil.la/1997157), [Firefox bug 1993043](https://bugzil.la/1993043)).

- The {{cssxref("@scope")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) is now supported by default. This enables you to select elements in specific DOM subtrees, targeting elements precisely without writing overly-specific selectors that are hard to override, and without coupling your selectors too tightly to the DOM structure. ([Firefox bug 1991105](https://bugzil.la/1991105)).

- The legacy [`-webkit-fill-available`](/en-US/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) keyword is now supported as a value for the CSS {{cssxref("width")}} and {{cssxref("height")}} properties to improve web compatibility.
  This keyword is an alias for the recently-standardized `stretch` keyword (i.e., [`width: stretch`](/en-US/docs/Web/CSS/Reference/Properties/width#stretch) and [`height: stretch`](/en-US/docs/Web/CSS/Reference/Properties/height#stretch)), which isn't yet supported in Firefox.
  ([Firefox bug 1988938](https://bugzil.la/1988938), [Firefox bug 1789477](https://bugzil.la/1789477)).

<!-- #### Removals -->

### JavaScript

- {{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} now accept {{jsxref("Symbol")}} objects as keys, except for those that are [registered](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). ([Firefox bug 1966745](https://bugzil.la/1966745)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- {{domxref("SubtleCrypto.importKey()")}} now allows you to import keys defined as compressed elliptic curve points when using the [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) algorithms. ([Firefox bug 1971499](https://bugzil.la/1971499)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

<!-- #### General -->

#### WebDriver BiDi

- Updated the `emulation.setLocaleOverride` command to override the return value of "navigator.language/s" alongside JS APIs. ([Firefox bug 1994396](https://bugzil.la/1994396)).
- Updated the `emulation.setLocaleOverride` and `emulation.setTimezoneOverride` commands reset behavior to match recent specification changes. When calling this command to reset the override for a specific browsing context, overrides configured for a user context owning this browsing context will still apply now. ([Firefox bug 1988725](https://bugzil.la/1988725)).
- Added support for the `context` locator for the `browsingContext.locateNodes` command, which allows to retrieve the container of non-top-level browsing contexts, such as iframe elements. ([Firefox bug 1941270](https://bugzil.la/1941270)).
- Implemented the `network.setExtraHeaders` command, which can be used to specify request headers which will be automatically added to requests triggered in the provided navigables or user contexts. ([Firefox bug 1979731](https://bugzil.la/1979731)).
- Updated all our network data collection commands (`network.addDataCollector`, `network.getData` and `network.disownData`) to support the “request” data type, which allows to collect and retrieve request post data. ([Firefox bug 1988955](https://bugzil.la/1988955)).
- Improved our implementation for `network.getData` to also support requests using the `data:` scheme . ([Firefox bug 1992210](https://bugzil.la/1992210)).
- Fixed a bug for `network.getData` which was not throwing the expected `NoSuchNetworkData` error for unsupported requests. ([Firefox bug 1992214](https://bugzil.la/1992214)).
- Fixed a bug in our `network` events where different requests might be reusing the same id, mostly impacting data URLs or cached requests. ([Firefox bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Fixed a regression in `WebDriver:GetElementText` that caused text containing accented characters (e.g. "ó") to be incorrectly capitalized. ([Firefox bug 1986392](https://bugzil.la/1986392)).
- Fixed a bug in the `WebFrame` JSON deserialization that incorrectly raised a `no such window` error instead of `no such frame` when handling invalid frames. ([Firefox bug 1996540](https://bugzil.la/1996540)).
- Added a WebDriver extension to control the Global Privacy Control signal. ([Firefox bug 1969865](https://bugzil.la/1969865)).

## Changes for add-on developers

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} and {{WebExtAPIRef("browsingData.remove")}} (when `localStorage` is set in {{WebExtAPIRef("browsingData.DataTypeSet")}}) now delete objects from [`sessionStorage`](/en-US/docs/Web/API/Window/sessionStorage). ([Firefox bug 1886894](https://bugzil.la/1886894))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 146 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly builds now support the Navigation API, which provides the ability to initiate, intercept, and manage browser navigation actions. It can also examine an application's history entries. This is a successor to previous web platform features such as the {{domxref("History API", "", "", "nocode")}} and {{domxref("window.location")}}, which solves their shortcomings and is specifically aimed at the needs of {{glossary("SPA", "single-page applications (SPAs)")}}.
  ([Firefox bug 1979288](https://bugzil.la/1979288)).

- **Custom media queries**: `layout.css.custom-media.enabled`

  The [`@custom-media`](/en-US/docs/Web/CSS/Reference/At-rules/@custom-media) CSS at-rule defines aliases for long or complex media queries. Instead of repeating the same hardcoded `<media-query-list>` in multiple `@media` at-rules, it can be defined once in a `@custom-media` at-rule and referenced throughout the stylesheet whenever needed. ([Firefox bug 1991105](https://bugzil.la/1744292)).
