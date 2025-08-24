---
title: caret-animation
slug: Web/CSS/caret-animation
page-type: css-property
browser-compat: css.properties.caret-animation
sidebar: cssref
---

The **`caret-animation`** [CSS](/en-US/docs/Web/CSS) property is used to enable or disable the blinking behavior of the **insertion caret**, the visible marker that appears in editable elements to indicate where the next character will be inserted or deleted.

When applying a custom animation to the caret, you should stop the default blinking so that it doesn't interfere with the animation.

## Syntax

```css
/* Keyword values */
caret-animation: auto;
caret-animation: manual;

/* Global values */
caret-animation: inherit;
caret-animation: initial;
caret-animation: revert;
caret-animation: revert-layer;
caret-animation: unset;
```

### Values

The `caret-animation` property is specified as one of the keyword values listed below.

- `auto`
  - : The caret blinks on and off. This is the default (initial) value.
- `manual`
  - : The caret does not blink on and off.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `caret-animation` usage

This example shows the difference between having `caret-animation` set to `auto` versus `manual` on an editable element.

#### HTML

The markup features two {{htmlelement("p")}} elements with [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) set to make them editable.

```html live-sample___caret-animation-basic
<p contenteditable="true">
  My caret animates because <code>caret-animation</code> is set to
  <code>auto</code>.
</p>
<p contenteditable="true">
  My caret doesn't animate because <code>caret-animation</code> is set to
  <code>manual</code>.
</p>
```

#### CSS

The CSS sets the {{cssxref("caret-color")}} value to `red`. It then gives the first paragraph a `caret-animation` value of `auto` and the second paragraph a `caret-animation` value of `manual`.

```css live-sample___caret-animation-basic
p {
  caret-color: red;
}

p:first-of-type {
  caret-animation: auto;
}

p:last-of-type {
  caret-animation: manual;
}
```

#### Result

The rendered result looks like so:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Try focusing the two paragraphs to see the difference in caret behavior.

### Creating a custom caret animation

In this example, a custom caret animation is applied to an editable paragraph and a text input.

#### HTML

The markup features a {{htmlelement("p")}} element and two text {{htmlelement("input")}} elements. The `<p>` element has the [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute set on it to make it editable. The paragraph and first text input have a `class` of `custom-caret` set on them.

```html live-sample___caret-animation-custom
<p contenteditable="true" class="custom-caret">
  This paragraph has a custom animation applied to it, plus
  <code>caret-animation: manual</code> to stop the default caret blinking and
  allow the smooth animation to be seen.
</p>

<input
  type="text"
  class="custom-caret"
  value="I've got a custom caret animation" />

<input type="text" value="I've got the default blinking caret" />
```

#### CSS

We first define a set of {{cssxref("@keyframes")}} that change the {{cssxref("caret-color")}} from `transparent` to `darkblue`.

```css live-sample___caret-animation-custom
@keyframes custom-caret-animation {
  from {
    caret-color: transparent;
  }

  to {
    caret-color: darkblue;
  }
}
```

We then style the `<p>` and the first `<input>` with the custom `@keyframes` animation, a {{cssxref("caret-color")}}, and a `caret-animation` value of `manual` to turn the default caret blinking behavior off.

```css hidden live-sample___caret-animation-custom
body {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}
```

```css live-sample___caret-animation-custom
.custom-caret {
  animation: custom-caret-animation infinite linear alternate 0.75s;
  caret-color: darkblue;
  caret-animation: manual;
}

p,
input {
  font-size: 1.6rem;
}
```

#### Result

The rendered result looks like so:

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

Try focusing the first two elements to see what the custom caret animation looks like. To compare it with the default blinking caret, you can focus the third element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}}
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface) module
