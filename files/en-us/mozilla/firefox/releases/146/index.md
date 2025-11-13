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

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("color_value/contrast-color()")}} [CSS function](/en-US/docs/Web/CSS/Reference/Values/Functions) is now supported. This function takes a {{cssxref("color_value","color")}} value and returns a contrasting color that ensures at least [WCAG AA minimum contrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum).
  ([Firefox bug 1682439](https://bugzil.la/1682439)).

- The {{cssxref("text-decoration-inset")}} property is now supported, which enables adjusting the start and end points of an element's {{cssxref("text-decoration")}} so it can be shortened, lengthened, or have its position shifted with respect to the rendered text.
  ([Firefox bug 1979915](https://bugzil.la/1979915), [Firefox bug 1997157](https://bugzil.la/1997157), [Firefox bug 1993043](https://bugzil.la/1993043)).

- The {{cssxref("@scope")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) is now supported by default. This enables you to select elements in specific DOM subtrees, targeting elements precisely without writing overly-specific selectors that are hard to override, and without coupling your selectors too tightly to the DOM structure. ([Firefox bug 1991105](https://bugzil.la/1991105)).

- The legacy [`-webkit-fill-available`](/en-US/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) keyword is now supported as a value for the CSS {{cssxref("width")}} and {{cssxref("height")}} properties to improve web compatibility.
  This keyword is an alias for the recently-standardized `stretch` keyword (i.e., [`width: stretch`](/en-US/docs/Web/CSS/Reference/Properties/width#stretch) and [`height: stretch`](/en-US/docs/Web/CSS/Reference/Properties/height#stretch)), which isn't yet supported in Firefox.
  ([Firefox bug 1988938](https://bugzil.la/1988938), [Firefox bug 1789477](https://bugzil.la/1789477)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

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
