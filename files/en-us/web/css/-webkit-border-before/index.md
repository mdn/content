---
title: '-webkit-border-before'
slug: Web/CSS/-webkit-border-before
tags:
  - '-webkit-border-before'
  - CSS
  - CSS Property
  - CSS:WebKit Extensions
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-webkit-border-before
---
{{CSSRef}}{{Non-standard_header}}

The **`-webkit-border-before`** [CSS](/en-US/docs/Web/CSS) property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

```css
/* Border values */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Global values */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
```

`-webkit-border-before` can be used to set the values for one or more of: {{cssxref("-webkit-border-before-width")}}, {{cssxref("-webkit-border-before-style")}}, and {{cssxref("-webkit-border-before-color")}}. It maps to a physical border depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, or {{cssxref("border-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

It relates to {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, and {{cssxref("-webkit-border-end")}}, which define the other borders of the element.

This property is on the standard track as {{cssxref("border-block-start")}}.

## Syntax

### Values

One or more of the following, in any order:

- `<'border-width'>`
  - : See {{cssxref("border-width")}}
- `<'border-style'>`
  - : See {{cssxref("border-style")}}
- `<'color'>`
  - : See {{cssxref("color")}}

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a border with vertical text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

#### Result

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## Specifications

Not part of any standard, but it relates to the standards-track {{cssxref("border-block-start")}} property.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("border-block-start")}}
- The mapped physical properties: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, and {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
