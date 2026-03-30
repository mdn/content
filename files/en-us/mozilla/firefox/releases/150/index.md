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

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- The [`options.shadowRoots`](/en-US/docs/Web/API/Document/caretPositionFromPoint#shadowroots) argument of the {{domxref('Document.caretPositionFromPoint()')}} method is now supported.
  This allows the method to return the node containing the caret from within a shadow DOM, provided its associated {{domxref("ShadowRoot")}} was passed as an option.
  ([Firefox bug 1914596](https://bugzil.la/1914596)).

- The non-standard {{domxref("Document/caretRangeFromPoint","caretRangeFromPoint()")}} method of the {{domxref("Document")}} interface is now supported. ([Firefox bug 1550635](https://bugzil.la/1550635)).
- The `ariaNotify()` method is now supported on {{domxref("Document/ariaNotify","Document")}} and {{domxref("Element/ariaNotify","Element")}}.
  This queues a string of text to be announced by a {{glossary("screen reader")}}, providing a more ergonomic and reliable alternative to [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox bug 2018095](https://bugzil.la/2018095)).

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

These features are shipping in Firefox 150 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
