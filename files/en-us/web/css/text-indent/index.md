---
title: text-indent
slug: Web/CSS/text-indent
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Indent
  - Layout
  - Reference
  - recipe:css-property
  - text-indent
browser-compat: css.properties.text-indent
---
{{CSSRef}}

The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

{{EmbedInteractiveExample("pages/css/text-indent.html")}}

Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block-level element's content box.

## Syntax

```css
/* <length> values */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> value
   relative to the containing block width */
text-indent: 15%;

/* Keyword values */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

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
  - : Indentation is a {{cssxref("&lt;percentage&gt;")}} of the containing block's width.
- `each-line`
  - : Indentation affects the first line of the block container as well as each line after a _forced line break_, but does not affect lines after a _soft wrap break_.
- `hanging`
  - : Inverts which lines are indented. All lines _except_ the first line will be indented.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple indent

#### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

#### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### Result

{{ EmbedLiveSample('Simple_indent','100%','100%') }}

### Skipping indentation on the first paragraph

A common typographic practice when paragraph indentation is present is to skip the indentation for the first paragraph. As the _The Chicago Manual of Style_ puts it, "the first line of text following a subhead may begin flush left or be indented by the usual paragraph indention."

Treating first paragraphs differently from subsequent paragraphs can be done using the [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator), as in the following example:

#### HTML

```html
<h2>Lorem ipsum</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor metus.
Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus blandit eros
et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur non, elementum ac
sapien. Cras consequat turpis non augue ullamcorper, sit amet porttitor dui
interdum.</p>

<p>Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla facilisi.
In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor odio a semper.
Donec vitae dapibus ipsum. Donec libero purus, convallis eu efficitur id, pulvinar
elementum diam. Maecenas mollis blandit placerat. Ut gravida pellentesque nunc, in
eleifend ante convallis sit amet.</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce
tempor in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit vestibulum
nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
ac turpis egestas. Donec vulputate leo ut iaculis ultrices. Cras egestas rhoncus
lorem. Nunc blandit tempus lectus, rutrum hendrerit orci eleifend id. Ut at quam
velit.</p>

<p>Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus ac
dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan libero,
sed euismod ipsum ullamcorper sed.</p>
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

### Percentage indent

#### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

#### CSS

```css
p {
  text-indent: 30%;
  background: plum;
}
```

#### Result

{{ EmbedLiveSample('Percentage_indent','100%','100%') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn to style HTML using CSS](/en-US/docs/Learn/CSS)
- Related CSS properties:

  - [`text-justify`](/en-US/docs/Web/CSS/text-justify)
  - [`text-orientation`](/en-US/docs/Web/CSS/text-orientation)
  - [`text-overflow`](/en-US/docs/Web/CSS/text-overflow)
  - [`text-rendering`](/en-US/docs/Web/CSS/text-rendering)
  - [`text-transform`](/en-US/docs/Web/CSS/text-transform)
  - {{cssxref('hanging-punctuation')}}

- [CSS Text Decoration](/en-US/docs/Web/CSS/CSS_Text_Decoration) CSS module
- [CSS Text module](/en-US/docs/Web/CSS/CSS_Text)
