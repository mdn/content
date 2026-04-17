---
title: Firefox 150 release notes for developers (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 150 that affect developers.
Firefox 150 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [April 21, 2026](https://whattrainisitnow.com/release/?version=150).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Developer Tools

- A specific message is now displayed in the [_Response tab_ of the Network pane](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) to indicate why there is no response data when a request has been redirected.
  ([Firefox bug 2016679](https://bugzil.la/2016679)).

### HTML

- The `"auto"` keyword is now supported as an option for the [`sizes`](/en-US/docs/Web/HTML/Reference/Elements/img#sizes) attribute of `<img>` elements (and [`HTMLImageElement.sizes`](/en-US/docs/Web/API/HTMLImageElement/sizes)).
  This allows lazy-loaded `<img>` elements to use the calculated image layout size, after any CSS has been applied, to select which image to display from a [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset).
  This is simpler that specifying media conditions and their associated sizes in the attribute, which likely duplicates behavior that is already captured in CSS media queries.
  ([Firefox bug 1819581](https://bugzil.la/1819581)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The [`color-mix()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS function now accepts multiple [`<color>`](/en-US/docs/Web/CSS/Reference/Values/color_value) values, rather than just two. This allows you to mix any number of colors. ([Firefox bug 2024171](https://bugzil.la/2024171)).

- The [`light-dark()`](/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS function now accepts [`<image>`](/en-US/docs/Web/CSS/Reference/Values/image) values. This allows using images, gradients, and so on for different color schemes.
  ([Firefox bug 2023569](https://bugzil.la/2023569)).

- The media-based pseudo-classes {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, and {{cssxref(":volume-locked")}} are now supported. They allow you to style {{htmlelement("audio")}} and {{htmlelement("video")}} elements based on their current state, such as playing or paused. ([Firefox bug 2020775](https://bugzil.la/2020775)).

- The {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}} properties (and the {{cssxref("animation-range")}} shorthand property) are now supported. These properties set the start and end of an animation's attachment range along its timeline, allowing you to control where along a [scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) timeline an animation will start and end. ([Firefox bug 1825427](https://bugzil.la/1825427)).

- The {{cssxref("revert-rule")}} CSS keyword is now supported. It allows a property's value to be determined as if the current style rule had not been present, so that the value from another matching rule can take effect instead. ([Firefox bug 2017307](https://bugzil.la/2017307)).

- The {{cssxref("overscroll-behavior")}} CSS property (and its longhand properties {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}}, and {{cssxref("overscroll-behavior-inline")}}) now correctly apply to scroll containers that have no scrollable overflow, such as elements with `overflow: hidden`. Previously, the property was ignored on such elements. ([Firefox bug 1837436](https://bugzil.la/1837436)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Sanitizer.replaceElementWithChildren()")}} method will now return `false` if the element to be replaced is {{htmlelement("html")}} in the HTML [namespace](/en-US/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace).
  In other words, you can't use this method to create a {{domxref("Sanitizer")}} that will replace the `<html>` element with its inner content. ([Firefox bug 2022176](https://bugzil.la/2022176)).

#### DOM

- The [`options.shadowRoots`](/en-US/docs/Web/API/Document/caretPositionFromPoint#shadowroots) argument of the {{domxref('Document.caretPositionFromPoint()')}} method is now supported.
  This allows the method to return the node containing the caret from within a shadow DOM, provided its associated {{domxref("ShadowRoot")}} was passed as an option.
  ([Firefox bug 1914596](https://bugzil.la/1914596)).

- The {{domxref("CSSFontFaceDescriptors")}} interface is now supported, and an instance of this type is returned by the {{domxref("CSSFontFaceRule.style")}} property. ([Firefox bug 2019904](https://bugzil.la/2019904)).

- The non-standard {{domxref("Document/caretRangeFromPoint","caretRangeFromPoint()")}} method of the {{domxref("Document")}} interface is now supported. ([Firefox bug 1550635](https://bugzil.la/1550635)).

- The `ariaNotify()` method is now supported on {{domxref("Document/ariaNotify","Document")}} and {{domxref("Element/ariaNotify","Element")}}.
  This queues a string of text to be announced by a {{glossary("screen reader")}}, providing a more ergonomic and reliable alternative to [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox bug 2018095](https://bugzil.la/2018095)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed an issue where having pending downloads when closing the browser could be blocked by a prompt. The prompt is now dismissed automatically. ([Firefox bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Added the `emulation.setNetworkConditions` command, which supports the `type: offline` at the moment. Using this, you can emulate offline mode either on specific browsing contexts, on user contexts (a.k.a. containers) or globally. ([Firefox bug 1993079](https://bugzil.la/1993079)).
- Improved our support for non utf-8 header values across all the `network` module commands and events. They are now properly serialized to `BytesValue`. ([Firefox bug 1994996](https://bugzil.la/1994996)).
- Fixed a bug for download events triggered by a response with the "Content-Disposition" header. Such events were missing the `navigation` property if the download was initiated by a link with `target="_blank"`. ([Firefox bug 1999481](https://bugzil.la/1999481)).
- Updated the `log.entryAdded` event to only be emitted for console API calls that actually print a message in browser developer tools (see also the console specification: [using the printer](https://console.spec.whatwg.org/#printer)). With this change, using `console.clear` or `console.time` no longer triggers an event. ([Firefox bug 1866749](https://bugzil.la/1866749)).
- Fixed a race condition with the `browsingContext.setViewport` command which could timeout if several contexts were created in parallel. ([Firefox bug 2019511](https://bugzil.la/2019511)).
- Improved the `browsingContext.locateNodes` command to allow retrieving the HTML element (`documentElement`) of a page when using the `css` locator. ([Firefox bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Fixed the `WebDriver:getShadowRoot` command to stop returning user-agent shadow roots. ([Firefox bug 2016741](https://bugzil.la/2016741)).

## Changes for add-on developers

- The behavior of {{WebExtAPIRef("tabs.move")}} is updated for split views so that:
  - The order of tabs in a split view can be swapped. ([Firefox bug 2016762](https://bugzil.la/2016762))
  - When the list of tabs includes both split view tabs and places one or more tabs between them, the tabs are moved apart and the split view closed. ([Firefox bug 2022549](https://bugzil.la/2022549))
- Resolved an issue with some JavaScript [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) calls failing to import CSS. ([Firefox bug 2016369](https://bugzil.la/2016369))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 150 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Namespaced attributes in `attr()` CSS function**: `layout.css.attr.enabled`

  The {{cssxref("attr")}} CSS function now accepts [namespaced attributes](/en-US/docs/Web/CSS/Reference/Values/attr#namespaces). This allows you to take attributes from elements of [XML](/en-US/docs/Web/XML)-based languages, such as [SVG](/en-US/docs/Web/SVG) and style them accordingly. ([Firefox bug 2014060](https://bugzil.la/2014060))

- **Absolutely positioned elements in multi-column containers and when printing**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolutely positioned elements inside [multi-column containers](/en-US/docs/Web/CSS/Guides/Multicol_layout) and when printing are now correctly positioned and fragmented. This improves interoperability with other browsers and prevents layout issues such as overlapping text or content loss. ([Firefox bug 2018797](https://bugzil.la/2018797)).

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  The {{domxref("CustomElementRegistry","customElementRegistry")}} property is supported on {{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("ShadowRoot")}}.
  This allows the definition of [scoped custom element registries](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox bug 2018900](https://bugzil.la/2018900)).

- **Multiple import maps**: `dom.multiple_import_maps.enabled`

  [Multiple import maps](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) give developers more flexibility when structuring and loading JavaScript modules.
  ([Firefox bug 1916277](https://bugzil.la/1916277)).
