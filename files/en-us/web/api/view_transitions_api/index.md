---
title: View Transitions API
slug: Web/API/View_Transitions_API
page-type: web-api-overview
status: experimental
browser-compat:
  - api.Document.startViewTransition
---

{{SeeCompatTable}}{{DefaultAPISidebar("View Transitions API")}}

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states, while also updating the DOM contents in a single step.

## Concepts and usage

View transitions are a popular design choice for reducing users' cognitive load, helping them stay in context, and reducing perceived loading latency as they move between states or views of an application.

However, creating view transitions on the web has historically been difficult. Transitions between states in single-page apps (SPAs) tends to involve writing significant CSS and JavaScript to:

- Handle the loading and positioning of the old and new content.
- Animate the old and new states to create the transition.
- Stop accidental user interactions with the old content from causing problems.
- Remove the old content once the transition is complete.

There is also the major issue of accessibility issues caused by having the new and old content both present in the DOM at once, such as loss of reading position, focus confusion, and strange live region announcement behavior. And cross-document view transitions (i.e. across different pages in regular web sites) are impossible.

The View Transitions API provides a much easier way of handling the required DOM changes and transition animations.

> **Note:** The View Transitions API doesn't currently enable cross-document view transitions, but this is planned for a future level of the spec and is actively being worked on.

### Creating a basic view transition

An SPA will include functionality to fetch new content and update the DOM in response to an event of some kind, such as a navigation link being clicked or an update being pushed from the server. In our [Basic View Transitions demo](https://mdn.github.io/dom-examples/view-transitions/) we've simplified this to a `displayNewImage()` function that shows a new full-size image based on the thumbnail that was clicked. We've encapsulated this inside an `updateView()` function that handles both browsers that do and don't support the View Transitions API:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

And that's it. This code is enough to handle the transition between displayed images. Supporting browsers will show the change from old to new images and captions as a smooth cross-fade (the default view transition), and it will still work in non-supporting browsers but without the nice animation.

It is also worth mentioning that `startViewTransition()` returns a {{domxref("ViewTransition")}} instance, which includes several promises, allowing you to run code in response to different parts of the view transition process being reached.

### The view transition process

Let's walk through how this works:

1. When {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} is called, the API takes a screenshot of the current page.
2. Next, the callback passed to `startViewTransition()` is invoked, in this case `displayNewImage`, which causes the DOM to change.

   When the callback has run successfully, the {{domxref("ViewTransition.updateCallbackDone")}} promise fulfills, allowing you to respond to the DOM updating.

3. The API captures the new state of the page as a live representation.
4. The API constructs a pseudo-element tree with the following structure:

   ```
   ::view-transition
   └─ ::view-transition-group(root)
      └─ ::view-transition-image-pair(root)
         ├─ ::view-transition-old(root)
         └─ ::view-transition-new(root)
   ```

   - {{cssxref("::view-transition")}} is the root of view transitions overlay, which contains all view transitions and sits over the top of all other page content.
   - {{cssxref("::view-transition-old")}} is the screenshot of the old page view, and {{cssxref("::view-transition-new")}} is the live representation of the new page view. Both of these render as replaced content, in the same manner as an {{htmlelement("img")}} or {{htmlelement("video")}}, meaning that they can be styled with handy properties like {{cssxref("object-fit")}} and {{cssxref("object-position")}}.

   When the transition animation is about to run, the {{domxref("ViewTransition.ready")}} promise fulfills, allowing you to respond by running a custom JavaScript animation instead of the default, for example.

5. The old page view animates from {{cssxref("opacity")}} 1 to 0, while the new view animates from `opacity` 0 to 1, which is what creates the default cross-fade.
6. When the transition animation has reached its end state, the {{domxref("ViewTransition.finished")}} promise fulfills, allowing you to respond.

### Different transitions for different elements

At the moment, all of the different elements that change when then DOM updates are transitioned using the same animation. If you want different elements to animate differently from the default "root" animation, you can separate them out using the {{cssxref("view-transition-name")}} property. For example:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

We've given the {{htmlelement("figcaption")}} element a `view-transition-name` of `figure-caption` to separate it from the rest of the page in terms of view transitions.

With this CSS applied, the pseudo-element tree will now look like this:

```
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

The existence of the second set of pseudo-elements allows separate view transition styling to be applied just to the `<figcaption>`. The different old and new page view captures are handled completely separate from one another.

The value of `view-transition-name` can be anything you want except for `none` — the `none` value specifically means that the element will not participate in a view transition.

> **Note:** `view-transition-name` must be unique. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped.

### Customizing your animations

The View Transitions pseudo-elements have default [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) applied (which are detailed in their [reference pages](#css_additions)). You can modify the default cross-fade in any way you want using regular CSS.

For example, to change the speed of it:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Let's look at something more interesting — a custom animation for the `<figcaption>`:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Here we've created a custom CSS animation and applied it to the `::view-transition-old(figure-caption)` and `::view-transition-new(figure-caption)` pseudo-elements, plus we've also added a number of other styles to both to keep them in the same place and stop the default styling from interfering with our custom animations.

Note that we also discovered another transition option that is simpler and produced a nicer result than the above. Our final `<figcaption>` view transition ended up looking like this:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: 100%;
}
```

This works because by default, `::view-transition-group` transitions width and height between the old and new views. We just needed to set a fixed `height` on both states to make it work.

> **Note:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) contains several other customization examples.

### Controlling animations with JavaScript

The {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} method returns a {{domxref("ViewTransition")}} object instance, which contains several promise members allowing you to run JavaScript in response to different states of the transition being reached. For example, {{domxref("ViewTransition.ready")}} fulfills once the pseudo-element tree is created and the animation is about to start, whereas {{domxref("ViewTransition.finished")}} fulfills once the the animation is finished, and the new page view is visible and interactive to the user.

For example, the following JavaScript could be used to create a circular reveal view transition emanating from the position of the user's cursor on click, with animation provided by the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}}.

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

## Interfaces

- {{domxref("ViewTransition")}}
  - : Represents a view transition, and provides functionality to react to the transition reaching different states (e.g. ready to run the animation, or animation finished) or skip the transition altogether.

## Extensions to other interfaces

- {{domxref("Document.startViewTransition()")}}
  - : Starts a new view transition and returns a {{domxref("ViewTransition")}} object to represent it.

## CSS additions

### Properties

- {{cssxref("view-transition-name")}}
  - : Provides the selected element with a separate identifying name and causes it to participate in a separate view transition from the root view transition — or no view transition if the `none` value is specified.

### Pseudo-elements

- {{cssxref("::view-transition")}}
  - : The root of the view transitions overlay, which contains all view transitions and sits over the top of all other page content.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : The root of a single view transition.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : The container for a view transition's old and new views — before and after the transition.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : A static screenshot of the old view, before the transition.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : A live representation of the new view, after the transition.

## Examples

- [Basic View Transitions demo](https://mdn.github.io/dom-examples/view-transitions/): A basic image gallery demo with separate transitions between old and new images, and old and new captions.
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): A more sophisticated video player demo app that features a number of different view transitions, many of which are explained in [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
