---
title: Firefox 110 for developers
slug: Mozilla/Firefox/Releases/110
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 110 that will affect developers. Firefox 110 was released on February 14, 2023.

## Changes for web developers

### HTML

No notable changes.

### CSS

- Container queries and container query length units are now supported by default.
  For more information on these queries and the related units of length, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units) documentation ([Firefox bug 1809720](https://bugzil.la/1809720)).
- The [color-gamut media query](/en-US/docs/Web/CSS/@media/color-gamut) is now supported ([Firefox bug 1422237](https://bugzil.la/1422237)).
- The [`list`](/en-US/docs/Web/HTML/Element/datalist#color_type) attribute is supported in `<input>` elements with `type="color"` on Windows and Linux ([Firefox bug 960984](https://bugzil.la/960984)).
- The [`@page`](/en-US/docs/Web/CSS/@page) at-rule now supports named pages, which allows a user to create page breaks for specific selectors using the [`page`](/en-US/docs/Web/CSS/page) property ([Firefox bug 1787947](https://bugzil.la/1787947))

### JavaScript

- Serialization of [native Error types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types) now includes the [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) property in workers when using [`Worker.postMessage()`](/en-US/docs/Web/API/Worker/postMessage) and {{DOMxRef("Window.structuredClone", "structuredClone()")}}.
  With this addition, cloning native error stacks now works for all methods that use the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), in both the main thread and workers.
  (See [Firefox bug 1774866](https://bugzil.la/1774866) for more details.)

### APIs

- The `midi` permission of the [Permission API](/en-US/docs/Web/API/Permissions_API) is now supported.
  This allows the permission status for using the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) to be queried using [`navigator.permissions.query()`](/en-US/docs/Web/API/Permissions/query) ([Firefox bug 1772166](https://bugzil.la/1772166)).

- {{domxref("ReadableStream")}} now supports [asynchronous iteration over the chunks in a stream](/en-US/docs/Web/API/ReadableStream#async_iteration) using the `for await...of` syntax ([Firefox bug 1734244](https://bugzil.la/1734244)).

- WebRTC now supports sending the set of available encodings when adding a transceiver to a peer connection, and also getting the active encoding associated with a sender.
  Specifically, {{domxref("RTCPeerConnection.addTransceiver()")}} now supports using the [`sendEncodings`](/en-US/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) option in the [`init`](/en-US/docs/Web/API/RTCPeerConnection/addTransceiver#init) parameter object, and `active` can be used to determine whether or not the encoding is being used to send data.
  (See [Firefox bug 1676855](https://bugzil.la/1676855) for more details.)

- WebRTC methods {{domxref("RTCRtpSender.getParameters()")}}, {{domxref("RTCRtpSender.setParameters()")}}, and {{domxref("RTCRtpReceiver.getParameters()")}} are now compliant with the specification ([Firefox bug 1401592](https://bugzil.la/1401592)).

#### DOM

- {{domxref("CSSContainerRule")}} is supported, allowing JavaScript to access the name and query used in an {{cssxref("@container")}} at-rule definition ([Firefox bug 1787173](https://bugzil.la/1787173)).

- Elements now lose focus if a style is applied that makes them ineligible to hold focus, such as `hidden`, and the [`blur` event](/en-US/docs/Web/API/Element/blur_event) is fired.
  Focus then moves to the viewport.
  Previously focus would remain with the element.
  (See [Firefox bug 1810077](https://bugzil.la/1810077) for more details.)

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for the `network.beforeRequestSent` ([Firefox bug 1790368](https://bugzil.la/1790368)), the `network.responseStarted` ([Firefox bug 1790370](https://bugzil.la/1790370)), and the `network.responseCompleted` ([Firefox bug 1790372](https://bugzil.la/1790372)) events.

- Added support for the `browsingContext.captureScreenshot` command to capture full page screenshots ([Firefox bug 1800086](https://bugzil.la/1800086)).

- Added support for serialization and deserialization of generic platform objects ([Firefox bug 1792524](https://bugzil.la/1792524)), and for `NodeList` and `HTMLCollection` platform objects ([Firefox bug 1802284](https://bugzil.la/1802284)).

- Added a `timestamp` field to the `browsingContext.domContentLoaded` and `browsingContext.load` events ([Firefox bug 1790378](https://bugzil.la/1790378)).

- Added a `type` field to the response for `script.evaluate` and `script.callFunction` to indicate either `success` or `exception` results ([Firefox bug 1803599](https://bugzil.la/1803599)).

#### Marionette

- The cache for known nodes (element and shadow root references) has been moved from the parent to the web content process following recent WebDriver classic changes ([Firefox bug 1692468](https://bugzil.la/1692468)).

- Improved the JSON serialization and deserialization algorithms to be compliant with the WebDriver classic specification ([Firefox bug 1794078](https://bugzil.la/1794078)).

## Changes for add-on developers

- Added the `"webRequestFilterResponse"`[API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). This permission provides access to {{WebExtAPIRef("webRequest.filterResponseData")}}. This permission can be provided as an optional permission. See {{WebExtAPIRef("webRequest.filterResponseData")}} for more information on using this permission ([Firefox bug 1809235](https://bugzil.la/1809235)).
- The `defaultZoomFactor` property of {{WebExtAPIRef("tabs.ZoomSettings")}} now returns the value of the default zoom factor setting ([Firefox bug 1772166](https://bugzil.la/1772166))

## Older versions

{{Firefox_for_developers}}
