---
title: font-synthesis
slug: Web/CSS/font-synthesis
page-type: css-property
browser-compat: css.properties.font-synthesis
---

{{CSSRef}}

The **`font-synthesis`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not the browser may synthesize the bold, italic, and/or small-caps typefaces when they are missing in the specified font-family.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight)
- [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style)
- [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps)

## Syntax

```css
/* none or one or more of the other keyword values */
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: small-caps style; /* property values can be in any order */
font-synthesis: style small-caps weight; /* property values can be in any order */

/* Global values */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### Values

- `none`
  - : Indicates that no bold, italic, or small-caps typeface may be synthesized by the browser.
- `weight`
  - : Indicates that the missing bold typeface may be synthesized by the browser if needed.
- `style`
  - : Indicates that the missing italic typeface may be synthesized by the browser if needed.
- `small-caps`
  - : Indicates that the missing small-caps typeface may be synthesized by the browser if needed.

## Description

Most standard Western fonts include italic and bold variants, and some fonts include a small-caps variant. However, many fonts do not. Fonts used for Chinese, Japanese, Korean and other logographic scripts tend not to include these variants and synthesizing them might impede the legibility or change the meaning of the text. In these cases, it may be desirable to switch off the browser's default font-synthesis.

For example, using the [:lang()](/en-US/docs/Web/CSS/:lang) pseudo-class, you can disable the browser from synthesizing bold and oblique characters for a language, in this case Arabic:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

The table below shows how a value of the shorthand `font-synthesis` property maps to the constituent longhand properties.

| font-synthesis value      | [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight) value | [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style) value | [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps) value |
| :------------------------ | :----------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `none`                    | `none`                                                                   | `none`                                                                 | `none`                                                                           |
| `weight`                  | `auto`                                                                   | `none`                                                                 | `none`                                                                           |
| `style`                   | `none`                                                                   | `auto`                                                                 | `none`                                                                           |
| `small-caps`              | `none`                                                                   | `none`                                                                 | `auto`                                                                           |
| `weight style`            | `auto`                                                                   | `auto`                                                                 | `none`                                                                           |
| `weight small-caps`       | `auto`                                                                   | `none`                                                                 | `auto`                                                                           |
| `style small-caps`        | `none`                                                                   | `auto`                                                                 | `auto`                                                                           |
| `weight style small-caps` | `auto`                                                                   | `auto`                                                                 | `auto`                                                                           |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling font synthesis

This example shows the browser's default font-synthesis behavior and compares it with when the synthesis behavior is turned off. Notice that the example uses two imported fonts to demonstrate this behavior. You might not be able to replicate turning off of font-synthesis on fonts available on your operating system by default.

#### HTML

```html
<pre> DEFAULT </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS DISABLED </pre>
<p class="english no-syn">
  This font supports <strong>bold</strong> and <em>italic.</em>
</p>
<p class="chinese no-syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
<br />

<pre> SYNTHESIS IS ENABLED </pre>
<p class="english">
  This font supports <strong>bold</strong> and <em>italic</em>.
</p>
<p class="chinese syn">这个字体支持<strong>加粗</strong>和<em>斜体</em></p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.chinese {
  font-family: "Ma Shan Zheng";
}
.no-syn {
  font-synthesis: none;
}
.syn {
  font-synthesis: style weight;
}
```

#### Result

{{EmbedLiveSample('Disabling font synthesis', '', '400')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
