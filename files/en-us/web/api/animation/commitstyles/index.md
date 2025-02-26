---
title: "Animation: commitStyles() method"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
page-type: web-api-instance-method
browser-compat: api.Animation.commitStyles
---

{{APIRef("Web Animations")}}

The `commitStyles()` method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface writes the [computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value) of the animation's current styles into its target element's [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute. `commitStyles()` works even if the animation has been [automatically removed](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).

`commitStyles()` can be used in combination with `fill` to cause the final state of an animation to persist after the animation ends. The same effect could be achieved with `fill` alone, but [using indefinitely filling animations is discouraged](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animations [take precedence over all static styles](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), so an indefinite filling animation can prevent the target element from ever being styled normally.

Using `commitStyles()` writes the styling state into the element's [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute, where they can be modified and replaced as normal.

## Syntax

```js-nolint
commitStyles()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Committing the final state of an animation

In this example we have two buttons, labeled "Commit styles" and "Fill forwards". Both buttons animate when you click them, and both buttons persist the final state of the animation.

The difference, though, is that "Fill forwards" only uses `fill: "forwards"` to persist the animation's final state: this means that the browser has to maintain the animation's state indefinitely, or until it can be automatically removed.

However, the "Commit styles" button waits for the animation to finish, then calls `commitStyles()`, then cancels the animation, so the finished style is captured as the value of the `style` attribute, rather than as the animation state.

#### HTML

```html
<button class="commit-styles">Commit styles</button>
<br />
<button class="fill-forwards">Fill forwards</button>
```

```css hidden
button {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const commitStyles = document.querySelector(".commit-styles");
let offset1 = 0;

commitStyles.addEventListener("click", async (event) => {
  // Start the animation
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500, fill: "forwards" },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});

const fillForwards = document.querySelector(".fill-forwards");
let offset2 = 0;

fillForwards.addEventListener("click", async (event) => {
  // Start the animation
  offset2 = 100 - offset2;
  const animation = fillForwards.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );
});
```

#### Result

{{EmbedLiveSample("committing_the_final_state_of_an_animation")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
