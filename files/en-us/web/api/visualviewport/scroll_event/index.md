---
title: 'VisualViewport: scroll event'
slug: Web/API/VisualViewport/scroll_event
tags:
  - API
  - Reference
  - Scroll
  - VisualViewport
  - events
browser-compat: api.VisualViewport.scroll_event
---
{{APIRef("Window")}}

The **`scroll`** event of the [`VisualViewport`](/en-US/docs/Web/API/VisualViewport) interface is fired when the visual viewport is scrolled.

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
          ><a href="/en-US/docs/Web/API/VisualViewport/onscroll"
            >onscroll</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `scroll` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
visualViewport.addEventListener('scroll', function() {
  ...
});
```

Or use the [`onscroll`](/en-US/docs/Web/API/VisualViewport/onscroll) event handler property:

```js
visualViewport.onscroll = function() {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Visual Viewport API homepage](/en-US/docs/Web/API/Visual_Viewport_API)
