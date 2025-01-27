---
title: Screen Capture extensions
slug: Web/API/Screen_Capture_extensions
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.CropTarget
  - api.RestrictionTarget
spec-urls:
  - https://screen-share.github.io/element-capture/
  - https://w3c.github.io/mediacapture-region/
---

{{SeeCompatTable}}

{{DefaultAPISidebar("Screen Capture extensions")}}{{securecontext_header}}

The [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) allows the user to capture their screen (or a specific window or tab) as a media stream, which can then be shared and broadcast. This section documents APIs that extend the Screen Capture API functionality with additional functionality, for example to limit the part of the screen captured in the stream to a particular crop or element.

## Concepts and usage

The Screen Capture API was created specifically to allow apps to capture the user's screen — or a particular window or tab — and then do something with the resulting stream (such as transmit it to multiple peers via [WebRTC](/en-US/docs/Web/API/WebRTC_API)). The main use case is video conferencing apps, where a user might wish to share a demo running on their local machine with other participants.

The problem with the Screen Capture API is that, by default, it only allows you to broadcast the entire window, screen or tab selected by the user. Often it would be preferrable to share only a limited region to cut down on unnecessary bandwidth or screen space required to show the capture, or for privacy reasons (you might not want to show other participants your message notifications, or background settings required to run the demo you are sharing).

The following Screen Capture API extensions provide mechanisms to limit the region captured in the stream:

- The **Element Capture API** restricts the captured region to a specified rendered DOM element.
- The **Region Capture API** crops the captured region to the area of the screen in which a specified DOM element is rendered.

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Region_Capture) to learn more.

## Interfaces

- {{domxref("BrowserCaptureMediaStreamTrack")}}
  - : Represents a single video track; extends the {{domxref("MediaStreamTrack")}} class with methods to limit the part of a self-capture stream (for example, a user's screen or window) that is captured.
- {{domxref("CropTarget")}}
  - : Provides a static method, {{domxref("CropTarget.fromElement_static", "fromElement()")}}, which returns a {{domxref("CropTarget")}} instance that can be used to crop a captured video track to the area in which a specified element is rendered.
- {{domxref("RestrictionTarget")}}
  - : Provides a static method, {{domxref("RestrictionTarget.fromElement_static", "fromElement()")}}, which returns a {{domxref("RestrictionTarget")}} instance that can be used to restrict a captured video track to a specified DOM element.

## Examples

For demos, see our [Screen Capture API demos](https://mdn.github.io/dom-examples/screen-capture-api) GitHub directory. See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_extensions/Element_Region_Capture) for code explanation.

See also [Element Capture Demo](https://element-capture-demo.glitch.me/) and [Region Capture Demo](https://region-capture-demo.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) on developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) on developer.chrome.com (2023)
