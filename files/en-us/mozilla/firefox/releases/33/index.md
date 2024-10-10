---
title: Firefox 33 for developers
slug: Mozilla/Firefox/Releases/33
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 33 was released on October 14, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights

- Event listeners popup
- @media sidebar
- Add new rule
- Edit keyframes
- Cubic bezier editor
- Transform highlighter
- Persistent disable cache
- New Commands
- Editor preferences
- WebIDE

For details please [see the hacks post](https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/). Special thanks to the 33 contributors that added [all the features and fixes](https://mzl.la/1pGLFDs) in this release.

### CSS

- Implemented {{cssxref("@counter-style")}} rule ([Firefox bug 966166](https://bugzil.la/966166)).
- Unprefixed `ethiopic-numeric`, `persian`, `arabic-indic`, `devanagari`, `bengali`, `gurmukhi`, `gujarati`, `oriya`, `tamil`, `telugu`, `kannada`, `malayalam`, `thai`, `lao`, `myanmar`, `khmer`, `cjk-heavenly-stem`, `cjk-earthly-branch` in {{cssxref("list-style-type")}} ([Firefox bug 985825](https://bugzil.la/985825) and [Firefox bug 1063856](https://bugzil.la/1063856)).
- Added support for `mongolian`, `disclosure-open` and `disclosure-closed` counter styles in {{cssxref("list-style-type")}} ([Firefox bug 982355](https://bugzil.la/982355) and [Firefox bug 1063856](https://bugzil.la/1063856)).
- Fixed CSS animations with empty keyframes rule so they also dispatch events ([Firefox bug 1004377](https://bugzil.la/1004377)).
- Added support for `rebeccapurple`, a new {{cssxref("&lt;color&gt;")}} name defined in CSS Colors level 4 ([Firefox bug 1024642](https://bugzil.la/1024642)).
- Our experimental implementation of CSS Fonts Level 3 is progressing. Its activation is governed by the `layout.css.font-features.enabled` preference, enabled by default in Nightly. Newly implemented features are:

  - The fallback algorithm of {{cssxref("font-variant-caps")}}, creating synthetic alternates for missing glyphs ([Firefox bug 961558](https://bugzil.la/961558)).
  - The {{cssxref("font-synthesis")}} CSS property has been implemented ([Firefox bug 871453](https://bugzil.la/871453)).

### HTML

- Added the experimental support for {{htmlelement("picture")}} element ([Firefox bug 870022](https://bugzil.la/870022)), behind the `dom.image.picture.enabled` preference (off by default).
- The {{HTMLElement("label")}}, especially without a [`for`](/en-US/docs/Web/HTML/Element/label#for) attribute, doesn't apply anymore to a `<input type=hidden>` field ([Firefox bug 597650](https://bugzil.la/597650)). The previous behavior wasn't spec-compliant.
- The link annotation `noreferrer` has been implemented on {{HTMLElement("a")}} elements. `<a rel="noreferrer">` will not include the URL of the referrer in the HTTP request sent to fetch it ([Firefox bug 530396](https://bugzil.la/530396)). Note that this works only for in-page links, not for links clicked via the UI, like via contextual menus.
- On Android, support for two new values for the [`name`](/en-US/docs/Web/HTML/Element/meta#name) attribute of {{HTMLElement("meta")}} has been added: `msapplication-TileImage` and `msapplication-TileColor` ([Firefox bug 1014712](https://bugzil.la/1014712)). Example:

  ```html
  <meta name="msapplication-TileImage" content="images/my-img-144.png" />
  <meta name="msapplication-TileColor" content="#d83434" />
  ```

### JavaScript

- The non-standard method `Number.toInteger()` has been removed ([Firefox bug 1022396](https://bugzil.la/1022396)).
- The {{jsxref("Map.prototype.set()")}}, {{jsxref("WeakMap.prototype.set()")}} and {{jsxref("Set.prototype.add()")}} methods are now chainable, return their equivalent objects and no longer `undefined` ([Firefox bug 1031632](https://bugzil.la/1031632)).
- A [default parameter](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) is evaluated before function declarations inside the function body, so those functions cannot be referred from the default parameter ([Firefox bug 1022962](https://bugzil.la/1022962)).
- Shorthand properties are now allowed in object literals: if not explicitly defined, property keys are initialized by variables of the same name. E.g. `function f(x, y) { return {x, y}; }` is equivalent to `function f(x, y) { return {x: x, y: y}; }` ([Firefox bug 875002](https://bugzil.la/875002)).
- The parsing of [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield) and [`yield*`](/en-US/docs/Web/JavaScript/Reference/Operators/yield*) has been updated to conform with the latest ES2015 specification ([Firefox bug 981599](https://bugzil.la/981599)).
- The non-standard `hasOwn` trap has been removed ([Firefox bug 980565](https://bugzil.la/980565)).

### Interfaces/APIs/DOM

- The {{domxref("RadioNodeList")}} API has been implemented and the selected radio button is accessible via {{domxref("RadioNodeList.value")}} ([Firefox bug 779723](https://bugzil.la/779723)).
- The {{domxref("DOMMatrix")}} has been added ([Firefox bug 1018497](https://bugzil.la/1018497)).
- A non-standard (but implemented in other browsers) `DOMException.stack` property has been added. It returns a string with a human-friendly formatted stack ([Firefox bug 857648](https://bugzil.la/857648)), in the same format as the existing non-standard {{jsxref("Error.stack")}} property.
- For {{HTMLElement("canvas")}}, the method {{domxref("CanvasPattern.setTransform()")}}, allowing to modify a pattern using the {{domxref("DOMMatrix")}} representation of a linear transform ([Firefox bug 1019257](https://bugzil.la/1019257)).
- Our experimental implementation of Media Source Extensions, behind the `media.mediasource.enabled` preference, enabled by default in Nightly and Aurora only, now supports MP4 ([Firefox bug 1000686](https://bugzil.la/1000686)).
- The properties {{domxref("HTMLMediaElement.audioTracks")}} and {{domxref("HTMLMediaElement.videoTracks")}} have been experimentally implemented. They are controlled by the `media.track.enabled`, off by default ([Firefox bug 744896](https://bugzil.la/744896)).
- The non-standard `XMLHttpRequest.mozBackgroundRequest()` is no more accessible from websites. Only Firefox-internal code (Chrome code) can use it ([Firefox bug 1035242](https://bugzil.la/1035242)).
- The `touchenter` and `touchleave` events, removed from the specification, have been removed ([Firefox bug 1036444](https://bugzil.la/1036444)).
- The formerly called `loaded` event, sent on a {{domxref("HTMLTrackElement")}} has been renamed {{domxref("Window/load_event", "load")}} to match the specification ([Firefox bug 1035505](https://bugzil.la/1035505)).
- The IndexedDB interface `FileHandle` has been renamed in `IDBMutableFile` ([Firefox bug 1006485](https://bugzil.la/1006485)).
- The IndexedDB interface `LockedFile` has been renamed in `IDBFileHandle` ([Firefox bug 1006485](https://bugzil.la/1006485)).
- The {{domxref("ServiceWorker")}} interface has been implemented behind the `dom.serviceWorkers.enabled` flag ([Firefox bug 903441](https://bugzil.la/903441)).
- The {{domxref("NetworkInformation.type")}} now also support the `"unknown"` value ([Firefox bug 1023029](https://bugzil.la/1023029)).

### MathML

- The attributes `columnspacing`, `framespacing`, and `rowspacing` of the {{MathMLElement("mtable")}} element are now supported ([Firefox bug 330964](https://bugzil.la/330964)).
- Use [Open Type MATH](https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status) constants for fractions, stacks, radicals, and scripts ([Firefox bug 961365](https://bugzil.la/961365)).

### SVG

_No change._

### Audio/Video/WebRTC

- The `RTCOfferOptions` dictionary, used to provide options when calling {{domxref("RTCPeerConnection.createOffer()")}}, has been implemented.

### WebGL

- {{domxref("EXT_blend_minmax")}} is now exposed. It extends blending capabilities by adding two new blend equations: producing the minimum or maximum color components of the source and destination colors ([Firefox bug 973815](https://bugzil.la/973815)).

## Security

- The [CSP](/en-US/docs/Web/HTTP/CSP) 1.1 `frame-ancestors` [directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) is now supported ([Firefox bug 846978](https://bugzil.la/846978)).

## Changes for add-on and Mozilla developers

- The JavaScript Debugger Service (JSD) has been removed in favor of the new [Debugger API](https://firefox-source-docs.mozilla.org/devtools-user/debugger-api/index.html) ([Firefox bug 800200](https://bugzil.la/800200)).
- The interface nsIX509CertDB2 has been removed and the methods from that interface have been moved to the nsIX509CertDB interface.

### Add-on SDK

#### Highlights

- Added support for context menus in panels via a new option in the `Panel` constructor.
- Added `tab.readyState`.
- Added a `BrowserWindow` parameter to `sidebar.show()` and `sidebar.hide()`, to control the window for which the sidebar will be shown or hidden.

#### Details

[GitHub commits made between Firefox 32 and Firefox 33](https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33). This will not include any uplifts made after this release entered Aurora.

[Bugs fixed between Firefox 32 and Firefox 33](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-07-21&chfield=resolution&query_format=advanced&chfieldfrom=2014-06-09&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). This will not include any uplifts made after this release entered Aurora.

### Older versions

{{Firefox_for_developers}}
