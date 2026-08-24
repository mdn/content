---
title: Firefox 154 release notes for developers (Stable)
short-title: Firefox 154 (Stable)
slug: Mozilla/Firefox/Releases/154
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 154 that affect developers.
Firefox 154 was released on [August 18, 2026](https://whattrainisitnow.com/release/?version=154).

## Changes for web developers

### Developer Tools

- The [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) now displays a breadcrumb at the bottom of the panel indicating the location of the selected entry within the JSON structure.
  ([Firefox bug 1850288](https://bugzil.la/1850288)).

### HTML

No notable changes.

### CSS

- The {{cssxref("sibling-count")}} and {{cssxref("sibling-index")}} functions are now supported. The `sibling-count()` function returns the number of sibling elements as well as the element itself. The `sibling-index()` function returns the index number of the element in relation to its siblings. The index starts at `1`, not `0`. ([Firefox bug 2045706](https://bugzil.la/2045706)).
- The {{cssxref("text-box-edge")}} and {{cssxref("text-box-trim")}} properties and the {{cssxref("text-box")}} shorthand are now supported. These properties make it easier to control text spacing in the block direction, especially when a block contains multiple fonts. The `text-box-edge` property allows you to specify the amount of space to trim from the text element's block container. The `text-box-trim` property allows you to specify which edges to trim: the over edge, the under edge, both, or neither. The `text-box` shorthand combines these two properties. ([Firefox bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- The {{jsxref("Iterator.prototype.includes()")}} method is now supported, allowing developers to check whether an iterator contains a given value.
  ([Firefox bug 2034104](https://bugzil.la/2034104)).
- The {{jsxref("Iterator.prototype.join()")}} method is now supported, returning a string that is the concatenation of all elements produced by the iterator, separated by commas or a specified separator string.
  This is similar to {{jsxref("Array.prototype.join()")}}.
  ([Firefox bug 2047995](https://bugzil.la/2047995)).
- The {{jsxref("Iterator.prototype.chunks()")}} and {{jsxref("Iterator.prototype.windows()")}} methods are now supported.
  These both return an [Iterator helper object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) that can be iterated to yield a number of elements from the original iterator as an array.
  The difference between the methods is that the `chunks()` helper splits the elements from the original iterator into consecutive array chunks, while the `windows()` helper returns an array that is a sliding window over the original iterator (each iteration yields an array that slides forward one element: dropping the first element in the previous iteration and fetching a new element from the original iterator).
  ([Firefox bug 2047997](https://bugzil.la/2047997)).

### APIs

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} method and {{domxref("RTCIceTransport/selectedcandidatepairchange_event", "selectedcandidatepairchange")}} event are now supported for getting the current {{domxref("RTCIceCandidatePair")}} for the transport.
  ([Firefox bug 2019332](https://bugzil.la/2019332)).
- The {{domxref("RTCDtlsTransport/error_event", "error")}} event is now fired on {{domxref("RTCDtlsTransport")}} to report DTLS and fingerprinting errors.
  ([Firefox bug 1805447](https://bugzil.la/1805447)).
- The `rtcp` property is now included in the object returned from {{domxref("RTCRtpReceiver.getParameters()")}} and {{domxref("RTCRtpSender.getParameters()")}}, and can be set in the object passed to {{domxref("RTCRtpSender.setParameters()")}}.
  This provides the {{glossary("RTCP")}} configuration parameters for the connection.
  ([Firefox bug 1584318](https://bugzil.la/1584318)).
- Firefox now reports all WebRTC `certificate` statistics defined in the {{domxref("RTCCertificateStats")}} dictionary, and the following additional WebRTC `transport` statistics defined in the {{domxref("RTCTransportStats")}} dictionary: {{domxref("RTCTransportStats/remoteCertificateId", "remoteCertificateId")}}, {{domxref("RTCTransportStats/localCertificateId", "localCertificateId")}}, {{domxref("RTCTransportStats/packetsSent", "packetsSent")}}, {{domxref("RTCTransportStats/packetsReceived", "packetsReceived")}}, {{domxref("RTCTransportStats/bytesSent", "bytesSent")}}, and {{domxref("RTCTransportStats/bytesReceived", "bytesReceived")}}.
  ([Firefox bug 2019349](https://bugzil.la/2019349) and [Firefox bug 2019333](https://bugzil.la/2019333)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Improved the handling of `deltaX` and `deltaY` properties for asynchronous widget wheel scroll events by taking the layout viewport into account. ([Firefox bug 1971979](https://bugzil.la/1971979)).
- Fixed a bug where a navigation would resolve prematurely for subframes when calling `history.replaceState` or when navigating to an error page (e.g., blocked by X-Frame-Options). ([Firefox bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Added a download id to `browsingContext.downloadWillBegin` and `browsingContext.downloadEnd` events to make it easier to identify which events belong to the same download. ([Firefox bug 2040936](https://bugzil.la/2040936)).
- Added support for an `ignore` state for the `unhandledPromptBehavior` property for file pickers when creating a new session with the `session.new` command. With this state, file pickers will not be handled automatically by the protocol. ([Firefox bug 1999693](https://bugzil.la/1999693)).
- Added a `userContext` field (a.k.a. Firefox container) to the payload of several WebDriver BiDi events and commands, which makes it easier to filter out incoming data for clients subscribing to events by user context id. ([Firefox bug 2018611](https://bugzil.la/2018611)).
- Implemented the `browsingContext.startScreencast` and `browsingContext.stopScreencast` commands, which will record a browsing context and save the result as a video file. ([Firefox bug 2042671](https://bugzil.la/2042671)).
- Updated the `emulation.setLocaleOverride` command to allow overriding the `Accept-Language` header for fetch and `WebSocket` requests in workers. ([Firefox bug 2052932](https://bugzil.la/2052932)).
- Fixed a bug where the `script.realmDestroyed` event was missing for a worker after cross-process navigation. ([Firefox bug 2018154](https://bugzil.la/2018154)).

## Changes for add-on developers

- Adds support for the [`sandbox`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) manifest key, enabling extensions to designate pages that load with an opaque origin, without direct access to extension APIs. A sandboxed page can use `eval()` and similar constructs that are otherwise blocked by the extension's [content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy). ([Firefox bug 1685123](https://bugzil.la/1685123))

## Experimental web features

These features are shipping in Firefox 154 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Truncating content with `line-clamp`**: `layout.css.line-clamp.enabled`

  The {{cssxref("line-clamp")}} CSS property now works without the `-webkit-` vendor prefix, though at this stage it does not support the `no-ellipsis` and `<string>` values. ([Firefox bug 2042986](https://bugzil.la/2042986)).

- **Percentage values for `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  The {{cssxref("text-decoration-inset")}} CSS property now supports percentages as values. The percentage value specifies the size of the inset as a percentage of the {{cssxref("font-size")}}. ([Firefox bug 2044602](https://bugzil.la/2044602)).

- **Calculating a value based upon `progress()`**: `layout.css.progress-function.enabled`

  The {{cssxref("progress")}} CSS function is now supported. This allows the user calculate a {{cssxref("number")}} based upon a value (or progress) in between a minimum and maximum value. ([Firefox bug 2047015](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  The [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) (as defined in the CSS Typed Object Model Level 1 specification) is now implemented.
  This simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. ([Firefox bug 2051047](https://bugzil.la/2051047)).
