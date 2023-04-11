---
title: Firefox 112 for developers
slug: Mozilla/Firefox/Releases/112
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 112 that affect developers. Firefox 112 was released on April 11, 2023.

## Changes for web developers

### Developer Tools

### HTML

- The {{domxref("HTMLElement")}} property [**`inert`**](/en-US/docs/Web/HTML/Global_attributes/inert) is now fully enabled. It allows the browser to ignore content or interactive elements that are within an HTMLElement with the `inert` attribute. See [Firefox bug 1764263](https://bugzil.la/1764263) for more details.

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

- Implemented the `browsingContext.print` command, which allows clients to request a rendered PDF document of the browsing context, represented as a Base64-encoded string. See [Firefox bug 1806810](https://bugzil.la/1806810) for more details.
- Implemented `script.addPreloadScript` and `script.removePreloadScript` commands, which let test clients inject a functionality that's guaranteed to be available for any content scripts that are subsequently loaded, and before any later scripts that WebDriver injects into the context. See [Firefox bug 1806420](https://bugzil.la/1806420) and [Firefox bug 1806465](https://bugzil.la/1806465) for more details.
- `Element` and `ShadowRoot` references as stored in the node cache can now be used in both Marionette and WebDriver BiDi by their exact same unique reference. See [Firefox bug 1770733](https://bugzil.la/1770733) for more details.
- Removed `isRedirect` from the network events base parameters ([Firefox bug 1819875](https://bugzil.la/1819875)).

#### Marionette

- Fixed an issue where the payload of a response was not wrapped within a `value` field based on certain data type. ([Firefox bug 1819029](https://bugzil.la/1819029)).
- Fixed an issue where `WebDriver:ElementClear` was emitting an extra `change` event for content editable elements ([Firefox bug 1744925](https://bugzil.la/1744925)).

## Changes for add-on developers

- The properties `usedDelegatedCredentials`, `usedEch`, `usedOcsp`, and `usedPrivateDns` have been added to {{WebExtAPIRef("webRequest.SecurityInfo")}}. These properties provide information about the security of the connection used for a web request ([Firefox bug 1804460](https://bugzil.la/1804460)).
- The property `"type"` is supported in the [`"background"` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background). Setting this key to `"module"` loads background scripts specified with `"scripts"` as ES modules, avoiding the need to switch to background pages to use ES modules ([Firefox bug 1811443](https://bugzil.la/1811443)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(111)}}
