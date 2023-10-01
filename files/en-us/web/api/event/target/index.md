---
title: "Event: target property"
short-title: target
slug: Web/API/Event/target
page-type: web-api-instance-property
browser-compat: api.Event.target
---

{{ApiRef("DOM")}}

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
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
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

- [Comparison of Event Targets](/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)
