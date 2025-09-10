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

The **`caret`** [shorthand](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the appearance and behavior of the **insertion caret** in a single declaration. It is a shorthand for {{cssxref("caret-color")}}, {{cssxref("caret-animation")}}, and {{cssxref("caret-shape")}}.

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
    <p>Click in the field to see the caret:</p>
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

The values correspond to the constituent properties:

- {{cssxref("&lt;color&gt;")}} (for `caret-color`)
  - : Sets the color of the caret. See {{cssxref("caret-color")}} for details.

- `auto` | `manual` (for `caret-animation`)
  - : Controls whether the caret blinks. See {{cssxref("caret-animation")}} for details.

- `auto` | `bar` | `block` | `underscore` (for `caret-shape`)
  - : Sets the visual shape of the caret. See {{cssxref("caret-shape")}} for details.

## Description

The `caret` shorthand allows you to set multiple caret properties in a single declaration, making it convenient to customize the complete appearance and behavior of the insertion caret.

### Value resolution

When values are omitted from the shorthand, they reset to their initial values:

- `caret-color`: `auto` (resolves to `currentColor`)
- `caret-animation`: `auto` (caret blinks)
- `caret-shape`: `auto` (browser-determined shape)

### Order independence

Unlike some CSS shorthands, the `caret` property accepts values in any order. The browser determines which value applies to which property based on the value type:

- Color values apply to `caret-color`
- `auto`/`manual` keywords apply to `caret-animation`
- Shape keywords (`bar`, `block`, `underscore`) apply to `caret-shape`

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic caret customization

This example shows different ways to use the `caret` shorthand property.

#### HTML

```html
<div class="caret-examples">
  <div class="example">
    <label for="default">Default caret:</label>
    <input id="default" type="text" value="Default appearance" />
  </div>

  <div class="example">
    <label for="colored">Colored caret:</label>
    <input id="colored" class="red-caret" type="text" value="Red caret" />
  </div>

  <div class="example">
    <label for="shaped">Block caret:</label>
    <input id="shaped" class="block-caret" type="text" value="Block shape" />
  </div>

  <div class="example">
    <label for="static">Non-blinking caret:</label>
    <input id="static" class="static-caret" type="text" value="No blinking" />
  </div>

  <div class="example">
    <label for="custom">Custom combination:</label>
    <input
      id="custom"
      class="custom-caret"
      type="text"
      value="Underscore, manual, blue" />
  </div>
</div>
```

#### CSS

```css hidden
.caret-examples {
  font-family: system-ui, sans-serif;
}

.example {
  margin-bottom: 1rem;
}

label {
  display: inline-block;
  width: 180px;
  font-weight: bold;
}

input {
  font-size: 1rem;
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

input:focus {
  outline: none;
  border-color: #007acc;
}
```

```css
/* Using caret shorthand */
.red-caret {
  caret: red;
}

.block-caret {
  caret: block;
}

.static-caret {
  caret: manual;
}

.custom-caret {
  caret: underscore manual #0066cc;
}
```

#### Result

{{EmbedLiveSample('Basic_caret_customization', 500, 250)}}

### Retro terminal interface

This example creates a retro computer terminal interface using the `caret` shorthand.

#### HTML

```html live-sample___retro-terminal
<div class="retro-terminal">
  <div class="terminal-screen">
    <div class="terminal-header">RETRO COMPUTER v1.0</div>
    <div class="terminal-body">
      <div class="output-line">Welcome to RetroOS</div>
      <div class="output-line">Type commands below:</div>
      <div class="input-line">
        <span class="prompt">C:\></span>
        <input
          type="text"
          class="terminal-input"
          placeholder="Enter command..." />
      </div>
    </div>
  </div>
</div>
```

#### CSS

```css hidden live-sample___retro-terminal
.retro-terminal {
  background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 20px;
  border-radius: 15px;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 20px auto;
}

.terminal-screen {
  background: #001100;
  border: 3px solid #333;
  border-radius: 8px;
  padding: 0;
  font-family: "Courier New", monospace;
  color: #00ff41;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.2);
}

.terminal-header {
  background: #333;
  color: #ccc;
  padding: 8px 15px;
  font-size: 0.9rem;
  border-bottom: 2px solid #555;
  text-align: center;
}

.terminal-body {
  padding: 15px;
  min-height: 150px;
}

.output-line {
  margin-bottom: 8px;
  font-size: 1rem;
}

.input-line {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.prompt {
  margin-right: 8px;
  font-weight: bold;
}

.terminal-input::placeholder {
  color: #006600;
}
```

```css live-sample___retro-terminal
.terminal-input {
  background: transparent;
  border: none;
  color: #00ff41;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  /* Using caret shorthand for retro block cursor */
  caret: block manual #00ff41;
}
```

#### Result

{{EmbedLiveSample('retro-terminal', 650, 250)}}

### Animation with custom caret

This example shows how to combine the `caret` shorthand with CSS animations for dynamic effects.

#### HTML

```html
<div class="animated-demo">
  <h3>Animated Caret Demo</h3>
  <input type="text" class="animated-caret" value="Watch the caret change!" />
  <p><small>The caret color and shape animate automatically</small></p>
</div>
```

#### CSS

```css hidden
.animated-demo {
  text-align: center;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

.animated-caret {
  font-size: 1.5rem;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.animated-caret:focus {
  outline: none;
  border-color: #007acc;
}
```

```css
.animated-caret {
  /* Start with manual animation to control our own timing */
  caret: bar manual red;

  /* Animate the caret properties */
  animation: caret-morph 3s infinite;
}

@keyframes caret-morph {
  0% {
    caret: bar manual red;
  }
  33% {
    caret: block manual blue;
  }
  66% {
    caret: underscore manual green;
  }
  100% {
    caret: bar manual red;
  }
}
```

#### Result

{{EmbedLiveSample('Animation_with_custom_caret', 400, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}} - Sets the color of the insertion caret
- {{cssxref("caret-animation")}} - Controls caret blinking behavior
- {{cssxref("caret-shape")}} - Sets the shape of the insertion caret
- {{cssxref("color")}} - Sets the text color (affects default caret color)
- {{HTMLElement("input")}} element
- HTML [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface) module
