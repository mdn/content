---
title: ":link"
slug: Web/CSS/:link
page-type: css-pseudo-class
browser-compat: css.selectors.link
---

{{CSSRef}}

The **`:link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has not yet been visited. It matches every unvisited {{HTMLElement("a")}} or {{HTMLElement("area")}} element that has an `href` attribute.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

Styles defined by the `:link` and [`:visited`](/en-US/docs/Web/CSS/:visited) pseudo-classes can be overridden by any subsequent user-action pseudo-classes ({{cssxref(":hover")}} or {{cssxref(":active")}}) that have at least equal specificity. To style links appropriately, put the `:link` rule before all other link-related rules, as defined by the _LVHA-order_: `:link` — `:visited` — `:hover` — `:active`. The `:visited` pseudo-class and `:link` pseudo-class are mutually exclusive.

> **Note:** Use {{cssxref(":any-link")}} to select an element independent of whether it has been visited or not.

## Syntax

```css
:link {
  /* ... */
}
```

## Examples

By default, most browsers apply a special {{cssxref("color")}} value to visited links. Thus, the links in this example will probably have special font colors only before you visit them. (After that, you'll need to clear your browser history to see them again.) However, the {{cssxref("background-color")}} values are likely to remain, as most browsers do not set that property on visited links by default.

### HTML

```html
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Link-related pseudo-classes: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
