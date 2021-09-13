---
title: MediaTrackSupportedConstraints.echoCancellation
slug: Web/API/MediaTrackSupportedConstraints/echoCancellation
tags:
  - API
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSupportedConstraints
  - Property
  - Reference
  - Web
  - WebRTC
  - echoCancellation
browser-compat: api.MediaTrackSupportedConstraints.echoCancellation
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's
**`echoCancellation`** property is a read-only Boolean value
which is present (and set to `true`) in the object returned by
{{domxref("MediaDevices.getSupportedConstraints()")}} if and only if the
{{Glossary("user agent")}} supports the `echoCancellation` constraint. If the
constraint isn't supported, it's not included in the list, so this value will never be
`false`.

You can access the supported constraints dictionary by calling
`navigator.mediaDevices.getSupportedConstraints()`.

## Syntax

```js
echoCancellationConstraintSupported = supportedConstraintsDictionary.echoCancellation;
```

### Value

This property is present in the dictionary (and its value is always `true`)
if the user agent supports the `echoCancellation` constraint. If the property
isn't present, this property is missing from the supported constraints dictionary, and
you'll get {{jsxref("undefined")}} if you try to look at its value.

## Example

```html hidden
<div id="result">
</div>
```

```css hidden
#result {
  font: 14px "Arial", sans-serif;
}
```

```js
let result = document.getElementById("result");

if (navigator.mediaDevices.getSupportedConstraints().echoCancellation) {
  result.textContent = "Supported!";
} else {
  result.textContent = "Not supported!";
}
```

### Result

{{ EmbedLiveSample('Example', 600, 80) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
