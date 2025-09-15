---
title: caret
slug: Web/CSS/caret
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.caret
sidebar: cssref
---

{{SeeCompatTable}}

The **`caret`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the appearance and behavior of the **insertion caret** in a single declaration.

{{InteractiveExample("CSS Demo: caret")}}

```css interactive-example-choice
caret: red;
```

```css interactive-example-choice
caret: block manual;
```

```css interactive-example-choice
caret: underscore auto green;
```

```css interactive-example-choice
caret: bar manual orange;
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

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`caret-color`](/en-US/docs/Web/CSS/caret-color)
- [`caret-animation`](/en-US/docs/Web/CSS/caret-animation)
- [`caret-shape`](/en-US/docs/Web/CSS/caret-shape)

## Syntax

```css
/* Individual values */
caret: red; /* caret-color only */
caret: block; /* caret-shape only */
caret: manual; /* caret-animation only */

/* Two values */
caret: red manual; /* caret-color + caret-animation */
caret: block auto; /* caret-shape + caret-animation */
caret: underscore orange; /* caret-shape + caret-color */

/* Three values */
caret: bar manual red; /* caret-shape + caret-animation + caret-color */
caret: block auto #00ff00; /* caret-shape + caret-animation + caret-color */

/* Global values */
caret: inherit;
caret: initial;
caret: revert;
caret: revert-layer;
caret: unset;
```

The `caret` property is specified as one, two, or three values from the constituent properties. Values can be specified in any order, and omitted values are set to their initial values.

### Values

- {{cssxref("caret-color")}}
  - : Sets the color of the caret.

- {{cssxref("caret-animation")}}
  - : Controls whether the caret blinks.

- {{cssxref("caret-shape")}}
  - : Sets the visual shape of the caret.

## Description

The `caret` shorthand allows you to set multiple caret properties in a single declaration, making it convenient to customize the complete appearance and behavior of the insertion caret.

### Value resolution

When values are omitted from the shorthand, they reset to their initial values:

- `caret-color`: `auto` (resolves to `currentColor`).
- `caret-animation`: `auto` (caret blinks).
- `caret-shape`: `auto` (browser-determined shape).

### Order independence

Unlike some CSS shorthands, the `caret` property accepts values in any order. The browser determines which value applies to which property based on the value type:

- {{cssxref("&lt;color>")}} values apply to `caret-color`.
- `auto`/`manual` keywords apply to `caret-animation`.
- Shape keywords (`bar`, `block`, `underscore`) apply to `caret-shape`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Retro terminal with animated caret

This example creates a vintage terminal interface using the `caret` shorthand to combine multiple caret properties, demonstrating how it replaces older border-based techniques.

The main advantage of the `caret` shorthand is combining multiple properties in one declaration. Here we set the shape to `block`, disable default blinking, and set the color to `green`, all in a single line.

#### HTML

```html
<label for="terminal">Enter a command</label>
<div class="old-screen">
  <span>></span>
  <textarea id="terminal" class="terminal-input"></textarea>
</div>
```

#### CSS

```css hidden
label {
  background: #092104;
  display: block;
  padding: 10px 20px;
  color: #00ad00;
  font-weight: bold;
  font-family: monospace;
}

.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 140px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: #00ad00;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: #00ad00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}
```

```css
.terminal-input {
  caret: block manual green;
  animation: vintage-caret 2s infinite;
}

@keyframes vintage-caret {
  from,
  50% {
    caret-color: #00ad00;
  }
  75%,
  to {
    caret-color: transparent;
  }
}
```

#### Result

{{EmbedLiveSample('Retro_terminal_with_animated_caret', 550, 215)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}, {{cssxref("caret-shape")}}
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface) module
