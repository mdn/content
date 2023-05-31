---
title: <display-legacy>
slug: Web/CSS/display-legacy
page-type: css-type
browser-compat:
  - css.properties.display.inline-block
  - css.properties.display.inline-table
  - css.properties.display.inline-flex
  - css.properties.display.inline-grid
spec-urls: https://drafts.csswg.org/css-display/#typedef-display-legacy
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

## Formal syntax

{{csssyntax}}

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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
