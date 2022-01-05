---
title: <display-legacy>
slug: Web/CSS/display-legacy
tags:
  - CSS
  - CSS Data Type
  - CSS Display
  - Data Type
  - Reference
  - display-legacy
---
{{CSSRef}}

CSS 2 used a single-keyword syntax for the `display` property, requiring separate keywords for block-level and inline-level variants of the same layout mode. This page details those values.

## Syntax

Valid `<display-legacy>` values:

- `inline-block`

  - : The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).

    It is equivalent to `inline flow-root`.

- `inline-table`

  - : The `inline-table` value does not have a direct mapping in HTML. It behaves like an HTML {{HTMLElement("table")}} element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.

    It is equivalent to `inline table`.

- `inline-flex`

  - : The element behaves like an inline element and lays out its content according to the flexbox model.

    It is equivalent to `inline flex`.

- `inline-grid`

  - : The element behaves like an inline element and lays out its content according to the grid model.

    It is equivalent to `inline grid`.

## Examples

In the below example, we are creating an inline flex container with the legacy keyword inline-flex.

### HTML

```html
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
</div>

Not a flex item
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 150)}}

In the new syntax the inline flex container would be created using two values, inline for the outer display type, and flex for the inner display type.

```css
.container {
  display: inline flex;
}
```

## Specifications

| Specification                                                                                    | Status                           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('CSS3 Display', '#typedef-display-legacy', 'display-legacy')}} | {{Spec2('CSS3 Display')}} |

## Browser compatibility

### Support of inline-block

{{Compat("css.properties.display.inline-block", 10)}}

### Support of inline-table

{{Compat("css.properties.display.inline-table", 10)}}

### Support of inline-flex

{{Compat("css.properties.display.inline-flex", 10)}}

### Support of inline-grid

{{Compat("css.properties.display.inline-grid", 10)}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
