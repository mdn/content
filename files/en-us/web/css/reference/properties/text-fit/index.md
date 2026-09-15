---
title: "`text-fit` CSS property"
short-title: text-fit
slug: Web/CSS/Reference/Properties/text-fit
page-type: css-property
browser-compat: css.properties.text-fit
sidebar: cssref
---

The **`text-fit`** [CSS](/en-US/docs/Web/CSS) property can be used to scale the rendered font size of text nodes (and other inline content) so that they fit exactly within the inline dimension of their containing boxes, optionally up or down to a specified **scaling factor**.

## Syntax

```css
/* One keyword */
text-fit: none;
text-fit: grow;
text-fit: shrink;

/* Two keywords */
text-fit: grow consistent;
text-fit: shrink per-line-all;

/* Keywords and <percentage> */
text-fit: grow 300%;
text-fit: shrink 80%;
text-fit: grow per-line-all 300%;

/* Global values */
text-fit: inherit;
text-fit: initial;
text-fit: revert;
text-fit: revert-layer;
text-fit: unset;
```

### Value

Specified as one the keywords `none`, `grow`, or `shrink`, plus optionally one of the keywords `consistent`, `per-line`, or `per-line-all`, plus an optional {{cssxref("percentage")}} value, separated by spaces. The components must be specified in this order.

- `none`
  - : The default value. No text scaling is applied.
- `grow`
  - : The text node's rendered font size is scaled up until it exactly fits inside its containing box's inline dimension.
- `shrink`
  - : The text node's rendered font size is scaled down until it exactly fits inside its containing box's inline dimension.
- `consistent`
  - : All of the lines of the text node are scaled using the same scaling factor. This keyword has no effect if `none` is specified as the first keyword. If a second keyword is not specified, `consistent` is assumed.
- `per-line`
  - : All of the lines of the text node are scaled with their own scaling factor. The last line of the text node, and any lines that end in a forced break (for example, due to a {{htmlelement("br")}} element) have no text scaling applied. This keyword has no effect if `none` is specified as the first keyword.
- `per-line-all`
  - : All of the lines of the text node are scaled with their own scaling factor, including the last line and lines that end in a forced break. This keyword has no effect if `none` is specified as the first keyword.
- {{cssxref("percentage")}}
  - : Specifies the maximum (when `grow` is specified) or minimum (when `shrink` is specified) scaling factor. This must be `100%` or greater if `grow` is specified, or between `0%` and `100%` inclusive if `shrink` is specified, otherwise the percentage has no effect.

## Description

A common web design challenge is getting headings and other text features to fit neatly within their containing boxes, regardless of layout or viewport size. The most typical use case is getting a horizonal text heading to fit the width of its containing box perfectly. Complex {{cssxref("font-size")}} calculations and JavaScript workarounds were historically used to achieve this.

The `text-fit` property provides a convenient CSS-only solution, adjusting the rendered font size of the text by a specific scaling factor to fit the space available, rather than justifying it like the {{cssxref("text-align")}} property's `justify` value does.

The basic form of `text-fit` uses a single keyword:

- You can specify `grow` to scale the font size up so that the text fits exactly inside its containing box. This works well for the use case described previously.
- You can specify `shrink` to scale the font size down so that the text fits exactly inside its containing box. This works well in cases where you have a line of text that is longer than its containing box, maybe due to a really long word, and you want to shrink it to avoid overflow.

Specifically, the parts of a text node that are affected by this scaling (the **scalable parts**) are the text itself, excluding trailing whitespace, and spacing whose inline size is proportional to the text's `font-size`, such as percentage-based {{cssxref("letter-spacing")}} and {{cssxref("word-spacing")}}, and {{cssxref("text-autospace")}}. Other parts, including inline {{cssxref("border")}}, {{cssxref("margin")}}, and {{cssxref("padding")}}, are not scaled.

### How is the scaling factor calculated?

The scaling factor is the ratio by which the scalable parts of a text line must be scaled in order for its inline content to fit exactly inside its containing box. The scaling factor for each line of a text node is calculated using a formula along these lines (the exact method for determining the scaling factor may differ between implementations):

```plain
(A + B) / A
```

where:

- `A` is the total inline size of the text line's scalable parts.
- `B` is the remaining space inside the text line, including any trailing whitespace, which may be negative if the text overflows.

The scaling factor for a text line with no scalable parts is `1`.

### Specifying scaling factor limits

To limit the amount by which the text can grow, you can specify a `<percentage>` value after the `grow` or `shrink` keyword.

If `grow` is specified, the percentage has to be `100%` or greater, and acts as a maximum scaling factor. For example:

```css
text-fit: grow 300%;
```

Any text this is applied to will grow to fit its containing box, but will not scale to a size greater than 300% of its original `font-size`.

If `shrink` is specified, the percentage has to be between `0%` and `100%` inclusive, and acts as a minimum scaling factor. For example:

```css
text-fit: shrink 50%;
```

Any text this is applied to will shrink to fit its containing box, but will not scale to a size less than 50% of its original `font-size`.

> [!NOTE]
> In many situations, word breaking behavior results in `text-fit: shrink` having no effect — the words wrap onto new lines rather than shrinking. In these cases, you need to stop the breaking behavior using something like a {{cssxref("white-space")}} value of `nowrap` to see it working. See this in action in our [basic example](#basic_text-fit_usage).

### Specifying how scaling factor is applied to multiple text lines

By default, a text node with multiple lines scales all of the lines by the same scaling factor. Each line has its scaling factor calculated separately, and the smallest scaling factor is then applied to all of the lines. This is usually the behavior you'll want, to ensure that each line grows or shrinks by the same proportion.

If you want to adjust this behavior, you can specify a second value after the first keyword and before the percentage, if specified. This value can be specified as the default `consistent` keyword, which keeps the behavior described previously, but you can also specify `per-line` or `per-line-all`. Both of these cause the lines of the text node to be scaled with their own scaling factors. The difference is that, with `per-line`, the last line of the text node, and any lines that end in a forced break (for example, due to a `<br>` element) have no text scaling applied, whereas with `per-line-all` scaling is applied to these lines.

For example, this declaration will grow all lines of a text node by their own scaling factor to fit the containing box.

```css
text-fit: grow per-line-all;
```

This declaration on the other hand will shrink all lines of a text node by their own scaling factor to fit the containing box, but not the last line or lines with forced breaks, and not below `50%` of the original `font-size`.

```css
text-fit: shrink per-line 50%;
```

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `text-fit` usage

This example demonstrates basic usage of `text-fit` to grow and shrink text nodes to fit their containers.

#### HTML

We include two text elements, an [`<h1>` and an `<h2>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), nested inside a {{htmlelement("div")}}.

```html hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
<input
  type="range"
  min="0.4"
  max="1"
  value="1"
  step="0.01"
  aria-label="adjust the width of the page" />
```

```html live-sample___basic-text-fit live-sample___text-fit-percentages
<div>
  <h1>My heading</h1>

  <h2>My subtitle: a bit longer, may need shrinking</h2>
</div>
```

```js hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
let maxWidth;

function setMaxWidth() {
  maxWidth = document.documentElement.clientWidth;
}

function setWidth() {
  divElem.style.width = `${maxWidth * slider.value}px`;
}

slider.addEventListener("input", setWidth);
window.addEventListener("resize", () => {
  setMaxWidth();
  setWidth();
});

setMaxWidth();
setWidth();
```

We also include an [`<input type="range">`](/en-US/docs/Web/HTML/Reference/Elements/input/range) element to enable adjusting the content width to emulate a changing viewport width. The range input, plus the JavaScript that powers it, have been hidden for brevity.

#### CSS

We give the container `<div>` a {{cssxref("padding")}} value of `20px` to give the text some space.

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background-color: white;
}

div {
  margin: 0 auto;
  background-color: coral;
}

input {
  width: 99%;
}
```

```css live-sample___basic-text-fit
div {
  padding: 20px;
}
```

We give the `<h1>` a `text-fit` value of `grow`, so that it will grow to fill its container's available inline space. We give the longer `<h2>` a {{cssxref("white-space")}} value of `nowrap` so that ordinarily, it would all stay on a single line and overflow its container rather than wrapping, if it reaches the container edge. We then set `text-fit: shrink` on it so that, instead of overflowing, it will shrink to fit inside its container's available inline space.

```css live-sample___basic-text-fit
h1 {
  text-fit: grow;
}

h2 {
  white-space: nowrap;
  text-fit: shrink;
}
```

#### Result

{{EmbedLiveSample("basic-text-fit","100%","320")}}

Adjust the slider and note how the `<h1>` grows automatically so that it always fills the available space inside its parent `<div>`. Also note how the `<h2>` shrinks so that it always fills the available space inside the `<div>` at narrower widths; at wider widths where it fits inside the `<div>`, it maintains its natural width.

Without `text-fit`, the `<h1>` wouldn't fill the available space, and the `<h2>` would overflow it at narrower widths.

### Setting scaling factor percentage limits

This example is very similar to the previous one, except that in this case we limit the amount that our headings can grow or shrink using `<percentage>` values.

The HTML and JavaScript are identical to the previous example.

#### CSS

We give the `<h1>` a `text-fit` value of `grow 300%`, so that it will grow to fill its container's available inline space, up to 300% of its natural `font-size`:

```css live-sample___text-fit-percentages
h1 {
  text-fit: grow 300%;
}
```

We give the `<h2>` a {{cssxref("white-space")}} value of `nowrap` so that it will all stay on a single line and overflow its container rather than wrapping, when it touches the container edge. We then set `text-fit: shrink 80%` on it so that, instead of overflowing, it will shrink to fit inside its container's available inline space, down to `80%` of its natural `font-size`.

```css live-sample___text-fit-percentages
h2 {
  white-space: nowrap;
  text-fit: shrink 80%;
}
```

One issue that presents itself at this point is that, when the `<div>`'s `width` gets smaller than about `400px`, the `<h2>` will start to overflow its container. To avoid this, we want to set the text to wrap onto new lines normally at this point. To solve the problem, we first give the containing `<div>` a {{cssxref("container-type")}} of `inline-size`, so that we can use [container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries) to selectively apply CSS depending on its width.

```css hidden live-sample___text-fit-percentages
div {
  padding: 20px;
}
```

```css live-sample___text-fit-percentages
div {
  container-type: inline-size;
}
```

We then use a container query to change the `<h2>`'s `white-space` value to `wrap` when the `<div>`'s `width` gets smaller than `400px`:

```css live-sample___text-fit-percentages
@container (width < 400px) {
  h2 {
    white-space: wrap;
  }
}
```

#### Result

{{EmbedLiveSample("text-fit-percentages","100%","320")}}

Adjust the slider. Note how the `<h1>` grows automatically so that it always fills the available space inside its parent `<div>`, but only up to a certain width. Note how the `<h2>` shrinks so that it always fills the available space inside the `<div>` at narrower widths. When the `<div>` gets narrower than `400px`, the container query kicks in and we set `white-space: wrap`, meaning that the `<h2>` starts to wrap onto multiple lines.

### Demonstrating multi-line scaling behavior keywords

This example demonstrates the difference in effect between setting the `consistent`, `per-line`, and `per-line-all` keywords in the `text-fit` property values of different paragraphs.

#### HTML

The HTML features three {{htmlelement("p")}} elements containing the same filler text, each with different `id` values set on them:

```html live-sample___multi-line-keywords
<div>
  <p id="consistent">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>

  <p id="per-line">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>

  <p id="per-line-all">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>
</div>
```

The HTML and JavaScript for the width adjustment slider are also included in this example.

#### CSS

We give each paragraph a `text-fit` value with the first keyword set to `grow`; the second keyword in each case is set to a different value — `consistent`, `per-line`, and `per-line-all`, respectively.

```css live-sample___multi-line-keywords
#consistent {
  text-fit: grow consistent;
}

#per-line {
  text-fit: grow per-line;
}

#per-line-all {
  text-fit: grow per-line-all;
}
```

```css hidden live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

:root {
  overflow: hidden;
}

div {
  padding: 20px;
}

p {
  padding: 20px;
  background-color: rgb(0 0 0 / 0.2);
  position: relative;
  margin-bottom: 40px;
}

p::before {
  content: attr(id);
  background-color: black;
  color: white;
  padding: 5px 10px;
  position: absolute;
  top: -28px;
  left: 0px;
}
```

#### Result

{{EmbedLiveSample("multi-line-keywords","100%","650")}}

Adjust the slider up and down the scale, taking careful note of the behavior of each paragraph. You should note that:

- The `consistent` paragraph's text lines always have the same `font-size` as one another throughout.
- The `per-line` paragraph's text lines vary in `font-size` somewhat, which becomes more noticable at narrower widths. The last line's `font-size` is not scaled.
- The `per-line-all` paragraph's text lines vary in `font-size` somewhat, which includes the last line. This is very noticeable at widths that cause only one or two words to wrap onto the last line.

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
@supports not (text-fit: grow) {
  body::before {
    content: "Your browser does not support text-fit.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS text](/en-US/docs/Web/CSS/Guides/Text) module
