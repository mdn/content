---
title: How to fade a button on hover
short-title: Fade a button on hover
slug: Learn_web_development/Howto/Solve_CSS_problems/Transition_button
page-type: learn-faq
sidebar: learn-how-to
---

In this guide you can find out how to do a gentle fade between two colors when hovering over a button.

In our button example, we can change the background of our button by defining a different background color for the `:hover` dynamic pseudo-class. However, hovering over the button will cause the background-color to snap to the new color. To create a more gentle change between the two, we can use CSS Transitions.

## Using transitions

After adding the desired color for the hover state, add the {{cssxref("transition")}} property to the rules for the button. For a simple transition, the value of `transition` is the name of the property or properties you wish this transition to apply to, and the time that the transition should take.

For the `:active` and `:focus` pseudo-classes the {{cssxref("transition")}} property is set to none, so that the button snaps to the active state when clicked.

In the example the transition takes 1 second, you can try changing this to see the difference a change in speed makes.

```html live-sample___transition-button
<div class="wrapper">
  <button class="fade">Hover over me</button>
</div>
```

```css hidden live-sample___transition-button
.wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 140%;
  cursor: pointer;
}

.fade:focus,
.fade:active {
  background-color: black;
}
```

```css live-sample___transition-button
.fade {
  background-color: #db1f48;
  color: #fff;
  transition: background-color 1s;
}

.fade:hover {
  background-color: #004369;
}

.fade:focus,
.fade:active {
  background-color: black;
  transition: none;
}
```

{{EmbedLiveSample("transition-button")}}

> [!NOTE]
> The {{cssxref("transition")}} property is a shorthand for {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, and {{cssxref("transition-timing-function")}}. See the pages for these properties on MDN to find ways to tweak your transitions.

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
