---
title: Using element-scoped view transitions
short-title: Element-scoped view transitions
slug: Web/API/View_Transition_API/Using_element-scoped
page-type: guide
---

{{DefaultAPISidebar("View Transition API")}}

Element-scoped view transitions are scoped to a particular element's DOM subtree. They have many advantages over document-scoped view transitions: you can run transitions on subsections of the document while keeping the rest of it interactive, run multiple transitions simultaneously — including nested transitions — and solve several other issues.

This article covers how element-scoped view transitions work and how to use them.

> [!NOTE]
> "Document-scoped view transitions" refer to same-document view transitions, that is, transitions initiated via the {{domxref("Document.startViewTransition()")}} method.
>
> Element-scoped view transitions are initiated via the same method, called on an individual element (see {{domxref("Element.startViewTransition()")}}). Element-scoped view transitions are not available for cross-document transitions.

## Problems with document-scoped view transitions

Document-scoped view transitions are useful for animating DOM content updates across a whole document. You can apply [different animations to different parts of the page](/en-US/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements), a single transition animation to the whole page, or no animations at all.

You can also use different [view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types) to apply different animations to the same element depending on the circumstance - for example, whether it is the next or previous element in a sequence.

However, document-scoped view transitions have several shortcomings:

- You can't run more than one view transition at a time.
- When a view transition is running, the page ceases to be interactive until the transition is finished.
- The [pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) associated with a document-scoped view transition sits over the top of everything else on the page. If another element is positioned above the updating part of the page when the transition animation starts (for example, using {{cssxref("z-index")}}), the positioned element will disappear underneath the transition for the animation's duration, which is probably not the effect you want.
- Related to the previous issue, if the updating part of the page is clipped by an ancestor wrapper using {{cssxref("overflow")}}, it will spill out of the container when the animation starts.

Element-scoped view transitions can solve these problems. Let's look at some examples to see how.

## Basic element-scoped example

This example features a list of links. When a link is clicked, its content changes, and that change is animated via an element-scoped view transition. The example also contains an element that slightly overlaps the transitioning element; we're using this to show how `z-index` problems can be avoided.

### HTML

The markup includes a {{htmlelement("ul")}} list of links between two {{htmlelement("p")}} elements containing text content.

```html live-sample___basic-element-scoped
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>

<ul>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
</ul>

<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

We start by giving the `<ul>` some background and {{cssxref("border")}} styling. We also give it a {{cssxref("position")}} of `relative`, so we can absolutely position descendants relative to the `<ul>`.

```css hidden live-sample___basic-element-scoped
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px;
  text-align: center;
  background: white;
  margin: 10px;
  outline: none;
}
```

```css live-sample___basic-element-scoped
ul {
  border: 2px solid #999;
  background: #ccc;
  position: relative;
}
```

Next, we give the {{htmlelement("a")}} elements their own `border` styles and apply a {{cssxref("transition")}} so that `border` style updates on state changes are smoothly animated. On {{cssxref(":hover")}} and {{cssxref(":focus")}}, we change the link {{cssxref("border-color")}} to `black`.

```css live-sample___basic-element-scoped
a {
  border: 2px solid #aaa;
  transition: border 0.6s;
}

a:hover,
a:focus {
  border-color: black;
}
```

Most relevant to view transitions, we define custom `animation` settings for the [old](/en-US/docs/Web/CSS/Reference/Selectors/::view-transition-old) and [new](/en-US/docs/Web/CSS/Reference/Selectors/::view-transition-new) transition states, so that it rotates the old DOM state out and rotates the new DOM state back in. Note how we've applied an {{cssxref("animation-delay")}} value to the `rotate-in` animation so that it only starts when the `rotate-out` animation ends.

```css live-sample___basic-element-scoped
::view-transition-old(*) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(*) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}

@keyframes rotate-out {
  from {
    rotate: 0deg x;
  }

  to {
    rotate: 90deg x;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg x;
  }

  to {
    rotate: 0deg x;
  }
}
```

Finally, we create some generated content on the `<ul>` element using the {{cssxref("::before")}} pseudo-element and positioning it over the `<ul>` element. The generated content contains a transparent gradient effect.

```css live-sample___basic-element-scoped
ul::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5px;
  width: 100px;
  background-image: linear-gradient(
    to right,
    rgb(255 255 255),
    rgb(255 255 255) 25%,
    rgb(255 255 255 / 0)
  );
  z-index: 1;
}
```

### JavaScript

In the script, we grab a reference to the `<ul>` element and add a `click` event listener to it. When it is clicked, we check that the event target is an `<a>` element. If it is, we invoke {{domxref("Element.startViewTransition()", "startViewTransition()")}} on the clicked `<a>` element, toggling its content between "Standard" and "Alternative" via the `toggleText()` function.

Note that we've also included feature detection to ensure the code works in browsers that don't support `startViewTransition()`: before running `startViewTransition()`, we check that it exists on the target element. If not, we just run the `toggleText()` function and `return`, so the DOM still updates, but without the transition animation.

```js live-sample___basic-element-scoped
const list = document.querySelector("ul");

list.addEventListener("click", handleClick);

function handleClick(e) {
  function toggleText() {
    if (e.target.textContent === "Standard") {
      e.target.textContent = "Alternative";
    } else {
      e.target.textContent = "Standard";
    }
  }
  if (e.target.tagName === "A") {
    if (!e.target.startViewTransition) {
      toggleText();
      return;
    }
    e.target.startViewTransition(() => {
      toggleText();
    });
  }
}
```

### Result

{{embedlivesample("basic-element-scoped", "100%", "520")}}

Click/activate the links to see the view tranasition on each one.

## Differences between element- and document-scoped transitions

Looking at the above example, you can see how element-scoped view transitions fix some of the issues with their document counterparts. Each `<a>` element has its own view transition, scoped just to that element. The rest of the page stays interactive while a view transition is ongoing, meaning that you can run multiple view transitions at once. In addition, the transitioning elements stay below the overlapping generated content.

The pseudo-element tree created when an element-scoped view transition is ongoing explains a lot of this. Instead of being added just inside the {{cssxref(":root")}} element, it is added inside the root of the element on which `Element.startViewTransition()` was called.

In the previous example, one of the pseudo-element trees would look like this:

```plain
<a href="#">
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  |
  |
  "Alternative"
</a>
```

This means that the transition is scoped to the `<a>` element (referred to as the "transition root" or "scope") and its DOM content, so it doesn't interfere with other elements or ongoing view transitions. When the view transition starts, the browser looks for elements to snapshot only inside that scope. During the snapshotting process — up until the {{domxref("ViewTransition.updateCallbackDone")}} promise fulfills — rendering is paused only inside the scope.

The `::view-transition` pseudo has the same size and shape as the transition root element, and renders only on top of it, not the rest of the page. Because of this, the layering order of elements outside of the transition root is respected.

## Self-participating scopes and clipping

Another key feature of element-scoped view transitions is that, when the transitioned element is clipped by its container (via `overflow: scroll`, for example), the element remains clipped during the transition animation.

This is because the following are automatically set on the scope root element:

- A {{cssxref("view-transition-name")}} value of `root`, which ensures that the root element participates in its own transition (it is self-participating).
- A `view-transition-group` value of `contain`, which enables [nested view transition groups](https://developer.chrome.com/docs/css-ui/view-transitions/nested-view-transition-groups) for the scope. An {{cssxref("overflow")}} value of `clip` is then set on the resulting {{cssxref("::view-transition-group()")}} pseudo-element, which causes the pseudo-element tree's contents to be clipped to the scope as well.
- A {{cssxref("view-transition-scope")}} value of `all`. This ensures that {{cssxref("view-transition-name")}} values scope to the element's subtree (see [Nested element-scoped view transitions](#nested_element-scoped_view_transitions) for more details).

> [!NOTE]
> You can opt a view transition scope out of this self-participating behavior by setting `view-transition-name: none` on your transition root element. However, this can result in undesirable behavior such as the transition spilling out of the root in clipping cases. If you need to do this, you should test carefully, and make sure your scope does not clip its contents.

Let's look at another example to demonstrate the clipping behavior.

### HTML

Our HTML is similar to the last example, except that our central element is now a {{htmlelement("section")}} containing a paragraph of text and a {{htmlelement("button")}} that can be pressed to change the paragraph content. We've also included a `.wrapper` {{htmlelement("div")}} to use to create a scrolling container.

```html live-sample___element-scoped-clipping
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>

<section>
  <div class="wrapper">
    <p>
      I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
      narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
      Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
      poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next
      level jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt
      dolor lumber before they sold out dreamcatcher single-origin coffee.
    </p>
  </div>
</section>
<button>Change!</button>

<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

To begin with, we set a fixed `height` on our `.wrapper` `<div>` and set `overflow-y: scroll` on our `<section>` element to cause the `<p>` content to scroll vertically.

```css hidden live-sample___element-scoped-clipping
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section {
  border: 2px solid #999;
  background: #ddd;
  margin: 0 auto;
}

section p {
  margin: 1rem 5rem;
}

@keyframes rotate-out {
  from {
    rotate: 0deg y;
  }

  to {
    rotate: 90deg y;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg y;
  }

  to {
    rotate: 0deg y;
  }
}
```

```css live-sample___element-scoped-clipping
.wrapper {
  height: 150px;
}

section {
  overflow-y: scroll;
}
```

Next, we set a {{cssxref("view-transition-name")}} on our nested `<p>` element, and set the same name inside our custom {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}} transition animation pseudo-elements. This means that only the `<p>` will animate, and not the rest of the transition scope.

```css live-sample___element-scoped-clipping
section p {
  view-transition-name: content;
}

::view-transition-old(content) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(content) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}
```

We have hidden the {{cssxref("@keyframes")}} definition for this example, for brevity. They are nearly identical to the previous example, except that the rotation happens around the `y` axis rather than the `x` axis.

### JavaScript

We start off our script by defining a `content` array containing two different strings to swap our `<p>` content between. We then grab references to our `<section>`, `<p>`, and `<button>` elements.

```js hidden live-sample___element-scoped-clipping
const content = [
  "I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon eanarwhal asymmetrical. Af health goth shaman in slow-carb godard echopark. Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor lumber before they sold out dreamcatcher single-origin coffee.",
  "Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon. Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan. Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four loko adaptogen taiyaki truffaut hexagon neutral milk hotel.",
];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

```js
const content = ["I'm baby xOXO ...", "Kombucha laborum ..."];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

Next, we add an `click` event listener to the `<button>`. Each time the button is clicked, we trigger a view transition; inside the `startViewTransition()` call, we toggle the `<p>` element's `textContent` between the two `content` array elements via the `toggleText()` function. We also include simple feature detection to just run the `toggleText()` function in browsers that don't support `Element.startViewTransition()`.

```js live-sample___element-scoped-clipping
btn.addEventListener("click", handleClick);

function toggleText() {
  if (para.className === "1") {
    para.className = "0";
  } else {
    para.className = "1";
  }
  para.textContent = content[Number(para.className)];
}

function handleClick() {
  if (!section.startViewTransition) {
    toggleText();
    return;
  }
  const vt = section.startViewTransition(() => {
    toggleText();
  });
}
```

### Result

{{embedlivesample("element-scoped-clipping", "100%", "520")}}

Click the button, and note how the transition remains clipped to the transition scope.

## Nested element-scoped view transitions

One more aspect of element-scoped view transitions worth noting is that you can nest view transitions and have them running concurrently without interference. This is enabled because, as mentioned earlier, the browser automatically assigns a {{cssxref("view-transition-scope")}} value of `all` to the scope root elements. This ensures that {{cssxref("view-transition-name")}} values scope to the element's subtree, and prevents elements and their contents from capture by an outer, concurrent view transition. Browsers will ignore elements that have `view-transition-scope: all` set during the snapshotting process.

Let's look at a demonstration of nested element-scoped view transitions.

We won't show the HTML for this example; it is the same as for the [first example](#basic_element-scoped_example), except that this time we have two lists of links inside an extra wrapper element.

```html hidden live-sample___element-scoped-nested
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>
<div class="wrapper">
  <ul class="one">
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
  </ul>

  <ul class="two">
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
  </ul>
</div>
<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

We lay the two lists out side-by-side within the `.wrapper` element using [flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox), give the wrapper a `view-transition-name` of `wrapper`, then give each list a different background color:

```css hidden live-sample___element-scoped-nested
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
  border: 2px solid #999;
  margin: 0 auto;
  position: relative;
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px;
  text-align: center;
  background: white;
  margin: 10px;
  border: 2px solid #aaa;
  transition: border 0.6s;
}

a:hover,
a:focus {
  border-color: black;
  outline: none;
}

@keyframes rotate-out {
  from {
    rotate: 0deg x;
  }

  to {
    rotate: 90deg x;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg x;
  }

  to {
    rotate: 0deg x;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```css live-sample___element-scoped-nested
.wrapper {
  display: flex;
  gap: 20px;
  view-transition-name: wrapper;
}

.one {
  background-color: orange;
}

.two {
  background-color: green;
}
```

We also apply a different animation to the general old and new transition pseudos, and then a different animation to the `wrapper` old and new transition pseudos:

```css live-sample___element-scoped-nested
::view-transition-old(*) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(*) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}

::view-transition-old(wrapper) {
  animation: fade-out 0.3s 1 both linear;
}

::view-transition-new(wrapper) {
  animation: fade-in 0.3s 0.3s 1 both linear;
}
```

We have hidden the rest of the CSS for brevity.

### JavaScript

The JavaScript is similar to the first example, except that this time we run two element-scoped view transitions each time a link is clicked. The first one toggles the text of the link between "Standard" and "Alternative" (via the `toggleText()` function), and the second one swaps the position of the two lists inside the DOM (via the `togglePosition()` function). As before, we include rudimentary feature detection code to enable the functionality in non-supporting browsers.

```js live-sample___element-scoped-nested
const lists = document.querySelectorAll("ul");
const wrapper = document.querySelector(".wrapper");

lists.forEach((list) => {
  list.addEventListener("click", handleClick);
});

function handleClick(e) {
  function toggleText() {
    if (e.target.textContent === "Standard") {
      e.target.textContent = "Alternative";
    } else {
      e.target.textContent = "Standard";
    }
  }
  function togglePosition() {
    if (lists[0].nextElementSibling === lists[1]) {
      wrapper.insertBefore(lists[1], lists[0]);
    } else {
      wrapper.insertBefore(lists[0], lists[1]);
    }
  }
  if (e.target.tagName === "A") {
    if (!e.target.startViewTransition) {
      toggleText();
      togglePosition();
      return;
    }

    e.target.startViewTransition(() => {
      toggleText();
    });
    wrapper.startViewTransition(() => {
      togglePosition();
    });
  }
}
```

### Result

{{embedlivesample("element-scoped-nested", "100%", "520")}}

Click a link, and note how both nested view transitions occur at the same time, without interfering with one another.

## Querying active view transitions

The following properties are available to enable querying active element-scoped view transitions:

- {{domxref("ViewTransition.transitionRoot")}}: Returns a reference to the root element of the view transition's scope.
- {{domxref("Element.activeViewTransition")}}: Returns a reference to an element's active `ViewTransition`, if one exists.

For example, you might want to do some kind of processing on the animations active on an element during a transition:

```js
function processAnimations(transition) {
  let anims = transition.transitionRoot.getAnimations();
  // ...
}

// ...

let transition = el.startViewTransition();
transition.ready.then(() => processAnimations(transition));
```

## See also

- [View transition API](/en-US/docs/Web/API/View_Transition_API)
- [Run concurrent and nested view transitions with element-scoped view transitions](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) on developer.chrome.com
