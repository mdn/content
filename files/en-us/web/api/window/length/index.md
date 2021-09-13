---
title: Window.length
slug: Web/API/Window/length
tags:
  - API
  - Gecko
  - HTML DOM
  - Property
  - Reference
  - Window
browser-compat: api.Window.length
---
{{ ApiRef() }}

Returns the number of frames (either {{HTMLElement("frame")}} or
{{HTMLElement("iframe")}} elements) in the window.

## Syntax

```js
framesCount = window.length;
```

- `framesCount` is the number of frames.

## Example

```js
if (window.length) {
  // this is a document with subframes
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
