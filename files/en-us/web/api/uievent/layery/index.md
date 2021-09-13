---
title: UIEvent.layerY
slug: Web/API/UIEvent/layerY
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - UIEvent
browser-compat: api.UIEvent.layerY
---
{{APIRef("DOM Events")}}{{Non-standard_header}}

The **`UIEvent.layerY`** read-only property returns the
vertical coordinate of the event relative to the current layer.

This property takes scrolling of the page into account, and returns a value relative to
the whole of the document, unless the event occurs inside a positioned element, where
the returned value is relative to the top left of the positioned element.

## Syntax

```js
var ypos = event.layerY;
```

- `ypos` is an integer value in pixels for the y-coordinate of the mouse
  pointer, when the mouse event fired.

## Example

```html
<html>
<head>
<title>pageX\pageY & layerX\layerY example</title>

<script type="text/javascript">

function showCoords(evt){
  var form = document.forms.form_coords;
  var parent_id = evt.target.parentNode.id;
  form.parentId.value = parent_id;
  form.pageXCoords.value = evt.pageX;
  form.pageYCoords.value = evt.pageY;
  form.layerXCoords.value = evt.layerX;
  form.layerYCoords.value = evt.layerY;
}
</script>

<style type="text/css">

 #d1 {
  border: solid blue 1px;
  padding: 20px;
 }

 #d2 {
  position: absolute;
  top: 180px;
  left: 80%;
  right:auto;
  width: 40%;
  border: solid blue 1px;
  padding: 20px;
 }

 #d3 {
  position: absolute;
  top: 240px;
  left: 20%;
  width: 50%;
  border: solid blue 1px;
  padding: 10px;
 }

</style>
</head>

<body onmousedown="showCoords(event)">

<p>To display the mouse coordinates please click anywhere on the page.</p>

<div id="d1">
<span>This is an un-positioned div so clicking it will return
layerX/layerY values almost the same as pageX/PageY values.</span>
</div>

<div id="d2">

<span>This is a positioned div so clicking it will return layerX/layerY
values that are relative to the top-left corner of this positioned
element. Note the pageX\pageY properties still return the
absolute position in the document, including page scrolling.</span>

<span>Make the page scroll more! This is a positioned div so clicking it
will return layerX/layerY values that are relative to the top-left
corner of this positioned element. Note the pageX\pageY properties still
return the absolute position in the document, including page
scrolling.</span>

</div>

<div id="d3">
<form name="form_coords" id="form1">
 Parent Element id: <input type="text" name="parentId" size="7" /><br />
 pageX:<input type="text" name="pageXCoords" size="7" />
 pageY:<input type="text" name="pageYCoords" size="7" /><br />
 layerX:<input type="text" name="layerXCoords" size="7" />
 layerY:<input type="text" name="layerYCoords" size="7" />
</form>
</div>

</body>
</html>
```

## Specifications

_This property is not part of any specification._

## Browser compatibility

{{Compat}}
