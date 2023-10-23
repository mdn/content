---
title: Type selectors
slug: Web/CSS/Type_selectors
page-type: css-selector
browser-compat: css.selectors.type
---

{{CSSRef}}

The CSS **type selector** matches elements by node name. In other words, it selects all elements of the given type within a document.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Type selectors can be namespaced when using {{CSSXref("@namespace")}}. This is useful when dealing with documents containing multiple namespaces such as HTML with inline SVG or MathML, or XML that mixes multiple vocabularies.

- `ns|h1` - matches `<h1>` elements in namespace _ns_
- `*|h1` - matches all `<h1>` elements
- `|h1` - matches all `<h1>` elements without any declared namespace

## Syntax

```css
element { style properties }
```

## Examples

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Here's a span with some text.</span>
<p>Here's a p with some text.</p>
<span>Here's a span with more text.</span>
```

### Result

{{EmbedLiveSample('Examples', '100%', 150)}}

### Namespaces

In this example the selector will only match `<h1>` elements in the example namespace.

```css
@namespace example url(http://www.example.com);
example|h1 {
  color: blue;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
