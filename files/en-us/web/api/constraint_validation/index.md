---
title: Constraint validation API
slug: Web/API/Constraint_validation
page-type: web-api-overview
tags:
  - API
  - Constraint validation
  - Landing
  - Reference
browser-compat: api.ValidityState
---
{{apiref()}}

The Constraint Validation API enables checking values that users have entered into form controls, before submitting the values to the server.

## Concepts and usage

Certain HTML form controls, such as {{HTMLElement("input")}}, {{HTMLElement("select")}} and {{HTMLElement("textarea")}}, can restrict the format of allowable values, using attributes like `required` and `pattern` to set basic constraints.

However, you may want to impose more complex constraints, or to provide clearer reporting of validation failures than the defaults. This can be done using the Constraint Validation API.

> **Note:** Client-side constraint validation doesn't remove the need for validation on the server side. Even though client-side validation can prevent many common kinds of invalid values, invalid ones can still be sent by older browsers or by attackers trying to trick your web application. Therefore, you need to also validate input values on the server side, in a way that is consistent with what is done on the client side. Client side validation is a tool for giving quick feedback to the user. You should not rely on it to completely sanitize data received by the server.

Validation of constraints through the constraint validation API is done either on a single form element or at the form level, on the {{ HTMLElement("form") }} element itself.

## Constraint validation interfaces

- [ValidityState](/en-US/docs/Web/API/ValidityState)
  - : The ValidityState interface represents the _validity states_ that a form control element can have, with respect to its defined constraints. Together, they help explain whether and why an element's value fails to validate.
- [invalid](/en-US/docs/Web/API/HTMLInputElement/invalid_event) event
  - : This event type is fired at a form control element if the element does not satisfy its constraints.

### Extensions to other interfaces

The constraint validation API extends the interfaces for the form-associated elements listed below with a number of new properties and methods (elements that can have a `form` attribute that indicates their form owner):

- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLFieldsetElement")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLObjectElement")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLTextAreaElement")}}

#### Properties

- {{domxref('HTMLObjectElement.validity', 'validity')}}
  - : A read-only property that returns a [`ValidityState`](/en-US/docs/Web/API/ValidityState) object, whose properties represent validation errors for the value of that element.
- {{domxref('HTMLObjectElement.validationMessage','validationMessage')}}
  - : A read-only property that returns an empty string if the element is not a candidate for constraint validation, or if the element's value is valid. If the element's value is not valid, it returns a localized validation message. This will be displayed in the UI if the element is the only form control with a validity problem; if a custom error message is set using {{domxref('HTMLObjectElement.setCustomValidity','setCustomValidity()')}}, this will be shown.
- {{domxref('HTMLObjectElement.willValidate', 'willValidate')}}
  - : A read-only boolean property that returns `true` if the element is a candidate for constraint validation; and `false` otherwise. Elements with the `HTMLObjectElement` interface are _never_ candidates for constraint validation. Others may be barred from constraint validation depending on specific conditions.

#### Methods

- {{domxref('HTMLInputElement.checkValidity', 'checkValidity()')}}
  - : Checks the element's value against its constraints. If the value is invalid, it fires an [invalid](/en-US/docs/Web/API/HTMLInputElement/invalid_event) event at the element and returns `false`; otherwise it returns `true`.
- {{domxref('HTMLFormElement.reportValidity','reportValidity()')}} HTMLFormElement method
  - : Checks the element's value against its constraints and also reports the validity status; if the value is invalid, it fires an [invalid](/en-US/docs/Web/API/HTMLInputElement/invalid_event) event at the element, returns `false`, and then reports the validity status to the user in whatever way the user agent has available. Otherwise, it returns `true`.
- {{domxref('HTMLInputElement.setCustomValidity','setCustomValidity(<em>message</em>)')}}
  - : Sets a custom error message string to be shown to the user upon submitting the form, explaining why the value is not valid — when a message is set, the validity state is set to invalid. To clear this state, invoke the function with an empty string passed as its argument. In this case the custom error message is cleared, the element is considered valid, and no message is shown.

## Examples

Take the following form:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

The basic HTML form validation features will cause this to produce a default error message if you try to submit the form with either no value filled in, or a value that does not match the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern).

If you wanted to instead display custom error messages, you could use JavaScript like the following:

```js
const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if (nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});
```

The example renders like so:

{{EmbedLiveSample('Examples')}}

In brief:

- We check the valid state of the input element every time its value is changed by running the `checkValidity()` method via the `input` event handler.
- If the value is invalid, an `invalid` event is raised, and the `invalid` event handler function is run. Inside this function we work out whether the value is invalid because it is empty, or because it doesn't match the pattern, using an `if ()` block, and set a custom validity error message.
- As a result, if the input value is invalid when the submit button is pressed, one of the custom error messages will be shown.
- If it is valid, it will submit as you'd expect. For this to happen, the custom validity has to be cancelled, by invoking `setCustomValidity()` with an empty string value. We therefore do this every time the `input` event is raised. If you don't do this, and a custom validity was previously set, the input will register as invalid, even if it currently contains a valid value on submission.

> **Note:** Firefox supported a proprietary error attribute — `x-moz-errormessage` — for many versions, which allowed you set custom error messages in a similar way. This has been removed as of version 66 (see [bug 1513890](https://bugzilla.mozilla.org/show_bug.cgi?id=1513890)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<input>`](/en-US/docs/Web/HTML/Element/input)
- [`<select>`](/en-US/docs/Web/HTML/Element/select)
- [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea)
- {{domxref('ValidityState')}}'s properties: {{domxref('validityState.badInput', 'badInput')}}, {{domxref('validityState.customError','customError')}}, {{domxref('validityState.patternMismatch','patternMismatch')}}, {{domxref('validityState.rangeOverflow','rangeOverflow')}}, {{domxref('validityState.rangeUnderflow','rangeUnderflow')}}, {{domxref('validityState.stepMismatch','stepMismatch')}}, {{domxref('validityState.tooLong','tooLong')}}, {{domxref('validityState.tooShort','tooShort')}}, {{domxref('validityState.typeMismatch','typeMismatch')}}, {{domxref('validityState.valid','valid')}}, and {{domxref('validityState.valueMissing','valueMissing')}}.
