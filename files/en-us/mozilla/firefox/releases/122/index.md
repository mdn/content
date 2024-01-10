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

### showPicker() method for HTML select elements

- The {{domxref("HTMLSelectElement.showPicker()")}} method is now supported, allowing the browser picker for a {{HTMLElement("select")}} element to be programmatically launched when triggered by user interaction ([Firefox bug 1865207](https://bugzil.la/1865207)).

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

## Older versions

{{Firefox_for_developers(121)}}
