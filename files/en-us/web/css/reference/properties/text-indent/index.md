---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
page-type: css-property
browser-compat: css.properties.text-indent
sidebar: cssref
---

The **`text-indent`** [CSS](/en-US/docs/Web/CSS) property sets the length of empty space (indentation) that is put before lines of text in a block.

{{InteractiveExample("CSS Demo: text-indent")}}

```css interactive-example-choice
text-indent: 0;
```

```css interactive-example-choice
text-indent: 30%;
```

```css interactive-example-choice
text-indent: -3em;
```

```css interactive-example-choice
text-indent: 3em each-line;
```

```css interactive-example-choice
text-indent: 3em hanging;
```

```css interactive-example-choice
text-indent: 3em hanging each-line;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      This text is contained within a single paragraph. This paragraph is two
      sentences long.
    </p>
    <p>
      This is a new paragraph. There is a line break element
      <code>&lt;br&gt;</code> after this sentence.<br />There it is! Notice how
      it affects the indentation.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.25em;
  background-color: darkslateblue;
  align-items: start;
}

#example-element {
  text-align: left;
  margin-left: 3em;
  background-color: slateblue;
  color: white;
}
```

## Syntax

```css
/* <length-percentage> values */
text-indent: 3mm;
text-indent: 40px;
text-indent: 15%;

/* with keyword values */
text-indent: 5em each-line;
text-indent: 5vb hanging;
text-indent: 5% hanging each-line;

/* Global values */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Indentation is specified as an absolute {{cssxref("&lt;length&gt;")}}. Negative values are allowed. See {{cssxref("&lt;length&gt;")}} values for possible units.
- {{cssxref("&lt;percentage&gt;")}}
  - : Indentation is a {{cssxref("&lt;percentage&gt;")}}. The percentage is relative to the containing block's width.
- `each-line`
  - : Indentation affects the first line of the block container as well as each line after a _forced line break_, but does not affect lines after a _soft wrap break_.
- `hanging`
  - : Inverts which lines are indented. All lines _except_ the first line will be indented.
## Description

The `text-indent` [CSS](/en-US/docs/Web/CSS) property sets the length of empty space (indentation) that is put before lines of text in a block container. The indentation set by the property occurs at the inline-start edge of the content box. The value is a {{cssxref("length-percentage")}}, optionally with one or both of the keywords `each-line` and/or `hanging`. The initial value is `0`.

Percent values are relative to the block container's inline-axis inner size, which is the dimension of the content-area only, excluding the container's padding and border.

The `<length-percentage>` can be a positive or negative value. A negative value creates an outdent equal to the absolute value of the `<length-percentage>` equivalent positive value. A negative value effectively pushes the text the size of the value, but in the opposite direction. For example, `text-indent: 3%;` indents the first line of text, adding white space that is 3% of the container's inner-size before the text, pushing the first line of content toward the inline-end direction. Setting `text-indent: -3%` outdents the first line of text, pushing the start of the first line of text 3% of the container's inner-size past the inline-start of the content area, into the padding and border, possibly overflowing the container.

A negative value is different from adding the `hanging` keyword to a positive value. Continuing with the same example, `text-indent: 3% hanging` doesn't outdent the first line of text. Rather, it indents all the lines of text _except_ the first line, by 3% of the container's inner-size.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates the basic usage of the `text-indent` property.

#### HTML

We include two paragraphs of text.

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

We use the `text-indent` property to indent the first line of each paragraph by `5em`.

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### Result

{{ EmbedLiveSample('Basic_usage','100%','100%') }}

### Percentage indent

Using the same HTML as in the previous example, here we demonstrate using percentage values and how percentage values are relative to the element's content area in the inline direction.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

We set the `text-indent` to a percentage value. We also added padding and vertical stripes to better enable gauging the size of the indentation relative to the element's box model.

```css
p {
  text-indent: 30%;

  padding: 30px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0 9.5%,
    #dedede 9.5% 10%
  );
  background-color: plum;
}
```

#### Result

{{ EmbedLiveSample('Percentage_indent','100%','100%') }}

### Skipping indentation on the first paragraph

A common typographic practice when paragraph indentation is present is to skip the indentation for the first paragraph. As _The Chicago Manual of Style_ puts it, "the first line of text following a subhead may begin flush left or be indented by the usual paragraph indention."

Treating first paragraphs differently from subsequent paragraphs can be done using the [next-sibling combinator](/en-US/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), as in the following example:

#### HTML

```html
<h2>Lorem ipsum</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
  venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor
  metus. Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus
  blandit eros et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur
  non, elementum ac sapien. Cras consequat turpis non augue ullamcorper, sit
  amet porttitor dui interdum.
</p>

<p>
  Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
  tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla
  facilisi. In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor
  odio a semper. Donec vitae dapibus ipsum. Donec libero purus, convallis eu
  efficitur id, pulvinar elementum diam. Maecenas mollis blandit placerat. Ut
  gravida pellentesque nunc, in eleifend ante convallis sit amet.
</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>
  Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce tempor
  in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
  nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit
  vestibulum nulla. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Donec vulputate leo ut iaculis ultrices.
  Cras egestas rhoncus lorem. Nunc blandit tempus lectus, rutrum hendrerit orci
  eleifend id. Ut at quam velit.
</p>

<p>
  Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
  sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
  iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus
  ac dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan
  libero, sed euismod ipsum ullamcorper sed.
</p>
```

#### CSS

```css
p {
  text-align: justify;
  margin: 1em 0 0 0;
}
p + p {
  text-indent: 2em;
  margin: 0;
}
```

#### Result

{{ EmbedLiveSample('Skipping_indentation_on_the_first_paragraph','','500px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties:
  - {{cssxref("text-justify")}}
  - {{cssxref("text-orientation")}}
  - {{cssxref("text-overflow")}}
  - {{cssxref("text-rendering")}}
  - {{cssxref("text-transform")}}
  - {{cssxref("hanging-punctuation")}}
- [CSS text decoration](/en-US/docs/Web/CSS/Guides/Text_decoration) module
- [CSS text](/en-US/docs/Web/CSS/Guides/Text) module
- [Learn to style HTML using CSS](/en-US/docs/Learn_web_development/Core/Styling_basics)
