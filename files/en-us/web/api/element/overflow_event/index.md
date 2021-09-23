---
title: 'Element: overflow event'
slug: Web/API/Element/overflow_event
tags:
  - Event
browser-compat: api.Element.overflow_event
---
{{APIRef}}{{Non-standard_header}}

The `overflow` event is fired when an element has been overflowed by its content or has been rendered for the first time in this state (only works for elements styled with overflow != visible).

It is a proprietary event specific to Gecko (Firefox).

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

- Related events: [`underflow`](/en-US/docs/Web/API/Element/underflow_event)
