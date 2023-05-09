---
title: "Animation: commitStyles() method"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
page-type: web-api-instance-method
browser-compat: api.Animation.commitStyles
---

{{APIRef("Web Animations")}}

The `commitStyles()` method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface writes the [computed values](/en-US/docs/Web/CSS/computed_value) of the animation's current styles into its target element's {{htmlattrxref("style")}} attribute. `commitStyles()` works even if the animation has been [automatically removed](/en-US/docs/Web/API/Animation#automatically_removing_filling_animations).

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

`commitStyles()` can be used in combination with `fill` to cause the final state of an animation to persist after the animation ends.

> **Note:**
> The same effect could be achieved with `fill` alone, but [using indefinitely filling animations is discouraged](https://w3c.github.io/csswg-drafts/web-animations-1/#fill-behavior). Animations [take precedence over all static styles](/en-US/docs/Web/CSS/Cascade#cascading_order), so an indefinite filling animation can prevent the target element from ever being styled normally.
>
> Using `commitStyles()` writes the styling state into the element's {{htmlattrxref("style")}} attribute, where they can be modified and replaced as normal.

#### Javascript

```js
const button = document.querySelector("button");
let offset = 0;

button.addEventListener("click", async (event) => {
  // Start the animation
  offset = 100 - offset;
  const animation = button.animate(
    { transform: `translate(${offset}px)` },
    { duration: 500, fill: "forwards" }
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attr
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});
```

#### HTML

```html
<button>Animate</button>
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
