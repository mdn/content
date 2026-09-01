---
title: "HTMLFormElement: submit event"
short-title: submit
slug: Web/API/HTMLFormElement/submit_event
page-type: web-api-event
browser-compat: api.HTMLFormElement.submit_event
---

{{APIRef("HTML DOM")}}

The **`submit`** event fires when a {{HtmlElement("form")}} is submitted.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("submit", (event) => { })

onsubmit = (event) => { }
```

## Event type

A {{domxref("SubmitEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SubmitEvent")}}

## Description

The `submit` event fires on the `<form>` element itself, and not on any {{HtmlElement("button")}} or `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` inside it. However, the {{domxref("SubmitEvent")}} which is sent to indicate the form's submit action has been triggered includes a {{domxref("SubmitEvent.submitter", "submitter")}} property, which is the button that was invoked to trigger the submit request.

The `submit` event fires when:

- the user clicks a {{Glossary("submit button")}},
- the user submits the form [implicitly](#implicit_submission),
- a script calls the {{domxref("HTMLFormElement.requestSubmit()", "form.requestSubmit()")}} method

However, the event is _not_ sent to the form when a script calls the {{domxref("HTMLFormElement.submit()", "form.submit()")}} method directly.

Trying to submit a form that does not pass [validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) triggers an {{domxref("HTMLInputElement/invalid_event", "invalid")}} event. In this case, the validation prevents form submission, and thus there is no `submit` event.

### Implicit submission

The [HTML specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) does not formally define what user gestures should trigger implicit submission, because it depends on operating system and device conventions. Usually, pressing <kbd>Enter</kbd> while focusing on a text input is considered an implicit submission. When a user performs such a gesture:

- If the form has a non-disabled default submit button, the browser fires a `click` event at that button. The default button is the first submit button in tree order whose [form owner](/en-US/docs/Web/HTML/Reference/Attributes/form) is that form. This then triggers the form submission process (as if the button has been pressed by the user), unless the event is canceled.
- If the form has no submit button, it is submitted implicitly only when it has at most one {{HTMLElement("input")}} element of type `text`, `search`, `tel`, `url`, `email`, `password`, `date`, `month`, `week`, `time`, `datetime-local`, or `number`. {{HTMLElement("textarea")}} and {{HTMLElement("select")}} elements do not block implicit submission.

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
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);
```

### Result

{{EmbedLiveSample("Examples", "", "", "", "", "", "", "allow-forms")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HtmlElement("form")}} element
- Related event: {{domxref("HTMLInputElement/invalid_event", "invalid")}}
