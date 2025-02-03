---
title: ":open"
slug: Web/CSS/:open
page-type: css-pseudo-class
browser-compat: css.selectors.open
---

{{CSSRef}}{{SeeCompatTable}}

The **`:open`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has "open" and "closed" states, only when it is currently in the "open" state.

## Syntax

```css
:open {
  /* ... */
}
```

## Description

The `:open` pseudo-class selects any element currently in the "open" state, which includes the following elements:

- {{htmlelement("details")}} and {{htmlelement("dialog")}} elements that are in an open state, that is, they have the `open` attribute set.
- {{htmlelement("input")}} elements that display a picker interface for the user to choose a value from (for example [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color)), when the picker is displayed.
- {{htmlelement("select")}} elements that display a drop-down box for the user to choose a value from, when the drop-down is displayed.

Note that the "open" and "closed" states are semantic states, and don't necessary correlate with the visibility of the element in question. For example, a `<details>` element that is expanded to show its content is open, and will be selected by the `details:open` selector, even if it is hidden with a {{cssxref("display")}} value of `none`.

{{domxref("Popover API", "popover")}} element "showing" and "hidden" states are also distinct semantic states, which can coexist alongside "open" and "closed" states. You can use the {{cssxref(":popover-open")}} pseudo-class to target styles at popovers that are in the "showing" state.

## Examples

### Basic `:open` usage

This example demonstrates some of the HTML elements that have an open state.

### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "Your browser doesn't support :open selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

### HTML

```html
<details>
  <summary>Details</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">Choose a pet:</label>
<select id="pet-select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
</select>
<hr />

<label for="start">Start date:</label>
<input type="date" id="start" />
```

### Result

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### Custom `<select>` styling with `:open`

In this example, we have a basic {{htmlelement("select")}} element with some custom styling applied. The `:open` pseudo-class is used to apply a styling enhancement to its "open" state, that is, when the drop-down is displayed.

#### HTML

There is nothing special about our fruit selector, except that we have put it inside a wrapper element to make it easier to apply generated content to the example ({{cssxref("::after")}} and {{cssxref("::before")}} do not play well with `<select>` elements).

```html
<p>
  <label for="fruit">Choose your favourite fruit:</label>
  <div class="select-wrapper">
    <select name="fruit" id="fruit">
      <option>apple</option>
      <option>banana</option>
      <option>boysenberry</option>
      <option>cranberry</option>
      <option>fig</option>
      <option>grapefruit</option>
      <option>lemon</option>
      <option>orange</option>
      <option>papaya</option>
      <option>pomegranate</option>
      <option>tomato</option>
    </select>
  </div>
</p>
```

> [!NOTE]
> We are not using a multi-line `<select>` (that is, one with the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute set) — those tend to render as a scrolling list box rather than a drop-down, so don't have an "open" state.

#### CSS

In the CSS, we set an {{cssxref("appearance")}} value of `none` on our `<select>` element to remove the default OS styling from the select box, and provide some basic styles of or own. We then set a {{cssxref("position")}} value of `relative` on the select wrapper so that we can absolutely position our generated content relative to it.

```css hidden
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 400px;
}
```

```css
select {
  appearance: none;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 5px;
}

.select-wrapper {
  position: relative;
}
```

We set some generated content on the select wrapper that looks like a collapsed "expansion arrow", and position it to the left of the `<select>`. We then change the generated content on the wrapper to an expanded "expansion arrow", only when the descendant `<select>` is open. This is done using a combination of the `:open` and {{cssxref(":has()")}} pseudo-classes to create a parent selector. We are literally saying "select the `::before` pseudo-element of the wrapper, but only when its descendant `<select>` is open."

```css
.select-wrapper::before {
  content: "▶";
  font-size: 0.8rem;
  top: 8px;
  left: -22px;
  position: absolute;
}

.select-wrapper:has(select:open)::before {
  content: "▼";
}
```

#### Result

The result is as follows. Try opening the `<select>` dropdown to see the effect on the expansion arrow:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, and {{htmlelement("input")}} elements
- The {{cssxref(":popover-open")}} pseudo-class
- {{Cssxref(":modal")}}
