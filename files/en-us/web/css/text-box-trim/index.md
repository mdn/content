---
title: text-box-trim
slug: Web/CSS/text-box-trim
page-type: css-property
browser-compat: css.properties.text-box-trim
---

{{CSSRef}}

The **`text-box-trim`** [CSS](/en-US/docs/Web/CSS) property specifies which of the over and under edges of text content to trim from a text element's block container.

Vertical spacing differs between fonts, making consistent typesetting historically challenging on the web. The `text-box-trim` property — along with its counterpart property {{cssxref("text-box-edge")}}, which specifies how much space to trim — makes consistent vertical spacing of text easier to achieve.

> [!NOTE]
> The {{cssxref("text-box")}} shorthand property can be used to specify the `text-box-trim` and `text-box-edge` values in a single declaration.

## Syntax

```css
/* Keywords */
text-box-trim: none;
text-box-trim: trim-both;
text-box-trim: trim-start;
text-box-trim: trim-end;

/* Global values */
text-box-trim: inherit;
text-box-trim: initial;
text-box-trim: revert;
text-box-trim: revert-layer;
text-box-trim: unset;
```

### Value

The `text-box-trim` property value may be specified as one of the following keywords:

- `none`
  - : The default value. No space is trimmed from the text.
- `trim-both`
  - : The start (over) and end (under) edges are both trimmed.
- `trim-start`
  - : The start (over) edge is trimmed.
- `trim-end`
  - : The end (under) edge is trimmed.

## Description

The height of text-only content is relative to the height of the font. In digital font files, the height contains all characters, including capital letters, ascenders, descenders, etc. Different fonts have different base line-heights, meaning that lines of text with the same `font-size` will produce line boxes of differing heights, affecting the appearance of spacing between lines.

The `text-box-trim` property allows you to trim the over and under edge of the text's block container, making it easier to control text spacing in the block direction.

The actual amount of space trimmed is specified using the {{cssxref("text-box-edge")}} property. For example, you can choose to trim the over edge in line with a font's capital letters or lower-case letters, and the under edge flush with the font's baseline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `text-box-trim` usage

In the following example we set `text-box-edge: cap alphabetic` on two paragraphs, which trims the over edge of the text elements' block containers to the top of the capital letters and the under edge flush with the text baseline.

We then set `text-box-trim` values of `trim-end` on the first one, and `trim-both` on the second one. This results in the first paragraph only having its under edge trimmed, whereas the second one has both the over _and_ under edge trimmed.

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-edge: cap alphabetic;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-trim: trim-end;
}

.two {
  text-box-trim: trim-both;
}
```

#### Result

The output is as follows. Note how we've included a top and bottom border on each paragraph, so that you can see how the space has been trimmed in each case.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interactive `text-box-trim` and `text-box-edge` value comparison

In this example we provide a user interface that allows you to choose the `text-box-trim` and `text-box-edge` values applied to a paragraph of text.

#### HTML

In our HTML, we include three main items:

- Three {{htmlelement("select")}} elements allowing you to set which edges of the paragraph should be trimmed (the `text-box-trim` value) and how much space to trim from the block-start and block-end edges of the paragraph (the {{cssxref("text-box-edge")}} value).
- A {{htmlelement("p")}} element containing text, which the `text-box-*` values are applied to. This paragraph has [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) set on it so you can edit the text.
- An {{htmlelement("output")}} element that displays the `text-box-*` declarations applied to the paragraph. This is updated when a selection is made.

We also import a font from the Google Fonts service to apply to our demo's text.

We have hidden the exact HTML code for brevity.

```html hidden
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>text-box demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet" />
  </head>
  <body>
    <section>
      <div>
        <label for="box-trim">Select edge(s) to trim:</label>
        <select id="box-trim">
          <option>none</option>
          <option>trim-start</option>
          <option>trim-end</option>
          <option selected>trim-both</option>
        </select>
      </div>
      <div>
        <label for="trim-over">Select trim over (start) value:</label>
        <select id="trim-over">
          <option>text</option>
          <option selected>cap</option>
          <option>ex</option>
        </select>
      </div>
    </section>
    <p class="display" contenteditable="">Holly Golightly</p>
    <section>
      <div>
        <label for="trim-under">Select trim under (end) value:</label>
        <select id="trim-under">
          <option>text</option>
          <option selected>alphabetic</option>
        </select>
      </div>
    </section>
    <output></output>
  </body>
</html>
```

#### CSS

In our CSS, we apply the imported font to the {{htmlelement("html")}} element and lay out the UI using [flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox). We have hidden most of the CSS code for brevity, but below we show the rules styling the paragraph the `text-box-*` effects are applied to and the `<output>` that shows the `text-box-*` rules being applied:

```css hidden
html {
  font-family: "Roboto", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

section {
  display: flex;
  justify-content: space-between;
}

section:nth-of-type(2) {
  justify-content: flex-end;
  padding-bottom: 30px;
}

select {
  width: 6rem;
}
```

```css
p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

output {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  width: fit-content;
}
```

Again, note how we've included a top and bottom border on the `.display` paragraph, so that you can see how the space being trimmed changes when different `text-box-*` values are selected.

#### JavaScript

In the JavaScript, we start by grabbing references to the three `<select>` elements and two `<p>` elements:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Next, we define a function called `setEdgeTrim()`. This applies a {{cssxref("text-box")}} value to the paragraph based on the values of the `<select>` elements, and also prints the applied declarations to the output (both the longhand and shorthand equivalents):

```js
function setEdgeTrim() {
  const textBoxTrimValue = boxTrimSelect.value;
  const textBoxEdgeValue = `${trimOverSelect.value} ${trimUnderSelect.value}`;
  displayElem.style.textBox = `${textBoxTrimValue} ${textBoxEdgeValue}`;

  codeElem.innerHTML = `
    <span><code>text-box-trim: ${textBoxTrimValue}</code></span>
    <br>
    <span><code>text-box-edge: ${textBoxEdgeValue}</code></span>
    <br><br>
    <span>Shorthand equivalent:</span>
    <br><br>
    <span><code>text-box: ${textBoxTrimValue} ${textBoxEdgeValue}</code></span>
  `;
}
```

In the last part of the JavaScript we run the `setEdgeTrim()` function once to set an initial state for the UI. We then then apply [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listeners to all of the `<select>` elements (via [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener)) so that `setEdgeTrim()` is run whenever one of the `<select>` values changes to update the UI accordingly:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Result

The output is as follows:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` is initially set to `trim-both`, meaning that the over _and_ under edges of the paragraph are trimmed. `text-box-edge` is initially set to `cap alphabetic`, meaning that the text is trimmed flush with the top of capital letters at the start edge, and flush with the baseline at the end edge.

Try changing the `<select>` values to see the effect they have on the display text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) on developer.chrome.com (2025)
