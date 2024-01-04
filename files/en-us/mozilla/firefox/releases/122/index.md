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

- The CSS {{cssxref("offset-position")}} property is now available by default. It defines the initial position of an element on a path. ([Firefox bug 1598152](https://bugzil.la/1598152))

- The various methods for defining a CSS {{cssxref("offset-path")}} — including [`<basic-shape>`](/en-US/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/en-US/docs/Web/CSS/offset-path#coord-box), and [`url()`](/en-US/docs/Web/CSS/offset-path#url) — are now enabled by default. ([Firefox bug 1598159](https://bugzil.la/1598159))

- The CSS {{cssxref("ray")}} function is now available by default. You can use this function to define an {{cssxref("offset-path")}} as a line segment that begins from an {{cssxref("offset-position")}} and extends in the direction of the specified angle. ([Firefox bug 1598151](https://bugzil.la/1598151))

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

## Older versions

{{Firefox_for_developers(121)}}
