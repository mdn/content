---
title: Viewport Segments API
slug: Web/API/Viewport_segments_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Viewport.segments
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

The **Viewport Segments API** allows developers to access the position and dimensions of logically separate viewport segments using CSS and JavaScript. _Viewport segments_ are created when the viewport is split by one or more hardware features such as a fold or a hinge between separate displays. With the Viewport Segments API, developers can create responsive designs optimized for different viewport segment sizes and arrangements.

## Concepts and usage

Devices with multiple displays that are intended to act as different segments of the same display surface (think foldable or hinged screen smartphones) present some unique design challenges to developers. You can optimize your layout for the display as a single entity, but how can you ensure that design elements fit snugly on the different segments and are not cut into two pieces? And how can you prevent content from being hidden by the physical fold/join?

It may be important to know whether a user's device screen has a fold or join, what size the different segments are, whether they are the same size, and the orientation of the segments (whether they are side-by-side or top-to-bottom). The Viewport Segments API enables accessing the user's segmented device information with CSS and JavaScript features that provide access to the position and dimensions of each viewport segment within a display, including {{cssxref("@media")}} features to detect different horizontal and vertical region layouts.

For an explanation of how the API works, see [Using the Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API/Using).

## Interfaces

- {{domxref("Viewport")}}
  - : Represents the device's viewport. Provides access to the {{domxref("Viewport.segments")}} property, which returns an array of {{domxref("DOMRect")}} objects representing the position and dimensions of each viewport segment within a segmented display.

### Extensions to other interfaces

- {{domxref("Window.viewport")}}
  - : Returns a `Viewport` object instance, which provides information about the current state of the device's viewport.

## CSS features

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` feature
  - : Detects whether the device has a specified number of viewport segments laid out horizontally.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` feature
  - : Detects whether the device has a specified number of viewport segments laid out vertically.
- [Viewport segment environment variables](/en-US/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : These [environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables/Using) provide access to the edge coordinates and dimensions of each viewport segment.

## Examples

You can find a complete example demonstrating usage of the above features in the [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/).

If possible, you should view the demo on a foldable device. Current browser developer tools enable emulating foldable devices, but don't include emulation of the different physical segments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API/Using)
- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [CSS environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables) module
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
