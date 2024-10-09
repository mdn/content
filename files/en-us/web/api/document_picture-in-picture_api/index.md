---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Window.documentPictureInPicture
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

The **Document Picture-in-Picture API** makes it possible to open an always-on-top window that can be populated with arbitrary HTML content — for example a video with custom controls or a set of streams showing the participants of a video conference call. It extends the earlier [Picture-in-Picture API for `<video>`](/en-US/docs/Web/API/Picture-in-Picture_API), which specifically enables an HTML {{htmlelement("video")}} element to be put into an always-on-top window.

## Concepts and usage

It is often helpful to have a different window available to a web app in addition to the main window in which the app is running. You might want to browse other windows while keeping specific app content in view, or you might want to give that content its own space while keeping the main app window freed up to display other content. You could handle this by just opening a regular new browser window, but this has two major issues:

1. You have to handle sharing of state information between the two windows.
2. The additional app window doesn't always stay on top, and can therefore get hidden by other windows.

To solve these problems, web browsers have introduced APIs allowing apps to spawn an always-on-top window that is part of the same session. The first recognized use case was keeping video content playing in a separate window so that the user can continue to consume it while looking at other content. This is handled using the [Picture-in-Picture API for `<video>`](/en-US/docs/Web/API/Picture-in-Picture_API), which is directly used on a {{htmlelement("video")}} element to place it into the separate window.

However, this API has been found to be somewhat limiting — you can only put a single `<video>` element into the always-on-top window, with minimal browser-generated controls. To provide more flexibility, the **Document Picture-in-Picture API** has been introduced. This allows _any_ content to be placed in the always-on-top window for a wide range of use cases, including:

- An always-on-top custom video player showing one or multiple videos with custom controls and styling.
- A video conferencing system that allows the user to always see the other participant's streams, plus controls for presenting content, muting, ending calls, etc.
- Always-visible productivity tools such as timers, notes, to-do lists, messenger tools, etc.
- A separate window in which to keep additional content while the main app window is kept free of clutter. For example, you might have a action or roleplaying game running where you want to show the game controls, instructions, or lore in an additional window, keeping the main window free for displaying the game locations and map.

### How does it work?

A new {{domxref("DocumentPictureInPicture")}} object instance representing the always-on-top Picture-in-Picture window for the current document context is available via {{domxref("Window.documentPictureInPicture")}}. The Picture-in-Picture window is opened by calling the {{domxref("DocumentPictureInPicture.requestWindow()")}} method, which returns a {{jsxref("Promise")}} that fulfills with the window's own {{domxref("Window")}} object.

The Picture-in-Picture window is similar to a blank same-origin window opened via {{domxref("Window.open()")}}, with some differences:

- The Picture-in-Picture window floats on top of other windows.
- The Picture-in-Picture window never outlives the opening window.
- The Picture-in-Picture window cannot be navigated.
- The Picture-in-Picture window position cannot be set by the website.
- The Picture-in-Picture window is limited to one per browser tab at a time, with the user agent potentially further restricting the global number of Picture-in-Picture windows open.

Apart from that, you can manipulate the Picture-in-Picture window's `Window` instance however you want, for example appending the content you want to display there onto its DOM, and copying stylesheets to it so that the appended content will be styled the same way as when it is in the main window. You can also close the Picture-in-Picture window (by clicking the browser-provided control, or by running {{domxref("Window.close()")}} on it), and then react to it closing using the standard [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event). When it closes, you'll want to put the content it was showing back into the main app window.

See [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using) for a detailed usage guide.

## Interfaces

- {{domxref("DocumentPictureInPicture")}}
  - : The entry point for creating and handling document Picture-in-Picture windows.
- {{domxref("DocumentPictureInPictureEvent")}}
  - : Event object for the {{domxref("DocumentPictureInPicture/enter_event", "enter")}} event, which fires when the Picture-in-Picture window is opened.

## Extensions to other interfaces

- {{domxref("Window.documentPictureInPicture")}}
  - : Returns a reference to the {{domxref("DocumentPictureInPicture")}} object for the current document context.

## CSS additions

- {{cssxref("@media/display-mode", "display-mode")}}, the `picture-in-picture` value
  - : A [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) value that allows developers to apply CSS to a document based on whether it is being displayed in Picture-in-Picture mode.

## Examples

See [Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) for a full working demo (see the full [source code](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
