---
title: ':visited'
slug: Web/CSS/:visited
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.visited
---
{{CSSRef}}

The **`:visited`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

Styles defined by the `:visited` pseudo-class will be overridden by any subsequent link-related pseudo-class ({{cssxref(":link")}}, {{cssxref(":hover")}}, or {{cssxref(":active")}}) that has at least equal specificity. To style links appropriately, put the `:visited` rule after the `:link` rule but before the `:hover` and `:active` rules, as defined by the _LVHA-order_: `:link` — `:visited` — `:hover` — `:active`.

## Privacy restrictions

For privacy reasons, browsers strictly limit which styles you can apply using this pseudo-class, and how they can be used:

- Allowable CSS properties are {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }}, and {{ cssxref("text-emphasis-color") }}.
- Allowable SVG attributes are {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}.
- The alpha component of the allowed styles will be ignored. The alpha component of the element's non-`:visited` state will be used instead. In Firefox when the alpha component is `0`, the style set in `:visited` will be ignored entirely.
- Although these styles can change the appearance of colors to the end user, the {{domxref("window.getComputedStyle")}} method will lie and always return the value of the non-`:visited` color.
- The [`<link>`](/en-US/docs/Web/HTML/Element/link) element is never matched by `:visited`.

> **Note:** For more information on these limitations and the reasons behind them, see [Privacy and the :visited selector](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector).

## Syntax

```
visited
```

## Examples

Properties that would otherwise have no color or be transparent cannot be modified with `:visited`. Of the properties that can be set with this pseudo-class, your browser probably has a default value for `color` and `column-rule-color` only. Thus, if you want to modify the other properties, you'll need to give them a base value outside the `:visited` selector.

### HTML

```html
<a href="#test-visited-link">Have you visited this link yet?</a><br>
<a href="">You've already visited this link.</a>
```

### CSS

```css
a {
  /* Specify non-transparent defaults to certain properties,
     allowing them to be styled with the :visited state */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Privacy and the :visited selector](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)
- Link-related pseudo-classes: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
