---
title: ":open"
slug: Web/CSS/:open
page-type: css-pseudo-class
browser-compat: css.selectors.open
---

{{CSSRef}}{{SeeCompatTable}}

The **`:open`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has open and closed states, only when it is currently in the open state.

## Syntax

```css
:open {
  /* ... */
}
```

## Description

The `:open` pseudo-class selects any element currently in the open state, which includes the following elements:

- {{htmlelement("details")}} and {{htmlelement("dialog")}} elements that are in an open state, that is, they have the `open` attribute set.
- {{htmlelement("input")}} elements that display a picker interface for the user to choose a value from (for example [`<input type="color">`](/en-US/docs/Web/HTML/Element/input/color)), when the picker is displayed.
- {{htmlelement("select")}} elements that display a drop-down box for the user to choose a value from, when the drop-down is displayed.

Note that the open and closed states are semantic states, and don't necessary correlate with the visibility of the element in question. For example, a `<details>` element that is expanded to show its content is open, and will be selected by the `details:open` selector, even if it is hidden with a {{cssxref("visibility")}} value of `hidden`.

{{domxref("Popover API", "Popover", "", "nocode")}} elements (that is, elements with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute set on them) have distinct semantic states representing popovers that are showing or hidden, which can coexist alongside open and closed states. You can't use the `:open` pseudo-class to target styles at popovers that are in the showing state — instead, you need to use the {{cssxref(":popover-open")}} pseudo-class.

## Examples

### Basic `:open` usage

This example demonstrates some of the HTML elements that have an open state.

#### CSS

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

#### HTML

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

#### Result

{{EmbedLiveSample("Basic `:open` usage", 300, 200)}}

### Custom `<select>` styling with `:open`

In this example, we have a basic {{htmlelement("select")}} element with some custom styling applied. The `:open` pseudo-class is used to apply a styling enhancement to its open state — when the dropdown menu is displayed.

#### HTML

There is nothing special about our fruit selector, except that we have put it inside a wrapper {{domxref("div")}} element to make it easier to style the surrounding space.

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
> We are not using a multi-line `<select>` (that is, one with the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute set) — those tend to render as a scrolling list box rather than a drop down menu, so don't have an open state.

#### CSS

In the CSS, we set an {{cssxref("appearance")}} value of `none` on our `<select>` element to remove the default OS styling from the select box, and provide some basic styles of or own. We then set some {{cssxref("padding")}} on the select wrapper, and a {{cssxref("position")}} value of `relative` so that absolutely-positioned descendents will be positioned relative to the wrapper.

Finally in this section, we use the {{cssxref("::after")}} pseudo-element to place an absolutely-positioned generated content down arrow at the right-hand side of the `<select>` element — users tend to recognize `<select>` elements by the down arrow, so it is a good idea to include it.

```css hidden
* {
  box-sizing: border-box;
}

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
  border: 1px solid black;
  background-color: white;
}

.select-wrapper {
  padding: 20px;
  position: relative;
}

.select-wrapper::after {
  position: absolute;
  content: "▼";
  font-size: 0.8rem;
  top: 26px;
  right: 26px;
}
```

We set a different background color on the `<select>` element when it is open using the `:open` pseudo-class. We also set a different background color and border on the select wrapper `<div>` when the `<select>` element is open, using a combination of the `:open` and {{cssxref(":has()")}} pseudo-classes to create a parent selector. We are literally saying "select the wrapper `<div>`, but only when its descendant `<select>` is open."

```css
select:open {
  background-color: #f8f2dc;
}

.select-wrapper:has(select:open) {
  background-color: #81adc8;
  border: 2px solid #cd4631;
}
```

#### Result

The result is as follows. Try opening the `<select>` dropdown to see the effect on the styling:

{{ EmbedLiveSample("Custom `<select>` styling with `:open`", "100%", "200") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}}, and {{htmlelement("input")}} elements
- {{cssxref(":popover-open")}} pseudo-class
- {{Cssxref(":modal")}}
