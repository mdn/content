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

#### DOM

- [Scoped custom element registries](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) are now supported,
  this allows a shadow tree to create an independent {{domxref("CustomElementRegistry")}} whose definitions only apply to that specific DOM subtree. This can be used to avoid collisions where multiple web components declare elements with the same name. The `customElementRegistry` property can be used on {{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("ShadowRoot")}}. The [`CustomElementRegistry()` constructor](/en-US/docs/Web/API/CustomElementRegistry/CustomElementRegistry) creates a new `CustomElementRegistry` object for scoped usage. ([Firefox bug 2070506](https://bugzil.la/2070506))

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
