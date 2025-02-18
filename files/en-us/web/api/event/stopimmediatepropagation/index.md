---
title: "Event: stopImmediatePropagation() method"
short-title: stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
page-type: web-api-instance-method
browser-compat: api.Event.stopImmediatePropagation
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`stopImmediatePropagation()`** method of the
{{domxref("Event")}} interface prevents other listeners of the same event from being called.

If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. If `stopImmediatePropagation()` is invoked during one such call, no remaining listeners will be called, either on that element or any other element.

## Syntax

```js-nolint
stopImmediatePropagation()
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
      <button>allow propagation</button><br />
      <button id="stopPropagation">stop propagation</button><br />
      <button id="stopImmediatePropagation">immediate stop propagation</button>
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
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  margin: 5px;
}
```

#### JavaScript

```js
const outElem = document.querySelector("pre");

/* Clear the output */
document.addEventListener(
  "click",
  () => {
    outElem.textContent = "";
  },
  true,
);

/* Set event listeners for the buttons */
document.querySelectorAll("button").forEach((elem) => {
  for (let i = 1; i <= 3; i++) {
    elem.addEventListener("click", (evt) => {
      /* Do any propagation stopping in first event handler */
      if (i === 1 && elem.id) {
        evt[elem.id]();
        outElem.textContent += `Event handler for event 1 calling ${elem.id}()\n`;
      }

      outElem.textContent += `Click event ${i} processed on "${elem.textContent}" button\n`;
    });
  }
});

/* Set event listeners for the divs */
document
  .querySelectorAll("div")
  .forEach((elem) =>
    elem.addEventListener(
      "click",
      (evt) =>
        (outElem.textContent += `Click event processed on "${elem.firstChild.data.trim()}"\n`),
    ),
  );
```

#### Result

Each click-event handler displays a status message when it is called. If you press the middle button, you will see that `stopPropagation()` allows all of the event handlers registered for clicks on that button to execute but prevents execution of the click-event handlers for the divs, which would normally follow. However, if you press the bottom button, `stopImmediatePropagation()` stops all propagation after the event that called it.

{{ EmbedLiveSample("Comparing event-stopping functions", 500, 550) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
