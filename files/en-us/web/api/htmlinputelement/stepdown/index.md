---
title: "HTMLInputElement: stepDown() method"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.stepDown
---

{{APIRef("HTML DOM")}}

The
**`HTMLInputElement.stepDown([n])`** method decrements the
value of a numeric type of {{HTMLElement("input")}} element by the value of the
[`step`](/en-US/docs/Web/HTML/Attributes/step) attribute or up
to `n` multiples of the step attribute if a number is passed as the
parameter.

The method, when invoked, decrements the
[`value`](/en-US/docs/Web/HTML/Element/input#value) by ([`step`](/en-US/docs/Web/HTML/Element/input#step) \* n), where n
defaults to 1 if not specified, and
[`step`](/en-US/docs/Web/HTML/Attributes/step) defaults to the
default value for `step` if not specified.

Valid on all numeric, date, and time input types that support the step attribute,
including {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}},
{{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}},
{{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number",
  "number")}}, and {{HTMLElement("input/range", "range")}}.

Given `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`,
invoking `myTime.stepDown(3)` will change the value to 16:15, decrementing the
time by `3 * 900`, or 45 minutes. `myTime.stepDown()`, with no
parameter, would have resulted in `16:45`, as `n` defaults to
`1`.

```html
<!-- decrements by intervals of 900 seconds (15 minute) -->
<input type="time" max="17:00" step="900" />

<!-- decrements by intervals of 7 days (one week) -->
<input type="date" max="2019-12-25" step="7" />

<!-- decrements by intervals of 12 months (one year) -->
<input type="month" max="2019-12" step="12" />
```

However, calling `stepDown` on `<input type="time" max="17:00" step="900">` would not set the value to `17:00`, as one would expect — and as it does for `stepUp` when the input is `<input type="time" min="17:00" step="900">`. Instead, the first call to `stepDown` will set the initial value to `23:45` even though the `max` attribute is set. The second call will set the value to `17:00`. And the third call to will set the value to `16:45`.

```js
let input1 = document.createElement("input");
input1.setAttribute("type", "time");
input1.setAttribute("min", "17:00");
input1.setAttribute("step", 900);
console.log(input1.value); // ""
input1.stepUp();
console.log(input1.value); // "17:00"
// However
let input2 = document.createElement("input");
input2.setAttribute("type", "time");
input2.setAttribute("max", "17:00");
input2.setAttribute("step", 900);
console.log(input2.value); // ""
input2.stepDown();
console.log(input2.value); // "23:45"
input2.stepDown();
console.log(input2.value); // "17:00"
input2.stepDown();
console.log(input2.value); // "16:45"
```

The method, when invoked, changes the form control's value by the value given in the
`step` attribute, multiplied by the parameter, within the constraints set
within the form control. The default value for the parameter, if not is passed, is 1.
The method will not cause the value to go below the
[`min`](/en-US/docs/Web/HTML/Attributes/min) value set or defy the
constraints set by the
[`step`](/en-US/docs/Web/HTML/Attributes/step) attribute. A
negative value for `n` will increment the value, but will not increment
beyond the [`max`](/en-US/docs/Web/HTML/Attributes/max) value.

If the value before invoking the `stepDown()` method is invalid, for
example, if it doesn't match the constraints set by the `step` attribute,
invoking the `stepDown()` method will return a value that does match the form
controls constraints.

If the form control is non time, date, or numeric in nature, and therefore does not
support the `step` attribute (see the list of supported input types above), or if the `step` value is set to `any`, an
`InvalidStateError` exception is thrown.

- {{domxref("HTMLInputElement.stepDown()")}}

  - : Decrements the [`value`](/en-US/docs/Web/HTML/Element/input#value) by
    ([`step`](/en-US/docs/Web/HTML/Element/input#step) \* n), where n defaults to 1 if not specified. Throws
    an `InvalidStateError` exception:

    - if the method is not applicable to for the current
      [`type`](/en-US/docs/Web/HTML/Element/input#type) value,
    - if the element has no [`step`](/en-US/docs/Web/HTML/Element/input#step) value,
    - if the [`value`](/en-US/docs/Web/HTML/Element/input#value) cannot be converted to a number,
    - if the resulting value is above the [`max`](/en-US/docs/Web/HTML/Element/input#max) or below the
      [`min`](/en-US/docs/Web/HTML/Element/input#min).

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameters

- `stepDecrement` {{optional_inline}}

  - : A numeric value. If no parameter is passed, _stepDecrement_ defaults to 1.

    If the value is a float, the value will decrement as if
    [`Math.floor(stepDecrement)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    was passed. If the value is negative, the value will be incremented instead of
    decremented.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to decrement the {{HTMLElement("input/number",
  "number")}} input type:

### HTML

```html
<p>
  <label for="theNumber">
    Enter a number between 0 and 400 that is divisible by 5:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label for="decrementButton">
    Enter how many values of step you would like to decrement by or leave it
    blank:
  </label>
  <input type="number" step="1" id="decrementInput" min="-2" max="15" />
</p>
<input type="button" value="Decrement" id="theButton" />
```

### JavaScript

```js
/* make the button call the function */
let button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnDown();
});

function stepOnDown() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("decrementInput").value;

  if (val) {
    // decrement with a parameter
    input.stepDown(val);
  } else {
    // or without a parameter. Try it with 0, 5, -2, etc.
    input.stepDown();
  }
}
```

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### Result

{{EmbedLiveSample("Examples")}}

Note if you don't pass a parameter to the `stepDown()` method, it defaults
to 1. Any other value is a multiplier of the `step` attribute value, which in
this case is 5. If we pass `4` as the `stepDecrement`, the input will `stepDown` by
`4 * 5`, or `20`. If the parameter is `0`, the number will not be
decremented. The `stepDown()` method will not allow the input to go out of range, in this
case stopping when it reaches 0 and rounding down and floats that are passed as a
parameter.

Try setting the step decrement input to `1.2`. What happens when you invoke the
method?

Try setting the value to `44`, which is not valid. What happens when you
invoke the method?

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepUp", "HTMLInputElement.stepUp()")}}
- [`step`](/en-US/docs/Web/HTML/Attributes/step),
  [`min`](/en-US/docs/Web/HTML/Attributes/min) and
  [`max`](/en-US/docs/Web/HTML/Attributes/max) attributes
