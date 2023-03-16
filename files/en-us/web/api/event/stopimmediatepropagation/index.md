---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
page-type: web-api-instance-method
browser-compat: api.Event.stopImmediatePropagation
---

{{APIRef("DOM")}}

The **`stopImmediatePropagation()`** method of the
{{domxref("Event")}} interface prevents other listeners of the same event from being
called.

If several listeners are attached to the same element for the same event type, they are
called in the order in which they were added. If `stopImmediatePropagation()`
is invoked during one such call, no remaining listeners will be called, either on that
element or any other element.

## Syntax

```js-nolint
event.stopImmediatePropagation()
```

### Comparing event stopping functions

The example below has three buttons inside of three nested divs. Each button has two
event listeners registered for click events, and each div has an event listener, also
registered for click events. The top button allows normal event propagation while the
middle button calls `stopPropagation()` in its first callback function and the bottom
button calls `stopImmediatePropagation()` in its first callback function.

#### HTML

```html
  <h2>Click on the buttons</h2>
  <div id="div1">div1<br><div id="div2">div2<br><div id="div3">div3<br>
    <button id="allow">allow propagation</button><br>
    <button id="stop">stop propagation</button><br>
    <button id="istop">immediate stop propagation</button>
  </div></div></div>
  <div id="output"></div>
  <script>
    const outElem = document.getElementById("output");

    /* Clear the output */
    document.addEventListener("click", () => outElem.innerHTML = "", true);

    [1, 2, 3].forEach(value => {
      const id = "div" + value;
      document.getElementById(id).addEventListener("click", () =>
          outElem.innerHTML += "click event processed on " + id + "<br>"
          );
    });

    const allowElem = document.getElementById("allow");
    allowElem.addEventListener("click", () =>
        outElem.innerHTML += "click event 1 processed on " +
            "\"allow propagation\" button <br>"
        );
    allowElem.addEventListener("click", () =>
        outElem.innerHTML += "click event 2 processed on " +
            "\"allow propagation\" button <br>"
        );

    const stopElem = document.getElementById("stop");
    stopElem.addEventListener("click",
        evt => {
          outElem.innerHTML += "click event 1 processed on " +
              "\"stop propagation\" button<br>" +
              "&nbsp;&nbsp;calling stopPropagation()<br>";
          evt.stopPropagation();
        });
    stopElem.addEventListener("click", () =>
        outElem.innerHTML += "click event 2 processed on " +
            "\"stop propagation\" button <br>"
        );

    const istopElem = document.getElementById("istop");
    istopElem.addEventListener("click",
        evt => {
          outElem.innerHTML += "click event 1 processed on " +
              "\"immediate stop propagation\" button<br>" +
              "&nbsp;&nbsp;calling stopImmediatePropagation()<br>";
          evt.stopImmediatePropagation();
        });
    istopElem.addEventListener("click", () =>
        outElem.innerHTML += "click event 2 processed on " +
            "\"immediate stop propagation\" button <br>"
        );

  </script>
```

```css
    #div1, #div2, #div3 {
      display: inline-block;
      padding: 20px;
      border: 2px solid #000;
    }
    button {
      width: 100px;
      color: #008;
      padding: 5px;
      margin: 5px;
    }
```

#### Result

The click callback functions display messages when they are called.
It is seen that calling `stopPropagation()` allows the other callback
function registered for clicks on the button to execute while calling
`stopImmediatePropagation()` does not.

{{ EmbedLiveSample("Comparing event stopping functions", 500, 550) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
