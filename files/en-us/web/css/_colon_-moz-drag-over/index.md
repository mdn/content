---
title: :-moz-drag-over
slug: Web/CSS/:-moz-drag-over
page-type: css-pseudo-class
status:
  - non-standard
---

{{CSSRef}}{{Non-standard_header}}

The **`:-moz-drag-over`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches an element when a {{domxref("HTMLElement/dragover_event", "dragover")}} event is called on it.

## Syntax

```css
:-moz-drag-over {
  /* ... */
}
```

## Examples

### HTML

```html
<div id="drop-target">
  <p>Drop target</p>
</div>

<div draggable="true">
  <p>Draggable</p>
</div>
```

### JavaScript

Most elements are not valid places to drop data, so in order to allow a drop, you must prevent default behavior by cancelling [`dragenter`](/en-US/docs/Web/API/HTMLElement/dragenter_event) or [`dragover`](/en-US/docs/Web/API/HTMLElement/dragover_event) (or both) events.
In this example, we only need to cancel the `dragenter` event, which is the first event fired when the browser evaluates if an element can be a drop target.
For more information, see [Drag operations: Specifying drop targets](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets).

```js
const target = document.getElementById("drop-target");
/* dragenter event fired on the drop target */
target.addEventListener(
  "dragenter",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);
```

### CSS

```css
body {
  font-family: arial;
}
div {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 2px dotted black;
  background-color: aquamarine;
  margin: 1rem;
}
p {
  padding: 1rem;
}
```

The following CSS changes the drop target color to red when the draggable element overlays the drop area.

```css
#drop-target {
  background-color: cornflowerblue;
}
#drop-target:-moz-drag-over {
  background-color: red;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Specifications

Not part of any standard.

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- [HTML drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
