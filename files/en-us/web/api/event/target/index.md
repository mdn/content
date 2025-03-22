---
title: "Event: target property"
short-title: target
slug: Web/API/Event/target
page-type: web-api-instance-property
browser-compat: api.Event.target
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The read-only **`target`** property of the
{{domxref("Event")}} interface is a reference to the object onto which the event was
dispatched. It is different from {{domxref("Event.currentTarget")}} when the event
handler is called during the bubbling or capturing phase of the event.

## Value

The associated {{domxref("EventTarget")}}.

## Example

The `event.target` property can be used in order to implement **event
delegation**.

```js
// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different from evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
