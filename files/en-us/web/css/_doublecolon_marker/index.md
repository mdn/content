---
title: "::marker"
slug: Web/CSS/::marker
page-type: css-pseudo-element
browser-compat: css.selectors.marker
---

{{CSSRef}}

The **`::marker`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to [`display: list-item`](/en-US/docs/Web/CSS/display), such as the {{HTMLElement("li")}} and {{HTMLElement("summary")}} elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## Allowable properties

Only certain CSS properties can be used in a rule with `::marker` as a selector:

- All [font properties](/en-US/docs/Web/CSS/CSS_Fonts)
- The {{CSSxRef("white-space")}} property
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} and {{CSSxRef("direction")}} properties
- The {{CSSxRef("content")}} property
- All [animation](/en-US/docs/Web/CSS/CSS_Animations#properties) and [transition](/en-US/docs/Web/CSS/CSS_Transitions#properties) properties

> **Note:** The specification states that additional CSS properties may be supported in future.

## Syntax

```css
::marker {
  /* ... */
}
```

## Examples

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML elements that have marker boxes by default: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
