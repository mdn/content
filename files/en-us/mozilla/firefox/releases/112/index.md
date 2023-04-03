---
title: Firefox 112 for developers
slug: Mozilla/Firefox/Releases/112
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 112 that affect developers. Firefox 112 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 11, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The `overlay` keyword value for the {{cssxref("overflow")}} property is now supported as a legacy alias of the keyword value `auto` ([Firefox bug 1817189](https://bugzil.la/1817189)).

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

- {{domxref("navigator.getAutoplayPolicy()")}} is now supported, allowing developers to configure [autoplay](/en-US/docs/Web/Media/Autoplay_guide) of media elements and audio contexts based on whether autoplay is allowed, disallowed, or only allowed if the audio is muted.
  See [Firefox bug 1773551](https://bugzil.la/1773551) for more details.
- Rounded rectangles can now be drawn in 2D canvases using {{domxref("CanvasRenderingContext2D.roundRect()")}}, [`Path2D.roundRect()`](/en-US/docs/Web/API/Path2D#path2d.roundrect) and [`OffscreenCanvasRenderingContext2D.roundRect()`](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.roundrect).
  See [Firefox bug 1756175](https://bugzil.la/1756175) for more details.

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- The properties `usedDelegatedCredentials`, `usedEch`, `usedOcsp`, and `usedPrivateDns` have been added to {{WebExtAPIRef("webRequest.SecurityInfo")}}. These properties provide information about the security of the connection used for a web request ([Firefox bug 1804460](https://bugzil.la/1804460)).
- The property `"type"` is supported in the [`"background"` manifest key](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background). Setting this key to `"module"` loads background scripts specified with `"scripts"` as ES modules, avoiding the need to switch to background pages to use ES modules ([Firefox bug 1811443](https://bugzil.la/1811443)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(111)}}
