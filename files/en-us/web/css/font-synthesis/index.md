---
title: font-synthesis
slug: Web/CSS/font-synthesis
page-type: css-shorthand-property
browser-compat: css.properties.font-synthesis
---

{{CSSRef}}

The **`font-synthesis`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property lets you specify whether or not the browser may synthesize the bold, italic, small-caps, and/or subscript and superscript typefaces when they are missing in the specified font-family.

{{InteractiveExample("CSS Demo: font-synthesis")}}

```css interactive-example-choice
font-synthesis: weight style small-caps;
```

```css interactive-example-choice
font-synthesis: none;
```

```css interactive-example-choice
font-synthesis: weight;
```

```css interactive-example-choice
font-synthesis: style;
```

```css interactive-example-choice
font-synthesis: small-caps;
```

```css interactive-example-choice
font-synthesis: position;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <p class="english">
      This font does not include <span class="bold">bold</span>,
      <span class="italic">italic</span>,
      <span class="small-caps">small-caps</span>, and
      <span class="sub">subscript</span> or
      <span class="sup">superscript</span> variants.
    </p>
    <p class="chinese">
      中文排版通常不运用<span class="bold">粗体</span>或<span class="italic"
        >斜体</span
      ><span class="sub">常不</span><span class="sup">运用</span>。
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: Oxygen;
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/s/oxygen/v14/2sDfZG1Wl4LcnbuKjk0m.woff2")
    format("woff2");
}

/* [108] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.108.woff2")
    format("woff2");
}
/* [110] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.110.woff2")
    format("woff2");
}
/* [117] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.117.woff2")
    format("woff2");
}
/* [118] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.118.woff2")
    format("woff2");
}
/* [119] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.119.woff2")
    format("woff2");
}

.english {
  font-size: 1.2em;
  font-family: Oxygen;
}

.chinese {
  font-size: 1.2em;
  font-family: "Ma Shan Zheng";
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-caps {
  font-variant: small-caps;
}

.sub {
  font-variant: sub;
}

.sup {
  font-variant: super;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight)
- [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style)
- [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps)
- [font-synthesis-position](/en-US/docs/Web/CSS/font-synthesis-position)

## Syntax

```css
/* none or one or more of the other keyword values */
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: position;
font-synthesis: small-caps style; /* property values can be in any order */
font-synthesis: style small-caps weight position; /* property values can be in any order */

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
  - : Indicates that the italic typeface may be synthesized by the browser if needed.
- `small-caps`
  - : Indicates that the small-caps typeface may be synthesized by the browser if needed.
- `position`
  - : Indicates that the subscript and superscript typeface may be synthesized by the browser, if needed, when using {{cssxref("font-variant-position")}}.

## Description

Most standard Western fonts include italic and bold variants, and some fonts include a small-caps and subscript/superscript variants. However, many fonts do not. Fonts used for Chinese, Japanese, Korean and other logographic scripts tend not to include these variants and synthesizing them might impede the legibility or change the meaning of the text. In these cases, it may be desirable to switch off the browser's default font-synthesis.

For example, using the [:lang()](/en-US/docs/Web/CSS/:lang) pseudo-class, you can disable the browser from synthesizing bold and oblique characters for a language, in this case Arabic:

```css
*:lang(ar) {
  font-synthesis: none;
}
```

The table below shows how a value of the shorthand `font-synthesis` property maps to the constituent longhand properties.

| font-synthesis value               | [font-synthesis-weight](/en-US/docs/Web/CSS/font-synthesis-weight) value | [font-synthesis-style](/en-US/docs/Web/CSS/font-synthesis-style) value | [font-synthesis-small-caps](/en-US/docs/Web/CSS/font-synthesis-small-caps) value | [font-synthesis-position](/en-US/docs/Web/CSS/font-synthesis-position) value |
| :--------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `none`                             | `none`                                                                   | `none`                                                                 | `none`                                                                           | `none`                                                                       |
| `weight`                           | `auto`                                                                   | `none`                                                                 | `none`                                                                           | `none`                                                                       |
| `style`                            | `none`                                                                   | `auto`                                                                 | `none`                                                                           | `none`                                                                       |
| `small-caps`                       | `none`                                                                   | `none`                                                                 | `auto`                                                                           | `none`                                                                       |
| `position`                         | `none`                                                                   | `none`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight style`                     | `auto`                                                                   | `auto`                                                                 | `none`                                                                           | `none`                                                                       |
| `weight small-caps`                | `auto`                                                                   | `none`                                                                 | `auto`                                                                           | `none`                                                                       |
| `weight position`                  | `auto`                                                                   | `none`                                                                 | `none`                                                                           | `auto`                                                                       |
| `style small-caps`                 | `none`                                                                   | `auto`                                                                 | `auto`                                                                           | `none`                                                                       |
| `style position`                   | `none`                                                                   | `auto`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight style small-caps`          | `auto`                                                                   | `auto`                                                                 | `auto`                                                                           | `none`                                                                       |
| `weight style position`            | `auto`                                                                   | `auto`                                                                 | `none`                                                                           | `auto`                                                                       |
| `weight small-caps position`       | `auto`                                                                   | `none`                                                                 | `auto`                                                                           | `auto`                                                                       |
| `style small-caps position`        | `none`                                                                   | `auto`                                                                 | `auto`                                                                           | `auto`                                                                       |
| `weight style small-caps position` | `auto`                                                                   | `auto`                                                                 | `auto`                                                                           | `auto`                                                                       |

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
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-position")}}
