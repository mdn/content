---
title: '::-webkit-meter-bar'
slug: Web/CSS/::-webkit-meter-bar
tags:
  - '-webkit-meter-bar'
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
  - WebKit
browser-compat: css.selectors.-webkit-meter-bar
---
{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Glossary/Pseudo-class) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) that represents the meter bar in a {{HTMLElement("meter")}} element.

## Syntax

```css
::-webkit-meter-bar
```

## Specifications

Not part of any standard.

## Examples

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### CSS

```css
meter {
  /* Reset the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

meter::-webkit-meter-bar {
  background: #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2) inset;
  border-radius: 3px;
}
```

### Result

{{ EmbedLiveSample('Examples') }}

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
