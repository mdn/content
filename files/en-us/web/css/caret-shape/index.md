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

### Retro terminal with animated caret

This example shows how to create a vintage terminal interface using `caret-shape: block` with animated caret color, replacing the old technique of using borders.

#### HTML

```html
<div class="old-screen">
  <span>></span>
  <textarea class="terminal-input" placeholder="Enter command..."></textarea>
</div>
```

#### CSS

```css hidden
.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 150px;
  border-radius: 25px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: green;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  border: none;
  color: green;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}

.terminal-input::placeholder {
  color: #4a6741;
}
```

```css
.terminal-input {
  /* Modern approach using caret properties */
  caret-shape: block;
  caret-animation: manual;
  animation: old-caret 2s infinite;
}

@keyframes old-caret {
  from,
  50% {
    caret-color: green;
  }
  75%,
  to {
    caret-color: transparent;
  }
}
```

#### Result

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 280)}}

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
