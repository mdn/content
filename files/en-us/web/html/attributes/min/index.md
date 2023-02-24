---
title: "HTML attribute: min"
slug: Web/HTML/Attributes/min
page-type: html-attribute
browser-compat:
  - html.elements.input.min
  - html.elements.meter.min
---

{{HTMLSidebar}}

The **`min`** attribute defines the minimum value that is acceptable and valid for the input containing the attribute. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) of the element is less than this, the element fails [validation](/en-US/docs/Learn/Forms/Form_validation). This value must be less than or equal to the value of the `max` attribute.

Some input types have a default minimum. If the input has no default minimum and a value is specified for `min` that can't be converted to a valid number (or no minimum value is set), the input has no minimum value.

It is valid for the input types including: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types, and the {{htmlelement('meter')}} element.

### Syntax

<table class="no-markdown">
  <caption>
    Syntax for
    <code>min</code>
    values by input
    <code>type</code>
  </caption>
  <thead>
    <tr>
      <th>Input type</th>
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/en-US/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/en-US/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** When the data entered by the user doesn't adhere to the min value set, the value is considered invalid in constraint validation and will match the {{cssxref(':invalid')}} and {{cssxref(':out-of-range')}} pseudo-classes.

See [Client-side validation](/en-US/docs/Web/HTML/Constraint_validation) and {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} for more information.

For the {{htmlelement('meter')}} element, the `min` attribute defines the lower numeric bound of the measured range. This must be less than the minimum value ([`max`](/en-US/docs/Web/HTML/Attributes/max) attribute), if specified. In both cases, if omitted, the value defaults to 1.

<table class="no-markdown">
  <caption>
    Syntax for
    <code>min</code>
    values for other elements
  </caption>
  <thead>
    <tr>
      <th>Input type</th>
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/en-US/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### Impact on step

The value of `min` and `step` define what are valid values, even if the `step` attribute is not included, as `step` defaults to `0`.

We add a big red border around invalid inputs:

```css
input:invalid {
  border: solid red 3px;
}
```

Then define an input with a minimum value of 7.2, omitting the step attribute, wherein it defaults to 1.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Because `step` defaults to 1, valid values include `7.2`, `8.2`, `9.2`, and so on. The value 8 is not valid. As we included an invalid value, supporting browsers will show the value as invalid.

{{EmbedLiveSample("Impact_on_step",200,55)}}

If not explicitly included, `step` defaults to 1 for `number` and `range`, and 1 unit type (second, week, month, day) for the date/time input types.

## Accessibility concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the `min` attribute, ensure this minimum requirement is understood by the user. Providing instructions within the {{htmlelement('label')}} may be sufficient. If providing instructions outside of labels, which allows more flexible positioning and design, consider using [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`step`](/en-US/docs/Web/HTML/Attributes/step)
- [`max`](/en-US/docs/Web/HTML/Attributes/max)
- other meter attributes: [`low`](/en-US/docs/Web/HTML/Attributes/low), [`high`](/en-US/docs/Web/HTML/Attributes/high), [`optimum`](/en-US/docs/Web/HTML/Attributes/optimum)
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Form validation](/en-US/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeUnderflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types, and the {{htmlelement('meter')}}
