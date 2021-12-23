---
title: 'SVGElement: load event'
slug: Web/API/SVGElement/load_event
tags:
  - API
  - Reference
  - SVGElement
  - events
  - load
browser-compat: api.SVGElement.load_event
---
{{APIRef("SVG")}}

The `load` event fires on an `SVGElement` when it is loaded in the browser, e.g. in the DOM in the case of an embedded `<svg>`. It is basically the same as the standard `load` DOM event.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
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
          ><a href="/en-US/docs/Web/API/GlobalEventHandlers/onload"
            >onload</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
svgElem.addEventListener('load', () => {
  console.log('SVG loaded.');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
