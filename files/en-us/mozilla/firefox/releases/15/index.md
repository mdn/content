---
title: Firefox 15 for developers
slug: Mozilla/Firefox/Releases/15
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 15 shipped on August 28, 2012. This article lists key changes that are useful for not only Web developers to know about, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The `size` attribute of the {{HTMLElement("font")}} element is now handled according to the HTML5 specification. It means that all integer values greater than 10 or less than -10 are now considered equivalent to 10 and -10, respectively.
- Support for `font-weight` and `point-size` attributes on the `<font>` element has been removed; these were non-standard and Gecko was the only engine that supported them.
- The [Opus codec](https://www.opus-codec.org/) is now supported for audio in Ogg containers for the HTML {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements.
- The {{HTMLElement("source")}} element now supports the `media` attribute.
- The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements now support the played attribute, which provides a {{domxref("TimeRanges")}} object listing the time ranges of the media that have been played back so far.

### CSS

- The {{cssxref("font-feature-settings")}} property has been updated to the latest syntax: `font-feature-settings: "lnum" 1;`
- The CSS {{cssxref("text-transform")}} property has been extended to correctly handle Unicode ligature characters (like `ﬁ`).
- The CSS {{cssxref("word-break")}} property has been implemented.
- The {{cssxref("border-image")}} property has been updated to match the latest Specification and properties have been unprefixed. ([bug 713643](https://bugzil.la/713643))
- The `skew()` {{cssxref("transform")}} function dropped in Firefox 14 has been restored due to existing site compatibility. Authors are however, advised to use `skewX()` and `skewY(`) functions instead.
- The value `plaintext` of CSS {{cssxref("unicode-bidi")}} property now applies to inline elements too. ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- The DOM Events Level 3 methods [`KeyboardEvent.getModifierState()`](/en-US/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) and [`MouseEvent.getModifierState()`](/en-US/docs/Web/API/MouseEvent#getmodifierstate%28%29), which let you query the state of modifier keys, like `Ctrl` or `Shift`, have been implemented (bugs [630811](https://bugzil.la/630811) and [731878](https://bugzil.la/731878)). But the behavior conforms to the latest D3E draft. So, some modifier key names are different from IE ([Firefox bug 769190](https://bugzil.la/769190)).
- On mouse events, support for querying the state of the mouse buttons using the [`MouseEvent.buttons`](/en-US/docs/Web/API/MouseEvent) attribute, has been implemented.
- On keyboard events, support for querying the key location (standard, left or right of modifier key, in the Numpad) using the [KeyboardEvent.location](/en-US/docs/Web/API/KeyboardEvent#attributes_location) attribute, has been implemented ([Firefox bug 166240](https://bugzil.la/166240)).
- KeyboardEvent.keycode result has been computed from better rules which were almost same on Windows/Linux/Mac. And now they are available on some keyboard layouts which are not ASCII capable layouts on Linux and Mac, such as Arabic, Cyrillic, Thai and so on. See [the document for virtual key codes](/en-US/docs/Web/API/KeyboardEvent#virtual_key_codes).
- The [`range.detach()`](/en-US/docs/Web/API/Range/detach) method has been transformed in a no-op and will probably be removed in the future.
- The method `HTMLVideoElement.mozHasAudio()` has been implemented. It indicates if there is an audio track associated to a given video element. ([bug 480376](https://bugzil.la/480376))
- The `Performance` API has a new method, [`now()`](/en-US/docs/Web/API/Performance/now), supporting high resolution timers of type `DOMHighResTimeStamp`. ([bug 539095](https://bugzil.la/539095)).
- The [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Mobile_Messaging_API) has been updated and now supports a `read` attribute indicating whether an SMS text message is read or unread.
- The [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) has been implemented.
- The [`Blob`](/en-US/docs/Web/API/Blob) constructor now takes `ArrayBufferView` as a member of `blobParts` parameter in addition to `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- The `DeviceLightEvent` specified in the [Ambient Light Events Working Draft](https://www.w3.org/TR/ambient-light/) has been implemented.
- The `DeviceProximityEvent` and `UserProximityEvent` [Proximity Events](https://www.w3.org/TR/proximity/) have been implemented.
- The {{domxref("File")}} `lastModifiedDate` property has been implemented. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Support for the [`DataView`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) interface from the Typed Arrays specification has been added. This provides low-level access to the data contained in an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
- Support for new ECMAScript 2015 built-ins: [`Number.isNaN()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) has been added. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Support for ECMAScript 2015 [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) has been added. ([bug 757676](https://bugzil.la/757676)).
- Support for ECMAScript 2015 [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) has been added. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Support for the [`WEBGL_compressed_texture_s3tc`](/en-US/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc) extension has been added. Compressed textures reduce the amount of memory needed to store a texture on the GPU, allowing for higher resolution textures or more of the same resolution textures.

### MathML

- Mathematical operators can now use downloadable fonts specified with {{cssxref("@font-face")}}. This makes the [MathML-fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) work with stretchy operators too.
- The `selection` attribute of the {{MathMLElement("maction")}} is now only taken into account with the `toggle` actiontype.
- [Deprecated namedspace binding](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) has been removed ([Firefox bug 673759](https://bugzil.la/673759)).
- Supported syntax for [Length](/en-US/docs/Web/MathML/Values) and {{MathMLElement("mpadded")}} values have been made closer to the one specified in MathML3 spec.
- New MathML mirrorable operators for Arabic math have been added to the operator dictionary ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Added support for the {{SVGElement("view")}} element ([Firefox bug 512525](https://bugzil.la/512525)).

### Network

- Support for the SPDY v3 protocol has landed. It is disabled by default and can be enabled by setting the preference `network.http.spdy.enabled.v3` to true. ([bug 737470](https://bugzil.la/737470))

## Changes for add-on and Mozilla developers

### Interface changes

- `nsIDOMWindowUtils`
  - : `aModifiers` of `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` and `sendKeyEvent()` supports all modifier keys which are supported by [`KeyboardEvent.getModifierState()`](/en-US/docs/Web/API/KeyboardEvent#getmodifierstate%28%29). Use `MODIFIER_*` values. And now the 5th parameter of `sendKeyEvent()` is changed from `boolean` to `unsigned long`. For backward compatibility, if caller passes `true` or `false` to it, the behavior isn't changed. This change allows callers to specify the key's location.
- `nsIBrowserHistory`
  - : The `hidePage()` method was never implemented, and has been removed entirely in this release. The `addPageWithDetails()` method has also been removed as part of the ongoing work to make all 'Places APIs' asynchronous; use `mozIAsyncHistory.updatePlaces()` instead. Also, the `count` attribute was removed; it had not returned an actual count in some time (instead, it was indicating whether or not any entries existed). You can use `nsINavHistoryService.hasHistoryEntries` instead.
- `nsIDOMUtils`
  - : The `nsIDOMUtils.parseStyleSheet()` method has been added and allows the (re-)parsing of Cascading Style Sheets.
- `nsIINIParserWriter`
  - : The `nsIINIParserWriter.writeFile()` method now accepts a `flags` property. This currently offers only one option: you can now tell it to write the file in UTF-16 format instead of UTF-8, for better compatibility with Windows and certain installers.

#### New interfaces

- `nsISpeculativeConnect`
  - : Provides a way to hint to the networking layer that you are likely to ask to open a connection to a given URI sometime in the near future. This lets the network layer begin the sometimes high-latency process of opening a new network connection ahead of time.

#### Removed interfaces

The following interfaces have been removed.

- `nsIGlobalHistory`

## See also

{{Firefox_for_developers}}
