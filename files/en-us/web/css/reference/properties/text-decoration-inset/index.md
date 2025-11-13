---
title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
page-type: css-property
browser-compat: css.properties.text-decoration-inset
sidebar: cssref
---

The **`text-decoration-inset`** [CSS](/en-US/docs/Web/CSS) property enables adjusting the start and end points of an element's text decoration so it can be shortened, lengthened, or have its position shifted with respect to the rendered text.

{{InteractiveExample("CSS Demo: text-decoration-inset")}}

```css interactive-example-choice
text-decoration-inset: 20px;
```

```css interactive-example-choice
text-decoration-inset: -0.5em;
```

```css interactive-example-choice
text-decoration-inset: 20px 1em;
```

```css interactive-example-choice
text-decoration-inset: -0.5rem -1.5rem;
```

```css interactive-example-choice
text-decoration-inset: -2ex 10vw;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Karmadrome</p>
</section>
```

```css interactive-example
#example-element {
  font: 2.5em sans-serif;
  text-decoration: underline 0.3em limegreen;
}
```

## Syntax

```css
/* auto keyword */
text-decoration-inset: auto;

/* One <length> value */
text-decoration-inset: 20px;
text-decoration-inset: -2rem;

/* Two <length> values */
text-decoration-inset: 20px 1em;
text-decoration-inset: -0.5rem -1.5rem;
text-decoration-inset: -2ex 1vw;

/* Global values */
text-decoration-inset: inherit;
text-decoration-inset: initial;
text-decoration-inset: revert;
text-decoration-inset: revert-layer;
text-decoration-inset: unset;
```

### Values

One or two {{cssxref("&lt;length>")}} values, or the keyword `auto`.

- {{cssxref("&lt;length>")}}
  - : Specifies the amount to adjust the text decoration position by. Positive values inset the text decoration (make it shorter) while negative values outset the text decoration (make it longer). If one value is specified, it applies to both the text decoration start and end points. If two values are specified, the first one applies to the text decoration start point and the second one applies to the text decoration end point.
- `auto`
  - : The browser chooses an inset amount to ensure that, if two decorated text boxes appear side-by-side, a gap is created between the two so they do not appear to have a single text decoration.

## Description

The `text-decoration-inset` property allows you to adjust the start and/or end points of a text container's text decoration, as set by the {{cssxref("text-decoration")}} shorthand and associated longhand properties. This is useful for creating effects where you want the text decoration to be inset or outset from the text itself, or shifted in position. See [Basic use cases](/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset#basic_use_cases) for an example of each.

A single `<length>` value will set the inset (if positive) or outset (if negative) on the start and end positions of the text decoration. To set the start and end positions separately, you can use two `<length>` values — the first one applies to the start position of the text decoration and the second one applies to the end.

The `text-decoration-inset` property can also take the `auto` keyword, which causes the browser to choose a value to ensure that, if two decorated text boxes appear side-by-side, a gap is created between them so they do not appear to have a single text decoration. The `auto` value is particularly important when rendering Chinese text, as underlining is used to [punctuate proper nouns](https://www.w3.org/TR/clreq/#id88), and adjacent proper nouns should have separate underlines. See [Effect of the `auto` value](/en-US/docs/Web/CSS/Reference/Properties/text-decoration-inset#effect_of_the_auto_value) for an example.

The `auto` value does not have the same effect as a `text-decoration-inset` value of `0` (which is the initial value) — `0` causes there to be no space between decorations.

The `text-decoration-inset` property is not inherited, and it is not a constituent property of the {{cssxref("text-decoration")}} shorthand.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic use cases

In this example, we demonstrate the outset, inset, and "shifted" use cases.

#### HTML

We define an unordered list with three list items, each with a separate `id`.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

We give each list item a different {{cssxref("text-decoration")}} and `text-decoration-inset`:

- The first one has a thick lime green underline, which is outset equally by `10px` on both sides.
- The second one has a medium thickness white strike-through, which is inset equally by `0.5em` on both sides.
- The third one has a thin wavy blue underline, which is moved to the right by `1em`.

```css hidden live-sample___use-case-examples
li {
  font-family: sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
}
```

```css live-sample___use-case-examples
#one {
  text-decoration: underline 0.3em limegreen;
  text-decoration-inset: -10px;
}

#two {
  text-decoration: line-through 5px white;
  text-decoration-inset: 0.5em;
}

#three {
  text-decoration: underline wavy 2px blue;
  text-decoration-inset: 1em -1em;
}
```

#### Result

This renders like so:

{{embedlivesample("use-case-examples", "100%", "200")}}

### Effect of the `auto` value

This example demonstrates the effect of the `text-decoration-inset: auto` value.

#### HTML

We define two groups of side-by-side {{htmlelement("u")}} elements:

```html live-sample___auto-example
<p id="one"><u>石井</u><u>艾俐俐</u></p>

<p id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Each `<u>` element has a `red` color and `3px` thickness set on its underline. The first group of `<u>` elements has a `text-decoration-inset` value of `auto` set on them, while the second set has a `text-decoration-inset` value of `0` set on them, for comparison purposes:

```css hidden live-sample___auto-example
u {
  font-family: sans-serif;
  font-size: 2em;
}
```

```css live-sample___auto-example
u {
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}

#one u {
  text-decoration-inset: auto;
}

#two u {
  text-decoration-inset: 0;
}
```

#### Result

This renders like so:

{{embedlivesample("auto-example", "100%", "200")}}

Note how the `auto` value creates a gap in the underlines, whereas the `0` value results in no gap.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-decoration")}}
- The [CSS text decoration](/en-US/docs/Web/CSS/Guides/Text_decoration) module
