---
title: "Element: getAnimations() method"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
page-type: web-api-instance-method
browser-compat: api.Element.getAnimations
---

{{APIRef("Web Animations")}}

The `getAnimations()` method of the {{domxref("Element")}} interface returns an array of all {{domxref("Animation")}} objects affecting this element or which are scheduled to do so in future.
It can optionally return {{domxref("Animation")}} objects for descendant elements and their [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements), or just for a specified pseudo-element.

> [!NOTE]
> This array includes [CSS Animations](/en-US/docs/Web/CSS/Guides/Animations), [CSS Transitions](/en-US/docs/Web/CSS/Guides/Transitions), and [Web Animations](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following property:
    - `subtree`
      - : A boolean value which, if `true`, causes animations that target descendants of _Element_ to be returned as well.
        This includes animations that target any CSS [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) attached to _Element_ or one of its descendants.
        Defaults to `false`.
    - `pseudoElement`
      - : A string specifying a pseudo selector, such as [`::after`](/en-US/docs/Web/CSS/Reference/Selectors/::after).
        If set, this indicates that the target of the operation is the [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) identified by this pseudo selector.

    Note that specifying both `pseudoElement` and `subtree` is equivalent to specifying just `pseudoElement`.

### Return value

An {{jsxref("Array")}} of {{domxref("Animation")}} objects, each representing an animation currently targeting the {{domxref("Element")}} on which this method is called, or one of its descendant elements if `{ subtree: true }` is specified.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : An invalid pseudo element was passed in the [`options.pseudoElement`](#pseudoelement) parameter.

## Examples

### Wait for all animations on an element and its descendants

The following code snippet will wait for all animations on `elem` and its descendants to finish before removing the element from the document.

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

### Get animations for a pseudo-element target

This example displays a progress bar using a pseudo-elements.
It uses `getAnimations()` to return the animations for the pseudo element, and uses these to start the animation, and to remove the bar once the animation is complete.

Note that the code uses a fallback approach to get the animations, in case the `pseudoElement` option is not supported.
There is also hidden code to display a "Restart" button.

#### HTML

```html
<div class="progress-bar" id="bar"></div>
```

#### CSS

The CSS draws and animates a progress bar element that progresses across the width of its container in three seconds.
The animation is initially paused, so that we can start it in JavaScript.

```css
.progress-bar {
  width: 100%;
  height: 20px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar::after {
  content: "";
  display: block;
  height: 100%;
  width: 0%;
  background: #4f46e5;
  border-radius: 4px;
  animation: fill-progress 3s ease-in-out forwards paused;
}

@keyframes fill-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

#### JavaScript

First we define a function to get the animations associated with a specified element and pseudo element.
This first calls `getAnimations()` with the [`pseudoElement`](#pseudoelement) option, and then, if the first method doesn't return any animations, falls back to filtering the animations returned by passing [`subtree`](#subtree).
This approach is needed because `pseudoElement` is not yet widely supported, and there is no simpler way to feature test.

```js
function getAnimationsForPseudo(element, pseudo) {
  // Try the spec-compliant way first (Firefox)
  try {
    const anims = element.getAnimations({ pseudoElement: pseudo });
    // If it returned something, the option is supported, so return the result
    if (anims.length > 0) return anims;
  } catch (e) {
    // invalid selector etc
    return [];
  }

  // Fallback for browsers that only support subtree
  return element
    .getAnimations({ subtree: true })
    .filter((anim) => anim.effect?.pseudoElement === pseudo);
}
```

We use this function to get all the animations associated with the progress bar pseudo element.
The code iterates through the animations to start them, and then removes the bar when all bar has finished animating.
Note that we run the code in `requestAnimationFrame()` to ensure that the animation is ready to run before our JavaScript is executed.

```js
const bar = document.getElementById("bar");

requestAnimationFrame(() => {
  const anims = getAnimationsForPseudo(bar, "::after");
  anims.forEach((a) => a.play());
  Promise.all(anims.map((a) => a.finished)).then(() => bar.remove());
});
```

```html hidden
<button id="reset" type="button">Restart</button>
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Results

The bar should progress across the width of the page, and then disappear.
It can be restarted by pressing the "Restart" button.

{{EmbedLiveSample("Get animations for a pseudo-element target", "100%", "50px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animations](/en-US/docs/Web/CSS/Guides/Animations)
- [CSS Transitions](/en-US/docs/Web/CSS/Guides/Transitions)
- {{domxref("Document.getAnimations()")}} - Fetch all animations in the document
- {{domxref("Animation")}}
