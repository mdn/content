---
title: ":-moz-drag-over"
slug: Web/CSS/:-moz-drag-over
page-type: css-pseudo-class
status:
  - non-standard
browser-compat: css.selectors:-moz-drag-over
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
<div id="drop-target" ondragenter="return false;">
  <p>Drop target</p>
</div>

<div draggable="true">
  <p>Draggable</p>
</div>
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

The following CSS changes the drop target color to red when the dragable element overlays the drop area.

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
