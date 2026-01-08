---
title: Firefox 147 release notes for developers (Beta)
short-title: Firefox 147 (Beta)
slug: Mozilla/Firefox/Releases/147
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 147 that affect developers.
Firefox 147 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [January 13, 2026](https://whattrainisitnow.com/release/?version=147).

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

### SVG

- When an SVG file is used as an [image source](/en-US/docs/Web/SVG/Guides/SVG_as_an_image) (for example, embedded into a page via an {{htmlelement("img")}} element or as a CSS {{cssxref("background-image")}}), the SVG URL now supports [media fragments](/en-US/docs/Web/URI/Reference/Fragment/Media_fragments). ([Firefox bug 1999989](https://bugzil.la/1999989)). This means that:
  - When the SVG includes a [SMIL animation](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL), you can use [temporal dimension](/en-US/docs/Web/URI/Reference/Fragment/Media_fragments#temporal_dimension_fragment_syntax) syntax to play a portion of the animation from a specific start time to a specific end time, after which the animation will pause.
  - You can use [spatial dimension](/en-US/docs/Web/URI/Reference/Fragment/Media_fragments#spatial_dimension_fragment_syntax) syntax to display a specific area of the SVG document.

<!-- #### Removals -->

### CSS

- [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) is now enabled by default.
  ([Firefox bug 1988225](https://bugzil.la/1988225)).
  - The [`anchor-center`](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) value, which provides a convenient way to center an anchor-positioned element on its anchor, was added in version 147. It is available on the {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-items")}}, and {{cssxref("place-self")}} properties.
    ([Firefox bug 1909339](https://bugzil.la/1909339))
  - The {{cssxref("position-anchor")}} value `none` was added in version 147, which enables an implicit or explicit association between a [CSS anchor](/en-US/docs/Web/CSS/Guides/Anchor_positioning) and an anchor-positioned element to be removed.
    ([Firefox bug 1999972](https://bugzil.la/1999972)).
- The `-webkit-` prefixed version of the {{cssxref("perspective")}} property is now supported with unitless values — for example `-webkit-perspective: 800` — for increased compatibility.
  ([Firefox bug 1362499](https://bugzil.la/1362499)).
- [View transition types](/en-US/docs/Web/API/View_Transition_API/Using_types) are now supported, which provide a mechanism by which different **types** can be specified for active view transitions. CSS can then be used to apply animations to DOM elements when their content updates, depending on the transition type specified. Firefox 147 adds support for single-page app (SPA) view transition types only, not cross-document view transition types.
  ([Firefox bug 2001878](https://bugzil.la/2001878)).
- The {{cssxref("counter-increment")}}, {{cssxref("counter-reset")}}, {{cssxref("counter-set")}}, and {{cssxref("quotes")}} properties are now supported on the {{cssxref("::marker")}} pseudo-element.
  ([Firefox bug 2000404](https://bugzil.la/2000404)).
- The following [relative length units based on root element's font](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_root_elements_font) are now supported: `rcap`, `rch`, `rex`, and `ric`. These units allow you to define `<length>` values based on the size of a particular character or font attribute of the [root](/en-US/docs/Web/CSS/Reference/Selectors/:root) element.
  ([Firefox bug 1740584](https://bugzil.la/1740584)).

<!-- #### Removals -->

### JavaScript

- CSS module scripts are now supported, allowing a stylesheet to be loaded into a script as a {{domxref("CSSStyleSheet")}} instance using the [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) keyword and the [`type` import attribute](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) set to `type="css"`.
  ([Firefox bug 1986681](https://bugzil.la/1986681)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Document.activeViewTransition")}} property is now supported, which returns a {{domxref("ViewTransition")}} instance representing the [view transition](/en-US/docs/Web/API/View_Transition_API) currently active on the document. This provides a consistent way to access an active view transition in any context without having to manually store a reference to it for later use. ([Firefox bug 2001836](https://bugzil.la/2001836)).
- [WebGPU API](/en-US/docs/Web/API/WebGPU_API) support is now enabled for all macOS versions on devices with Apple Silicon processors (previously only macOS Tahoe support was enabled). ([Firefox bug 1993341](https://bugzil.la/1993341)).
- The [Navigation API](/en-US/docs/Web/API/Navigation_API) is now supported.
  This provides the ability to initiate, intercept, and manage browser navigation actions, and to examine an application's history entries. This is a successor to previous web platform features such as the {{domxref("History API", "", "", "nocode")}} and {{domxref("window.location")}}, which solves their shortcomings and is specifically aimed at the needs of {{glossary("SPA", "single-page applications (SPAs)")}}.
  ([Firefox bug 1997962](https://bugzil.la/1997962)).
- Brotli compression is now supported for both [`CompressionStream`](/en-US/docs/Web/API/CompressionStream/CompressionStream#brotli) and [`DecompressionStream`](/en-US/docs/Web/API/DecompressionStream/DecompressionStream#brotli).
  ([Firefox bug 1921583](https://bugzil.la/1921583)).
- Service workers can now be ECMAScript [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules).
  To load a service worker module, specify a [`type`](/en-US/docs/Web/API/ServiceWorkerContainer/register#type) of `'module'` when calling {{domxref("ServiceWorkerContainer.register()")}}.
  ([Firefox bug 1360870](https://bugzil.la/1360870)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed the new session response to include the required `setWindowRect` property. ([Firefox bug 1916522](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Implemented the `input.fileDialogOpened` event, which is emitted whenever a file picker is triggered by the content page, for instance after clicking on an input with `type="file"`. ([Firefox bug 1855045](https://bugzil.la/1855045)).
- Implemented the `emulation.setScreenSettingsOverride` command to allow clients to emulate the screen dimensions for a list of browsing contexts or user contexts. ([Firefox bug 2000651](https://bugzil.la/2000651)).
- Fixed an issue where `browsingContext.navigate` with `wait=none` didn't always contain the real target URL. ([Firefox bug 2004191](https://bugzil.la/2004191)).
- Updated `script.evaluate` and `script.callFunction` to bypass Content Security Policy (CSP). ([Firefox bug 1941780](https://bugzil.la/1941780)).
- Fixed missing `script.realmCreated` event for new browsing contexts created via `window.open`. ([Firefox bug 2002721](https://bugzil.la/2002721)).
- Updated `emulation.setLocaleOverride` to override the `Accept-Language` header. ([Firefox bug 1995691](https://bugzil.la/1995691)).
- Updated `emulation.setLocaleOverride` to throw an error when called with the `locale` argument equal to `undefined`. ([Firefox bug 2003992](https://bugzil.la/2003992)).

#### Marionette

- Fixed JSON serialization of Chrome Windows. ([Firefox bug 2000801](https://bugzil.la/2000801)).

## Changes for add-on developers

- Temporarily loaded Manifest Version 3 extensions can now load scripts from localhost, as explained in [Scripts from localhost](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) in the Content Security Policy article. ([Firefox bug 1864284](https://bugzil.la/1864284))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 147 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
