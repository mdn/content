---
title: "Element: startViewTransition() method"
short-title: startViewTransition()
slug: Web/API/Element/startViewTransition
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Element.startViewTransition
---

{{APIRef("View Transition API")}}{{SeeCompatTable}}

The **`startViewTransition()`** method of the {{domxref("Element")}} interface starts a new same-document ({{glossary("SPA")}}) [element-scoped](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) [view transition](/en-US/docs/Web/API/View_Transition_API) and returns a {{domxref("ViewTransition")}} object to represent it.

The sequence of steps followed when `startViewTransition()` is invoked is explained in [the view transition process](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_process) section.

## Syntax

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### Parameters

- `updateCallback` {{optional_inline}}
  - : A callback function invoked to update the element's DOM tree during the SPA view transition process. It returns a {{jsxref("Promise")}}. The callback is invoked once the API has taken a snapshot of the current page. When the promise returned by the callback fulfills, the view transition begins in the next frame. If the promise returned by the callback rejects, the transition is abandoned.
- `options` {{optional_inline}}
  - : An object containing options to configure the view transition. It can include the following properties:
    - `update` {{optional_inline}}
      - : The same `updateCallback` function described above. Defaults to `null`.
    - `types` {{optional_inline}}
      - : An array of strings representing the types applied to the view transition. [View transition types](/en-US/docs/Web/API/View_Transition_API/Using_types) enable selective application of CSS styles or JavaScript logic based on the type of transition occurring. Defaults to an empty array.

### Return value

A {{domxref("ViewTransition")}} object instance.

## Description

Calling `Element.startViewTransition()` on an element creates a view transition scoped to that element's DOM subtree. Any DOM changes performed inside the `startViewTransition()` callback will transition only if those updates happen inside the calling element's DOM subtree. The element is referred to as the **root** of the view transition, and the DOM subtree is referred to as the **scope** of the view transition.

An element-scoped view transition's [pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) is placed inside the transition root element, as shown in the following example, where a view transition is running on a link:

```plain
<a href="#">
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  |
  |
  "Link text"
</a>
```

Element-scoped view transitions have many advantages over their document-scoped counterparts:

- You can run more than one at a time.
- When running, only the view transition's scope ceases to be interactive until the transition is finished; the rest of the page continues to be interactive. Document-scoped view transitions render the entire page non-interactive until the transition is complete.
- The transition pseudo-element tree sits only over the top of the element scope, not the entire page, meaning that you don't get the same issues associated with stacked elements disappearing underneath the updating part of the page when a document-scoped transition animation starts.
- If the contents of the scope are clipped using {{cssxref("overflow")}}, they will stay clipped while undergoing a view transition. Document-scoped view transitions spill out of clipping containers because their pseudo-element trees are drawn over the top of the entire page.

## Examples

See [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) for more examples.

### Animating a slideshow

This is a basic example of using an element-scoped view transition to smoothly animate the DOM changes to a slideshow when a button is clicked.

#### HTML

The HTML includes a {{htmlelement("section")}} element to represent the slideshow, a {{htmlelement("button")}} to press to change the slide content, and some surrounding {{htmlelement("p")}} content.

```html live-sample___basic_usage
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
</p>
<section>Slide 1</section>
<button>Update slide</button>
<p>
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

#### CSS

The CSS uses [flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) to center the slide's content and sets the {{cssxref("animation-duration")}} of the view transition to `1s` via the {{CSSXRef("::view-transition-group")}} pseudo-element.

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

The script starts by grabbing references to the `<section>` and `<button>` elements and adding a `click` event listener to the button.

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

Finally, we define the event handler function, `handleClick()`. When the button is clicked, we first check whether `Element.startViewTransition()` exists, and if not, just run the `updateSlide()` function and `return`. This ensures that the update will still work in non-supporting browsers, albeit without the animation. If `Element.startViewTransition()` is supported, we call it on the `<section>` element, and call `updateSlide()` inside its callback.

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

{{EmbedLiveSample("basic_usage", "100%", "340")}}

Click the "Update slide" button to update the slide element DOM and see the view transition.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.activeViewTransition")}}
- {{domxref("Document.startViewTransition()")}}
- {{CSSXRef(":active-view-transition")}} pseudo-class
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} pseudo-class
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
