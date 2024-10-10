---
title: Firefox 121 for developers
slug: Mozilla/Firefox/Releases/121
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 121 that affect developers. Firefox 121 was released on [December 19, 2023](https://whattrainisitnow.com/release/?version=121).

## Changes for web developers

### HTML

- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading) of `<iframe>` elements is now supported, allowing developers to hint that particular `<iframe>` elements should only be loaded when (and if) they become visible. This can speed up initial load time by reducing the resources that need to be fetched on page load (some `<iframe>` elements may not need to be fetched at all).
  The hint can be provided via the [`loading`](/en-US/docs/Web/HTML/Element/iframe#loading) attribute on the [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) element, or in JavaScript using {{domxref("HTMLIFrameElement.loading")}}.
  ([Firefox bug 1622090](https://bugzil.la/1622090)).

### CSS

- The {{CSSXRef("text-wrap")}} property has been updated with support for the values `balance` and `stable`. The `balance` value is used for short blocks of content, such as headings, and will make sure that the content is balanced and easy to read when spread over multiple lines. The `stable` value makes sure that editable content does not reflow while the user is editing it ([Firefox bug 1731541](https://bugzil.la/1731541)).
- The {{cssxref(":has", ":has()")}} selector, commonly referred to as the _parent selector_, is now supported. It allows developers to apply styles to an element based on related elements, e.g. `li:has(ul)` will match a list which contains a sub-list, or `h1:has(+ p)` will match a heading with a paragraph directly after it.
- The [`text-indent`](/en-US/docs/Web/CSS/text-indent) CSS property now supports the [`each-line`](/en-US/docs/Web/CSS/text-indent#each-line) and [`hanging`](/en-US/docs/Web/CSS/text-indent#hanging) property values ([Firefox bug 784648](https://bugzil.la/784648)), allowing developers to more easily specify certain text indentation styles. Additionally, developers can now combine multiple `text-indent` property values for more creativity, e.g. `text-indent: 3em hanging each-line`.

### JavaScript

- The {{jsxref("Promise.withResolvers()")}} static method is now supported. This exposes the `resolve` and `reject` callback functions in the same scope as the returned {{jsxref("Promise")}}, allowing code that resolves or rejects the promise to be defined after its construction ([Firefox bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} now accepts several additional date formats:

  - Year > 9999 for `YYYY-MMM-DD` format (e.g. `19999-Jan-01`) ([Firefox bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (e.g. `Jan-01-1970`) ([Firefox bug 1863489](https://bugzil.la/1863489))
  - Milliseconds for non-ISO date formats (e.g. `Jan 1 1970 10:00:00.050`) ([Firefox bug 1863125](https://bugzil.la/1863125))
  - Day of week at the beginning of formats which were being rejected, such as:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    The day of week does not need to be correct, or a day of week at all; for example, `foo 1970-01-01` works ([Firefox bug 1617562](https://bugzil.la/1617562)).

- Other {{jsxref("Date.parse()")}} fixes:

  - `YYYY-M-DD` and `YYYY-MM-D` are no longer assumed GMT as an ISO date `YYYY-MM-DD` would be ([Firefox bug 1783731](https://bugzil.la/1783731)).
  - Milliseconds for all formats are truncated after 3 digits, rather than being rounded ([Firefox bug 746529](https://bugzil.la/746529)).

### APIs

- The {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}} property of the {{domxref("WebTransportSendStream")}} interface is now supported, allowing the relative priority of outgoing [WebTransport API](/en-US/docs/Web/API/WebTransport_API) _bidirectional_ streams to be read and changed after the stream is created. Note that this cannot be used to modify the priority of unidirectional streams, as Firefox implements them as {{domxref("WritableStream")}} instead of {{domxref("WebTransportSendStream")}}. (For more information see [Firefox bug 1853444](https://bugzil.la/1853444).)

#### DOM

- {{domxref("HTMLInputElement.showPicker()")}} now works for [`<input type="week">`](/en-US/docs/Web/HTML/Element/input/month) and [`<input type="month">`](/en-US/docs/Web/HTML/Element/input/month) elements on Android ([Firefox bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly now supports tail call optimization via new `return_call` and `return_call_indirect` alternatives to the [`call`](/en-US/docs/WebAssembly/Reference/Control_flow/call) instruction. This improves performance, reduces stack space usage, and enhances compatibility with programming languages that use tail calls. ([Firefox bug 1858855](https://bugzil.la/1846789)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added the [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) event that is emitted when a browsing context is discarded ([Firefox bug 1694390](https://bugzil.la/1694390)).
- Added support for the `userActivation` parameter for the [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) and [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) commands which allows evaluating JavaScript while emulating the user action. ([Firefox bug 1845488](https://bugzil.la/1845488)).
- Added support for the `defaultValue` field for the [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) event that allow users to retrieve the default value of prompts ([Firefox bug 1851761](https://bugzil.la/1851761)).
- Renamed the `viewportOptions` parameter for the [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) command to `boxOptions` ([Firefox bug 1859258](https://bugzil.la/1859258)).
- Removed the `scrollIntoView` parameter for the [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) command, in favor of the `origin` parameter below ([Firefox bug 1862649](https://bugzil.la/1862649)).
- Added support for the `origin` parameter for the [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) command which allows defining the origin and bounds of the screenshot. The accepted values are `"document"` and `"viewport"` ([Firefox bug 1840999](https://bugzil.la/1840999)).
- When serializing `Window` objects, the serialized value now contains a `context` property set to the context id for the `Window` object which can also be exchanged with Marionette to reference specific windows and frames ([Firefox bug 1841049](https://bugzil.la/1841049)).
- Fixed a bug where serialization of a Node nested in a data structure (array, map, etc.) would fail ([Firefox bug 1861000](https://bugzil.la/1861000)).
- Fixed a bug where the [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) command could return an incorrect navigation id ([Firefox bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Added support for serializing and deserializing `Window` and `Frame` objects ([Firefox bug 1274251](https://bugzil.la/1274251)).

## Experimental web features

These features are newly shipped in Firefox 121 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- Custom element state pseudo-class: `dom.element.customstateset.enabled`
  - : Custom elements can expose their internal state via the {{domxref("ElementInternals.states","states")}} property as a {{domxref("CustomStateSet")}}. A CSS custom state pseudo-class such as `:--some-state` can match that element's state. ([Firefox bug 1861466](https://bugzil.la/1861466))
- `showPicker()` method for HTML select elements: `dom.select.showPicker.enabled`
  - : The {{domxref("HTMLSelectElement.showPicker()")}} method programmatically launches the browser picker for a {{HTMLElement("select")}} element, triggered by user interaction. ([Firefox bug 1854112](https://bugzil.la/1854112))

## Changes for add-on developers

- Fixed a bug that resulted in background pages not starting when a manifest.json `background` key contains `service_worker` and `scripts` declarations ([Firefox bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Incidentally, a change in Chrome 121 sees the `scripts` property ignored when specified with the `service_worker` property. Previously, Chrome refused to load extensions containing both properties ([Chromium bug 1418934](https://crbug.com/1418934)).
  > For more information, see [Browser support of the `background` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Older versions

{{Firefox_for_developers}}
