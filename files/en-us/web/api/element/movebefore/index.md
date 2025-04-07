---
title: "Element: moveBefore() method"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
page-type: web-api-instance-method
browser-compat: api.Element.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("Element")}} interface moves a given {{domxref("Node")}} inside the invoking node as a direct child, before a given reference node.

`moveBefore()` provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactive node {{cssxref(":focus")}} and {{cssxref(":active")}} states.
- Text selection.
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API) and {{htmlelement("dialog")}} elements.

> [!NOTE]
> The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

If the given `Node` has not already been added to the DOM, `moveBefore()` inserts it into the specified position. If the node being moved is a {{domxref("DocumentFragment")}}, the entire contents of the `DocumentFragment` are moved into the child list of the specified parent node.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameters

- `movedNode`
  - : A {{domxref("Node")}} representing the node to be moved.
- `referenceNode`
  - : A {{domxref("Node")}} that `movedNode` will be moved before, or `null`. If the value is `null`, `movedNode` is inserted at the end of the invoking node's child nodes.
    > [!NOTE]
    > The `referenceNode` parameter is mandatory. You must explicitly pass a {{domxref("Node")}} or `null`.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the node you are calling `moveBefore()` on, that is, the node you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Examples

### Basic `moveBefore()` usage

In this demo we illustrate basic usage of `moveBefore()`.

#### HTML

The HTML features an {{htmlelement("article")}} element containing a {{htmlelement("div")}} element and two {{htmlelement("section")}} elements. The `<div>` contains a {{htmlelement("button")}}, which we later use to move it.

```html live-sample___movebefore-basic
<article id="wrapper">
  <div id="mover">
    <button>Move me!</button>
  </div>
  <section id="section1">
    <h2>Section 1</h2>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
  </section>
</article>
```

#### CSS

We provide some rudimentary styling for the look and feel and spacing of the boxes, and use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to center their content.

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  width: 200px;
  height: 80px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#section1,
#section2 {
  background-color: hotpink;
}

#mover {
  background-color: orange;
}
```

#### JavaScript

In our script, we attach a click event listener to the `<button>` via {{domxref("EventTarget.addEventListener", "addEventListener()")}}. When the button is clicked, we check whether the {{domxref("Element.nextElementSibling", "nextElementSibling")}} of our `mover` `<div>` is the first `<section>` element. If so, we invoke `moveBefore()` on the `wrapper` `<article>` and specify to move the `<div>` before the second `<section>`. If not, we use `moveBefore()` to move the `<div>` before the first `<section>`.

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const moveBtn = document.querySelector("button");

moveBtn.addEventListener("click", () => {
  if (mover.nextElementSibling === section1) {
    wrapper.moveBefore(mover, section2);
  } else {
    wrapper.moveBefore(mover, section1);
  }
});
```

#### Result

The rendered example looks like this:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Try clicking the `<button>` a few times and note how it toggles between the two positions.

### Demonstrating state preservation

In this demo we provide multiple mechanisms to move a `<div>` element containing a YouTube embed between two different containers, demonstrating how `moveBefore()` preserves the play state of the embed, but the other mechanisms do not.

#### HTML

The HTML features an {{htmlelement("article")}} element containing two {{htmlelement("section")}} elements. The first `<section>` element contains a {{htmlelement("div")}} element containing the YouTube embed code. We also have a {{htmlelement("div")}} element containing three {{htmlelement("button")}} elements, to which we will add functionality to move the embed `<div>` between sections via JavaScript later on.

```html live-sample___movebefore-state
<article id="wrapper">
  <section id="section1">
    <div id="mover">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/XvoENpR9cCQ?si=o2i6MvxugD-O5yyv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  </section>
  <section id="section2"></section>
</article>
<div id="controls">
  <button id="movebefore">move with <code>moveBefore()</code></button>
  <button id="insertbefore">move with <code>insertBefore()</code></button>
  <button id="prepend">move with <code>prepend()</code></button>
</div>
```

#### CSS

We use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) for the layout to make the two `<section>` elements sit side-by-side, and space the buttons evenly inside the `controls` `<div>`.

```css live-sample___movebefore-state
#wrapper,
#controls {
  width: 100%;
  display: flex;
}

#wrapper {
  margin-bottom: 10px;
}

section {
  flex: 1;
  padding: 10px;
}

#controls {
  display: flex;
  justify-content: space-around;
}

#section1 {
  background-color: hotpink;
}

#section2 {
  background-color: orange;
}

#mover {
  max-width: 100%;
  background-color: black;
}
```

#### JavaScript

In our script, we attach `click` event listeners to each `<button>` via {{domxref("EventTarget.addEventListener", "addEventListener()")}}. When the buttons are clicked, we check which `<section>` element is the {{domxref("Node.parentElement", "parentElement")}} of our embed `<div>`, and then use the relevant function (`moveBefore()`, {{domxref("Node.insertBefore", "insertBefore()")}}, or {{domxref("Element.prepend", "prepend()")}}) to move it inside the _other_ `<section>` element.

```js live-sample___movebefore-state
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const movebeforeBtn = document.getElementById("movebefore");
const insertbeforeBtn = document.getElementById("insertbefore");
const prependBtn = document.getElementById("prepend");

movebeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.moveBefore(mover, null);
  } else {
    section1.moveBefore(mover, null);
  }
});

insertbeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.insertBefore(mover, null);
  } else {
    section1.insertBefore(mover, null);
  }
});

prependBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.prepend(mover);
  } else {
    section1.prepend(mover);
  }
});
```

#### Result

The rendered example looks like this:

{{EmbedLiveSample("movebefore-state", "100%", "260px")}}

Try playing the YouTube embed and then clicking each `<button>` a couple of times to toggle the `<div>` element screen position from left to right. Note how, in the case of `insertBefore()` and `prepend()`, the embed state is reset after each move so it needs to be restarted. However, in the case of `moveBefore()`, the state is preserved after each move.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.moveBefore()")}}
- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
