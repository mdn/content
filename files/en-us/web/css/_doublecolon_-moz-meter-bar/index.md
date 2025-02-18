---
title: ::-moz-meter-bar
slug: Web/CSS/::-moz-meter-bar
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-moz-meter-bar
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-meter-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Glossary/Pseudo-element) represents the meter gauge in a {{HTMLElement("meter")}} element. It is used for selecting and applying styles to the gauge inside a meter element.

## Syntax

```css
::-moz-meter-bar {
  /* ... */
}
```

## Examples

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: &nbsp;&nbsp;<meter class="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css
meter {
  height: 20px;
  width: 200px;
  vertical-align: -0.4rem;
}

.styled::-moz-meter-bar {
  background: lime;
  box-shadow: 0 2px 3px grey inset;
  border-radius: 5px;
}
```

### Result

{{ EmbedLiveSample('Examples') }}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
