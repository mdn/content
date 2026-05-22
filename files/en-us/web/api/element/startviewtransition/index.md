---
title: "Element: startViewTransition() method"
short-title: startViewTransition()
slug: Web/API/Element/startViewTransition
page-type: web-api-instance-method
browser-compat: api.Element.startViewTransition
---

{{APIRef("View Transition API")}}

The **`startViewTransition()`** method of the {{domxref("Element")}} interface starts a new same-document (SPA) [element-scoped](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) [view transition](/en-US/docs/Web/API/View_Transition_API) and returns a {{domxref("ViewTransition")}} object to represent it.

When `startViewTransition()` is invoked, a sequence of steps is followed as explained in [The view transition process](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_process).

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameters

- `updateCallback` {{optional_inline}}
  - : A callback function, invoked to update the element's DOM tree during the SPA view transition process, which returns a {{jsxref("Promise")}}. The callback is invoked once the API has taken a snapshot of the current page. When the promise returned by the callback fulfills, the view transition begins in the next frame. If the promise returned by the callback rejects, the transition is abandoned.
- `options` {{optional_inline}}
  - : An object containing options to configure the view transition. It can include the following properties:
    - `update` {{optional_inline}}
      - : The same `updateCallback` function described above. Defaults to `null`.
    - `types` {{optional_inline}}
      - : An array of strings representing the types applied to the view transition. [View transition types](/en-US/docs/Web/API/View_Transition_API/Using_types) enable selective application of CSS styles or JavaScript logic based on the type of transition occurring. Defaults to an empty array.

### Return value

A {{domxref("ViewTransition")}} object instance.

## Examples

See [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) for other examples.

### Basic usage

This example demonstrates using an element-scoped view transition to smoothly animate the DOM changes to a slideshow contained within a page when a button is pressed.

#### HTML

We include a {{htmlelement("section")}} element to represent our slideshow, a {{htmlelement("button")}} to press to change the slide content, and some surrounding {{htmlelement("p")}} content.

```html live-sample___basic_usage
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>
<section>Slide 1</section>
<button>Update slide</button>
<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

#### CSS

In our CSS, we use [flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) to center the slide's content, and set the {{cssxref("animation-duration")}} of the view transition to `1s` via the {{CSSXRef("::view-transition-group")}} pseudo-element.

```css hidden live-sample___basic_usage
html {
  font-family: sans-serif;
}
section {
  height: 200px;
  font-size: 2rem;
  background-color: green;
}
button {
  position: absolute;
  top: 5px;
  right: 5px;
}
```

```css live-sample___basic_usage
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 1s;
}
```

#### JavaScript

In our script, we start by grabbing references to our `<section>` and `<button>` elements, and adding an event listener to the button.

```js live-sample___basic_usage
const slide = document.querySelector("section");
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
```

Next, we define a function called `updateSlide()`, which toggles the content and background color of the slide between two sets of values.

```js live-sample___basic_usage
function updateSlide() {
  if (slide.textContent === "Slide 1") {
    slide.textContent = "Slide 2";
    slide.style.backgroundColor = "orange";
  } else {
    slide.textContent = "Slide 1";
    slide.style.backgroundColor = "green";
  }
}
```

Finally, we define the event handler function, `handleClick()`. When the button is clicked, we first check whether `Element.startViewTransition()` exists, and if not, just run the `updateSlide()` button and `return`. This ensures that the update will still work in non-supporting browsers, albeit without the animation. If `Element.startViewTransition()` is supported, we call it on the `<section>` element, and call `updateSlide()` inside its callback.

```js live-sample___basic_usage
function handleClick() {
  if (!slide.startViewTransition) {
    updateSlide();
    return;
  }

  const transition = slide.startViewTransition(() => {
    updateSlide();
  });
}
```

#### Result

{{EmbedLiveSample("basic_usage", "100%", "300")}}

Click the button to update the slide element DOM and see the view transition.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.activeViewTransition")}}
- {{CSSXRef(":active-view-transition")}} pseudo-class
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} pseudo-class
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
