---
title: Firefox 147 release notes for developers (Nightly)
short-title: Firefox 147 (Nightly)
slug: Mozilla/Firefox/Releases/147
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 147 that affect developers.
Firefox 147 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [January 13, 2026](https://whattrainisitnow.com/release/?version=147).

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

- The `-webkit-` prefixed version of the {{cssxref("perspective")}} property is now supported with unitless values — for example `-webkit-perspective: 800` — for increased compatibility.
  ([Firefox bug 1362499](https://bugzil.la/1362499)).
- [View transition types](/en-US/docs/Web/API/View_Transition_API/Using_types) are now supported, which provide a mechanism by which different **types** can be specified for active view transitions. CSS can then be used to apply different animations to DOM elements when their content updates, depending on the transition type specified. Firefox 147 adds support for single-page app (SPA) view transition types only, not cross-document view transition types.
  ([Firefox bug 2001878](https://bugzil.la/2001878)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Document.activeViewTransition")}} property is now supported, which returns a {{domxref("ViewTransition")}} instance representing the [view transition](/en-US/docs/Web/API/View_Transition_API) currently active on the document. This provides a consistent way to access an active view transition in any context without having to manually store a reference to it for later use. ([Firefox bug 2001836](https://bugzil.la/2001836)).

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

These features are shipping in Firefox 147 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
