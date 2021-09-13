---
title: HTMLVideoElement.msSetVideoRectangle
slug: Web/API/HTMLVideoElement/msSetVideoRectangle
tags:
  - msSetVideoRectangle
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`HTMLVideoElement.msSetVideoRectangle()`** method sets
the dimensions of a sub-rectangle within a video.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
HTMLVideoElement.msSetVideoRectangle();
```

### Parameters

- left
  - : A [number](/en-US/docs/Glossary/Number) representing left-side position.
- top
  - : A [number](/en-US/docs/Glossary/Number) representing top position.
- right
  - : A [number](/en-US/docs/Glossary/Number) representing right-side position.
- bottom
  - : A [number](/en-US/docs/Glossary/Number) representing bottom position.

### Return value

This method does not return a value.

## Example

```js
HTMLVideoElement.msSetVideoRectangle(left: 2, top: 0, right: 4, bottom: 4);
```

## See also

- [HTMLVideoElement](/en-US/docs/Web/API/HTMLVideoElement)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
