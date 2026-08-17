---
title: Universal selectors
slug: Web/CSS/Reference/Selectors/Universal_selectors
page-type: css-selector
browser-compat: css.selectors.universal
sidebar: cssref
---

The CSS **universal selector** (`*`) matches elements of any type.

```css
/* Selects all elements */
* {
  color: green;
}
```

The universal selector is a special [type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors) and can therefore be namespaced when using {{CSSXref("@namespace")}}. This is useful when dealing with documents containing multiple namespaces such as HTML with inline SVG or MathML, or XML that mixes multiple vocabularies.

- `ns|*` - matches all elements in namespace _ns_
- `*|*` - matches all elements
- `|*` - matches all elements without any declared namespace

> [!NOTE]
> The universal selector (`*`) matches **elements only**.
> It does **not** directly match pseudo-elements by itself.
>
> To match all {{cssxref("::before")}} pseudo-elements on a page, for example, you would have to use a selector like `*::before`. This works because the `*` matches all elements, and the `::before` pseudo-element is available on all elements.

## Syntax

```css
* { style properties }
```

The asterisk is optional with simple selectors. For instance, `*.warning` and `.warning` are equivalent.

## Examples

### CSS

```css
* [lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
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
@namespace example url("http://www.example.com/");
example|* {
  color: blue;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
- [Learn CSS: Basic selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
