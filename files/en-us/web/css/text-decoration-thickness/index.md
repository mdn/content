---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
page-type: css-property
browser-compat: css.properties.text-decoration-thickness
---

{{CSSRef}}

The **`text-decoration-thickness`** [CSS](/en-US/docs/Web/CSS) property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

{{EmbedInteractiveExample("pages/css/text-decoration-thickness.html")}}

## Syntax

```css
/* Single keyword */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* length */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* percentage */
text-decoration-thickness: 10%;

/* Global values */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### Values

- `auto`
  - : The browser chooses an appropriate width for the text decoration line.
- `from-font`
  - : If the font file includes information about a preferred thickness, use that value. If the font file doesn't include this information, behave as if `auto` was set, with the browser choosing an appropriate thickness.
- `<length>`
  - : Specifies the thickness of the text decoration line as a {{cssxref('length')}}, overriding the font file suggestion or the browser default.
- `<percentage>`
  - : Specifies the thickness of the text decoration line as a {{cssxref('percentage')}} of **1em** in the current font. A percentage inherits as a relative value, and so therefore scales with changes in the font. The browser must use a minimum of 1 device pixel. For a given application of this property, the thickness is constant across the whole box it is applied to, even if there are child elements with a different font size.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Varying thickness

#### HTML

```html
<p class="thin">Here's some text with a 1px red underline.</p>
<p class="thick">This one has a 5px red underline.</p>
<p class="shorthand">This uses the equivalent shorthand.</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### Results

{{EmbedLiveSample('Varying_thickness')}}

## Specifications

{{Specifications}}

> [!NOTE]
> The property used to be called `text-decoration-width`, but was updated in 2019 to `text-decoration-thickness`.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
