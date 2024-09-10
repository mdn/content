---
title: Firefox 122 for developers
slug: Mozilla/Firefox/Releases/122
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 122 that affect developers. Firefox 122 was released on [January 23, 2024](https://whattrainisitnow.com/release/?version=122).

## Changes for web developers

### HTML

- {{HTMLElement("hr")}} elements are now allowed as children of {{HTMLElement("select")}} elements. This is a new feature that improves the readability of select lists with many options. ([Firefox bug 1830909](https://bugzil.la/1830909)).
- The `type` HTML attribute no longer has an effect if set to `none`, `disc`, `circle` or `square` in {{HTMLElement("ol")}} and no longer has an effect if set to `1`, `a`, `A`, `i` or `I` in {{HTMLElement("ul")}}. As `type` is a deprecated attribute for `<ul>` and `<ol>` lists, these should be styled with {{CSSxref("list-style-type")}} CSS property instead. ([Firefox bug 1868087](https://bugzil.la/1868087)).

### CSS

- The CSS {{cssxref("offset-position")}} property is now available by default. It defines the initial position of an element on a path. ([Firefox bug 1598152](https://bugzil.la/1598152))

- The various methods for defining a CSS {{cssxref("offset-path")}} — including [`<basic-shape>`](/en-US/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/en-US/docs/Web/CSS/offset-path#coord-box), and [`url()`](/en-US/docs/Web/CSS/offset-path#url) — are now enabled by default. ([Firefox bug 1598159](https://bugzil.la/1598159))

- The CSS {{cssxref("ray")}} function is now available by default. You can use this function to define an {{cssxref("offset-path")}} as a line segment that begins from an {{cssxref("offset-position")}} and extends in the direction of the specified angle. ([Firefox bug 1598151](https://bugzil.la/1598151))

- The {{CSSxref("clip-path")}} and {{CSSxref("offset-path")}} properties now accept [`rect()`](/en-US/docs/Web/CSS/basic-shape/rect) and [`xywh()`](/en-US/docs/Web/CSS/basic-shape/xywh) shape functions. These {{CSSXref("basic-shape")}} values allow the clipping and offsetting of elements with a rectangle defined by distance from the edge of the element (`rect()`) or coordinates and size (`xywh()`). ([Firefox bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- The {{jsxref("ArrayBuffer.prototype.transfer()")}} and {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} methods can now be used to [transfer ownership](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) of memory from one {{jsxref("ArrayBuffer")}} to another. After transfer, the original buffer is detached from its original memory and hence unusable; the state can be checked using {{jsxref("ArrayBuffer.prototype.detached")}}. (See [Firefox bug 1865103](https://bugzil.la/1865103) for more details.)

- For parity with other browsers, [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) and the [`Date()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) only consider the first three letters of the specified month when [non-standard date strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) are parsed. Previously only truncated values of the full month name with three or more characters were accepted (See [Firefox bug 1862910](https://bugzil.la/1862910) for more details.)

### SVG

#### Removals

- Removed support for `data:` URLs in SVG `<use>` elements and via the [`SVGUseElement`](/en-US/docs/Web/API/SVGUseElement) interface to prevent [XSS](/en-US/docs/Glossary/Cross-site_scripting) attacks.
  The legacy functionality may be re-enabled by setting the `svg.use-element.data-url-href.allowed` preference to `true`, although this is not recommended for security reasons ([Firefox bug 1806964](https://bugzil.la/1806964)).

### APIs

- The [LargestContentfulPaint API](/en-US/docs/Web/API/LargestContentfulPaint) is now supported.
  This API is part of the [Performance APIs](/en-US/docs/Web/API/Performance_API) and provides timing information about the largest image or text paint before users interact with a web page ([Firefox bug 1866266](https://bugzil.la/1866266)).

#### DOM

- The {{domxref("HTMLSelectElement.showPicker()")}} method is now supported, allowing the browser picker for a {{HTMLElement("select")}} element to be programmatically launched when triggered by user interaction ([Firefox bug 1865207](https://bugzil.la/1865207)).

#### Removals

- Removed support for the CSS [`-moz-user-focus`](/en-US/docs/Web/CSS/-moz-user-focus) property ([Firefox bug 1871745](https://bugzil.la/1871745) and [Firefox bug 1868552](https://bugzil.la/1868552)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Fixed a bug that prevented [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) to correctly synthesize double and other multi-click events for the `mouse` input source ([Firefox bug 1864614](https://bugzil.la/1864614)). Additionally, these events will only be emitted when the actual mouse position has not changed since the last click action ([Firefox bug 1681076](https://bugzil.la/1681076)).
- The definitions for the `Pause` and `Equal` (Numpad block) keys have been updated to align with the WebDriver specification ([Firefox bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- The serialization of `WindowProxy` remote objects now also works correctly for out-of-process iframes ([Firefox bug 1867667](https://bugzil.la/1867667)).
- The [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) command now distinguishes between `undefined` and `null` as values for the `viewport` argument. If set to `undefined`, it signifies that the viewport should remain unchanged, while using `null` will reset it to its original dimensions ([Firefox bug 1865618](https://bugzil.la/1865618)).
- Support for the [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) command has been introduced, enabling navigations backward and forward in the browser history ([Firefox bug 1841018](https://bugzil.la/1841018)).
- Fixed a bug in all supported network events where the `context` id consistently reported the top-level browsing context, even when the navigation occurred within an iframe ([Firefox bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Fixed a bug with [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text), where the command was incorrectly returning an empty text when the element was located within a ShadowRoot's slot ([Firefox bug 1824664](https://bugzil.la/1824664)).

## Experimental web features

These features are newly shipped in Firefox 122 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Declarative shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  The {{htmlelement("template")}} element now supports a `shadowrootmode` attribute which can be set to either `open` or `closed`, the same values as the `mode` option of the {{domxref("Element.attachShadow()", "attachShadow()")}} method. It allows the creation of a shadow DOM subtree declaratively. ([Firefox bug 1712140](https://bugzil.la/1712140))

- **Clonable option and property for shadow DOM.**

  - The {{domxref("Element.attachShadow()")}} method now supports the `clonable` boolean option that specifies whether the created shadow root is clonable: the default value is `false` but when set to `true`, the shadow host cloned with {{domxref("Node.cloneNode()")}} or {{domxref("Document.importNode()")}} will include shadow root in the copy.
  - The {{domxref("ShadowRoot")}} interface now supports the {{domxref("ShadowRoot.clonable", "clonable")}} read-only property. It returns `true` if the shadow root is clonable, and `false` otherwise. It always returns `true` for shadow roots created via declarative shadow DOM.

  When shadow root is created via declarative shadow DOM, the `clonable` option is set to `true` by default, and the `clonable` property returns `true`. ([Firefox bug 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Displaying popovers on top of page content is now supported via HTML attributes or JavaScript API, including styling with the CSS [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class and extended support for the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) pseudo-element. See the [Popover API](/en-US/docs/Web/API/Popover_API) reference for more details. ([Firefox bug 1823757](https://bugzil.la/1823757))

- **Clipboard read and write:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` and `dom.events.asyncClipboard.writeText`.

  The async [Clipboard API](/en-US/docs/Web/API/Clipboard_API) is now fully supported, including [`read()`](/en-US/docs/Web/API/Clipboard/read), [`readText()`](/en-US/docs/Web/API/Clipboard/readText), and [`write()`](/en-US/docs/Web/API/Clipboard/write) methods and the {{domxref('ClipboardItem')}} interface. A paste context menu will appear for the user to confirm when reading clipboard data not provided by the same-origin page. ([Firefox bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** enabled by default only in Firefox Nightly.

  The {{jsxref("Intl.Segmenter")}} object allows accurate locale-sensitive text segmentation of a string. For example, to split a text into words in a language that doesn't use spaces to separate them: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox bug 1423593](https://bugzil.la/1423593))

## Older versions

{{Firefox_for_developers}}
