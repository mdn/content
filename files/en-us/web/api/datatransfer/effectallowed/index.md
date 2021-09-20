---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
browser-compat: api.DataTransfer.effectAllowed
---
{{APIRef("HTML Drag and Drop API")}}

The **`DataTransfer.effectAllowed`** property specifies the
effect that is allowed for a drag operation. The _copy_ operation is used to
indicate that the data being dragged will be copied from its present location to the
drop location. The _move_ operation is used to indicate that the data being
dragged will be moved, and the _link_ operation is used to indicate that some
form of relationship or connection will be created between the source and drop
locations.

This property should be set in the {{event("dragstart")}} event to set the desired drag
effect for the drag source. Within the {{event("dragenter")}} and {{event("dragover")}}
event handlers, this property will be set to whatever value was assigned during the
{{event("dragstart")}} event, thus `effectAllowed` may be used to determine
which effect is permitted.

Assigning a value to `effectAllowed` in events other than
{{event("dragstart")}} has no effect.

## Syntax

```js
dataTransfer.effectAllowed;
```

### Values

A {{domxref("DOMString")}} representing the drag operation that is allowed. The
possible values are:

- none
  - : The item may not be dropped.
- copy
  - : A copy of the source item may be made at the new location.
- copyLink
  - : A copy or link operation is permitted.
- copyMove
  - : A copy or move operation is permitted.
- link
  - : A link may be established to the source at the new location.
- linkMove
  - : A link or move operation is permitted.
- move
  - : An item may be moved to a new location.
- all
  - : All operations are permitted.
- uninitialized
  - : The default value when the effect has not been set, equivalent to all.

Assigning any other value to `effectAllowed` has no effect and the old value
is retained.

Internet Explorer will change the value to be lowercased; thus, `linkMove`
will become `linkmove`, and so on.

## Example

This example shows the use of the `effectAllowed` and
{{domxref("DataTransfer.dropEffect", "dropEffect")}} properties.

```js
<!DOCTYPE html>
<html lang=en>
<title>Examples of DataTransfer.{dropEffect,effectAllowed} properties</title>
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
 console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 // Add this element's id to the drag payload so the drop handler will
 // know which element to add to its tree
 ev.dataTransfer.setData("text", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
 console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}
</script>
<body>
<h1>Examples <code>DataTransfer</code>.{<code>dropEffect</code>, <code>effectAllowed</code>} properties</h1>
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
