---
title: Creating vertical form controls
slug: Web/CSS/CSS_writing_modes/Vertical_controls
page-type: guide
---

{{CSSRef}}

The guide explains how to use the CSS {{cssxref("writing-mode")}} and {{cssxref("direction")}} properties to create and configure vertical form controls. This includes:

- [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) sliders, {{htmlelement("progress")}} bars, and {{htmlelement("meter")}} elements.
- {{htmlelement("select")}} elements.
- {{htmlelement("button")}} elements and button input types such as [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button), [`<input type="reset">`](/en-US/docs/Web/HTML/Element/input/reset), and [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit).
- {{htmlelement("textarea")}} elements and text-based input types such as [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local), and [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url).

## General technique

In modern browsers, the {{cssxref("writing-mode")}} property can be set to a vertical value to cause relevant form controls to display vertically with normally horizontal text characters (for example in Latin languages) written on their side at a 90 degree angle from the default. Normally vertical text characters, for example in Chinese or Japanese, are unaffected in this regard.

This is useful when creating vertical language forms. Specifically:

- `writing-mode: vertical-lr` will create vertical form controls with a left-to-right block flow direction, meaning that in controls with wrapping or multiple lines of text, subsequent lines will appear to the right of previous lines.
- `writing-mode: vertical-rl` will create vertical form controls with a right-to-left block flow direction, meaning that in controls with wrapping or multiple lines of text, subsequent lines will appear to the left of previous lines.

> **Note:** The experimental `sideways-lr` and `sideways-rl` values have much the same effect as `vertical-lr` and `vertical-rl` respectively, except that normally vertical text characters (for example in Chinese or Japanese) are rotated 90 degress to display on their sides, and horizontal text characters (for example in Latin languages) are unaffected in this regard.

In addition, the {{cssxref("direction")}} property can be used to control the direction of the content inside the controls:

- `direction: ltr` will cause the content to start at the top and flow towards the bottom.
- `direction: rtl` will cause the content to start at the bottom and flow towards the top.

This is referred to as the **inline base direction** — the primary direction in which content is ordered on a line, which defines on which sides the "start" and "end" of a line are. In text-based controls the difference is obvious — the flow of text starts at the top or bottom. In non-text-based controls such as range sliders, `direction` controls what direction the control is drawn in. For example, `direction: ltr` would mean that the lowest value is at the top of the slider, and the highest value is at the bottom of the slider.

The sections below show how to create different types of vertical form control, along with examples of each. Consult the browser compatibility information on each of the linked reference pages to find out the exact support information for each type.

## Range sliders, meters, and progress bars

Let's have a look at creating vertical range sliders, meters, and progress bars.

### Basic example

A typical set of visual [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) slider, {{htmlelement("progress")}}, and {{htmlelement("meter")}} controls is created like this:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

To display the controls vertically, we can use CSS like this:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (and `vertical-rl`) causes the controls to be displayed vertically in modern browsers.

The result of this looks like so:

{{ EmbedLiveSample("Basic example", "100%", "170") }}

### Drawing the control from bottom to top

By default, the controls have a {{cssxref("direction")}} value of `ltr`. This causes your sliders, meters, and progress bars to be drawn from top to bottom, as seen above.

You can change this by setting `direction: rtl` — this causes them to be drawn from bottom to top instead:

```html hidden
<form>
  <input type="range" min="0" max="11" value="9" step="1" />
  <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
    at 50/100
  </meter>
  <progress id="file" max="100" value="70">70%</progress>
</form>
```

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  writing-mode: vertical-lr;
  direction: rtl;
}
```

The result of this looks like so:

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

### Creating vertical range sliders in older browsers

In older browsers that do not support the creation of vertical form controls with `writing-mode` and `direction`, there are limited alternatives available. The following only work on `<input type="range">`, causing the text to flow from bottom to top — they have no effect on `<meter>` and `<progress>` elements:

- The non-standard `appearance: slider-vertical` property can be used in older versions of Safari and Chrome.
- The non-standard `orient="vertical"` attribute can be added to the `<input type="range">` element itself in older versions of Firefox.

The HTML for this example includes an [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) slider only, with `orient="vertical"` added to make it display vertically in older Firefox versions:

```html
<form>
  <input type="range" min="0" max="11" value="9" step="1" orient="vertical" />
</form>
```

To cause the controls to also display vertically in older versions of Chrome and Safari, we can use `appearance: slider-vertical`:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  appearance: slider-vertical;
}
```

The result looks like so:

{{ EmbedLiveSample("Creating vertical range sliders in older browsers", "100%", "190") }}

## Select elements

This section shows how to handle vertical {{htmlelement("select")}} elements.

### Select basic example

The below HTML creates two `<select>` elements, one where a single selection can be made and one with multiple selections:

```html
<form>
  <select multiple>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
  <select>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
</form>
```

To display the controls vertically, we can use CSS like this:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

The result of this looks like so:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Adjusting text direction and option order

Again, it is possible to use a {{cssxref("direction")}} property value of `rtl` to set the text direction to go from bottom to top, instead of the the default direction of top to bottom.

It is also worth nothing that in the above example we've got the select options appearing from right to left, because we used `writing-mode: vertical-rl`. If we use `writing-mode: vertical-lr` instead, the options will appear from left to right.

We'll explore these two use cases using three listbox (`multiple`) `<select>` elements, to make it easy to compare the effects side-by-side.

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
  <div class="reverse-option-order">
    <h2>writing-mode: vertical-rl</h2>
    <select multiple>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
      <option>Fourth</option>
      <option>Fifth</option>
    </select>
  </div>
</form>
```

In the CSS for this example, we set the following properties on the three listboxes:

- `writing-mode: vertical-rl` on the first one, so that it displays just like in the the previous example — text flowing top to bottom, and options displaying right to left.
- `writing-mode: vertical-rl` and `direction: rtl` on the second one, to draw the options from right to left but reverse the text flow from bottom to top:
- `writing-mode: vertical-lr` on the third one, to flow the text top to bottom but reverse the option order to go left to right.

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction select {
  writing-mode: vertical-rl;
  direction: rtl;
}

.reverse-option-order select {
  writing-mode: vertical-lr;
}
```

The result looks like so:

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "200") }}

## Buttons

This section shows how to handle vertical {{htmlelement("button")}} elements. Note that while we have only used a `<button>` element in the examples below, the behavior is the same for other elements that create buttons, such as [`<input>`](/en-US/docs/Web/HTML/Element/input) types of [`button`](/en-US/docs/Web/HTML/Element/input/button), [`reset`](/en-US/docs/Web/HTML/Element/input/reset), and [`submit`](/en-US/docs/Web/HTML/Element/input/submit).

### Basic button example

The below HTML creates two `<button>` elements, one with a single line of text, and one with three:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

To display the buttons vertically, we can use CSS like this:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

The result looks like so:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Adjusting button text line order

When you swap the `writing-mode` value of `vertical-rl` to `vertical-lr`, subsequent lines of text will appear to the right of previous lines, rather than the left.

This example uses two copies of the three-text-line button we saw in the previous example, so you can easily see the effects of changing the writing mode:

```html
<div>
  <h2>writing-mode: vertical-lr</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
<div class="reverse-line-order">
  <h2>writing-mode: vertical-rl</h2>
  <button>Press me<br />Please?<br />Thanks</button>
</div>
```

In the CSS, we set `writing-mode: vertical-rl` on the first button to lay out the line order from right to left. On the second button, we set `writing-mode: vertical-lr` to reverse the line order — left to right:

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.reverse-line-order button {
  writing-mode: vertical-lr;
}
```

The result looks like so:

{{ EmbedLiveSample("Adjusting button text line order", "100%", "150") }}

## Text-based inputs

Last but not least, we'll look at handle vertical {{htmlelement("textarea")}}s and textual `<input>` types. Note that, while we have only shown an `<input type="text">` element in the examples below, the behavior is the same for other textual [`<input>`](/en-US/docs/Web/HTML/Element/input) types: [`password`](/en-US/docs/Web/HTML/Element/input/button), [`number`](/en-US/docs/Web/HTML/Element/input/reset), [`url`](/en-US/docs/Web/HTML/Element/input/submit), etc.

### Basic text input example

Let's look at a basic vertical text input example.

The below HTML creates a `<textarea>` and an `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

To display the buttons vertically, we can use CSS like this:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

The result looks like so:

{{ EmbedLiveSample("Basic text input example", "100%", "130") }}

### Adjusting text direction and line layout order

You can use a {{cssxref("direction")}} property value of `rtl` to change the text direction from the default top to bottom to bottom to top. You can also set `writing-mode` to `vertical-lr` instead of `vertical-rl`, to cause multiple lines of text in `<textarea>`s to appear from left to right rather than the default right to left.

This example uses three copies of the same text controls we saw in the previous example, so you can easily see the effects of changing `direction` and `writing-mode` as discussed above:

```html
<form>
  <div>
    <h2>writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="direction">
    <h2>direction: rtl & writing-mode: vertical-lr</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
  <div class="reverse-line-order">
    <h2>writing-mode: vertical-rl</h2>
    <textarea>This is my textarea</textarea>
    <input type="text" value="Input text" />
  </div>
</form>
```

In the CSS, we set the following properties on the three sets of text controls:

- `writing-mode: vertical-rl` on the first one, so that it displays just like in the the previous example — text flowing top to bottom, and lines flowing right to left.
- `writing-mode: vertical-rl` and `direction: rtl` on the second one, to flow the lines from right to left but reverse the text flow from bottom to top:
- `writing-mode: vertical-lr` on the third one, to flow the text top to bottom but reverse the flow of lines — left to right. Note that this has no effect on the `<input type="text">` element, as it is only a single line.

```css hidden
form {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}

.direction textarea,
.direction input[type="text"] {
  writing-mode: vertical-rl;
  direction: rtl;
}

.reverse-line-order textarea,
.reverse-line-order input[type="text"] {
  writing-mode: vertical-lr;
}
```

The result looks like so:

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "180") }}

## See also

- CSS properties: {{cssxref("direction")}} and {{cssxref("writing-mode")}}.
- The [`<input>`](/en-US/docs/Web/HTML/Element/input) element.
- Other relevant elements: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, and {{htmlelement("select")}}.
