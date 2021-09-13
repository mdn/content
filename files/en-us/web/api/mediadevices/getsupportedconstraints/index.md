---
title: MediaDevices.getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
tags:
  - API
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Method
  - Reference
  - WebRTC
  - getSupportedConstraints
browser-compat: api.MediaDevices.getSupportedConstraints
---
{{APIRef("Media Capture and Streams")}}

The
**`getSupportedConstraints()`**
method of the {{domxref("MediaDevices")}} interface returns an object based on the
{{domxref("MediaTrackSupportedConstraints")}} dictionary, whose member fields each
specify one of the constrainable properties the {{Glossary("user agent")}} understands.

## Syntax

```js
var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
```

### Parameters

None.

### Return value

A new object based on the {{domxref("MediaTrackSupportedConstraints")}} dictionary
listing the constraints supported by the user agent. Because only constraints supported
by the user agent are included in the list, each of these Boolean properties has the
value `true`.

## Example

This example outputs a list of the constraints supported by your browser.

```html hidden
<p>The following media constraints are supported by your browser:</p>

<ul id="constraintList">
</ul>
```

```css hidden
body {
  font: 15px Arial, sans-serif;
}
```

```js
let constraintList = document.getElementById("constraintList");
let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

for (let constraint in supportedConstraints) {
  if (supportedConstraints.hasOwnProperty(constraint)) {
    let elem = document.createElement("li");

    elem.innerHTML = "<code>" + constraint + "</code>";
    constraintList.appendChild(elem);
  }
}
```

### Result

{{ EmbedLiveSample('Example', 600, 350) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
