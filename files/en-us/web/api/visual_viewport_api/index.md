---
title: Visual Viewport API
slug: Web/API/Visual_Viewport_API
page-type: web-api-overview
tags:
  - API
  - Layout
  - Overview
  - Reference
  - layout viewport
  - viewport
  - visual
  - visual viewport
browser-compat: api.VisualViewport
---
{{DefaultAPISidebar("Visual Viewport")}}

The **Visual Viewport API** provides an explicit mechanism for querying and modifying the properties of the window's {{Glossary("visual viewport")}}. The visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.

## Visual Viewport concepts and usage

The mobile web contains two viewports, the layout viewport and the visual viewport. The layout viewport covers all the elements on a page and the visual viewport is what is actually visible on the screen. When the user pinch-zooms into the page, the visual viewport shrinks but the layout viewport is unchanged. User-interface features like the on-screen keyboard (OSK) can shrink the visual viewport without affecting the layout viewport.

What happens when a web page element needs to be visible on screen regardless of the visible portion of a web page? For example, what if you need a set of image controls to remain on screen regardless of the pinch zoom level of the device? Current browsers vary in how they handle this. The visual viewport lets web developers solve this by positioning elements relative to what's shown on screen.

To access a window's visual viewport, you can obtain a {{domxref("VisualViewport")}} object from the {{domxref("window.visualViewport")}} property. The object includes a set of properties describing the viewport. It also adds two events, `onresize` and `onscroll`, that fire whenever the visual viewport changes. These events allow you to position elements relative to the visual viewport that would normally be anchored to the layout viewport.

## Accessing the API

- {{domxref("window.visualViewport")}} {{ReadOnlyInline}}
  - : A read-only reference to the window's {{domxref("VisualViewport")}} object. If this property doesn't exist, the API is unsupported.

## Interfaces

- {{DOMxRef("VisualViewport")}}
  - : Represents the visual viewport for a given window. A window's `VisualViewport` object provides information about the viewport's position and size, and receives the {{domxref("VisualViewport.resize_event", "resize")}} and {{domxref("VisualViewport.scroll_event", "scroll")}} events you can monitor to know when changes occur to the window's viewport.

## Example

The code below is based on [the sample in the specification](https://github.com/WICG/visual-viewport/blob/gh-pages/examples/fixed-to-viewport.html), though it adds a few things that make it function better. It shows a function called `viewportHandler()`. When called it queries the `offsetLeft` and `height` properties for values it uses in a CSS `translate()` method. You invoke this function by passing it to _both_ event calls.

One thing that may not be clear in this example is the use of the `pendingUpdate` flag and the call to `requestAnimationFrame()`. The `pendingUpdate` flag serves to prevent multiple invocations of the transform that can occur when `onresize` and `onscroll` fire at the same time. Using `requestAnimationFrame()` ensures that the transform occurs before the next render.

```js
let pendingUpdate = false;

function viewportHandler(event) {
  if (pendingUpdate) return;
  pendingUpdate = true;

  requestAnimationFrame(() => {
    pendingUpdate = false;
    const layoutViewport = document.getElementById('layoutViewport');

    // Since the bar is position: fixed we need to offset it by the
    // visual viewport's offset from the layout viewport origin.
    const viewport = event.target;
    const offsetLeft = viewport.offsetLeft;
    const offsetTop = viewport.height
                - layoutViewport.getBoundingClientRect().height
                + viewport.offsetTop;

    // You could also do this by setting style.left and style.top if you
    // use width: 100% instead.
    bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${1 / viewport.scale})`;
  });
}

window.visualViewport.addEventListener('scroll', viewportHandler);
window.visualViewport.addEventListener('resize', viewportHandler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
