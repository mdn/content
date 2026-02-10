---
title: Firefox 148 release notes for developers (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 148 that affect developers.
Firefox 148 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [February 24, 2026](https://whattrainisitnow.com/release/?version=148).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The initial `about:blank` document now loads synchronously. A browsing context's first navigation may resolve to `about:blank` (for example, when the initial URL is empty or explicitly set to `about:blank`). In these cases, Firefox no longer replaces the initial empty document with a second, asynchronously loaded one, and instead fires the `load` event synchronously on the initial document. ([Firefox bug 543435](https://bugzil.la/543435)).

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("position-area")}} property in [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) now correctly keeps the anchored element within the viewport.
  ([Firefox bug 2008537](https://bugzil.la/2008537)).

- The {{cssxref("overflow")}}, {{cssxref("overflow-x")}}, and {{cssxref("overflow-y")}} CSS properties can now be used on {{glossary("replaced elements")}} such as images, in the same way that they are used with other elements.
  Previously replaced elements were always clipped to their bounding container.
  ([Firefox bug 1999100](https://bugzil.la/1999100)).

<!-- #### Removals -->

### JavaScript

- The {{jsxref("Iterator.zip()")}} and {{jsxref("Iterator.zipKeyed()")}} static methods are now supported.
  These "zip" together multiple input iterators, returning a new iterator that yields the group of input elements at each iteration step.
  They are useful when you need to combine data from multiple input iterators that are positionally aligned (the first value yielded by the first iterator corresponds to the first value yielded by the other iterators, and so on).
  ([Firefox bug 2003333](https://bugzil.la/2003333)).

- The [TC39 Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features) proposal has been implemented.
  This updates {{jsxref("RegExp.prototype.compile()")}} so that a {{jsxref("TypeError")}} is thrown if it is called on a subclass of {{jsxref("RegExp")}}, or if the method is called on a `RegExp` that was defined in a different realm.
  `RegExp` static properties, such as `RegExp.$1` – `RegExp.$9` and `RegExp.input` (and its alias `RegExp.$_`), are normalized to be configurable and non-enumerable.
  In particular this means that they can be deleted from the `RegExp` object.
  ([Firefox bug 1306461](https://bugzil.la/1306461)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) is now supported.
  This provides mechanisms to ensure that properties and functions that can potentially be used as vectors for XSS attacks are only able to be called with data that has been passed through a transformation function.
  The mechanisms allow auditing of unsafe uses of code.
  They don't mandate how the data is transformed, but might, for example, be used to sanitize unsafe HTML elements from user-provided strings.
  ([Firefox bug 1994690](https://bugzil.la/1994690)).

- The {{domxref("Location.ancestorOrigins")}} property is now supported, which enables you to determine whether a document is being embedded in an {{htmlelement("iframe")}} and, if so, by which site(s).
  ([Firefox bug 1085214](https://bugzil.la/1085214)).

- The {{domxref("MouseEvent.movementX", "movementX")}} and {{domxref("MouseEvent.movementY", "movementY")}} properties on the {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} event are now populated when the pointer is moved — previously these were set to zero.
  ([Firefox bug 1987671](https://bugzil.la/1987671)).

- The {{domxref("NavigationPrecommitController.addHandler()")}} method of the [Navigation API](/en-US/docs/Web/API/Navigation_API) is now supported.
  This can be used to dynamically register a post-commit navigation handler inside a pre-commit handler, which is useful when the actions of the committed navigation depend on data fetched in the pre-commit phase.
  ([Firefox bug 2009004](https://bugzil.la/2009004)).

#### DOM

- The "paste" command can now be used with {{domxref("Document.execCommand()")}} in web content (in addition to web extensions).
  This is implemented using the [Clipboard API](/en-US/docs/Web/API/Clipboard_API) and shares the same [Security considerations](/en-US/docs/Web/API/Clipboard_API#security_considerations), such as requiring transient activation and user acknowledgement when pasting cross-origin content.
  ([Firefox bug 1998195](https://bugzil.la/1998195)).

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

These features are shipping in Firefox 148 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  The [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) makes it possible to open an always-on-top window that can be populated with arbitrary HTML content such as a video with custom controls or a set of streams showing the participants of a video conference call.
  ([Firefox bug 1858562](https://bugzil.la/1858562)).
