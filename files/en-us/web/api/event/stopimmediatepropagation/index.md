---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
page-type: web-api-instance-method
browser-compat: api.Event.stopImmediatePropagation
---

{{APIRef("DOM")}}

The **`stopImmediatePropagation()`** method of the
{{domxref("Event")}} interface prevents other listeners of the same event from being called.

If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. If `stopImmediatePropagation()` is invoked during one such call, no remaining listeners will be called, either on that element or any other element.

## Syntax

```js-nolint
event.stopImmediatePropagation()
```

## Examples

### Comparing event-stopping functions

The example below has three buttons inside of three nested divs. Each button has three event listeners registered for click events, and each div has an event listener, also registered for click events.

- The top button allows normal event propagation.
- The middle button calls `stopPropagation()` in its first event handler.
- The bottom button calls `stopImmediatePropagation()` in its first event handler.

#### HTML

```html
<h2>Click on the buttons</h2>
<div>
  outer div<br />
  <div>
    middle div<br />
    <div>
      inner div<br />
      <button id="allow">allow propagation</button><br />
      <button id="stop">stop propagation</button><br />
      <button id="immediate-stop">immediate stop propagation</button>
    </div>
  </div>
</div>
<pre></pre>
```

#### CSS

```css
div {
  display: inline-block;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  margin: 10px;
}

button {
  width: 100px;
  color: #008;
  padding: 5px;
  margin: 5px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
}

@keyframes flash {
  50% {
    background-color: #0b1;
  }
}
```

#### JavaScript

```js
function addButtonActions(id, isImmediateStop) {
  function addButtonElementAction(elem, indexAction, isImmediateStop) {
    /* 2023-03-22: This value determines the time in ms for the animation
     * to be reset before it is applied again. For small values, reapplying
     * the animation sometimes fails. 12 ms empirically has been found to
     * be a value that is large enough for animation to be reliable in
     * FF and Chrome */
    const resetOffset = 25;

    elem.addEventListener("click", (evt) => {
      /* Special processing for any propagation stopping */
      if (isImmediateStop !== null) {
        if (isImmediateStop) {
          evt.stopImmediatePropagation();
          outElem.textContent += `Event handler for event ${indexAction} calling stopImmediatePropagation()\n`;
        } else {
          evt.stopPropagation();
          outElem.textContent += `Event handler for event ${indexAction} calling stopPropagation()\n`;
        }
      }

      setTimeout(() => {
        elem.style.animation = `flash ${animationTime}ms 2 alternate ease-in`;
        outElem.textContent += `Click event ${indexAction} processed on "${elem.textContent}" button\n`;
      }, delayTotal);
      delayTotal += animationTime;
      setTimeout(() => {
        elem.style.animation = "";
      }, delayTotal - resetOffset);
    });
  } // end of function addButtonElementAction

  const elem = document.getElementById(id);
  addButtonElementAction(elem, 1, isImmediateStop);
  addButtonElementAction(elem, 2, null);
  addButtonElementAction(elem, 3, null);
} // end of function addButtonActions

const animationTime = 500; // animation duration in ms
let delayTotal;
const outElem = document.querySelector("pre");

/* Clear the output */
document.addEventListener(
  "click",
  () => {
    outElem.textContent = "";
    delayTotal = animationTime;
  },
  true
);

/* Set event listeners for the divs */
document.querySelectorAll("div").forEach((elem) => {
  elem.addEventListener("click", () => {
    setTimeout(() => {
      elem.style.animation = `flash ${animationTime}ms 2 alternate ease-out`;
      outElem.textContent += `Click event processed on ${elem.firstChild.data.trim()}\n`;
    }, delayTotal);
    delayTotal += animationTime;
    setTimeout(
      () => (elem.style.animation = ""), // allow next animation
      delayTotal
    );
  });
});

/* Set event listeners for the buttons */
addButtonActions("allow", null);
addButtonActions("stop", false);
addButtonActions("immediate-stop", true);
```

#### Result

Each click event handler displays a message when it is called. It also causes the background of its owning element to briefly flash green. You will see that calling `stopPropagation()` allows the other event handlers registered for clicks on the button to execute while calling `stopImmediatePropagation()` does not.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
