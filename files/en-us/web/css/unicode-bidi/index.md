---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
page-type: css-property
browser-compat: css.properties.unicode-bidi
---

{{CSSRef}}

The **`unicode-bidi`** [CSS](/en-US/docs/Web/CSS) property, together with the {{cssxref("direction")}} property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.

{{EmbedInteractiveExample("pages/css/unicode-bidi.html")}}

The `unicode-bidi` and {{cssxref("direction")}} properties are the only properties that are not affected by the {{cssxref("all")}} shorthand.

> **Warning:** This property is intended for Document Type Definition (DTD) designers. Web designers and similar authors **should not** override it.

## Syntax

```css
/* Keyword values */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Global values */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: revert;
unicode-bidi: revert-layer;
unicode-bidi: unset;
```

### Values

- `normal`
  - : The element does not offer an additional level of embedding with respect to the bidirectional algorithm. For inline elements, implicit reordering works across element boundaries.
- `embed`
  - : If the element is inline, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the {{Cssxref("direction")}} property.
- `bidi-override`
  - : For inline elements this creates an override. For block container elements this creates an override for inline-level descendants not within another block container element. This means that inside the element, reordering is strictly in sequence according to the {{Cssxref("direction")}} property; the implicit part of the bidirectional algorithm is ignored.
- `isolate`
  - : This keyword indicates that the element's container directionality should be calculated without considering the content of this element. The element is therefore _isolated_ from its siblings. When applying its bidirectional-resolution algorithm, its container element treats it as one or several `U+FFFC Object Replacement Character`, i.e. like an image.
- `isolate-override`
  - : This keyword applies the isolation behavior of the `isolate` keyword to the surrounding content and the override behavior of the `bidi-override` keyword to the inner content.
- `plaintext`
  - : This keyword makes the elements directionality calculated without considering its parent bidirectional state or the value of the {{cssxref("direction")}} property. The directionality is calculated using the P2 and P3 rules of the Unicode Bidirectional Algorithm.
    This value allows the display of data that is already formatted using a tool following the Unicode Bidirectional Algorithm.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### HTML

```html
<div class="bible-quote">A line of text</div>
<div>Another line of text</div>
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("direction")}}
