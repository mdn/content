---
title: caret-animation
slug: Web/CSS/caret-animation
page-type: css-property
browser-compat: css.properties.caret-animation
sidebar: cssref
---

The **`caret-animation`** [CSS](/en-US/docs/Web/CSS) property is used to enable or disable the blinking behavior of the **insertion caret**, the visible marker that appears in editable elements to indicate where the next character will be inserted or deleted.

A `caret-animation` value of `manual` can be set to stop the caret from blinking, which is useful when you want to apply a custom animation to the caret. In addition, it may benefit users with [vestibular motion disorders](/en-US/docs/Web/Accessibility/Guides/Seizure_disorders) to set `caret-animation: manual` in a [user stylesheet](/en-US/docs/Web/CSS/CSS_cascade/Cascade#user_stylesheets) or a [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query.

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

### Creating a custom caret animation

In this example, a custom caret animation is applied to an editable paragraph and a text input.

#### HTML

The markup features a {{htmlelement("p")}} element containing text and two basic text {{htmlelement("input")}} elements. The `<p>` element has the [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute set on it to make it editable. The first two elements have a `class` of `custom-caret` set on them, to enable targetting them with custom caret styles.

```html live-sample___caret-animation
<p contenteditable="" class="custom-caret">
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

In the CSS, we first define a set of {{cssxref("@keyframes")}} that change the {{cssxref("caret-color")}} from a transparent dark blue to a fully opaque dark blue.

```css live-sample___caret-animation
@keyframes custom-caret-animation {
  from {
    caret-color: rgb(25 25 112 / 0);
  }

  to {
    caret-color: rgb(25 25 112 / 1);
  }
}
```

We then style the `<p>` and the first `<input>` with a custom animation based on the `@keyframes`, a dark blue {{cssxref("caret-color")}}, and a `caret-animation` value of `manual` to turn the default caret blinking behavior off.

```css hidden live-sample___caret-animation
body {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}
```

```css live-sample___caret-animation
.custom-caret {
  animation: custom-caret-animation infinite linear alternate 0.75s;
  caret-color: rgb(25 25 112 / 1);
  caret-animation: manual;
}

p,
input {
  font-size: 1.6rem;
}
```

#### Result

The rendered result looks like so:

{{EmbedLiveSample('Making_a_heading_span_columns', 'auto', 260)}}

Try focusing the first two elements to see what the custom caret animation looks like. To compare it with the default blinking caret, you can focus the third element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("caret-color")}}
- [CSS basic user interface](/en-US/docs/Web/CSS/CSS_basic_user_interface) module
