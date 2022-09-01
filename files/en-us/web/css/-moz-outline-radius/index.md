---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - CSS Property
  - CSS:Mozilla Extensions
  - Non-standard
  - Reference
  - recipe:css-shorthand-property
  - Deprecated
browser-compat: css.properties.-moz-outline-radius
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

In Mozilla applications like Firefox, the **`-moz-outline-radius`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) can be used to give an element's {{cssxref("outline")}} rounded corners.

```css
/* One value */
-moz-outline-radius: 25px;

/* Two values */
-moz-outline-radius: 25px 1em;

/* Three values */
-moz-outline-radius: 25px 1em 12%;

/* Four values */
-moz-outline-radius: 25px 1em 12% 4mm;

/* Global values */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`-moz-outline-radius-bottomleft`](/en-US/docs/Web/CSS/-moz-outline-radius-bottomleft)
- [`-moz-outline-radius-bottomright`](/en-US/docs/Web/CSS/-moz-outline-radius-bottomright)
- [`-moz-outline-radius-topleft`](/en-US/docs/Web/CSS/-moz-outline-radius-topleft)
- [`-moz-outline-radius-topright`](/en-US/docs/Web/CSS/-moz-outline-radius-topright)

## Syntax

### Values

> **Note:** Elliptical outlines and `<percentage>` values follow the syntax described in {{cssxref("border-radius")}}.

One, two, three or four `<outline-radius>` values, represents one of:

- {{cssxref("&lt;length&gt;")}}
  - : See {{cssxref("&lt;length&gt;")}} for possible values.
- {{cssxref("&lt;percentage&gt;")}}
  - : A {{cssxref("&lt;percentage&gt;")}}; see {{cssxref("border-radius")}} for details.

<!---->

- If a single value is set, it applies to all 4 corners.
- If two values are set, the first one applies to the top-left and bottom-right corners and the second one to the top-right and bottom-left corners.
- If three values are set, the first one applies to the top-Left corner, the second one to the top-right and bottom-left corners and the third one to the bottom-right corner.
- If four values are set, the first one applies to the top-left corner, the second one to the top-right corner, the third one to the bottom-right corner and the fourth one to the bottom-left corner.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
 -moz-outline-radius =
  <outline-radius>{1,4} [ / <outline-radius>{1,4} ]?
```

## Examples

### Rounding an outline

Note: This example will not display the desired effect if you are viewing this in a browser other than Firefox.

#### HTML

```html
<p>This element has a rounded outline!</p>
```

#### CSS

```css
p {
  margin: 5px;
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius: 12% 1em 25px;
}
```

#### Result

{{EmbedLiveSample('Rounding_an_outline')}}

## Notes

- `dotted` or `dashed` radiused corners were rendered as solid until Firefox 50, {{bug("382721")}}
- Future versions of Gecko/Firefox may drop this property completely. See {{bug("593717")}}.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- Related CSS properties:

  - [`outline`](/en-US/docs/Web/CSS/outline)
