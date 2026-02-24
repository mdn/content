---
title: Firefox 148 release notes for developers (Stable)
short-title: Firefox 148 (Stable)
slug: Mozilla/Firefox/Releases/148
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 148 that affect developers.
Firefox 148 was released on [February 24, 2026](https://whattrainisitnow.com/release/?version=148).

## Changes for web developers

### HTML

- The initial `about:blank` document now loads synchronously. A browsing context's first navigation may resolve to `about:blank` (for example, when the initial URL is empty or explicitly set to `about:blank`). In these cases, Firefox no longer replaces the initial empty document with a second, asynchronously loaded one, and instead fires the `load` event synchronously on the initial document. ([Firefox bug 543435](https://bugzil.la/543435)).

### CSS

- The {{cssxref("position-area")}} property in [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) now correctly keeps the anchored element within the viewport.
  ([Firefox bug 2008537](https://bugzil.la/2008537)).

- The {{cssxref("position-try-order")}} property in [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) is now supported and allows changing the order in which position fallback options are tried based on the space available. This also affects the {{cssxref("position-try")}} shorthand property.
  ([Firefox bug 1989059](https://bugzil.la/1989059)).

- The {{cssxref("overflow")}}, {{cssxref("overflow-x")}}, and {{cssxref("overflow-y")}} CSS properties can now be used on {{glossary("replaced elements")}} such as images, in the same way that they are used with other elements.
  Prior to this, replaced elements were always clipped to their bounding container.
  ([Firefox bug 1999100](https://bugzil.la/1999100)).

- The CSS {{cssxref("basic-shape/shape")}} function is now available by default. `shape()` is a {{cssxref("basic-shape")}} data type that enables you to define a shape in the {{cssxref("clip-path")}} and {{cssxref("offset-path")}} properties using one or more "shape commands". These commands are very similar to the [SVG path commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands). The `shape()` function is similar in some respects to the {{cssxref("basic-shape/path","path()")}} function, but unlike `path()`, which uses the [SVG path](/en-US/docs/Web/SVG/Reference/Element/path) syntax, `shape()` uses standard CSS syntax. This allows you to use CSS units and CSS math functions, which makes it easy to create and edit shapes.
  ([Firefox bug 1982941](https://bugzil.la/1982941)).

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

### APIs

- The [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) is now supported, along with related methods like {{domxref("Element.setHTML", "setHTML()")}}.
  This allows you to sanitize HTML before inserting it into the DOM, giving you full control over the resulting content, and reducing the risk of XSS attacks.
  ([Firefox bug 1650370](https://bugzil.la/1650370)).

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

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed a race condition during initialization of required browser features when opening a new window, preventing issues when navigating immediately to another URL ([Firefox bug 1891028](https://bugzil.la/1891028)).
- Fixed an interoperability issue between Marionette and WebDriver BiDi where the BiDi `clientWindow` ID was incorrectly used as a window handle in Marionette ([Firefox bug 2002949](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Added initial support for interacting with the browser's chrome scope (the Firefox window itself). The `browsingContext.getTree` command now accepts the vendor specific `moz:scope` parameter and returns chrome contexts when set to `chrome` and Firefox was started with the `--remote-allow-system-access` argument. These contexts can be used with `script.evaluate` and `script.callFunction` to execute privileged JavaScript with access to Gecko APIs. Other commands do not yet support chrome contexts, but support will be added incrementally as needed ([Firefox bug 1944568](https://bugzil.la/1944568), [Firefox bug 1944570](https://bugzil.la/1944570), and [Firefox bug 1851788](https://bugzil.la/1851788)).
- Updated the `emulation.setGeolocationOverride` and `emulation.setScreenOrientationOverride` commands to implement the new reset behavior: contexts are reset only when the `contexts` parameter is provided, and user contexts only when the `userContexts` parameter is specified ([Firefox bug 1998732](https://bugzil.la/1998732) and [Firefox bug 1998734](https://bugzil.la/1998734)).
- Fixed a race condition in `browsingContext.create` where opening a new tab in the foreground could return before the document became visible ([Firefox bug 2003857](https://bugzil.la/2003857)).
- Fixed an issue that occurred when a navigation redirected to an error page ([Firefox bug 2013822](https://bugzil.la/2013822)).
- Fixed an issue in `network.getData` that caused a `RangeError` when decoding chunked response bodies due to a size mismatch ([Firefox bug 2004973](https://bugzil.la/2004973)).
- Fixed an issue where the `browsingContext.userPromptOpened` and `browsingContext.userPromptClosed` events incorrectly reported the top-level context ID instead of the iframe's context ID ([Firefox bug 1964905](https://bugzil.la/1964905)).
- Improved the performance of WebDriver BiDi commands by approximately 100 ms when the selected context is no longer available during the command execution ([Firefox bug 1934326](https://bugzil.la/1934326)).

#### Marionette

- Added the `Reporting:GenerateTestReport` command to [generate a test report via the Reporting API](https://www.w3.org/TR/reporting-1/#generate-test-report-command) ([Firefox bug 1909662](https://bugzil.la/1909662)).

## Experimental web features

These features are shipping in Firefox 148 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  The [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) makes it possible to open an always-on-top window that can be populated with arbitrary HTML content such as a video with custom controls or a set of streams showing the participants of a video conference call.
  ([Firefox bug 1858562](https://bugzil.la/1858562)).
