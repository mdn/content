---
title: "Selection: getComposedRanges() method"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
page-type: web-api-instance-method
browser-compat: api.Selection.getComposedRanges
---

{{ ApiRef("DOM") }}

The **`Selection.getComposedRanges()`** method returns an array of {{domxref("StaticRange")}} objects representing the current selection ranges, and can return ranges that potentially cross shadow boundaries.

As the selection range endpoints may be within a shadow tree, or even different shadow trees, and because these may be closed, the method cannot by default return nodes from within a shadow tree.
If the method needs to return a selection that includes nodes inside shadow trees, then the {{domxref("ShadowRoot")}} for these trees must be passed as arguments to the method.
If a corresponding root is not provided, the method will return a selection as though the entire host element for the shadow root was selected.

<!-- What does "composed range" mean?
Various things I've seen seem to mean that you're not getting back an actual range of raw HTML but a range that maps to visual elements, taking account of CSS etc. Upshot is that this is a useful range.
-->
<!-- what does the fact this returns StaticRange mean?
Need to do more research, but my understanding is that the StaticRange will stay the same even if the underlying DOM inside it changes. So you might end up with a selection that no longer matches what you started with, but your browser doesn't have do anywhere near as much to track changes.
Need to ask about "practical" issues of this?
-->
<!-- what is flattened tree -->

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(shadowRoot1)
getComposedRanges(shadowRoot1, shadowRoot2)
getComposedRanges(shadowRoot1, shadowRoot2, /* …, */ shadowRootN)
```

### Parameters

- `shadowRoot1, …, shadowRootN`
  - : Zero or more {{domxref("ShadowRoot")}} arguments.
    If a selection endpoint is within one of the provided shadow roots, the range will be able to return nodes within it's corresponding Shadow DOM tree.
    Otherwise, if the selection crosses a shadow boundary and the corresponding `ShadowRoot` is not provided, the returned range will be adjusted to include the entire host element for the shadow root.

### Return value

An array of {{domxref("StaticRange")}} objects that represent the selected ranges within the composed (flattened) tree of the document.
At time of writing this array will only contain one object.

## Examples

```js

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
