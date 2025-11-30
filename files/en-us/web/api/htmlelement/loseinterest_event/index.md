---
title: "HTMLElement: loseinterest event"
slug: Web/API/HTMLElement/loseinterest_event
page-type: web-api-event
browser-compat: api.HTMLElement.loseinterest_event
---

{{APIRef("HTML DOM")}}

The **`loseinterest`** event of the {{domxref("HTMLElement")}} interface is fired on an [interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers)'s target element when interest is lost, allowing code to be run in response.

This event is normally [cancelable](/en-US/docs/Web/API/Event/cancelable), except when the user hits the <kbd>Esc</kbd> key to lose interest in all interest invokers contained in the document.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("loseinterest", (event) => { })

onloseinterest = (event) => { }
```

## Event type

An {{domxref("InterestEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("InterestEvent")}}

## Examples

### Basic interest invoker event usage

In this example, we use the `interest` and `loseinterest` events to report when interest is being shown and lost on a {{htmlelement("button")}} element interest invoker. We do this by printing messages into the {{htmlelement("p")}} target element's text content.

#### HTML

We set up a relationship between the `<button>` element interest invoker and its target `<p>` element by setting the `<button>` element's `interestfor` attribute equal to the `<p>` element's `id`.

```html live-sample___basic-interest-invoker
<button href="#" interestfor="mytarget">Interest invoker</button>
<p id="mytarget">Interest not being shown.</p>
```

#### JavaScript

We grab a reference to the `<button>` element and its target element (via its {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} property).

```js live-sample___basic-interest-invoker
const invoker = document.querySelector("[interestfor]");
const target = invoker.interestForElement;
```

We then set two event listeners on the target element, for the `interest` and `loseinterest` events.

- When interest is shown, we print a message into the target `<p>` element's text context to say that interest has been shown via the `<button>` element. Note how you can get a reference to the interest invoker via the event object's {{domxref("InterestEvent.source", "source")}} property.
- When interest is lost, we report that, again via a message printed to the paragraph text.

```js live-sample___basic-interest-invoker
target.addEventListener("interest", (e) => {
  target.textContent = `Interest being shown via the ${e.source.tagName} element.`;
});

target.addEventListener("loseinterest", () => {
  target.textContent = `Interest lost.`;
});
```

#### Result

The example renders like this:

{{embedlivesample("basic-interest-invoker", "100%", "100")}}

Try showing/losing interest in the button (for example, by hovering or focusing it) to see how the `<p>` text changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers)
