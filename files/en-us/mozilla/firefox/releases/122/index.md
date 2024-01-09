---
title: Firefox 122 for developers
slug: Mozilla/Firefox/Releases/122
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 122 that affect developers. Firefox 122 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [January 23, 2024](https://whattrainisitnow.com/release/?version=122).

## Changes for web developers

### Developer Tools

### HTML

- {{HTMLElement("hr")}} elements are now allowed as children of {{HTMLElement("select")}} elements. This is a new feature that improves the readability of select lists with many options. ([Firefox bug 1830909](https://bugzil.la/1830909)).

#### Removals

### CSS

#### Removals

### JavaScript

- The {{jsxref("ArrayBuffer.prototype.transfer()")}} and {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} methods can now be used to [transfer ownership](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) of memory from one {{jsxref("ArrayBuffer")}} to another. After transfer, the original buffer is detached from its original memory and hence unusable; the state can be checked using {{jsxref("ArrayBuffer.prototype.detached")}}. (See [Firefox bug 1865103](https://bugzil.la/1865103) for more details.)

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 122 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- Declarative shadow DOM: `dom.webcomponents.shadowdom.declarative.enabled`
  - : The {{htmlelement("template")}} element now supports a `shadowrootmode` attribute which can be set to either `open` or `closed`, the same values as the `mode` option of {{domxref("Element.attachShadow()", "attachShadow()")}} method. It allows the creation of a shadow DOM subtree declaratively. ([Firefox bug 1712140](https://bugzil.la/1712140))
- Popover API: `dom.element.popover.enabled`
  - : Displaying popovers on top of the page content is now supported via HTML attributes or JavaScript API, including styling with the new CSS [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) pseudo-class and extended support for [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) pseudo-element. See more in [Popover API](/en-US/docs/Web/API/Popover_API) reference. ([Firefox bug 1823757](https://bugzil.la/1823757))
- Clipboard read and write: `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` and `dom.events.asyncClipboard.writeText`
  - : The remaining part of the async {{domxref('Clipboard API')}} is now shipped behind the flag: {{domxref('ClipboardItem')}} interface and [`read()`](/en-US/docs/Web/API/Clipboard/read), [`readText()`](/en-US/docs/Web/API/Clipboard/readText), and [`write()`](/en-US/docs/Web/API/Clipboard/write) methods. A paste context menu will appear for the user to confirm when attempting to read clipboard data not provided by the same-origin page. ([Firefox bug 1809106](https://bugzil.la/1809106))

## Older versions

{{Firefox_for_developers(121)}}
