---
title: DataTransfer.setData()
slug: Web/API/DataTransfer/setData
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.setData
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.setData()`** method sets the drag
operation's {{domxref("DataTransfer","drag data")}} to the specified data and type. If
data for the given type does not exist, it is added at the end of the drag data store,
such that the last item in the {{domxref("DataTransfer.types","types")}} list will be
the new type. If data for the given type already exists, the existing data is replaced
in the same position. That is, the order of the
{{domxref("DataTransfer.types","types")}} list is not changed when replacing data of the
same type.

Example data types are `text/plain` and `text/uri-list`.

## Syntax

```js
void dataTransfer.setData(format, data);
```

### Arguments

- _format_
  - : A {{domxref("DOMString")}} representing the type of the drag data to add to the
    {{domxref("DataTransfer","drag object")}}.
- _data_
  - : A {{domxref("DOMString")}} representing the data to add to the
    {{domxref("DataTransfer","drag object")}}.

### Return value

None.

## Example

This example shows the use of the {{domxref("DataTransfer")}} object's
{{domxref("DataTransfer.getData","getData()")}},
{{domxref("DataTransfer.setData","setData()")}} and
{{domxref("DataTransfer.clearData","clearData()")}} methods.

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer's setData(), getData() and clearData()</title>
<meta content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart");
 // Change the source element's background color to signify drag has started
 ev.currentTarget.style.border = "dashed";
 // Set the drag's format and data. Use the event target's id for the data
 ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 // Get the data, which is the id of the drop target
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
 // Clear the drag data cache (for all formats/types)
 ev.dataTransfer.clearData();
}
</script>
<body>
<h1>Examples of <code>DataTransfer</code>: <code>setData()</code>, <code>getData()</code>, <code>clearData()</code></h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
