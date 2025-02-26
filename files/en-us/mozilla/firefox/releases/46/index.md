---
title: Firefox 46 for developers
slug: Mozilla/Firefox/Releases/46
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 46 was released on April 26, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Dominators view in the Memory tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html)
- [Allocations view in the Performance tool](https://web.archive.org/web/20211207010022/https://firefox-source-docs.mozilla.org/devtools-user/performance/allocations/index.html)
- [One click to apply @media rule conditions in the Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-media-sidebar)

[All devtools bugs fixed between Firefox 45 and Firefox 46.](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263754&resolution=FIXED&classification=Client%20Software&chfieldto=2016-01-25&query_format=advanced&chfield=resolution&chfieldfrom=2015-12-14&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### HTML

- When faced with an invalid `type` value, {{HTMLElement("ul")}} no longer maps to `decimal`, but now behaves as if no `type` value were specified ([Firefox bug 241719](https://bugzil.la/241719)).
- The attribute `pattern` on {{HTMLElement("input")}} is now treated as {{jsxref("RegExp", "a regular expression", "", 1)}} with `"u"` (unicode) flag ([Firefox bug 1227906](https://bugzil.la/1227906)).

### CSS

- Our implementation of CSS Grids has been updated:

  - The keywords `auto-fill` and `auto-fit` are now allowed in the `repeat()` function ([Firefox bug 1118820](https://bugzil.la/1118820)).
  - The `true` value has been renamed to `unsafe`; this affects the properties {{cssxref("justify-content")}}, {{cssxref("align-content")}}, {{cssxref("justify-self")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} and {{cssxref("align-items")}} ([Firefox bug 1230478](https://bugzil.la/1230478)).

- The properties {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}} and {{cssxref("text-emphasis-position")}} are now enabled by default ([Firefox bug 1231485](https://bugzil.la/1231485)).
- Gecko now accepts the `-webkit-` prefixed version of [some properties](https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility); it requires to switch `layout.css.prefixes.webkit` to `true` ([Firefox bug 1213126](https://bugzil.la/1213126)).
- The experimental support of the {{cssxref("@font-face/font-display", "font-display")}} descriptor (of {{cssxref("@font-face")}}; it requires to switch `layout.css.font-display.enabled` to `true` ([Firefox bug 1157064](https://bugzil.la/1157064)).
- Added support for [`@media (-webkit-transform-3d)`](/en-US/docs/Web/CSS/@media/-webkit-transform-3d) as a media query for 3D transform support, if about:config pref `layout.css.prefixes.webkit` is set to `true` ([Firefox bug 1239799](https://bugzil.la/1239799)).
- {{cssxref("gradient/linear-gradient", "linear-gradient()")}} support for the omission of `0deg` units ([Firefox bug 1239153](https://bugzil.la/1239153)).
- Added `-webkit-filter` for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false` ([Firefox bug 1236506](https://bugzil.la/1236506)).
- \[css-align] "unsafe start" (formerly "true start") should serialize to "start" etc ([Firefox bug 1230398](https://bugzil.la/1230398)).

### JavaScript

- The ES2015 {{jsxref("RegExp.prototype.unicode", "RegExp unicode (u) flag", "", 1)}} has been implemented ([Firefox bug 1135377](https://bugzil.la/1135377)).
- The ES2015 block-level functions have been implemented ([Firefox bug 1071646](https://bugzil.la/1071646)).
- The ES2015 {{jsxref("TypedArray.prototype.sort()")}} method has been implemented ([Firefox bug 1121937](https://bugzil.la/1121937)).
- The ES2015 [`arguments[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) has been implemented ([Firefox bug 1067049](https://bugzil.la/1067049)).
- The experimental [ECMAScript Shared Memory API](https://web.archive.org/web/20220124015148/https://tc39.es/ecmascript_sharedmem/shmem.html) has been implemented. See the {{jsxref("SharedArrayBuffer")}} and {{jsxref("Atomics")}} objects. To use this experimental API set `javascript.options.shared_memory` to `true` in about:config.
- Redeclaration of [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) variables now throws a {{jsxref("SyntaxError")}} instead of a {{jsxref("TypeError")}} as per the ECMAScript specification ([Firefox bug 1198833](https://bugzil.la/1198833)).
- In [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), setting properties on {{Glossary("primitive")}} values will now throw a {{jsxref("TypeError")}} ([Firefox bug 603201](https://bugzil.la/603201)).
- The non-standard `WeakMap.prototype.clear()` and `WeakSet.prototype.clear()` methods have been removed ([Firefox bug 1101817](https://bugzil.la/1101817)).
- The non-standard, static `RegExp.multiline` property is now deprecated ([Firefox bug 1220457](https://bugzil.la/1220457)).
- Built-in accessor function names now have a "get" or "set" prefix ([Firefox bug 1180290](https://bugzil.la/1180290), [Firefox bug 1235656](https://bugzil.la/1235656)).
- [JS1.7/JS1.8 (legacy) array comprehensions and generator comprehensions](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) have been removed ([Firefox bug 1220564](https://bugzil.la/1220564)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- The deprecated {{domxref("Window.showModalDialog()")}} method is no more available when Firefox runs in multi-process mode (e10s) ([Firefox bug 1234700](https://bugzil.la/1234700)).
- Added support for {{domxref("Document.elementsFromPoint()")}} ([Firefox bug 1164427](https://bugzil.la/1164427)).
- When a non-existent option of a {{HTMLElement("select")}} element is programmatically selected, instead of being incorrectly left unchanged, the [`selectedIndex`](/en-US/docs/Web/HTML/Element/select#selectedindex) value is now set to `-1`, the [`selectedOptions`](/en-US/docs/Web/HTML/Element/select#selectedoptions) to an empty {{domxref("HTMLCollection")}}, and [`value`](/en-US/docs/Web/HTML/Element/select#value) to an empty string ([Firefox bug 1203668](https://bugzil.la/1203668)).

#### Canvas

- The remaining parts of the experimental {{domxref("OffscreenCanvas")}} API has been implemented; new features: {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}} constructor, `OffscreenCanvas.toBlob()`, and {{domxref("OffscreenCanvas.transferToImageBitmap()")}}. To use this experimental API set `gfx.offscreencanvas.enabled` to `true` in about:config ([Firefox bug 1172796](https://bugzil.la/1172796)).
- The {{domxref("ImageBitmap.close()")}} method is now supported ([Firefox bug 1172796](https://bugzil.la/1172796)).
- A new {{domxref("ImageBitmapRenderingContext")}} rendering context is now implemented. Use `"bitmaprenderer"` with {{domxref("OffscreenCanvas.getContext()")}} or {{domxref("HTMLCanvasElement.getContext()")}} to obtain this context. ([Firefox bug 1172796](https://bugzil.la/1172796)).

#### WebGL

- The {{domxref("WEBGL_compressed_texture_etc")}} extension has been implemented, allowing the use of [ETC2 compressed texture formats](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) ([Firefox bug 917505](https://bugzil.la/917505)). To use this extension, set the preference `webgl.enable-draft-extensions` to `true` in about:config.

#### IndexedDB

_No change._

#### Service Workers

- {{domxref("FetchEvent.request")}} is now non-nullable (see [Firefox bug 1238213](https://bugzil.la/1238213).)
- {{domxref("Navigator.serviceWorker")}} has now been marked as SameObject (see [Firefox bug 1238205](https://bugzil.la/1238205).)
- {{domxref("ExtendableMessageEvent.ports")}} has now been marked as SameObject (see [Firefox bug 1238225](https://bugzil.la/1238225).)

#### Fetch

- {{domxref("Request.mode")}} now has a new value available, `navigate`, for supporting requests generated while navigating between documents (see [Firefox bug 1209081](https://bugzil.la/1209081).)

#### WebRTC

- The {{domxref("RTCPeerConnection.createOffer()")}} method now supports the VP9 video codec, although this is disabled by default. To enable it, set the preference `media.peerconnection.video.vp9_enabled` to `true` in `about:config`. When enabled, VP9 is the preferred codec; previously VP8 was preferred ([Firefox bug 1242324](https://bugzil.la/1242324)).
- The method {{domxref("RTCRtpSender.setParameters()")}} has been added to allow changing the values of parameters after the {{domxref("RTCRtpSender")}} was initially created.

#### New APIs

- In SVG, the {{domxref("SVGStyleElement")}} interface now implements the `LinkStyle` mixin ) [Firefox bug 1239128](https://bugzil.la/1239128).

#### Miscellaneous

- The asynchronous {{domxref("FileReader")}} is now available in Web workers ([Firefox bug 901097](https://bugzil.la/901097)).
- Our experimental implementation of [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) has been updated:

  - The `AnimationEffectTimingReadOnly` dictionary and {{domxref("AnimationEffect/getTiming", "AnimationEffectReadOnly.timing")}} have been implemented ([Firefox bug 1214536](https://bugzil.la/1214536)).

- The [Permissions API](/en-US/docs/Web/API/Permissions_API) has now been enabled by default, for all release versions, not just Nightly as it previously was ([Firefox bug 1221106](https://bugzil.la/1221106).)
- Sanitization of WOFF fonts has been loosened a bit ([Firefox bug 1244693](https://bugzil.la/1244693)).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## HTTP

_No change._

## Networking

- Support of {{rfc(7686)}} has been added: by default there is no attempt to resolve domain with the TLD `.onion`. This is controlled by the preference `network.dns.blockDotOnion`. Add-ons supporting Tor can swap this pref. ([Firefox bug 1228457](https://bugzil.la/1228457))

## Security

_No change._

## Changes for add-on and Mozilla developers

### Interfaces

_No change._

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Other

_No change._

## Older versions

{{Firefox_for_developers}}
