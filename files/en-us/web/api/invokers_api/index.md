---
title: Invokers API
slug: Web/API/Invokers_API
page-type: web-api-overview
browser-compat: api.HTMLElement.invokers
---

{{DefaultAPISidebar("Invokers API")}}

The **Invokers API** provides developers with a standard, consistent, flexible mechanism for controlling interactive HTML Elements on the page. Invokers allow for declarative control using HTML attributes for equivalent JavaScript APIs.

## Concepts and usage

It is very common on the web to control interactive elements using {{htmlelement("button")}} elements, adding JavaScript event listeners to control what a button does when pressed. Invokers provide a declarative way to achieve the same effect for simple behaviors, such as toggling a popover or dialog element.

Invokers also allow for custom actions that can control behaviors using JavaScript without adding event listeners to the buttons.

## HTML attributes

- [`invoketarget`](/en-US/docs/Web/HTML/Element/button#invoketarget)
  - : Turns a {{htmlelement("button")}} element or an {{htmlelement("input")}} element (with `type=button`) - into a Invoker control button; takes the ID of the element to control as its value.
- [`invokeaction`](/en-US/docs/Web/HTML/Element/button#invokeaction)
  - : Specifies the action to be performed on the element being controlled by an Invoker {{htmlelement("button")}} or {{htmlelement("input")}}.

## Interfaces

- {{domxref("InvokeEvent")}}
  - : Represents an event notifying the user when an button is about to invoke an element. It is the event object for the {{domxref("HTMLElement.invoke_event", "invoke")}} event, which fires on the element to be invoked, when the button is interacted with.

## Extensions to other interfaces

### Instance properties

- {{domxref("HTMLButtonElement.invokeTargetElement")}} and {{domxref("HTMLInputElement.invokeTargetElement")}}
  - : Gets and sets the invoker element being controlled by the control button. The JavaScript equivalent of the [`invoketarget`](/en-US/docs/Web/HTML/Element/button#invoketarget) HTML attribute.
- {{domxref("HTMLButtonElement.invokeAction")}} and {{domxref("HTMLInputElement.invokeAction")}}
  - : Gets and sets the action to be performed on the invoker element being controlled by the control button. Reflects the value of the [`invokeraction`](/en-US/docs/Web/HTML/Element/button#invokeraction) HTML attribute.
