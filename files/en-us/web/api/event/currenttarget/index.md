---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.currentTarget
---
{{APIRef("DOM")}}

The **`currentTarget`** read-only property of the
{{domxref("Event")}} interface identifies the current target for the event, as the event
traverses the DOM. It always refers to the element to which the event handler has been
attached, as opposed to {{domxref("Event.target")}}, which identifies the element on
which the event occurred and which may be its descendant.

## Value

An {{domxref("EventTarget")}} representing the object to which the current event handler is attached.

## Examples

`Event.currentTarget` is interesting to use when attaching the same event
handler to several elements.

```js
function hide(e){
  e.currentTarget.style.visibility = 'hidden';
  console.log(e.currentTarget);
  // When this function is used as an event handler: this === e.currentTarget
}

const ps = document.getElementsByTagName('p');

for (let i = 0; i < ps.length; i++){
  // console: print the clicked <p> element
  ps[i].addEventListener('click', hide, false);
}
// console: print <body>
document.body.addEventListener('click', hide, false);

// Click around and make paragraphs disappear
```

> **Note:** The value of `event.currentTarget` is **only** available while the event is being handled.
> If you {{DOMxRef("console.log()")}} the `event` object, storing it in a variable,
> and _then_ look for the `currentTarget` key in the console, its value will be `null`.<br/>
> Instead, you should either use `console.log(event.currentTarget)` to be
> able to view it in the console or use the [`debugger`](/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement,
> which will pause the execution of your code thus showing you the value of `event.currentTarget`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Comparison of Event Targets](/en-US/docs/Web/API/Event/Comparison_of_Event_Targets)
