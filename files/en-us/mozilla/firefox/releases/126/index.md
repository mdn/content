---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 126 that affect developers. Firefox 126 was released on [May 14, 2024](https://whattrainisitnow.com/release/?version=126).

## Changes for web developers

### Developer Tools

- Added an option to disable split console ([Firefox bug 1731635](https://bugzil.la/1731635)).

### HTML

No notable changes.

### MathML

#### Removals

- The automatic adjustment for vertically centered operators (+, =, <, etc.) has been disabled by default. This behavior is not defined in MathML Core and was only necessary as a workaround for non-math fonts. It can still be enabled by setting the `mathml.centered_operators.disabled` config to `false`. ([Firefox bug 1890531](https://bugzil.la/1890531)).

### CSS

- The {{cssxref("zoom")}} property is now supported. It can be used to increase or decrease the size of an element and its contents ([Firefox bug 390936](https://bugzil.la/390936)).

### JavaScript

No notable changes.

### HTTP

- The [`zstd`](/en-US/docs/Web/HTTP/Headers/Content-Encoding#zstd) directive of the `Content-Encoding` HTTP header is now supported, allowing decoding of server-sent content encoded with the {{glossary("Zstandard compression")}} algorithm ([Firefox bug 1871963](https://bugzil.la/1871963)).

### APIs

- [`IDBFactory.databases()`](/en-US/docs/Web/API/IDBFactory/databases) is now supported for enumerating available [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) databases ([Firefox bug 934640](https://bugzil.la/934640)).
- [`IDBTransaction.durability`](/en-US/docs/Web/API/IDBTransaction/durability) can now be used for querying the transaction durability hint that the transaction was created with ([Firefox bug 1878143](https://bugzil.la/1878143)).
- The [`URL.parse()`](/en-US/docs/Web/API/URL/parse_static) static method is now supported for creating [`URL`](/en-US/docs/Web/API/URL) objects. This returns `null` if the passed parameters do not define a valid `URL`, and can hence be used as a non-throwing alternative to creating `URL` object with the [`URL` constructor](/en-US/docs/Web/API/URL/URL) ([Firefox bug 1823354](https://bugzil.la/1823354)).
- The [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) is now supported, allowing a web application to request that the screen not be dimmed or locked while it is active. This is particularly useful for navigation and reading applications, as well as other applications where the screen may not receive regular tactile input when in use that would typically keep it awake. The API is accessed through {{domxref("Navigator.wakeLock")}} in secure contexts, which returns a {{domxref("WakeLock")}}. This allows you to request a {{domxref("WakeLockSentinel")}}, which can be used to monitor the status of the wake lock and release it manually ([Firefox bug 1589554](https://bugzil.la/1589554), [Firefox bug 1874849](https://bugzil.la/1874849)).
- All [`RTCIceCandidate`](/en-US/docs/Web/API/RTCIceCandidate) properties and methods are now supported and match the specification, with the exception of the unimplemented `relayProtocol` and `url` properties. The following changes were made to the properties of `RTCIceCandidate`:

  - The following properties were made read-only: [`candidate`](/en-US/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/en-US/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/en-US/docs/Web/API/RTCIceCandidate/sdpMLineIndex), and [`usernameFragment`](/en-US/docs/Web/API/RTCIceCandidate/usernameFragment).
  - The following properties were added: [`foundation`](/en-US/docs/Web/API/RTCIceCandidate/foundation), [`component`](/en-US/docs/Web/API/RTCIceCandidate/component), [`priority`](/en-US/docs/Web/API/RTCIceCandidate/priority), [`address`](/en-US/docs/Web/API/RTCIceCandidate/address), [`protocol`](/en-US/docs/Web/API/RTCIceCandidate/protocol), [`port`](/en-US/docs/Web/API/RTCIceCandidate/port), [`type`](/en-US/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/en-US/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/en-US/docs/Web/API/RTCIceCandidate/relatedAddress), [`relatedPort`](/en-US/docs/Web/API/RTCIceCandidate/relatedPort), and [`usernameFragment`](/en-US/docs/Web/API/RTCIceCandidate/usernameFragment).

  ([Firefox bug 1322186](https://bugzil.la/1322186)).

- The {{domxref("Element.currentCSSZoom")}} read only property is now supported for getting the effective CSS [zoom](/en-US/docs/Web/CSS/zoom) of an element ([Firefox bug 1880189](https://bugzil.la/1880189)).

#### DOM

- The ability to define states for custom elements and match them using CSS selectors is now available by default.
  The custom states are represented as custom identifiers that can be added to or removed from the element's {{domxref("ElementInternals.states")}} property (a {{domxref("CustomStateSet")}}). The CSS [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class takes a custom identifier as an argument and matches custom elements if the identifier is present in their set of states ([Firefox bug 1887543](https://bugzil.la/1887543)).
- The {{domxref("Selection.direction")}} property is now supported for indicating the direction of a range ([Firefox bug 1867058](https://bugzil.la/1867058)).

#### Media, WebRTC, and Web Audio

##### Removals

- The [`<marquee>` HTML element](/en-US/docs/Web/HTML/Element/marquee) events [`bounce`](/en-US/docs/Web/API/HTMLMarqueeElement#bounce), [`finish`](/en-US/docs/Web/API/HTMLMarqueeElement#finish), and [`start`](/en-US/docs/Web/API/HTMLMarqueeElement#start) have been removed from [`HTMLMarqueeElement`](/en-US/docs/Web/API/HTMLMarqueeElement), along with the corresponding [event handler attributes](/en-US/docs/Web/API/HTMLMarqueeElement#events) ([Firefox bug 1689705](https://bugzil.la/1689705)).
- The [Theora](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#theora) codec was disabled by default, and will be removed in a future release ([Firefox bug 1860492](https://bugzil.la/1860492)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added the `contexts` argument to the `network.addIntercept` command to limit the interception of network requests to particular top-level browsing contexts ([Firefox bug 1882260](https://bugzil.la/1882260)).
- Both the commands `session.subscribe` and `session.unsubscribe` now raise an `invalid argument` error when the value of the arguments `events` or `contexts` are empty arrays ([Firefox bug 1887871](https://bugzil.la/1887871)).
- Updated the implementation of the `storage.getCookies` command to align with the Gecko default cookie behaviour. This allows the removal of the user value for the preference `network.cookie.cookieBehavior`, which was only expected to be set for our CDP implementation ([Firefox bug 1879503](https://bugzil.la/1879503)).
- Removed the `ownership` and `sandbox` arguments for the `browsingContext.locateNodes` command because they are no longer necessary ([Firefox bug 1884935](https://bugzil.la/1884935)).
- Improved error message for the `session.new` command when no capabilities are specified ([Firefox bug 1838152](https://bugzil.la/1838152)).

## Changes for add-on developers

- The {{WebExtAPIRef("commands.onCommand")}} event now passes the `tab` argument to the event listener. This enables extensions to apply a triggered shortcut to the page in which it was issued, without the need to call the `tabs.query()` method ([Firefox bug 1843866](https://bugzil.la/1843866)).
- The {{WebExtAPIRef("runtime.MessageSender")}} type now includes the `origin` property. This enables message or connection requests to see the page or frame that opened the connection. This is useful for identifying if the origin can be trusted if it isn't apparent from the URL ([Firefox bug 1787379](https://bugzil.la/1787379)).
- The `"webRequestAuthProvider"` permission is now supported. This provides compatibility with Chrome for requesting permission for {{WebExtAPIRef("webRequest.onAuthRequired")}} in Manifest V3 ([Firefox bug 1820569](https://bugzil.la/1820569)).
- The [`options_page` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) is provided as an alias of the [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) key. This has been provided to offer extensions better compatibility with Chrome ([Firefox bug 1816960](https://bugzil.la/1816960)).
- The {{WebExtAPIRef("tabs.captureVisibleTab")}} method is now also enabled by the `activeTab` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), providing compatibility with Chrome and Safari ([Firefox bug 1784920](https://bugzil.la/1784920)).

## Experimental web features

These features are newly shipped in Firefox 126 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Selections crossing shadow DOM boundary:** `dom.shadowdom.selection_across_boundary.enabled`.

  The {{domxref("Selection.getComposedRanges()")}} method can be used to get selection ranges that have anchor or focus nodes inside a shadow DOM — provided it is passed the {{domxref("ShadowRoot")}} objects that contain those nodes. `Selection` methods {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, and {{domxref("Selection.extend()","extend()")}} have also been modified to accept nodes inside a shadow root ([Firefox bug 1867058](https://bugzil.la/1867058)).

- **CSS `shape()` function:** `layout.css.basic-shape-shape.enabled`.

  You can use the {{cssxref("basic-shape/shape","shape()")}} function to define shapes in the {{cssxref("clip-path")}} and {{cssxref("offset-path")}} properties. This function gives you more fine-grained control over the shapes you can define and offers several advantages over the {{cssxref("basic-shape/path","path()")}} function ([Firefox bug 1823463](https://bugzil.la/1823463) for `shape()` function support in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) for `shape()` function support in `offset-path`, [Firefox bug 1884425](https://bugzil.la/1884425) for `shape()` interpolation support).

## Older versions

{{Firefox_for_developers}}
