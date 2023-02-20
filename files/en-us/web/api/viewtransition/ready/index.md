---
title: ViewTransition.ready
slug: Web/API/ViewTransition/ready
page-type: web-api-instance-property
status: experimental
browser-compat: api.ViewTransition.ready
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

The **`ready`** read-only property of the
{{domxref("ViewTransition")}} interface returns a {{jsxref("Promise")}} that fulfills once the pseudo-element tree is created and the transition animation is about to start.

`ready` will reject if the transition cannot begin. This can be due to misconfiguration, for example duplicate {{cssxref("view-transition-name")}}s, or if {{domxref("Document.startViewTransition()")}}'s callback returns a rejected promise.

## Value

A promise.

## Examples

In the following example, `ready` is used to trigger a custom circular reveal view transition eminating from the position of the user's cursor on click, with animation provided by the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}}.

```js
// Store the last click event
let lastClick;
addEventListener('click', event => (lastClick = event));

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
        easing: 'ease-in',
        // Specify which pseudo-element to animate
        pseudoElement: '::view-transition-new(root)',
      }
    );
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
