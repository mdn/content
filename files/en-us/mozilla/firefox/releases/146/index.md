---
title: Firefox 146 release notes for developers (Stable)
short-title: Firefox 146 (Stable)
slug: Mozilla/Firefox/Releases/146
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 146 that affect developers.
Firefox 146 was released on [December 9, 2025](https://whattrainisitnow.com/release/?version=146).

## Changes for web developers

### Developer Tools

- In the Rule view of the Inspector, when a displayed ruleset declares 10 or more [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*) that are unused, those properties are hidden by default. This reduces clutter, and in some cases also speeds up the rendering of the Inspector panel. In such cases, the hidden properties can be displayed via a "Show..." button provided at the bottom of the ruleset.
  ([Firefox bug 1719461](https://bugzil.la/1719461)).

### HTML

No notable changes.

### MathML

- Operator mirroring in right-to-left (RTL) modes and stretching now work properly when used in combination.
  ([Firefox bug 1994172](https://bugzil.la/1994172)).
- The {{cssxref("math-shift")}} property is now supported. This allows developers to indicate whether superscript rendering in MathML formulas should be normal or compact, affecting the height to which superscript text is shifted.
  ([Firefox bug 1994171](https://bugzil.la/1994171)).

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

### JavaScript

- {{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} now accept {{jsxref("Symbol")}} objects as keys, except for those that are [registered](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). ([Firefox bug 1966745](https://bugzil.la/1966745)).

### APIs

- {{domxref("SubtleCrypto.importKey()")}} now allows you to import keys defined as compressed elliptic curve points when using the [ECDSA](/en-US/docs/Web/API/SubtleCrypto/sign#ecdsa) or [ECDH](/en-US/docs/Web/API/SubtleCrypto/deriveKey#ecdh) algorithms. ([Firefox bug 1971499](https://bugzil.la/1971499)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Updated the `emulation.setLocaleOverride` command to override the return value of `navigator.language` and `navigator.languages` alongside JS APIs. ([Firefox bug 1994396](https://bugzil.la/1994396)).
- Updated the `emulation.setLocaleOverride` and `emulation.setTimezoneOverride` commands reset behavior to match recent specification changes. When calling this command to reset the override for a specific browsing context, overrides configured for a user context owning this browsing context will still apply. ([Firefox bug 1988725](https://bugzil.la/1988725)).
- Added support for the `context` locator to the `browsingContext.locateNodes` command, which allows to retrieve the container of non-top-level browsing contexts, such as iframe elements. ([Firefox bug 1941270](https://bugzil.la/1941270)).
- Implemented the `network.setExtraHeaders` command, which can be used to specify request headers which will be automatically added to requests triggered in the provided browsing contexts or user contexts. ([Firefox bug 1979731](https://bugzil.la/1979731)).
- Updated all our network data collection commands (`network.addDataCollector`, `network.getData` and `network.disownData`) to support the `request` data type, which allows to collect and retrieve request post data. ([Firefox bug 1988955](https://bugzil.la/1988955)).
- Improved our implementation for `network.getData` to also support requests using the `data:` scheme. ([Firefox bug 1992210](https://bugzil.la/1992210)).
- Fixed a bug for `network.getData` which was not throwing the expected `no such network data` error for unsupported requests. ([Firefox bug 1992214](https://bugzil.la/1992214)).
- Fixed a bug in our `network` events where different requests were reusing the same id, mostly impacting data URLs or cached requests. ([Firefox bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Fixed a regression in `WebDriver:GetElementText` that caused text containing accented characters (e.g., "ó") to be incorrectly capitalized. ([Firefox bug 1986392](https://bugzil.la/1986392)).
- Fixed a bug in the `WebFrame` JSON deserialization that incorrectly raised a `no such window` error instead of `no such frame` when handling invalid frames. ([Firefox bug 1996540](https://bugzil.la/1996540)).
- Added a WebDriver extension to control the [Global Privacy Control](https://w3c.github.io/gpc/) signal. ([Firefox bug 1969865](https://bugzil.la/1969865)).

## Changes for add-on developers

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} and {{WebExtAPIRef("browsingData.remove")}} (when `localStorage` is set in {{WebExtAPIRef("browsingData.DataTypeSet")}}) now delete objects from [`sessionStorage`](/en-US/docs/Web/API/Window/sessionStorage). ([Firefox bug 1886894](https://bugzil.la/1886894))
- The {{WebExtAPIRef("proxy.onRequest")}} API adds support for MASQUE proxies (proxy tunnel over QUIC) in the {{WebExtAPIRef("proxy.ProxyInfo")}} return type. ([Firefox bug 1988988](https://bugzil.la/1988988) and Firefox bug 1998894](https://bugzil.la/1998894))

## Experimental web features

These features are shipping in Firefox 146 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` and `security.restrict_to_adults.respect_platform`

  The `<meta name="rating">` element allows websites to self-identify as restricted/adult content. Browsers that recognize this element can then take steps to restrict users from viewing the content. See [Restricting adult content with `<meta name="rating">`](/en-US/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating) for more details.
  ([Firefox bug 1991135](https://bugzil.la/1991135)).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly builds now support the [Navigation API](/en-US/docs/Web/API/Navigation_API), which provides the ability to initiate, intercept, and manage browser navigation actions. It can also examine an application's history entries. This is a successor to previous web platform features such as the {{domxref("History API", "", "", "nocode")}} and {{domxref("window.location")}}, which solves their shortcomings and is specifically aimed at the needs of {{glossary("SPA", "single-page applications (SPAs)")}}.
  ([Firefox bug 1979288](https://bugzil.la/1979288)).

- **Relative control points in CSS `shape()` curve commands**: `layout.css.basic-shape-shape.enabled`

  You can use [`<relative-control-point>`](/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) values when specifying a [`<curve-command>`](/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) or [`<smooth-command>`](/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in a CSS `shape()` function. These values let you specify control points that are positioned relative to the start or end point of the current command, or relative to the origin (top-left) of the container the shape is being drawn inside.

- **Custom media queries**: `layout.css.custom-media.enabled`

  The [`@custom-media`](/en-US/docs/Web/CSS/Reference/At-rules/@custom-media) CSS at-rule defines aliases for long or complex media queries. Instead of repeating the same hardcoded `<media-query-list>` in multiple `@media` at-rules, it can be defined once in a `@custom-media` at-rule and referenced throughout the stylesheet whenever needed. ([Firefox bug 1744292](https://bugzil.la/1744292)).
