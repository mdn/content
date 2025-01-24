---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-scroll-snap/
  - https://drafts.csswg.org/css-scroll-snap-2/
---

{{CSSRef}}

The **CSS scroll snap** module provides properties that let you control the panning and scrolling behavior by defining snap positions. Content can be snapped into position as the user scrolls overflowing content within a {{Glossary("scroll container")}}, providing paging and scroll positioning.

This module includes the scroll container scroll-padding properties to adjust the optimal viewing region of paging during scroll-into-view operations. It also includes scroll-margin and scroll-alignment, set on the scroll container's children, to adjust the children's visual area when that child is scrolled into view, as well as a property to force scrolling to stop on individual children.

## Scroll snap in action

To view scroll snapping in the box below, scroll up-and-down and left-and-right through the grid of 45 numbered boxes in the scrollable viewport.
Click "Play" in the example below to view the or edit the source in the MDN Playground:

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.styleSheets[0].cssRules;

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
window.addEventListener("load", () => {
  setSST();
  setSSA();
});
snap.addEventListener("change", () => {
  all.classList.toggle("snapDisabled");
});

function setSSA() {
  rules[0].style.scrollSnapAlign = `${positions[blockDirection.value]} ${
    positions[inlineDirection.value]
  }`;
}

function setSST() {
  if (stop.checked) {
    rules[0].style.scrollSnapStop = "always";
  } else {
    rules[0].style.scrollSnapStop = "normal";
  }
}
```

```html hidden live-sample___scroll_snap
<article>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div>
    <fieldset>
      <legend>Change the options</legend>
      <p>
        <label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="block" />
          block position</label
        >
      </p>
      <p>
        <label>
          <input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="inline" />
          inline position
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" id="stop" />
          Prevent scrolling past boxes
        </label>
      </p>
    </fieldset>

    <p>
      <label><input type="checkbox" id="snap" /> disable snapping</label>
    </p>

    <datalist id="places">
      <option value="0">start</option>
      <option value="1">center</option>
      <option value="2">end</option>
    </datalist>
  </div>
</article>
```

```css hidden live-sample___scroll_snap
li {
  /*
  starts with:
      scroll-snap-align: center center;
      scroll-snap-stop: normal (defaults);

  CSS gets changed with JavaScript when you change the controls.
  the following can be set:
      scroll-snap-stop: always | normal;
      scroll-snap-align: start | center | end {2}
        */
}
ul {
  overflow: auto;
  scroll-snap-type: both mandatory;
  overscroll-behavior-x: contain;
}
article.snapDisabled fieldset {
  opacity: 20%;
  pointer-events: none;
}
article.snapDisabled ul {
  scroll-snap-type: initial;
  overscroll-behavior-x: initial;
}

@layer pageSetup {
  article {
    display: flex;
    gap: 2vw;
  }
  div {
    flex: 1;
  }
  ul {
    display: grid;
    gap: 6.25vw;
    padding: 12.5vw;
    box-sizing: border-box;
    border: 1px solid;
    grid-template-columns: repeat(5, 1fr);
    background: conic-gradient(
      at bottom left,
      red 0deg,
      yellow 15deg,
      green 30deg,
      blue 45deg,
      purple 60deg,
      magenta 75deg
    );
    background-attachment: local;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }
  li {
    scroll-snap-align: center;
    height: 12.5vw;
    width: 12.5vw;
    outline: 3px inset;
    list-style-type: none;
    background: white;
    font-family: monospace;
    font-size: 3rem;
    line-height: 12vw;
    text-align: center;
    counter-increment: items 1;
  }
  li::after {
    content: counter(items);
  }
  input {
    vertical-align: bottom;
  }
  p {
    font-family: monospace;
  }
}
```

{{EmbedLiveSample("scroll_snap", "", "250px")}}

With scroll snap, one of the numbered boxes that you scroll to will snap into place. The initial CSS makes the numbered box snap into the center of the viewport. Use the sliders to change the block and inline snap positions.

Using snap properties, you can allow or block the scrolling past an element, a numbered box in this case. Select the "Prevent scrolling past boxes" checkbox to force all scrolling actions to be limited to scrolling to an adjacent box.

To compare scroll snapping to regular scrolling, check the "disable snapping" checkbox and try scrolling again.

## Reference

### Properties on containers

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### Properties on children

- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-stop")}}

### Events

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}

### Interfaces

- {{domxref("SnapEvent")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetBlock")}} {{experimental_inline}}
  - {{domxref("SnapEvent.snapTargetInline")}} {{experimental_inline}}

## Guides

- [Basic concepts of CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : An overview and examples of CSS scroll snap features.
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
  - : A guide to using the {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} and {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} scroll snap events that are fired when the browser determines a new snap target is pending or selected.

## Related concepts

- {{cssxref(":target")}} pseudo-class
- {{cssxref("overflow")}} CSS property
- Element {{domxref("Element.scroll", "scroll()")}} method
- Element {{domxref("Element.scrollBy", "scrollBy()")}} method
- Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}} method
- Element {{domxref("Element.scrollTo", "scrollTo()")}} method
- Element {{domxref("Element.scroll_event", "scroll")}} event
- Element {{domxref("Element.scrollend_event", "scrollend")}} event
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA role
- {{Glossary("Scroll container")}} glossary term

## Specifications

{{Specifications}}

## See also

- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS scrollbars styling](/en-US/docs/Web/CSS/CSS_scrollbars_styling) module
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (2022)
- [Scroll snap examples](https://codepen.io/collection/KpqBGW) on CodePen (2022)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) on web.dev (2021)
- [Practical CSS scroll snapping/](https://css-tricks.com/practical-css-scroll-snapping/) on CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) on 12 Days of Web (2019)
