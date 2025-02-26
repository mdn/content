---
title: "MediaTrackSupportedConstraints: width property"
short-title: width
slug: Web/API/MediaTrackSupportedConstraints/width
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.width_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's
**`width`** property is a read-only Boolean value which is
present (and set to `true`) in the object returned by
{{domxref("MediaDevices.getSupportedConstraints()")}} if and only if the
{{Glossary("user agent")}} supports the `width` constraint. If the constraint
isn't supported, it's not included in the list, so this value will never be
`false`.

You can access the supported constraints dictionary by calling
`navigator.mediaDevices.getSupportedConstraints()`.

## Value

This property is present in the dictionary (and its value is always `true`)
if the user agent supports the `width` constraint. If the property isn't
present, this property is missing from the supported constraints dictionary, and you'll
get {{jsxref("undefined")}} if you try to look at its value.

## Example

```html hidden
<div id="result"></div>
```

```css hidden
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

```js
const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().width;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Result

{{ EmbedLiveSample('Example', 600, 80) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
