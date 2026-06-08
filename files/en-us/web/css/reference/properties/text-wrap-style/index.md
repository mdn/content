---
title: "`text-wrap-style` CSS property"
short-title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
page-type: css-property
browser-compat: css.properties.text-wrap-style
sidebar: cssref
---

The **`text-wrap-style`** [CSS](/en-US/docs/Web/CSS) property controls how text inside an element is wrapped, providing alternate ways of determining where to create line breaks in order to fit the content within a block element.

{{InteractiveExample("CSS Demo: text-wrap-style")}}

```css interactive-example-choice
text-wrap-style: auto;
```

```css interactive-example-choice
text-wrap-style: balance;
```

```css interactive-example-choice
text-wrap-style: pretty;
```

```css interactive-example-choice
text-wrap-style: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
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
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* Global values */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

### Values

The `text-wrap-style` property is specified as one of the following keyword values:

- `auto`
  - : Text is wrapped in the most performant way for the browser and does not take into account the number of characters.
- `balance`
  - : Text is wrapped in a way that best balances the number of characters on each line, enhancing layout quality and legibility. Because counting characters and balancing them across multiple lines is computationally expensive, this value is only supported for blocks of text spanning a limited number of lines (six or less for Chromium and ten or less for Firefox).
- `pretty`
  - : Text is wrapped using a slower algorithm that favors better layout over speed. This is intended for body copy where good typography is favored over performance (for example, when the number of [orphans](/en-US/docs/Web/CSS/Reference/Properties/orphans) should be kept to a minimum).
- `stable`
  - : Text is wrapped such that when the user is editing the content, the lines that come before the lines they are editing remain static rather than the whole block of text re-wrapping.

The specification also defines an `avoid-orphans` value in which browsers consider more than one line when making break decisions to avoid excessively short last lines. This value is not yet supported in any browser.

## Description

The `text-wrap-style` property can be used to provide a hint as to how the user agent should insert soft line breaks when the content is allowed to wrap. Each value defines a different approach for wrapping lines, trading off between speed, quality and style of layout, or stability, providing alternate ways of wrapping the content of a block element.

When the content is allowed to wrap — the usual behavior because the default value of the {{CSSXRef("text-wrap-mode")}} property is `wrap` — the single keyword value of the `text-wrap-style` property specifies _how_ the developer would like the text to be wrapped. The values have no effect on where a soft wrap opportunity exists, just how the browser should selects among them. If `text-wrap-mode` is set to `nowrap`, this property has no effect.

### Selecting a value

The value you choose, for `text-wrap-style`, depends on how many lines of text you anticipate styling, whether the text is `contenteditable`, and whether you need to prioritize appearance or performance.

When the styled content will be limited to a short number of lines, such as headings, captions, and blockquotes, `text-wrap-style: balance` can be added to balance the number of characters on each line, enhancing layout quality and legibility. As browsers limit the number of lines impacted by this property, this value's impact on performance is negligible.

For longer sections of text, `text-wrap-style: pretty` can be used. Note that `pretty` has a negative effect on performance, so it should be only used for longer blocks of text when the layout is more important than speed.

The `stable` value improves user experience when used on content that is [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable). This value ensures that, as the user is editing text, the previous lines in the area being edited remain stable.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Balanced text

This example has two paragraphs, the first is the default `auto` and the second is `balance`.

#### HTML

```html
<h2>Unbalanced</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
<h2>Balanced</h2>
<p class="balanced">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
```

#### CSS

```css
p {
  max-width: 60ch;
}
.balanced {
  text-wrap-style: balance;
}
```

#### Result

{{EmbedLiveSample("balanced_text", "100%",310)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-mode")}}
- {{CSSxRef("hyphens")}}
- {{CSSxRef("hyphenate-limit-chars")}}
- [CSS text](/en-US/docs/Web/CSS/Guides/Text) module
