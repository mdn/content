---
title: "PopStateEvent: state property"
short-title: state
slug: Web/API/PopStateEvent/state
page-type: web-api-instance-property
browser-compat: api.PopStateEvent.state
---

{{ APIRef("History API") }}

The **`state`** read-only property of the {{domxref("PopStateEvent")}} interface represents the state stored when the event was created.

Practically it is a value provided by the call to {{domxref("history.pushState()")}} or {{domxref("history.replaceState()")}}

## Value

An object, or `null`.

## Examples

The code below logs the value of `state` when using the
{{domxref("History.pushState","pushState()")}} method to push a value to the history.

```js
// Log the state of
addEventListener("popstate", (event) => {
  console.log("State received: ", event.state);
});

// Now push something on the stack
history.pushState({ name: "Example" }, "pushState example", "page1.html");
history.pushState(
  { name: "Another example" },
  "pushState example",
  "page1.html",
);
```

This will log:

```plain
State received: { name: "Example" }
State received: { name: "Another example" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PopStateEvent()")}} constructor
- {{domxref("History.state")}}
