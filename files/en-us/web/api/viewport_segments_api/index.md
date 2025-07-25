---
title: Viewport segments API
slug: Web/API/Viewport_segments_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Viewport.segments
---

{{DefaultAPISidebar("Viewport segments API")}}{{seecompattable}}

The **Viewport segments API** allows developers to access the position and dimensions of logically separate viewport segments using CSS and JavaScript. Viewport segments are created when the viewport is split by one or more hardware features such as a fold or a hinge between separate displays. With the Viewport segments API, developers can create responsive designs optimized for different viewport segment sizes and arrangements.

## Concepts and usage

Devices with multiple displays that are intended to act as different segments of the same display surface (think foldable or hinged screen smartphones) present some unique design challenges to developers. You can optimize your layout for the display as a single entity, but how can you ensure that design elements fit snugly on the different segments and are not cut into two pieces? And how can you prevent content from being hidden by the physical fold/join?

It is difficult to know whether a user's device screen has a fold or join, what size the different segments are and whether they are the same size, and what orientation they are in (side-by-side or top-to-bottom).

The Viewport Segments API was created to handle such challenges. It does this with a combination of CSS and JavaScript features that provide access to the position and dimensions each viewport segment within the overall display, plus `@media` features to detect different horizontal and vertical region layouts.

For an explanation of how the API works, see [Using the Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API/Using).

## Interfaces

- {{domxref("Viewport")}}
  - : Represents the device's viewport. Provides access to the {{domxref("Viewport.segments")}} property, which returns an array of {{domxref("DOMRect")}} objects representing the position and dimensions of each viewport segment within the overall display.

### Extensions to other interfaces

- {{domxref("Window.viewport")}}
  - : Returns a `Viewport` object instance, which provides information about the current state of the device's viewport.

## CSS features

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` feature
  - : Detects whether the device has a specified number of viewport segments laid out horizontally.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` feature
  - : Detects whether the device has a specified number of viewport segments laid out vertically.
- [Viewport segment environment variables](/en-US/docs/Web/CSS/env#viewport-segment-width)
  - : These `env()` variables provide access to the edge coordinates and dimensions of each viewport segment.

## Examples

You can find a complete example demonstrating usage of the above features in the [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/).

If possible, you should view this on a foldable device. Current browser developer tools enable emulating foldable devices, but don't include emulation of the different physical segments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
