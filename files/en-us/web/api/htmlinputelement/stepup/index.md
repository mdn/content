---
title: "HTMLInputElement: stepUp() method"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.stepUp
---

{{APIRef("HTML DOM")}}

The **`HTMLInputElement.stepUp()`** method increments the value
of a numeric type of {{HTMLElement("input")}} element by the value of the
[`step`](/en-US/docs/Web/HTML/Attributes/step) attribute, or the
default `step` value if the step attribute is not explicitly set. The method,
when invoked, increments the [`value`](/en-US/docs/Web/HTML/Element/input#value) by
([`step`](/en-US/docs/Web/HTML/Element/input#step) \* n), where `n` defaults to
`1` if not specified, and
[`step`](/en-US/docs/Web/HTML/Attributes/step) defaults to the
default value for `step` if not specified.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Input type</th>
      <th>Default step value</th>
      <th>Example step declaration</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (day)</td>
      <td>
        7 day (one week) increments:<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (month)</td>
      <td>
        12 month (one year) increments:<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (week)</td>
      <td>
        Two week increments:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (seconds)</td>
      <td>
        900 second (15 minute) increments:<br />
        <code>&#x3C;input type="time" min="09:00" step="900"></code>
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> (day)</td>
      <td>
        Same day of the week:<br />
        <code>&#x3C;input type="datetime-local" min="019-12-25T19:30"
          step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        0.1 increments<br />
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        Increments by 2:<br />
        <code>&#x3C;input type="range" min="0" step="2" max="10"></code>
      </td>
    </tr>
  </thead>
</table>

The method, when invoked, changes the form control's value by the value given in the
`step` attribute, multiplied by the parameter, within the constraints set on
the form control. The default value for the parameter, if no value is passed, is
`1`. The method will not cause the value to exceed the
set [`max`](/en-US/docs/Web/HTML/Attributes/max) value, or defy
the constraints set by the
[`step`](/en-US/docs/Web/HTML/Attributes/step) attribute.

If the value before invoking the `stepUp()` method is invalid—for example,
if it doesn't match the constraints set by the step attribute—invoking the
`stepUp()` method will return a value that does match the form controls
constraints.

If the form control is non time, date, or numeric in nature, and therefore does not
support the `step` attribute (see the list of supported input types in the
table above), or if the step value is set to `any`, an
`InvalidStateError` exception is thrown.

## Syntax

```js-nolint
stepUp()
stepUp(stepIncrement)
```

### Parameters

- `stepIncrement` {{optional_inline}}
  - : A numeric value. If no parameter is passed, `stepIncrement` defaults to `1`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Click the button in this example to increment the {{HTMLElement("input/number",
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
  <label>
    Enter how many values of step you would like to increment by or leave it
    blank:
  </label>
  <input type="number" step="1" id="incrementInput" min="0" max="25" />
</p>
<input type="button" value="Increment" id="theButton" />
```

### JavaScript

```js
/* make the button call the function */
const button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnUp();
});

function stepOnUp() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("incrementInput").value;

  if (val) {
    /* increment with a parameter */
    input.stepUp(val);
  } else {
    /* or without a parameter. Try it with 0 */
    input.stepUp();
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

Note if you don't pass a parameter to the `stepUp` method, it defaults to
`1`. Any other value is a multiplier of the `step` attribute
value, which in this case is `5`. If you pass `4` as the
`stepIncrement`, the input will `stepUp` by
`4 * 5`, or `20`. If the parameter is `0`, the number
will not be incremented. The stepUp will not allow the input to out of range, in this
case stopping when it reaches `400`, and rounding down any floats that are
passed as a parameter.

Try setting the step increment input to `1.2`. What happens when you invoke the
method?

Try setting the value to `4`, which is not valid. What happens when you
invoke the method?

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepDown")}}
- [`step`](/en-US/docs/Web/HTML/Attributes/step),
  [`min`](/en-US/docs/Web/HTML/Attributes/min) and
  [`max`](/en-US/docs/Web/HTML/Attributes/max) attributes
