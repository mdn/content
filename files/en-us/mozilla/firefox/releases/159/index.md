---
title: Firefox 159 release notes for developers (Beta)
short-title: Firefox 159 (Beta)
slug: Mozilla/Firefox/Releases/159
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 159 that affect developers.
Firefox 159 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [October 27, 2026](https://whattrainisitnow.com/release/?version=159).

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

- [Scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) are now enabled by default, which allow you to animate property values along a scroll-based timeline (that is, by scrolling a scroll container) rather than the default time-based document timeline.
  ([Firefox bug 1324602](https://bugzil.la/1324602)).

#### Removals

- The legacy masonry layout syntax has been removed: the `masonry` value of the {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} properties, and the `masonry-auto-flow` property. This syntax was only enabled by default in Nightly, behind the `layout.css.grid-template-masonry-value.enabled` preference. It's superseded by [grid lanes layout](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes), which uses the `grid-lanes` and `inline-grid-lanes` values of the {{cssxref("display")}} property. ([Firefox bug 2077170](https://bugzil.la/2077170)).

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Methods that sanitize HTML with the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API), such as {{domxref("Element.setHTML()")}}, now remove unwanted elements and attributes as the markup is parsed, instead of parsing all of the markup first and then cleaning up resulting DOM tree afterwards. The result is the same, except that neighboring text now lands in a single text node instead of being split across several. ([Firefox bug 2070498](https://bugzil.la/2070498)).

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

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 159 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
