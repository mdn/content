---
title: 'Element: msContentZoom event'
slug: Web/API/Element/msContentZoom_event
page-type: web-api-event
tags:
  - Event
  - Event:Microsoft Extensions
  - MSContentZoom
  - Non-standard
  - Reference
browser-compat: api.Element.msContentZoom_event
---
{{APIRef}}{{Non-standard_header}}

The **`msContentZoom`** event fires when a user zooms the element (changes the scale of the content).

It is a proprietary event specific to Microsoft Edge and Internet Explorer.

Zoomed elements can expose their zoom level through `msContentZoom` (i.e. scrollTop/Left). The zoom level can be reset with {{DOMxRef("Element.msZoomTo()")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>Unknown</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>Unknown</td>
    </tr>
  </tbody>
</table>

## Example

```js
  contentZoom.addEventListener("MSContentZoom", (e) => {
     zoomFactor.value = contentZoom.msContentZoomFactor.toFixed(2);
  });
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [CSS Style Declaration](/en-US/docs/Web/API/CSSStyleDeclaration)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
