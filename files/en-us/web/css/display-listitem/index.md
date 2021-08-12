---
title: <display-listitem>
slug: Web/CSS/display-listitem
tags:
  - CSS
  - CSS Data Type
  - CSS Display
  - Data Type
  - Reference
  - display-listitem
  - list-item
---
{{CSSRef}}

The `list-item` keyword causes the element to generate a `::marker` pseudo-element with the content specified by its {{CSSxRef("list-style")}} properties (for example a bullet point) together with a principal box of the specified type for its own contents.

## Syntax

A single value of `list-item` will cause the element to behave like a list item. This can be used together with {{CSSxRef("list-style-type")}} and {{CSSxRef("list-style-position")}}.

`list-item` can also be combined with any {{CSSxRef("&lt;display-outside&gt;")}} keyword and the `flow` or `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} keywords.

> **Note:** In browsers that support the two-value syntax, if no inner value is specified it will default to `flow`. If no outer value is specified, the principal box will have an outer display type of `block`.

## Examples

### HTML

```html
<div class="fake-list">I will display as a list item</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 150)}}

## Specifications

| Specification                                                                                            | Status                           |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('CSS3 Display', '#typedef-display-listitem', 'display-listitem')}} | {{Spec2('CSS3 Display')}} |

## Browser compatibility

### Support of `list-item`

{{Compat("css.properties.display.list-item", 10)}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
