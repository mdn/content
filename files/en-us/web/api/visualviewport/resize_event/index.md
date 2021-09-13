---
title: 'VisualViewport: resize event'
slug: Web/API/VisualViewport/resize_event
tags:
  - API
  - Reference
  - VisualViewport
  - events
  - resize
browser-compat: api.VisualViewport.resize_event
---
{{APIRef("Window")}}

The **`resize`** event of the [`VisualViewport`](/en-US/docs/Web/API/VisualViewport) interface is fired when the visual viewport is resized.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/VisualViewport/onresize"
            >onresize</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `resize` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
visualViewport.addEventListener('resize', function() {
  ...
});
```

Or use the [`onresize`](/en-US/docs/Web/API/VisualViewport/onresize) event handler property:

```js
visualViewport.onresize = function() {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Visual Viewport API homepage](/en-US/docs/Web/API/Visual_Viewport_API)
