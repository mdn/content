---
title: "HTMLFormElement: submit event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
page-type: web-api-event
browser-compat: api.HTMLFormElement.submit_event
---

{{APIRef}}

The **`submit`** event fires when a {{HtmlElement("form")}} is submitted.

Note that the `submit` event fires on the `<form>` element itself, and not on any {{HtmlElement("button")}} or `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` inside it. However, the {{domxref("SubmitEvent")}} which is sent to indicate the form's submit action has been triggered includes a {{domxref("SubmitEvent.submitter", "submitter")}} property, which is the button that was invoked to trigger the submit request.

The `submit` event fires when:

- the user clicks a {{Glossary("submit button")}},
- the user presses <kbd>Enter</kbd> while editing a field (e.g. {{HtmlElement('input/text', '&lt;input type="text"&gt;')}}) in a form,
- a script calls the {{domxref("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}} method

However, the event is _not_ sent to the form when a script calls the {{domxref("HTMLFormElement.submit()", "form.submit()")}} method directly.

> [!NOTE]
> Trying to submit a form that does not pass [validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) triggers an {{domxref("HTMLInputElement/invalid_event", "invalid")}} event. In this case, the validation prevents form submission, and thus there is no `submit` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("submit", (event) => {});

onsubmit = (event) => {};
```

## Event type

A {{domxref("SubmitEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SubmitEvent")}}

## Event properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("Event")}}._

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLElement")}} object which identifies the button or other element which was invoked to trigger the form being submitted.

## Examples

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form submit, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs, then prevents the default action of submitting the form.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text" /></label>
  <br /><br />
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HtmlElement("form")}} element
- Related event: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
