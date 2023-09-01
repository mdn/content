---
title: "HTMLInputElement: invalid event"
short-title: invalid
slug: Web/API/HTMLInputElement/invalid_event
page-type: web-api-event
browser-compat: api.HTMLInputElement.invalid_event
---

{{APIRef}}

The **`invalid`** event fires when a submittable element has been checked for validity and doesn't satisfy its constraints.

This event can be useful for displaying a summary of the problems with a form on submission. When a form is submitted, `invalid` events are fired at each form control that is invalid. The validity of submittable elements is checked before submitting their owner {{HtmlElement("form")}}, or after the [`checkValidity()`](/en-US/docs/Web/API/HTMLInputElement/checkValidity) method of the element or its owner `<form>` is called.

It is not checked on {{domxref("Element/blur_event", "blur")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("invalid", (event) => {});

oninvalid = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

If a form is submitted with an invalid value, the submittable elements are checked and, if an error is found, the `invalid` event will fire on the `invalid` element. In this example, when an invalid event fires because of an invalid value in the input, the invalid value is logged.

### HTML

```html
<form action="#">
  <div>
    <label>
      Enter an integer between 1 and 10:
      <input type="number" min="1" max="10" required />
    </label>
  </div>
  <div><input type="submit" value="submit" /></div>
</form>
<hr />
Invalid values:
<ul id="log"></ul>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", (e) => {
  log.appendChild(
    Object.assign(document.createElement("li"), {
      textContent: JSON.stringify(e.target.value),
    }),
  );
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HtmlElement("form")}} element
- Related event: {{domxref("HTMLFormElement/submit_event", "submit")}}
- CSS {{cssxref(":invalid")}} pseudo class
