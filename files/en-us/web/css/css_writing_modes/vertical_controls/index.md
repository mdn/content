---
title: Creating vertical form controls
slug: Web/CSS/CSS_writing_modes/Vertical_controls
page-type: guide
---

{{CSSRef}}

The guide explains how to use the CSS {{cssxref("writing-mode")}} and {{cssxref("direction")}} properties to create and configure vertical form controls, including [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) sliders, {{htmlelement("progress")}} bars, {{htmlelement("meter")}} elements, {{htmlelement("select")}} elements, {{htmlelement("button")}}s (including [`button`](/en-US/docs/Web/HTML/Element/input/button), [`reset`](/en-US/docs/Web/HTML/Element/input/reset), and [`submit`](/en-US/docs/Web/HTML/Element/input/submit) `<input>` types), [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea)s, and text-based inputs (for example [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text), [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local), and [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url)).

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

The sections below show how to create different types of vertial form control, along with examples of each. Consult the browser compatibility information on each of the linked reference pages to find out the exact support information for each type.

## Range sliders, meters, and progress bars

Let's have a look at creating vertical range sliders, meters, and progress bars.

### Basic example

#### HTML

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

#### CSS

To display the controls vertically, we can use CSS like this:

```css
input[type="range"],
meter,
progress {
  margin-block-end: 20px;
  appearance: slider-vertical;
  writing-mode: vertical-lr;
}
```

{{cssxref("writing-mode", "writing-mode: vertical-lr")}} (and `vertical-rl`) causes the controls to be displayed vertically in modern browsers.

> **Note:** The non-standard `appearance: slider-vertical` property is included to provide some measure of support for vertical controls to older versions of Safari and Chrome. Be aware that their effect is limited — it only causes `range` sliders to display vertically, and with the text flowing from bottom to top. It has no effect on `<meter>` and `<progress>` elements. While not included above, there is also a non-standard `orient="vertical"` attribute that can be added to the `<input type="range">` element itself to create vertical range sliders in older versions of Firefox.

#### Result

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
  appearance: slider-vertical;
  writing-mode: vertical-lr;
  direction: rtl;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Drawing the control from bottom to top", "100%", "170") }}

## Select elements

This section shows how to handle vertical {{htmlelement("select")}} elements.

### Select basic example

Let's look at a basic vertical `<select>` example.

#### HTML

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

#### CSS

To display the controls vertically, we can use CSS like this:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Select basic example", "100%", "130") }}

### Adjusting text direction and option order

Again, it is possible to use a {{cssxref("direction")}} property value of `rtl` to change the text direction from the default top to bottom to bottom to top. It is also worth nothing that in the above example we've got the select options appearing from right to left, because we used `writing-mode: vertical-rl`. If we use `writing-mode: vertical-lr` instead, the options will appear from left to right.

#### HTML

We'll explore these two property values using a single multiple selection `<select>`, to make it as easy to visualize as possible:

```html
<form>
  <select multiple>
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
    <option>Fourth</option>
    <option>Fifth</option>
  </select>
</form>
```

#### CSS

In the below CSS, we set `writing-mode: vertical-lr` and `direction: rtl` to draw the options from left to right, and flow the text from bottom to top:

```css
select {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-lr;
  direction: rtl;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Adjusting text direction and option order", "100%", "130") }}

## Buttons

This section shows how to handle vertical {{htmlelement("button")}} elements. Note that, while we have only used an actual `<button>` element in the examples below, the behavior is the same for other elements that create buttons, notably [`<input>`](/en-US/docs/Web/HTML/Element/input) types of [`button`](/en-US/docs/Web/HTML/Element/input/button), [`reset`](/en-US/docs/Web/HTML/Element/input/reset), and [`submit`](/en-US/docs/Web/HTML/Element/input/submit).

### Basic button example

Let's look at a basic vertical button example.

#### HTML

The below HTML creates two `<button>` elements, one with a single line of text, and one with three:

```html
<button>Press me</button> <button>Press me<br />Please?<br />Thanks</button>
```

#### CSS

To display the buttons vertically, we can use CSS like this:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Basic button example", "100%", "130") }}

### Adjusting button text line order

When you swap the `writing-mode` value of `vertical-rl` to `vertical-lr`, subsequent lines of text will appear to the right of previous lines, rather than the left.

#### HTML

This example uses the same three-text-line button we saw in the previous example:

```html
<button>Press me<br />Please?<br />Thanks</button>
```

#### CSS

In the below CSS, we set `writing-mode: vertical-lr` to lay out the lines from left to right:

```css
button {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-lr;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Adjusting button text line order", "100%", "130") }}

## Text-based inputs

Last but not least, we'll look at handle vertical {{htmlelement("textarea")}}s and textual `<input>` types. Note that, while we have only shown an `<input type="text">` element in the examples below, the behavior is the same for other textual [`<input>`](/en-US/docs/Web/HTML/Element/input) types: [`password`](/en-US/docs/Web/HTML/Element/input/button), [`number`](/en-US/docs/Web/HTML/Element/input/reset), [`url`](/en-US/docs/Web/HTML/Element/input/submit), etc.

### Basic text input example

Let's look at a basic vertical text input example.

#### HTML

The below HTML creates a `<textarea>` and an `<input type="text">`:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

#### CSS

To display the buttons vertically, we can use CSS like this:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  writing-mode: vertical-rl;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Basic text input example", "100%", "130") }}

### Adjusting text direction and line layout order

You can use a {{cssxref("direction")}} property value of `rtl` to change the text direction from the default top to bottom to bottom to top. You can also set `writing-mode` to `vertical-lr` instead of `vertical-rl`, to cause multiple lines of text in `<textarea>`s to appear from left to right rather than the default right to left.

#### HTML

This example uses the same HTML as the previous example:

```html
<form>
  <textarea>This is my textarea</textarea>
  <input type="text" value="Input text" />
</form>
```

#### CSS

In the below CSS, we set `direction: rtl` to change text direction to bottom to top, and `writing-mode: vertical-lr` to lay out the `<textarea>` lines from left to right:

```css
textarea,
input[type="text"] {
  inline-size: 100px;
  margin-block-end: 20px;
  direction: rtl;
  writing-mode: vertical-lr;
}
```

#### Result

The result of this looks like so:

{{ EmbedLiveSample("Adjusting text direction and line layout order", "100%", "130") }}

## See also

- CSS properties: {{cssxref("direction")}} and {{cssxref("writing-mode")}}
- The [`<input>`](/en-US/docs/Web/HTML/Element/input) element
- Other relevant elements: {{htmlelement("button")}}, {{htmlelement("meter")}}, {{htmlelement("progress")}}, and {{htmlelement("select")}}.
