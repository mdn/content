---
title: Firefox 113 for developers
slug: Mozilla/Firefox/Releases/113
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 113 that affect developers. Firefox 113 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [May 09, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- [`CanvasRenderingContext2D.reset()`](/en-US/docs/Web/API/CanvasRenderingContext2D/reset) and [`OffscreenCanvasRenderingContext2D.reset()`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) are now supported, and can be used to return the associated rendering context to its default state.
  ([Firefox bug 1709347](https://bugzil.la/1709347)).

#### DOM

#### Media, WebRTC, and Web Audio

- The [AV1 video codec](/en-US/docs/Web/Media/Formats/Video_codecs#av1) is now enabled on Android. Hardware accelerated decoding is used if supported by the device ([Firefox bug 1672276](https://bugzil.la/1672276)).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- When an extension registers multiple listeners for the same event, all the event listeners are called when the event page wakes up, instead of only the first one ([Firefox bug 1798655](https://bugzil.la/1798655)).
- Support is now provided for the {{WebExtAPIRef("declarativeNetRequest")}} API ([Firefox bug 1782685](https://bugzil.la/1782685)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(112)}}
