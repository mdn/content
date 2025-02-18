---
title: "RestrictionTarget: fromElement() static method"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.RestrictionTarget.fromElement_static
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`fromElement()`** static method of the {{domxref("RestrictionTarget")}} interface returns a {{domxref("RestrictionTarget")}} instance that can be used to restrict a captured video track to a specified DOM element (plus its descendants).

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameters

- `element`

  - : A reference to an {{domxref("Element")}} that you want to use as a restriction target. For an element to be used as a restriction target, it must:

    - Form a [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
    - Be flattened in 3D space (for example, it is not subjected to any 3D [transforms](/en-US/docs/Web/CSS/CSS_transforms)).
    - Be rendered (for example, not be off-screen or hidden via `display: none`).
    - Contain only one box fragment (for example, not be broken across multiple lines).

    If it does not meet the above criteria, it is considered to be **not eligible for restriction**.

    In addition, the element will not be captured if the track being restricted has clones (that is, created by {{domxref("BrowserCaptureMediaStreamTrack.clone()")}}) or is captured from a different tab to the current user's tab (passed via {{domxref("Window.postMessage()")}}, for example).

> [!NOTE]
> When the element is captured, any alpha-channel value set on it is not included. If the restriction target element is semi-transparent, it will end up completely opaque in the capture and therefore end up looking different.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("RestrictionTarget")}} object instance, which can then be passed to {{domxref("BrowserCaptureMediaStreamTrack.restrictTo()")}} to restrict the video captured in the track to just the particular DOM element the `RestrictionTarget` was created with.

`RestrictionTarget` objects are serializable. They can be passed to another document using mechanisms such as {{domxref("Window.postMessage()")}}.

The promise will reject if the restriction target element is not eligible for restriction.

## Examples

```js
// Options for getDisplayMedia()
const displayMediaOptions = {
  preferCurrentTab: true,
};

// Create restriction target from DOM element
const demoElem = document.querySelector("#demo");
const restrictionTarget = await RestrictionTarget.fromElement(demoElem);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Restrict video track
await track.restrictTo(restrictionTarget);

// Broadcast restricted stream in <video> element
videoElem.srcObject = stream;
```

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture) for in-context example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
