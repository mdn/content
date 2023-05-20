---
title: ViewTransition
slug: Web/API/ViewTransition
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ViewTransition
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`ViewTransition`** interface of the {{domxref("View Transitions API", "View Transitions API", "", "nocode")}} represents a view transition, and provides functionality to react to the transition reaching different states (e.g. ready to run the animation, or animation finished) or skip the transition altogether.

This object type is returned by the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} method. When `startViewTransition()` is invoked, a sequence of steps is followed as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process). This also explains when the different promises fulfill.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("ViewTransition.finished")}} {{Experimental_Inline}}
  - : A {{jsxref("Promise")}} that fulfills once the transition animation is finished, and the new page view is visible and interactive to the user.
- {{domxref("ViewTransition.ready")}} {{Experimental_Inline}}
  - : A {{jsxref("Promise")}} that fulfills once the pseudo-element tree is created and the transition animation is about to start.
- {{domxref("ViewTransition.updateCallbackDone")}} {{Experimental_Inline}}
  - : A {{jsxref("Promise")}} that fulfills when the promise returned by the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}}'s callback fulfills.

## Instance methods

- {{domxref("ViewTransition.skipTransition", "skipTransition()")}} {{Experimental_Inline}}
  - : Skips the animation part of the view transition, but doesn't skip running the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} callback that updates the DOM.

## Examples

In the following example, the {{domxref("ViewTransition.ready")}} promise is used to trigger a custom circular reveal view transition emanating from the position of the user's cursor on click, with animation provided by the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}}.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don’t support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root’s new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
}
```

This animation also requires the following CSS, to turn off the default CSS animation and stop the old and new view states from blending in any way (the new state "wipes" right over the top of the old state, rather than transitioning in):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
