---
title: 'SVGElement: error event'
slug: Web/API/SVGElement/error_event
tags:
  - API
  - Error
  - Reference
  - SVGElement
  - events
browser-compat: api.SVGElement.error_event
---
{{APIRef("SVG")}}

The `error` event is fired when an SVG element does not load properly or when an error occurs during script execution.

This basically implements the standard `error` DOM event.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("SVGEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onerror"
            >onerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
svgElem.addEventListener('error', () => {
  console.log('SVG not loaded properly.');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
