---
title: "HTML attribute: max"
short-title: max
slug: Web/HTML/Attributes/max
page-type: html-attribute
browser-compat:
  - html.elements.input.max
  - html.elements.meter.max
  - html.elements.progress.max
---

{{HTMLSidebar}}

The **`max`** attribute defines the maximum value that is acceptable and valid for the input containing the attribute. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) of the element is greater than this, the element fails [validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation). This value must be greater than or equal to the value of the [`min`](/en-US/docs/Web/HTML/Attributes/min) attribute. If the `max` attribute is present but is not specified or is invalid, no `max` value is applied. If the `max` attribute is valid and a non-empty value is greater than the maximum allowed by the `max` attribute, constraint validation will prevent form submission.

The max attribute is valid for the numeric input types, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types, and both the {{htmlelement('progress')}} and {{htmlelement('meter')}} elements. It is a number that specifies the most positive value a form control to be considered valid.

If the value exceeds the max value allowed, the {{domxref('validityState.rangeOverflow')}} will be true, and the control will be matched by the {{cssxref(':out-of-range')}} and {{cssxref(':invalid')}} pseudo-classes.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax for
    <code>max</code>
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
      <td><code>&#x3C;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" max="2019-12-25T23:59"></code>
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

> [!NOTE]
> When the data entered by the user doesn't adhere to the maximum value set, the value is considered invalid in constraint validation and will match the {{cssxref(':invalid')}} and {{cssxref(':out-of-range')}} pseudo-classes.

See [Client-side validation](/en-US/docs/Web/HTML/Constraint_validation) and {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} for more information.

For the {{htmlelement('progress')}} element, the `max` attribute describes how much work the task indicated by the `progress` element requires. If present, must have a value greater than zero and be a valid floating point number. For the {{htmlelement('meter')}} element, the `max` attribute defines the upper numeric bound of the measured range. This must be greater than the minimum value ([`min`](/en-US/docs/Web/HTML/Attributes/min) attribute), if specified. In both cases, if omitted, the value defaults to 1.

<table class="no-markdown">
  <caption>
    Syntax for
    <code>max</code>
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
      <td>{{HTMLElement("progress")}}</td>
      <td><a href="/en-US/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
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

## Accessibility concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the `max` attribute, ensure this maximum requirement is understood by the user. Providing instructions within the {{htmlelement('label')}} may be sufficient. If providing instructions outside of labels, which allows more flexible positioning and design, consider using [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`step`](/en-US/docs/Web/HTML/Attributes/step)
- [`min`](/en-US/docs/Web/HTML/Attributes/min)
- other meter attributes: [`low`](/en-US/docs/Web/HTML/Attributes/low), [`high`](/en-US/docs/Web/HTML/Attributes/high), [`optimum`](/en-US/docs/Web/HTML/Attributes/optimum)
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{domxref('validityState.rangeOverflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types, and the {{htmlelement('meter')}}
