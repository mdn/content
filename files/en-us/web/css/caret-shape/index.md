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
    <label for="example-element">Edit text field:</label>
    <input id="example-element" type="text" value="Sample text" />
  </div>
</section>
```

```css interactive-example
div {
  text-align: left;
}

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
  - : The default value. The browser determines the caret shape. This typically follows platform conventions and may change based on context.

- `bar`
  - : The caret appears as a thin vertical line at the insertion point, positioned between characters rather than over them.

- `block`
  - : The caret appears as a rectangle that overlaps the next character after the insertion point. If no character follows, it appears after the last character.

- `underscore`
  - : The caret appears as a thin horizontal line underneath the next character after the insertion point. If no character follows, it appears after the last character.

## Description

The insertion caret is the blinking cursor that indicates where text will be inserted when typing. Different caret shapes can provide visual feedback about the current editing mode or offer visual customization.

### Editing modes and caret shapes

Text editors typically operate in one of two modes:

- **Insert mode**: New characters are inserted at the caret position, pushing existing text to the end of the line. This is the default behavior in most modern applications.
- **Overtype mode** (also called "overwrite mode"): New characters replace existing characters at the caret position instead of being inserted between them. This mode is often toggled with the <kbd>Insert</kbd> key.

Different caret shapes have traditional uses, such as:

- **Bar carets** are positioned between characters and are most common in modern interfaces.
- **Block carets** overlay the next character and are often used in terminal applications or to indicate overtype mode.
- **Underscore carets** appear below characters and can be useful for certain design aesthetics, such as mimicking typewriter or underline text input styles.

### Caret positioning and behavior

The `caret-shape` property affects how the caret is visually rendered but doesn't change its logical position in the text. The caret always represents the insertion point between characters, regardless of its visual shape.

### Interaction with writing modes

The caret shape adapts to the {{cssxref("writing-mode")}} of the text. In vertical writing modes, bar carets become horizontal, and underscore carets position themselves appropriately relative to the text direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Retro terminal with animated caret

This example shows how to create a vintage terminal interface using `caret-shape: block` with animated caret color, replacing the old technique of using borders.

The key part is using the modern caret properties instead of the old border-based technique. We set the caret to block shape, disable the default blinking, and create our own custom animation.

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
  height: 140px;
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
  height: 100%;
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

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 180)}}

### Console interface with underscore caret

This example demonstrates using `caret-shape: underscore` to create a console-style interface where the underscore caret complements the terminal aesthetic.

#### HTML

```html
<div class="console-demo">
  <div class="console-output">
    <p>user@host:css-ui-4 $ ls -a</p>
    <p>. .. Overview.bs Overview.html</p>
  </div>
  <div class="console-input">
    <span class="prompt">user@host:css-ui-4 $ </span>
    <input type="text" class="console" placeholder="Enter command..." />
  </div>
</div>
```

#### CSS

```css hidden
.console-demo {
  background: black;
  color: white;
  font-family: monospace;
  padding: 20px;
  height: 60px;
  border-radius: 4px;
}

.console-output {
  margin-bottom: 0.5rem;
}

.console-output p {
  margin: 0 0.25rem;
}

.console-input {
  display: flex;
  align-items: center;
}

.prompt {
  margin-right: 0;
}

.console {
  background: transparent;
  border: none;
  color: white;
  font-family: inherit;
  outline: none;
  flex: 1;
}
```

```css
.console {
  caret-shape: underscore;
}
```

#### Result

{{EmbedLiveSample('Console_interface_with_underscore_caret', 550, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}, {{cssxref("caret")}}
