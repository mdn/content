---
title: ::first-letter
slug: Web/CSS/::first-letter
page-type: css-pseudo-element
browser-compat: css.selectors.first-letter
---

{{CSSRef}}

The **`::first-letter`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the first letter of the first line of a [block container](/en-US/docs/Web/CSS/Visual_formatting_model#block_containers), but only when not preceded by other content (such as images or inline tables).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-letter.html", "tabbed-shorter")}}

The first letter of an element is not always trivial to identify:

- Punctuation that precedes or immediately follows the first letter is included in the match. Punctuation includes any Unicode character defined in the _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf), and _other punctuation_ (Po) classes.
- Some languages have digraphs that are always capitalized together, like the `IJ` in Dutch. In these cases, both letters of the digraph should be matched by the `::first-letter` pseudo-element.
- A combination of the {{ cssxref("::before") }} pseudo-element and the {{ cssxref("content") }} property may inject some text at the beginning of the element. In that case, `::first-letter` will match the first letter of this generated content.

> [!NOTE]
> CSS introduced the `::first-letter` notation (with two colons) to distinguish [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) from [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements). For backward compatibility, browsers also accept `:first-letter`, introduced earlier.
>
> Browser support for digraphs such as `IJ` in Dutch is poor. Check the compatibility table below to see the current state of support.

## Allowable properties

Only a small subset of CSS properties can be used with the `::first-letter` pseudo-element:

- All font properties: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}
- All background properties: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}
- All margin properties: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- All padding properties: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- All border properties: the shorthands {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, and the longhands properties
- The {{ cssxref("color") }} property
- The {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (only if `float` is `none`) CSS properties

## Syntax

```css
::first-letter {
  /* ... */
}
```

## Examples

### Basic drop cap

In this example we will use the `::first-letter` pseudo-element to create a drop cap effect on the first letter of the paragraph coming right after the `<h2>`.

#### HTML

```html
<h2>My heading</h2>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### Result

{{ EmbedLiveSample('Basic_drop_cap', '100%', 350) }}

### Effect on special punctuation and non-Latin characters

This example illustrates the effect of `::first-letter` on special punctuation and non-Latin characters.

#### HTML

```html
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### Result

{{ EmbedLiveSample('Effect_on_special_punctuation_and_non-Latin_characters', '100%', 350) }}

### Styling first letter in SVG text element

In this example, we use the `::first-letter` pseudo-element to style the first letter of a SVG {{SVGElement("text")}} element.

> [!NOTE]
> At time of writing this feature has [limited support](#browser_compatibility).

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">First letter in &lt;text&gt; SVG</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### Result

{{ EmbedLiveSample("styling_first_letter_in_SVG_text_element", "100%", "100") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::first-line")}}
