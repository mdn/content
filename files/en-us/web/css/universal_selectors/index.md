---
title: Universal selectors
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.universal
---
{{CSSRef}}

The CSS **universal selector** (`*`) matches elements of any type.

```css
/* Selects all elements */
* {
  color: green;
}
```

Universal selectors can be namespaced when using {{CSSXref("@namespace")}}. This is useful when dealing with documents containing multiple namespaces such as HTML with inline SVG or MathML, or XML that mixes multiple vocabularies.

- `ns|*` - matches all elements in namespace _ns_
- `*|*` - matches all elements
- `|*` - matches all elements without any declared namespace

## Syntax

```css
* { style properties }
```

The asterisk is optional with simple selectors. For instance, `*.warning` and `.warning` are equivalent.

## Examples

### CSS

```css
* [lang^=en] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left
}

/* automatically clear the next sibling after a floating element */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

### Result

{{EmbedLiveSample('Examples')}}

### Namespaces

In this example the selector will only match elements in the example namespace.

```css
@namespace example url(http://www.example.com);
example|* { color: blue }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- [Learn CSS: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)
