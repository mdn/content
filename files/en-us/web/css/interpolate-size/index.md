---
title: interpolate-size
slug: Web/CSS/interpolate-size
page-type: css-property
status:
  - experimental
browser-compat: css.properties.interpolate-size
---

{{CSSRef}}{{seecompattable}}

The **`interpolate-size`** [CSS](/en-US/docs/Web/CSS) property allows you to enable [animations](/en-US/docs/Web/CSS/CSS_animations) and [transitions](/en-US/docs/Web/CSS/CSS_transitions) between a [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) value and an [intrinsic size value](/en-US/docs/Glossary/Intrinsic_Size) such as `auto`, [`fit-content`](/en-US/docs/Web/CSS/fit-content), or [`max-content`](/en-US/docs/Web/CSS/max-content).

This property is typically used to animate the {{cssxref("width")}} and/or {{cssxref("height")}} of a container between a `<length-percentage>` and the full size of its content (i.e. between "closed" and "open" or "hide" and "reveal" states).

> [!NOTE]
> The behavior opted-into by `interpolate-size` cannot be enabled by default across the web because many sites in the wild use stylesheets that assume intrinsic size values cannot be animated. Enabling it by default would cause several backwards-compatibility issues (see relevant [CSS WG discussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

## Syntax

```css
/* Keyword values */
interpolate-size: allow-keywords;
interpolate-size: numeric-only;

/* Global values */
interpolate-size: inherit;
interpolate-size: initial;
interpolate-size: revert;
interpolate-size: revert-layer;
interpolate-size: unset;
```

### Values

- `allow-keywords`
  - : Enables interpolation between a [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) value and an intrinsic size value, to allow animation between the two.
- `numeric-only`
  - : The default behavior — intrinsic size values cannot be interpolated.

## Description

`interpolate-size: allow-keywords` enables interpolation between a [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) value and an intrinsic size value. Note that it does not enable animating between two intrinsic size values. One end of the animation must be a `<length-percentage>`.

`interpolate-size` is inherited, so animating to (or from) an intrinsic size value can be enabled for an entire document by setting it on the document root:

```css
:root {
  interpolate-size: allow-keywords;
}
```

If you want to limit the scope, you can set it on the relevant container element:

```css
main {
  /* Enable only for <main> and its descendents */
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> The {{cssxref("calc-size()")}} function can also be used to enable animations between a `<length-percentage>` and an intrinsic size value, when used to specify a value to animate or transition to/from. However, `interpolate-size` is simpler to implement in most cases, especially when there are multiple animations to consider (it only needs to be declared once). `calc-size()` should only be used if you need to create animations that include performing calculations on an intrinsic size value.

### Values that can be interpolated

The following intrinsic values can currently be opted-in to animations:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (for containers sized using {{cssxref("flex-basis")}}).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `interpolate-size` usage

This example demonstrates how to set `interpolate-size: allow-keywords` on a document to enable animations involving an intrinsic size. The demo features a character badge/"name tag", which can be hovered or focused to reveal information about the character. The reveal is handled by a {{cssxref("height")}} transition between a set length and `max-content`.

#### HTML

The HTML contains a single {{htmlelement("section")}} element with [`tabindex="0"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) set on it so it can receive keyboard focus. The `<section>` contains {{htmlelement("header")}} and {{htmlelement("main")}} elements, each with their own child content.

```html
<section tabindex="0">
  <header>
    <h2>Chris Mills</h2>
  </header>
  <main>
    <p>Chris is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

main {
  padding: 10px;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

In the CSS, we first set `interpolate-size: allow-keywords` on the {{cssxref(":root")}}, to enable it for the whole document.

```css
:root {
  interpolate-size: allow-keywords;
}
```

We then set the `<section>`'s {{cssxref("height")}} to `42px` and {{cssxref("overflow")}} to `hidden` so only the `<header>` is shown by default, then specify a `transition` that animates the `<section>` `height` over 1 second during state change. Finally, we set the `<section>` `height` on {{cssxref(":hover")}} and {{cssxref(":focus")}} to `max-content`.

```css
section {
  height: 42px;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: max-content;
}
```

The rest of the CSS has been hidden for brevity.

#### Result

Try hovering over the `<section>` or focusing it via the keyboard — it will animate to its full height, revealing all the content.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) on developer.chrome.com (2024)
