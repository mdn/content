---
title: text-overflow
slug: Web/CSS/text-overflow
page-type: css-property
browser-compat: css.properties.text-overflow
---

{{CSSRef}}

The **`text-overflow`** [CSS](/en-US/docs/Web/CSS) property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

The `text-overflow` property doesn't force an overflow to occur. To make text overflow its container, you have to set other CSS properties: {{cssxref("overflow")}} and {{cssxref("white-space")}}. For example:

```css
overflow: hidden;
white-space: nowrap;
```

The `text-overflow` property only affects content that is overflowing a block container element in its _inline_ progression direction (not text overflowing at the bottom of a box, for example).

## Syntax

The `text-overflow` property may be specified using one or two values. If one value is given, it specifies overflow behavior for the end of the line (the right end for left-to-right text, the left end for right-to-left text). If two values are given, the first specifies overflow behavior for the left end of the line, and the second specifies it for the right end of the line.

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* Global values */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

- one of the keyword values: `clip`, `ellipsis`, `fade`
- the function `fade()`, which is passed a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} to control the fade distance
- a `<string>`.

### Values

- `clip`
  - : The default for this property. This keyword value will truncate the text at the limit of the [content area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), therefore the truncation can happen in the middle of a character. To clip at the transition between characters you can specify `text-overflow` as an empty string, if that is supported in your target browsers: `text-overflow: '';`.
- `ellipsis`
  - : This keyword value will display an ellipsis (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) to represent clipped text. The ellipsis is displayed inside the [content area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.
- `<string>` {{experimental_inline}}
  - : The {{cssxref("&lt;string&gt;")}} to be used to represent clipped text. The string is displayed inside the [content area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), shortening the size of the displayed text. If there is not enough space to display the string itself, it is clipped.
- `fade` {{experimental_inline}}
  - : This keyword clips the overflowing inline content and applies a fade-out effect near the edge of the line box with complete transparency at the edge.
- `fade( <length> | <percentage> )` {{experimental_inline}}

  - : This function clips the overflowing inline content and applies a fade-out effect near the edge of the line box with complete transparency at the edge.

    The argument determines the distance over which the fade effect is applied. The {{cssxref("&lt;percentage&gt;")}} is resolved against the width of the line box. Values lower than `0` are clipped to `0`. Values greater than the width of the line box are clipped to the width of the line box.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### One-value syntax

This example shows different values for `text-overflow` applied to a paragraph, for left-to-right and right-to-left text.

#### HTML

```html
<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### Result

{{EmbedLiveSample('One-value_syntax', 600, 320)}}

### Two-value syntax

This example shows the two-value syntax for `text-overflow`, where you can define different overflow behavior for the start and end of the text.
To show the effect we have to scroll the line so the start of the line is also hidden.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// Scroll each paragraph so the start is also hidden
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### Result

{{EmbedLiveSample('Two-value_syntax', 600, 360)}}

## Specifications

{{Specifications}}

A previous version of this interface reached the _Candidate Recommendation_ status. As some not-listed-at-risk features needed to be removed, the spec was demoted to the _Working Draft_ level, explaining why browsers implemented this property unprefixed, though not at the CR state.

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS properties that control line breaks in words: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
