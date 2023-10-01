---
title: EyeDropper API
slug: Web/API/EyeDropper_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.EyeDropper
---

{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

The **EyeDropper API** provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window.

## Concept

Creative applications often allow users to sample colors from drawings or shapes in the application to reuse. Web applications can use the **EyeDropper API** to provide a similar eyedropper mode, provided by the browser.

Using the API, a web application can start the eyedropper mode. Once started, the cursor changes to indicate to the user that the mode is active. The user can then either select a color from anywhere on the screen, or dismiss the eyedropper mode by pressing <kbd>Escape</kbd>.

## Security and privacy measures

To prevent malicious websites from getting pixel data from a user's screen without them realizing, the **EyeDropper API** implements the following measures:

- The API doesn't let the eyedropper mode start without user intent. The {{domxref("EyeDropper.prototype.open()")}} method can only be called in response to a user action (like a button click).
- No pixel information can be retrieved without user intent again. The promise returned by {{domxref("EyeDropper.prototype.open()")}} only resolves to a color value in response to a user action (clicking on a pixel). So the eyedropper cannot be used in the background without the user noticing it.
- To help users notice the eyedropper mode more easily, it is made obvious by browsers. The normal mouse cursor disappears after a short delay and a magnifying glass appears instead. There is also a delay between when the eyedropper mode starts and when the user can select a pixel to ensure the user has had time to see the magnifying glass.
- Users are also able to cancel the eyedropper mode at any time (by pressing the <kbd>Escape</kbd> key).

## Interfaces

- {{DOMxRef("EyeDropper")}} {{Experimental_Inline}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Picking colors of any pixel on the screen with the EyeDropper API](https://web.dev/eyedropper/)
- [The EyeDropper API W3C/SMPTE Joint Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
