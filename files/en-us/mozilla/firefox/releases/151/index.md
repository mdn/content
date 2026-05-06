---
title: Firefox 151 release notes for developers (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 151 that affect developers.
Firefox 151 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [May 19, 2026](https://whattrainisitnow.com/release/?version=151).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The [`shadowrootslotassignment` attribute](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) is now supported on {{htmlelement("template")}} elements, allowing declarative definition of slot assignment behavior for shadow roots.
  The attribute is reflected in JavaScript by {{domxref("ShadowRoot.slotAssignment")}} or {{domxref("HTMLTemplateElement.shadowRootSlotAssignment")}}
  ([Firefox bug 2031295](https://bugzil.la/2031295), [Firefox bug 2023824](https://bugzil.la/2023824)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule supports [`style()`](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) queries. This allows you to check if a container has a valid CSS declaration, a CSS property, or a custom property, and apply styles to its children accordingly. ([Firefox bug 2016929](https://bugzil.la/2016929), ([Firefox bug 2019254](https://bugzil.la/2019254)), ([Firefox bug 2024601](https://bugzil.la/2024601)), [Firefox bug 2030645](https://bugzil.la/2030645)).

- The {{cssxref("position-anchor")}} CSS property now supports the `normal` (default) value. This allows the matching of the {{cssxref("position-area")}} property, so if the `position-area` property updates the `position-anchor` property will also. ([Firefox bug 2030351](https://bugzil.la/2030351)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Sanitizer.replaceElementWithChildren()")}} method now returns `false` if the element to be replaced is {{svgelement("svg")}} in the SVG [namespace](/en-US/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) or {{mathmlelement("math")}} in the MathML namespace (joining {{htmlelement("html")}}, which was disallowed in [Firefox 150](/en-US/docs/Mozilla/Firefox/Releases/150#apis)).
  ([Firefox bug 2032359](https://bugzil.la/2032359)).
- The [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) is now supported on desktop platforms.
  This makes it possible to open an [always-on-top window](/en-US/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) that can be populated with arbitrary HTML content.
  It can be used to display any content that a user might want to view separate from the launching page (or even the browser), such as a set of streams showing the participants of a video conference call, a stock ticker, or a countdown timer.
  ([Firefox bug 2006594](https://bugzil.la/2006594)).
- The {{domxref("CanvasRenderingContext2D.lang")}} property is supported for setting the language of the canvas drawing context.
  While a DOM canvas can inherit this context from the `lang` attribute of its associated {{htmlelement("canvas")}} element, this is useful for setting the context for an offscreen canvas, which may be rendered before being associated with a `<canvas>`.
  ([Firefox bug 1943070](https://bugzil.la/1943070)).
- The [`options.keyboardLock`](/en-US/docs/Web/API/Element/requestFullscreen#keyboardlock) property can now be passed as an option to {{domxref("Element.requestFullscreen()")}}, allowing websites to request keyboard lock when the element is displayed in fullscreen mode.
  This stops the <kbd>Esc</kbd> key from causing the element to leave fullscreen (a long-press is required instead), and some formerly-reserved browser hotkeys can now be intercepted and their default action prevented.
  ([Firefox bug 2032302](https://bugzil.la/2032302)).

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

- {{WebExtAPIRef("tabs.group()")}} and {{WebExtAPIRef("tabs.ungroup()")}} now correctly add and remove a split view when a call includes one of the split view's tabs. Previously, a call would fail or separate the split view. ([Firefox bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} now correctly moves a split view to the right when a call includes one of the split view's tabs. Previously, a call moved a split view only to the left or to the end of the tab list. ([Firefox bug 2027855](https://bugzil.la/2027855))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 151 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`@container style()` range syntax queries**: `layout.css.attr.enabled`

  The [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule [`style()`](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) queries now supports the _range syntax_. This allows you to check if a container has a valid CSS custom property and compare its value with comparison operators like `>`, `<`, `>=`, and `<=` and apply styles to its children accordingly. ([Firefox bug 2024601](https://bugzil.la/2024601)).
