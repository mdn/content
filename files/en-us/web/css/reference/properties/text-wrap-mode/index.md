---
title: "`text-wrap-mode` CSS property"
short-title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
page-type: css-property
browser-compat: css.properties.text-wrap-mode
sidebar: cssref
---

The **`text-wrap-mode`** [CSS](/en-US/docs/Web/CSS) property controls whether the text inside an element is wrapped.

{{InteractiveExample("CSS Demo: text-wrap-mode")}}

```css interactive-example-choice
text-wrap-mode: wrap;
```

```css interactive-example-choice
text-wrap-mode: nowrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        You can edit this lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem aut cum eum id quos est text.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Syntax

```css
/* Keyword values */
text-wrap-mode: wrap;
text-wrap-mode: nowrap;

/* Global values */
text-wrap-mode: inherit;
text-wrap-mode: initial;
text-wrap-mode: revert;
text-wrap-mode: revert-layer;
text-wrap-mode: unset;
```

## Values

The `text-wrap-mode` property is specified as one of the following keyword values:

- `wrap`
  - : Text is wrapped across lines at appropriate characters (for example spaces, in languages like English that use space separators) to minimize overflow. This is the default value.
- `nowrap`
  - : Text does not wrap across lines. It will overflow its containing element rather than breaking onto a new line.

## Description

The `text-wrap-mode` property can be used to control text wrapping inside an element. The different values provide alternate ways of wrapping the content of a block element, specifying whether lines may wrap at unforced soft wrap opportunities (`wrap`), or not (`nowrap`).

When set to `nowrap`, text will overflow rather than break onto multiple lines. As the {{cssxref("overflow")}} property defaults to `visible`, when content is larger than the container's inline-size, it will overflow in the inline direction. To enable scrolling in the inline direction, instead of overflow, set the {{cssxref("overflow-inline")}} property to `auto` or `scroll`. To ensure the container at least as wide as the longest word, set the {{cssxref("min-inline-size")}} to {{cssxref("min-content")}}.

When set to `wrap`, content flows onto new lines as necessary, wrapping at word break opportunities, such as {{htmlelement("wbr")}} and hyphens, and other language-specific soft-wrap opportunities. The property does not prevent non-breakable pieces of content from overflowing in the inline direction if larger than the container's inline-size.

The `text-wrap-mode` is part of two shorthand properties. The `text-wrap-mode`, along with the {{CSSxRef("white-space-collapse")}} property, can be declared using the {{CSSxRef("white-space")}} shorthand. It can also be set and reset, along with the {{CSSXRef("text-wrap-style")}} property, using the {{CSSXRef("text-wrap")}} shorthand.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage

In this example, we compare the effect of the `text-wrap-mode` property's two values.

#### HTML

We include two {{htmlelement("div")}} elements that are the same except for their class names.

```html
<div class="wrap">CSS IS AWESOME</div>
<div class="nowrap">CSS IS AWESOME</div>
```

#### CSS

We apply the same styles to both containers, limiting their width.

```css
div {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  box-sizing: border-box;
  border: 0.25rem solid black;
  padding: 0 4px;
  width: 14rem;
  margin: 1rem;
}
```

We give the examples different `text-wrap-mode` values:

```css
.wrap {
  text-wrap-mode: wrap;
}
.nowrap {
  text-wrap-mode: nowrap;
}
```

#### Result

{{EmbedLiveSample("basic usage", "100%", 360)}}

In the `wrap` example, the content flows over to the next line so that it fits in the box. "Awesome" is wider than the containing box, and contains no soft break opportunities, so it overflows.

In the `nowrap` example, the content does **not** flow to the next line as the content has been specifically set to not wrap, so it is all on one line, overflowing the container.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
- {{CSSxRef("hyphens")}}
- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
- [CSS text](/en-US/docs/Web/CSS/Guides/Text) module
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
