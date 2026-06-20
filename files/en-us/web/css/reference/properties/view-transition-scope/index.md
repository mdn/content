---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
page-type: css-property
status:
  - experimental
browser-compat: css.properties.view-transition-scope
sidebar: cssref
---

{{SeeCompatTable}}

The **`view-transition-scope`** [CSS](/en-US/docs/Web/CSS) property enables the discoverability of elements with {{cssxref("view-transition-name")}} values set on them (and therefore the creation of view transition [snapshots](/en-US/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)) to be isolated to a specific element subtree.

## Syntax

```css
/* Keyword values */
view-transition-scope: none;
view-transition-scope: all;

/* Global values */
view-transition-scope: inherit;
view-transition-scope: initial;
view-transition-scope: revert;
view-transition-scope: revert-layer;
view-transition-scope: unset;
```

### Values

- `none`
  - : The initial value. Discoverability of elements to snapshot during a view transition is not limited to any specific subtree.
- `all`
  - : Limits the discoverability of elements to snapshot during a view transition to the subtree of the element on which this property is set. Only elements with a non-`none` {{cssxref("view-transition-name")}} are considered.

## Description

During [the view transition process](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_process), the browser captures snapshots of elements that have a non-`none` {{cssxref("view-transition-name")}} set on them. These snapshots are then animated via CSS animations.

One issue that can arise during this process is naming collisions between elements involved in a view transition. You can't have the same {{cssxref("view-transition-name")}} set on multiple elements — if you do, the browser throws an `InvalidStateError` when the {{domxref("Element.startViewTransition()")}} method is called to start the transition.

You could solve this problem by setting a `view-transition-name` of [`match-element`](/en-US/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) on the elements to let the browser auto-assign internal unique names. However, this won't work if you are including multiple components from different sources that you don't control. A naming collision might still occur.

The `view-transition-scope` property allows view transitions to be self-contained. When `view-transition-scope: all` is set on an element, it limits the transition scope to that element and its descendants, which can be used to solve the above problem.

Whenever an [element-scoped view transition](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) is triggered, the browser automatically sets `view-transition-scope: all` on the transition root element, ensuring that only elements inside the transition scope are snapshotted and animated.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using `view-transition-scope` to isolate snapshots

This example demonstrates how to use `view-transition-scope` to isolate the scope of document-scoped view transitions, enabling the same `view-transition-name` to be used on multiple elements.

#### HTML

The HTML includes a {{htmlelement("button")}} element to control updating the DOM, plus several components with the class `change-me`, some of which are nested, all wrapped in a {{htmlelement("section")}} element.

```html live-sample___vt-scope
<button>Update DOM</button>
<section>
  <div class="change-me"><span>I can change</span></div>
  <div class="change-me">
    <span>I can change</span>
    <div class="change-me"><span>I can change</span></div>
  </div>
  <div class="change-me"><span>I can change</span></div>
</section>
```

#### CSS

We start by setting the same `view-transition-name` on all components. We then set `view-transition-scope: all` on all of them, to isolate the view transition process for each one. Next, we set a longer {{cssxref("animation-duration")}} on all view transitions with this `view-transition-name` via the {{cssxref("::view-transition-group()")}} pseudo-element.

```css hidden live-sample___vt-scope
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section,
.change-me {
  border: 2px solid #666;
  padding: 10px;
}

section {
  background-color: orange;
}
```

```css live-sample___vt-scope
.change-me {
  background-color: white;
  view-transition-name: para-change;
  view-transition-scope: all;
}

::view-transition-group(para-change) {
  animation-duration: 1s;
}
```

#### JavaScript

The script starts by grabbing references to the button and the `<div>` elements (our components).

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

Next, we define a function called `updateDivs()`, which toggles the text content of each component's nested {{htmlelement("span")}} element between two values, and also toggles the component's foreground and background colors between two values.

```js live-sample___vt-scope
function updateDivs() {
  divs.forEach((div) => {
    if (div.firstElementChild.textContent === "I can change") {
      div.firstElementChild.textContent = "I have changed";
      div.style.color = "white";
      div.style.backgroundColor = "black";
    } else {
      div.firstElementChild.textContent = "I can change";
      div.style.color = "black";
      div.style.backgroundColor = "white";
    }
  });
}
```

Finally, we add a `click` event listener to the `<button>` element. When the button is clicked, we first check whether `startViewTransition()` exists on the `document` object — if it does not, we run `updateDivs()` and then `return` out of the function. This first part allows browsers that don't support view transitions to still update the DOM without error. Next, we run `updateDivs()` inside a `startViewTransition()` callback to trigger the view transition as the DOM updates.

```js live-sample___vt-scope
btn.addEventListener("click", handleClick);

function handleClick(e) {
  if (!document.startViewTransition) {
    updateDivs();
    return;
  }
  document.startViewTransition(() => {
    updateDivs();
  });
}
```

#### Result

{{embedlivesample("vt-scope", "100%", 280)}}

Click the "Update DOM" button to see the view transition. Now try the following:

1. Inspect one of the `<div>` elements.
2. In the Styles panel in your browser's developer tools, uncheck the `view-transition-scope: all;` declaration to unapply it.
3. Now switch to the JavaScript Console.
4. Click the "Update DOM" button again.

You should see that the view transition animation is not applied when the DOM changes, and an `InvalidStateError` is reported in the console.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-name")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using) guide
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
