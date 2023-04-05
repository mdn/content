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

- Removes support for `IDBMutableFile`, `IDBFileRequest`, `IDBFileHandle`, and `IDBDatabase.createMutableFile()`.
  These interfaces are not present in any specification, have been behind a preference since version 102, and have been removed from the other main browser engines for some years.
  ([Firefox bug 1500343](https://bugzil.la/1500343).)
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

- Implemented `browsingContext.print` as PDF command. See [Firefox bug 1806810](https://bugzil.la/1806810) for more details
- Implemented `script.addPreloadScript` and `script.removePreloadScript` commands. See [Firefox bug 1806420](https://bugzil.la/1806420) and [Firefox bug 1806465](https://bugzil.la/1806465) for more details
- Element and ShadowRoot references (NodeCache) now have the same `sharedId` in both Marionette and WebDriver BiDi, making it possible to use them in both protocol ([Firefox bug 1770733](https://bugzil.la/1770733)).
- Removed `isRedirect` from the network events base parameters ([Firefox bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Fixed an issue happening on response wrapped in`value` field ([Firefox bug 1819029](https://bugzil.la/1819029)).
-  Fixed an issue where `WebDriver:ElementClear` was emitting an extra `change` event for content editable elements ([Firefox bug 1744925](https://bugzil.la/1744925)).


## Changes for add-on developers

- The properties `usedDelegatedCredentials`, `usedEch`, `usedOcsp`, and `usedPrivateDns` have been added to {{WebExtAPIRef("webRequest.SecurityInfo")}}. These properties provide information about the security of the connection used for a web request ([Firefox bug 1804460](https://bugzil.la/1804460)).
- The property `"type"` is supported in the [`"background"` manifest key](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background). Setting this key to `"module"` loads background scripts specified with `"scripts"` as ES modules, avoiding the need to switch to background pages to use ES modules ([Firefox bug 1811443](https://bugzil.la/1811443)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(111)}}
