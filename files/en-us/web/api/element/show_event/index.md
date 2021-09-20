---
title: 'Element: show event'
slug: Web/API/Element/show_event
tags:
  - API
  - Deprecated
  - Event
  - Reference
  - show
browser-compat: api.Element.show_event
---
{{APIRef}}{{deprecated_header}}

The **`show`** event is fired when a {{domxref("Element/contextmenu_event", "contextmenu")}} event was fired on/bubbled to an element that has a [`contextmenu` attribute](/en-US/docs/Web/HTML/Global_attributes/contextmenu).

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
        {{domxref("GlobalEventHandlers.onshow", "onshow")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

```html
<div contextmenu="test"></div>
<menu type="context" id="test">
  <menuitem label="alert" onclick="alert('the alert label has been clicked')" />
</menu>

<script>
  document.getElementById("test").addEventListener("show", function(e){
    alert("the context menu will be displayed");
  }, false);
</script>
```

## Specifications

This event is not on any standards track.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers.onshow", "onshow")}}
