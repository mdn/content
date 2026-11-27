---
title: Capture Handle API
slug: Web/API/Capture_Handle_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.MediaDevices.setCaptureHandleConfig
  - api.MediaStreamTrack.getCaptureHandle
  - api.MediaStreamTrack.capturehandlechange_event
spec-urls: https://w3c.github.io/mediacapture-handle/identity/
---

{{DefaultAPISidebar("Capture Handle API")}}{{SeeCompatTable}}

The **Capture Handle API** lets a web page that is being captured, for example when a user shares a tab in a video call, pass an identifier to the app that is capturing it.

## Concepts and usage

When a user shares a tab or window using the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API), the capturing app gets a video stream. It can't tell which web app is in that stream, so it can't work together with it. For example, a video call app can't show slide controls for a presentation that is being shared.

With the Capture Handle API, the captured page can choose to share some information about itself. This information is called a **capture handle**. It is a string that the page picks, and optionally the page's {{glossary("origin")}}. The capturing app reads the capture handle from the video track it received.

### Sharing a capture handle

To share a handle, a page calls `navigator.mediaDevices.setCaptureHandleConfig()` and passes an object with these properties:

- `handle`
  - : A string of up to 1024 characters that identifies the page, such as a random session ID. The default is an empty string.
- `exposeOrigin`
  - : A boolean. If `true`, the page's origin is shared together with the handle. The default is `false`.
- `permittedOrigins`
  - : An array of the origins that are allowed to read the handle. It can be an empty array (nobody can read it), an array with only `"*"` (any app can read it), or a list of specific origins. The default is an empty array.

The captured page decides who gets the handle. An app whose origin is not in `permittedOrigins` gets nothing.

### Reading a capture handle

The capturing app calls `getCaptureHandle()` on the video {{domxref("MediaStreamTrack")}} that it got from {{domxref("MediaDevices.getDisplayMedia()")}}. If the page shared a handle and the app is allowed to read it, the method returns an object with the `handle`, and with the `origin` if the page asked to share it. Otherwise it returns `null`.

The handle can change while the track is running. For example, the page can change its settings, or the user can go to another page in the shared tab. When that happens, the track fires a `capturehandlechange` event, so the app doesn't have to keep checking.

### Use cases

- Remote control: a video call app notices that a presentation is being shared and shows buttons for the next and previous slide.
- Avoiding self-capture: if an app captures its own tab, its preview ends up inside the stream, which creates an endless loop of images. The app can share its own handle, spot it on the captured track, and hide the preview.
- Checking the content: an app can check that the page the user shared is the one it expected.
- Analytics: an app can count which web apps its users share.

The captured page does not learn that it is being captured. Only a capturing app that uses the handle to contact the page can link the two.

## Interfaces

This API adds no new interfaces. It adds two methods and an event to the {{domxref("MediaDevices")}} and {{domxref("MediaStreamTrack")}} interfaces of the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API).

### Extensions to other interfaces

- `MediaDevices.setCaptureHandleConfig()` {{Experimental_Inline}}
  - : Sets the capture handle for the current page and chooses which apps can read it.
- `MediaStreamTrack.getCaptureHandle()` {{Experimental_Inline}}
  - : Returns the capture handle that the captured page shared with the capturing app, or `null` if there is none.
- `MediaStreamTrack`: `capturehandlechange` event {{Experimental_Inline}}
  - : Fired when the capture handle that the capturing app can see changes.

## Examples

### Sharing a handle from the captured page

In this example, a presentation app shares a session ID and its origin. Only the video call app at `https://meet.example.com` can read them.

```js
navigator.mediaDevices.setCaptureHandleConfig({
  handle: "session-4f2a9c",
  exposeOrigin: true,
  permittedOrigins: ["https://meet.example.com"],
});
```

### Reading the handle in the capturing app

In this example, the video call app at `https://meet.example.com` captures a tab. It logs the capture handle right away, and again each time the handle changes.

```js
const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
const [track] = stream.getVideoTracks();

function logCaptureHandle() {
  const captureHandle = track.getCaptureHandle();
  if (captureHandle) {
    console.log(`Captured origin: ${captureHandle.origin}`);
    console.log(`Handle: ${captureHandle.handle}`);
  } else {
    console.log("No capture handle available");
  }
}

logCaptureHandle();
track.addEventListener("capturehandlechange", logCaptureHandle);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Better tab sharing with Capture Handle](https://developer.chrome.com/docs/web-platform/capture-handle) on developer.chrome.com
