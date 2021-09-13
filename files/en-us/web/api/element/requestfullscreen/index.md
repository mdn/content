---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - API
  - DOM
  - Element
  - Full
  - Fullscreen API
  - Graphics
  - Method
  - Reference
  - Video
  - full screen
  - fullscreen
  - requestFullscreen
  - screen
browser-compat: api.Element.requestFullscreen
---
{{APIRef("Fullscreen API")}}

The **`Element.requestFullscreen()`**
method issues an asynchronous request to make the element be displayed in full-screen
mode.

It's not guaranteed that the element will be put into full screen mode. If permission
to enter full screen mode is granted, the returned {{JSxRef("Promise")}} will resolve
and the element will receive a {{Event("fullscreenchange")}} event to let it know that
it's now in full screen mode. If permission is denied, the promise is rejected and the
element receives a {{Event('fullscreenerror')}} event instead. If the element has been
detached from the original document, then the document receives these events instead.

> **Note:** This method must be called while responding to a user
> interaction or a device orientation change; otherwise it will fail.

## Syntax

```js
var promise = element.requestFullscreen(options);
```

### Parameters

- `options` {{optional_inline}}
  - : An object that controls the behavior of the transition to full-screen mode. See below for available options.

### Options

- `navigationUI`

  - : Controls whether or not to show navigation UI while the element is in full-screen mode.
    The default value is "auto", which indicates that the browser should decide what to do.

    - `"hide"`: The browser's navigation interface will be hidden
      and the entire dimensions of the screen will be allocated to the display of the element.
    - `"show"`: The browser will present page navigation controls and possibly other
      user interface; the dimensions of the element (and the perceived size of the screen) will be clamped
      to leave room for this user interface.
    - `"auto"`: The browser will choose which of the above settings to apply.
      This is the default value.

### Return value

A {{JSxRef("Promise")}} which is resolved with a value of `undefined` when
the transition to full screen is complete.

### Exceptions

_Rather than throw a traditional exception, the `requestFullscreen()`
procedure announces error conditions by rejecting the `Promise` it has
returned. The rejection handler receives one of the following exception values:_

- {{jsxref("TypeError")}}

  - : The `TypeError` exception may be delivered in any of the following
    situations:

    - The document containing the element isn't fully active; that is, it's not the
      current active document.
    - The element is not contained by a document.
    - The element is not permitted to use the `"fullscreen"` feature,
      either because of Feature Policy configuration or other access control features.
    - The element and its document are the same node.

## Usage notes

### Compatible elements

An element that you wish to place into full-screen mode has to meet a small number of
simple requirements:

- It must be one of the standard HTML elements or {{SVGElement("svg")}} or
  {{MathMLElement("math")}}.
- It is _not_ a {{HTMLElement("dialog")}} element.
- It must either be located within the top-level document or in an
  {{HTMLElement("iframe")}} which has the {{htmlattrxref("allowfullscreen","iframe")}}
  attribute applied to it.

Additionally, of course, the Feature Policy `"fullscreen"` permission must
be granted.

### Detecting full-screen activation

You can determine whether or not your attempt to switch to full-screen mode is
successful by using the {{jsxref("Promise")}} returned by
`requestFullscreen()`, as seen in the {{anch("Example")}} below.

To learn when other code has toggled full-screen mode on and off, you should establish
listeners for the {{event("fullscreenchange")}} event on the {{domxref("Document")}}.
It's also important to listen for `fullscreenchange` to be aware when, for
example, the user manually toggles full-screen mode, or when the user switches
applications, causing your application to temporarily exit full-screen mode.

## Examples

### Requesting full-screen mode

This function toggles the first {{HTMLElement("video")}} element found in the document
into and out of full-screen mode.

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}
```

If the document isn't already in full-screen mode—detected by looking to see if
{{domxref("document.fullscreenElement")}} has a value—we call the video's
`requestFullscreen()` method. We don't need to do anything special if
successful, but if the request fails, our promise's `catch()` handler
presents an alert with an appropriate error message.

If, on the other hand, full-screen mode is already in effect, we call
{{domxref("document.exitFullscreen()")}} to disable full-screen mode.

You can [see this example
in action](https://fullscreen-requestfullscreen-demo.glitch.me/) or [view or remix the
code](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) on [Glitch](https://glitch.com/).

### Using navigationUI

In this example, the entire document is placed into full-screen mode by calling
{{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} on the document's
{{DOMxRef("Document.documentElement")}}, which is the document's root
{{HTMLElement("html")}} element.

```js
let elem = document.documentElement;

elem.requestFullscreen({ navigationUI: "show" }).then(() => {}).catch(err => {
  alert(`An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`);
});
```

The promise's resolve handler does nothing, but if the promise is rejected, an error
message is displayed by calling {{DOMxRef("Window.alert", "alert()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- {{HTMLAttrxRef("allowfullscreen", "iframe")}}
