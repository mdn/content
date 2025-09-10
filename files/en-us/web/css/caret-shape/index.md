---
title: caret-shape
slug: Web/CSS/caret-shape
page-type: css-property
status:
  - experimental
browser-compat: css.properties.caret-shape
sidebar: cssref
---

{{SeeCompatTable}}

The **`caret-shape`** [CSS](/en-US/docs/Web/CSS) property sets the shape of the **insertion caret**, the visible marker that appears in editable elements to indicate where the next character will be inserted or deleted.

{{InteractiveExample("CSS Demo: caret-shape")}}

```css interactive-example-choice
caret-shape: auto;
```

```css interactive-example-choice
caret-shape: bar;
```

```css interactive-example-choice
caret-shape: block;
```

```css interactive-example-choice
caret-shape: underscore;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>Click in the field to see the caret shape:</p>
    <p><input id="example-element" type="text" value="Sample text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
  padding: 8px;
  width: 300px;
}
```

## Syntax

```css
/* Keyword values */
caret-shape: auto;
caret-shape: bar;
caret-shape: block;
caret-shape: underscore;

/* Global values */
caret-shape: inherit;
caret-shape: initial;
caret-shape: revert;
caret-shape: revert-layer;
caret-shape: unset;
```

### Values

- `auto`
  - : The browser determines the caret shape. This typically follows platform conventions and may change based on context (e.g., insert mode vs. overtype mode).

- `bar`
  - : The caret appears as a thin vertical line at the insertion point, positioned between characters rather than over them.

- `block`
  - : The caret appears as a rectangle that overlaps the next character after the insertion point. If no character follows, it appears after the last character.

- `underscore`
  - : The caret appears as a thin horizontal line underneath the next character after the insertion point. If no character follows, it appears after the last character.

## Description

The insertion caret is the blinking cursor that indicates where text will be inserted when typing. Different caret shapes can provide visual feedback about the current editing mode or simply offer aesthetic customization.

### Caret positioning and behavior

The `caret-shape` property affects how the caret is visually rendered but doesn't change its logical position in the text. The caret always represents the insertion point between characters.

- **Bar carets** are positioned between characters and are most common in modern interfaces
- **Block carets** overlay the next character and are often used in terminal applications or to indicate overtype mode
- **Underscore carets** appear below characters and can be useful for certain design aesthetics

### Interaction with writing modes

The caret shape adapts to the writing mode of the text. In vertical writing modes, bar carets become horizontal, and underscore carets position themselves appropriately relative to the text direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparing caret shapes

This example demonstrates the different caret shapes available. Click in each input field to see how the caret appears.

#### HTML

```html
<div class="caret-demo">
  <div class="input-group">
    <label for="auto-caret">Auto (default):</label>
    <input id="auto-caret" type="text" value="Click here" />
  </div>

  <div class="input-group">
    <label for="bar-caret">Bar caret:</label>
    <input id="bar-caret" class="bar" type="text" value="Click here" />
  </div>

  <div class="input-group">
    <label for="block-caret">Block caret:</label>
    <input id="block-caret" class="block" type="text" value="Click here" />
  </div>

  <div class="input-group">
    <label for="underscore-caret">Underscore caret:</label>
    <input
      id="underscore-caret"
      class="underscore"
      type="text"
      value="Click here" />
  </div>
</div>
```

#### CSS

```css hidden
.caret-demo {
  font-family: system-ui, sans-serif;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: inline-block;
  width: 150px;
  font-weight: bold;
}

input {
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

input:focus {
  outline: none;
  border-color: #007acc;
}
```

```css
/* Apply different caret shapes */
.bar {
  caret-shape: bar;
}

.block {
  caret-shape: block;
}

.underscore {
  caret-shape: underscore;
}
```

#### Result

{{EmbedLiveSample('Comparing_caret_shapes', 500, 200)}}

### Terminal-style interface

This example shows how `caret-shape: block` can be used to create a terminal or command-line interface appearance.

#### HTML

```html
<div class="terminal">
  <div class="terminal-header">Terminal</div>
  <div class="terminal-content">
    <div class="prompt">
      user@computer:~$ <input type="text" class="terminal-input" />
    </div>
  </div>
</div>
```

#### CSS

```css hidden
.terminal {
  background-color: #1e1e1e;
  color: #00ff00;
  font-family: "Courier New", monospace;
  border-radius: 8px;
  overflow: hidden;
  width: 500px;
  margin: 20px 0;
}

.terminal-header {
  background-color: #333;
  padding: 8px 12px;
  font-size: 0.9rem;
  border-bottom: 1px solid #555;
}

.terminal-content {
  padding: 12px;
}

.prompt {
  display: flex;
  align-items: center;
}
```

```css
.terminal-input {
  background: transparent;
  border: none;
  color: #00ff00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  /* Block caret for terminal appearance */
  caret-shape: block;
  caret-color: #00ff00;
}
```

#### Result

{{EmbedLiveSample('Terminal-style_interface', 550, 120)}}

### Interactive caret shape selector

This example demonstrates all caret shapes with an interactive selector, showing how the property affects different input types.

#### HTML

```html live-sample___caret-shape-selector
<div class="demo-container">
  <div class="controls">
    <label for="shape-select">Choose caret shape:</label>
    <select id="shape-select">
      <option value="auto">auto</option>
      <option value="bar">bar</option>
      <option value="block">block</option>
      <option value="underscore">underscore</option>
    </select>
  </div>

  <div class="inputs">
    <input type="text" id="text-input" value="Text input field" />
    <textarea id="textarea-input">
Textarea content
Multiple lines supported</textarea
    >
    <div id="contenteditable" contenteditable="true">Editable div content</div>
  </div>
</div>
```

```html hidden live-sample___caret-shape-selector
<p>
  <small
    >Select a caret shape above and click in the fields below to see the
    effect.</small
  >
</p>
```

#### CSS

```css live-sample___caret-shape-selector
.demo-input {
  caret-shape: auto; /* Will be updated by JavaScript */
}
```

```css hidden live-sample___caret-shape-selector
.demo-container {
  font-family: system-ui, sans-serif;
  max-width: 500px;
  margin: 0 auto;
}

.controls {
  margin-bottom: 20px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 8px;
}

.controls label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.controls select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.inputs > * {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
}

.inputs > *:focus {
  outline: none;
  border-color: #007acc;
}

#textarea-input {
  height: 80px;
  resize: vertical;
}

#contenteditable {
  min-height: 60px;
  background: #fafafa;
}
```

#### JavaScript

```js live-sample___caret-shape-selector
const shapeSelect = document.getElementById("shape-select");
const inputs = document.querySelectorAll(
  "#text-input, #textarea-input, #contenteditable",
);

function updateCaretShape() {
  const selectedShape = shapeSelect.value;
  inputs.forEach((input) => {
    input.style.caretShape = selectedShape;
  });
}

shapeSelect.addEventListener("change", updateCaretShape);
updateCaretShape(); // Initialize
```

```js hidden live-sample___caret-shape-selector
// Focus the first input initially to show the caret
document.getElementById("text-input").focus();
```

#### Result

{{EmbedLiveSample('caret-shape-selector', 550, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}} - Sets the color of the caret
- {{cssxref("caret-animation")}} - Controls caret blinking behavior
- {{cssxref("caret")}} - Shorthand for all caret properties
- {{HTMLElement("input")}} element
- HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute
