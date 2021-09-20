---
title: EventTarget
slug: Web/API/EventTarget
tags:
  - API
  - DOM
  - DOM Events
  - EventTarget
  - Interface
browser-compat: api.EventTarget
---
{{ApiRef("DOM Events")}}

**`EventTarget`** is a DOM interface implemented by objects that can receive events and may have listeners for them.

{{domxref("Element")}}, {{domxref("Document")}}, and {{domxref("Window")}} are the most common event targets, but other objects can be event targets, too. For example {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, {{domxref("AudioContext")}}, and others.

Many event targets (including elements, documents, and windows) also support setting [event handlers](/en-US/docs/Web/Events/Event_handlers) via `onevent` properties and attributes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("EventTarget.EventTarget()", "EventTarget()")}}
  - : Creates a new `EventTarget` object instance.

## Methods

- {{domxref("EventTarget.addEventListener()", "<var>EventTarget</var>.addEventListener()")}}
  - : Registers an event handler of a specific event type on the `EventTarget`.
- {{domxref("EventTarget.removeEventListener()", "<var>EventTarget</var>.removeEventListener()")}}
  - : Removes an event listener from the `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()", "<var>EventTarget</var>.dispatchEvent()")}}
  - : Dispatches an event to this `EventTarget`.

## Example

### Simple implementation of EventTarget

```js
var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback){
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Event reference](/en-US/docs/Web/Events) - the events available in the platform.
- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}} interface
