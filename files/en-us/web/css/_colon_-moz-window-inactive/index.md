---
title: ':-moz-window-inactive'
slug: Web/CSS/:-moz-window-inactive
tags:
  - CSS
  - CSS:Mozilla Extensions
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.-moz-window-inactive
---
{{CSSRef}}{{Non-standard_header}}

The **`:-moz-window-inactive`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches any element while it's in an inactive window.

`:-moz-window-inactive` works in content HTML documents, too.

> **Note:** Prior to the addition of this pseudo-class, giving different styles to background windows was achieved by setting an attribute (`active="true"`) on the top-level XUL chrome window. This attribute is no longer used.

## Syntax

```css
:-moz-window-inactive
```

## Examples

This example alters the appearance of a box's background depending on whether its window is active or not.

### HTML

```html
<div id="mybox">
  <p>This is a box!</p>
</div>
```

### CSS

```css
#mybox {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#mybox:-moz-window-inactive {
  background: cyan;
}
```

### Result

The result of this code is shown below. You can view this as a {{LiveSampleLink('Examples', 'separate page')}} as well.

{{EmbedLiveSample('Examples', 220, 220)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- Related CSS selectors:

  - [`:active`](/en-US/docs/Web/CSS/:active)

- The {{domxref("Document.activeElement")}} property for regular DOM, and the {{domxref("ShadowRoot.activeElement")}} property for [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) roots.
