---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 126 that affect developers. Firefox 126 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [May 14, 2024](https://whattrainisitnow.com/release/?version=126).

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

- The [`zstd`](/en-US/docs/Web/HTTP/Headers/Content-Encoding#zstd) directive of the `Content-Encoding` HTTP header is now supported, allowing decoding of server-sent content encoded with the {{glossary("Zstandard compression")}} algorithm ([Firefox bug 1871963](https://bugzil.la/1871963)).

#### Removals

### Security

#### Removals

### APIs

- [`IDBFactory.databases()`](/en-US/docs/Web/API/IDBFactory/databases) is now supported for enumerating available [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) databases ([Firefox bug 934640](https://bugzil.la/934640)).
- The [`URL.parse()`](/en-US/docs/Web/API/URL/parse_static) static method is now supported for creating [`URL`](/en-US/docs/Web/API/URL) objects. This returns `null` if the passed parameters do not define a valid `URL`, and can hence be used as a non-throwing alternative to creating `URL` object with the [`URL` constructor](/en-US/docs/Web/API/URL/URL) ([Firefox bug 1823354](https://bugzil.la/1823354)).
- The [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) is now supported, allowing a web application to request that the screen not be dimmed or locked while it is active. This is useful for navigation and reading applications, and other applications where the screen doesn't get regular tactile input when in use, which would otherwise keep the screen awake. The API is accessed through {{domxref("Navigator.wakeLock")}} in secure contexts, which returns a {{domxref("WakeLock")}}. This can be used to request a {{domxref("WakeLockSentinel")}} that can be used to monitor the status of the wake lock, and release it manually.
  ([Firefox bug 1589554](https://bugzil.la/1589554), [Firefox bug 1874849](https://bugzil.la/1874849)).
- All [`RTCIceCandidate`](/en-US/docs/Web/API/RTCIceCandidate) properties and methods are now supported and match the specification, with the exception of unimplemented properties: `relayProtocol` and `url`.

  - The following properties were made read-only: [`candidate`](/en-US/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/en-US/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/en-US/docs/Web/API/RTCIceCandidate/sdpMLineIndex), [`usernameFragment`](/en-US/docs/Web/API/RTCIceCandidate/usernameFragment),
  - The following properties were added: [`foundation`](/en-US/docs/Web/API/RTCIceCandidate/foundation), [`component`](/en-US/docs/Web/API/RTCIceCandidate/component), [`priority`](/en-US/docs/Web/API/RTCIceCandidate/priority), [`address`](/en-US/docs/Web/API/RTCIceCandidate/address), [`protocol`](/en-US/docs/Web/API/RTCIceCandidate/protocol), [`port`](/en-US/docs/Web/API/RTCIceCandidate/port), [`type`](/en-US/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/en-US/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/en-US/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/en-US/docs/Web/API/RTCIceCandidate/relatedPort), [`usernameFragment`](/en-US/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox bug 1322186](https://bugzil.la/1322186)).

#### DOM

- The ability to define states for custom elements and match them using CSS selectors is now available by default.
  The custom states are represented as custom identifiers that can be added to or removed from the element's {{domxref("ElementInternals.states")}} property (a {{domxref("CustomStateSet")}}). The CSS [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class takes a custom identifier as an argument and matches custom elements if the identifier is present in their set of states. ([Firefox bug 1887543](https://bugzil.la/1887543)).

#### Media, WebRTC, and Web Audio

#### Removals

- The marquee events [`bounce`](/en-US/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/en-US/docs/Web/API/HTMLMarqueeElement#finish), and [`start`](/en-US/docs/Web/API/HTMLMarqueeElement#start) have been removed from [`HTMLMarqueeElement`](/en-US/docs/Web/API/HTMLMarqueeElement), along with the corresponding [event handler attributes](/en-US/docs/Web/HTML/Element/marquee#event_handlers) defined on the [`<marquee>` HTML element](/en-US/docs/Web/HTML/Element/marquee) ([Firefox bug 1689705](https://bugzil.la/1689705)).

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- The {{WebExtAPIRef("commands.onCommand")}} event now passes the `tab` argument to the event listener. This enables extensions to apply a triggered shortcut to the page in which it was issued, without the need to call the `tabs.query()` method ([Firefox bug 1843866](https://bugzil.la/1843866)).
- The {{WebExtAPIRef("runtime.MessageSender")}} type now includes the `origin` property. This enables message or connection requests to see the page or frame that opened the connection. This is useful for identifying if the origin can be trusted if it isn't apparent from the URL ([Firefox bug 1787379](https://bugzil.la/1787379)).
- The `"webRequestAuthProvider"` permission is now supported. This provides compatibility with Chrome for requesting permission for {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox bug 1820569](https://bugzil.la/1820569)).
- The [`options_page` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) is provided as an alias of the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key. This has been provided to offer extensions better compatibility with Chrome ([Firefox bug 1816960](https://bugzil.la/1816960)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 126 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
