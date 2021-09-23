---
title: 'Element: underflow event'
slug: Web/API/Element/underflow_event
tags:
  - Element
  - Event
  - Firefox
  - Gecko
  - Layout
  - Mozilla
  - Non-standard
  - Reference
  - underflow
browser-compat: api.Element.underflow_event
---
{{APIRef}}{{Non-standard_header}}

The non-standard `underflow` event, which is specific to Firefox, is fired when an element is no longer overflowed by its content.

This only works for elements for which {{cssxref("overflow")}} is _not_ set to `visible`.

The counterpart [`overflow`](/en-US/docs/Web/API/Element/overflow_event) event is fired when overflow occurs.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>Unknown</td>
    </tr>
  </tbody>
</table>

## Examples

```html
<div id="wrapper">
    <div id="child"></div>
</div>
<br/>
<label><input type="checkbox" id="toggle" checked/> Overflow</label>

<style>
 #wrapper {
    width: 20px;
    height: 20px;
    background: #000;
    padding: 5px;
    overflow: hidden;
  }

  #child {
    width: 40px;
    height: 40px;
    border: 2px solid grey;
    background: #ccc;
  }
</style>

<script>
  var wrapper = document.getElementById("wrapper"),
      child = document.getElementById("child"),
      toggle = document.getElementById("toggle");

  wrapper.addEventListener("overflow", function( event ) {
      console.log( event );
  }, false);

  wrapper.addEventListener("underflow", function( event ) {
      console.log( event );
  }, false);

  toggle.addEventListener("change", function( event ) {
      if ( event.target.checked ) {
          child.style.width = "40px";
          child.style.height = "40px";
      } else {
          child.style.width = "10px";
          child.style.height = "10px";
      }

  }, false);
</script>
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- Related events: [`overflow`](/en-US/docs/Web/API/Element/overflow_event)
