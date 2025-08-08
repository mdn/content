---
title: "Animation: commitStyles() method"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
page-type: web-api-instance-method
browser-compat: api.Animation.commitStyles
---

{{APIRef("Web Animations")}}

The `commitStyles()` method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface writes the [computed values](/en-US/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) of the animation's current styles into its target element's [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute.

It is primarily used to write the styles for the final state of an animation into the target element, so that the styling persists after the animation ends.

## Syntax

```js-nolint
commitStyles()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `commitStyles()` method is primarily used to write the [computed values](/en-US/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) for the final state of an animation into the target element's [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute, so that the styling persists after the animation ends.
This can be done when the animation has finished (that is, the {{domxref("Animation")}} object's {{domxref("Animation.finished","finished")}} property has resolved).

### `commitStyles()` alongside fill mode

On older browsers, you must specify the [`fill` mode](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) in order to be able to commit the styles to the element _after_ the animation has finished.

The code below shows how you can animate an element named `animatedElement`, setting [`fill: "forwards"`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) to persist the animation styles after it finishes.
Once the animation is finished we commit the styles to the element with `commitStyles()`.

```js
// Start the animation
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500, fill: "forwards" },
);

// Wait for the animation to finish
await animation.finished;
// Commit animation state to he animatedElement style attribute
animation.commitStyles();
// Cancel the animation
animation.cancel();
```

As `fill` persists the animation indefinitely, once we've committed the styles, we cancel the animation.

Note that the same effect could be achieved with `fill` alone, but [using indefinitely filling animations is discouraged](https://drafts.csswg.org/web-animations-1/#fill-behavior).
Animations [take precedence over all static styles](/en-US/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), so an indefinite filling animation can prevent the target element from ever being styled normally.

> [!NOTE]
> You might also avoid having to explicitly save the final state by setting them as the element initial styles and animating to the final styles.

### commitStyles() without setting fill mode

In newer browsers you do not need to set the [`fill` mode](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) (see the [browser compatibility table](#browser_compatibility) for specific versions).

> [!NOTE]
> There is no way to feature check for this new behaviour.
> For now most code should continue to set `fill` as shown in the previous section.

The code below shows how you can animate an element named `animatedElement`, wait on the animation to complete using the {{domxref("Animation.finished","finished")}} property, and then commit the styles to the element with `commitStyles()`.
Because we're not setting `fill` we don't have to cancel the animation afterwards.

```js
// Start the animation
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500 },
);

// Wait for the animation to finish
await animation.finished;

// Commit animation state to the animatedElement style attribute
animation.commitStyles();
```

`commitStyles()` works even if the animation has been [automatically removed](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).
After the element's styles have been committed they can be modified and replaced as normal.

## Examples

### Animation with and without using fill

This example demonstrates how you can use `commitStyles()` to save the computed styles at the end of the animation, both with and without using `fill`.

It displays two buttons, labelled "Commit styles only" and "Commit styles with fill".
Both buttons animate when you click them, and both buttons call `commitStyles()` to persist the final state of the animation.

The difference is that "Commit styles only" does not specify `fill: "forwards"` to persist the animation's final state.
On browsers that don't match the current specification the final state may not be captured.

#### HTML

```html
<button class="commit-styles">Commit styles only</button>
<br />
<button class="commit-with-fill">Commit styles with fill</button>
```

```css hidden
button {
  margin: 0.5rem;
}
```

#### JavaScript

This code defines a click handler for the "Commit styles only" button.
This animates the button to move right or left when it is clicked.
Note that `commitStyles()` is called immediately after the animation is finished.

```js
let offset1 = 0;

const commitStyles = document.querySelector(".commit-styles");

commitStyles.addEventListener("click", async (event) => {
  // Start the animation
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500 },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
});
```

This code defines a click handler for the "Commit styles with fill" button.
This also animates the button to move right or left when it is clicked.
As it defines a `fill` it needs to cancel the animation afterwards.

Note that `commitStyles()` is called immediately after the animation is finished.

```js
const commitStylesWithFill = document.querySelector(".commit-with-fill");
let offset2 = 0;

commitStylesWithFill.addEventListener("click", async (event) => {
  // Start the animation
  offset2 = 100 - offset2;
  const animation = commitStylesWithFill.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});
```

#### Result

Click the buttons to animate them.
Note that the first button will "jump" at the end of the animation if the current browser still requires `fill` for styles to be committed after the end of the animation.

{{EmbedLiveSample("Animation with and without using fill")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
