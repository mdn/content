---
title: '`<input type="month">` HTML attribute value'
short-title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
page-type: html-attribute-value
browser-compat: html.elements.input.type_month
sidebar: htmlsidebar
---

{{HTMLElement("input")}} elements of type **`month`** create input fields that let the user enter a month and year.
The value is a string whose value is in the format `YYYY-MM`, where `YYYY` is the four-digit year and `MM` is the month number.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;month&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Start month:</label>

<input type="month" id="start" name="start" min="2018-03" value="2018-05" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Value

A string representing the month and year entered in the input, in the form `YYYY-MM` (a four-digit year, then a hyphen (`-`), followed by the two-digit month. See [month strings](/en-US/docs/Web/HTML/Guides/Date_and_time_formats#month_strings)).

### Setting a default value

Use the [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) attribute to set a default value, as in the following example. When the user interacts with the control, the calendar opens to the value set. The `pattern` attribute has also been included for [non-supporting browsers](#handling_browser_support).

```html
<label for="bday-month">What month were you born in?</label>
<input
  id="bday-month"
  type="month"
  name="bday-month"
  value="2001-06"
  pattern="[0-9]{4}-[0-9]{2}" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

The value will appear as `bday-month=2001-06` when submitted to the server.

Most {{Glossary("user agent", "user agents")}} display the month and year in a locale-appropriate format, based on the user's operating system locale. While the displayed date format may differ by locale, the actual `value` is always in `YYYY-MM` format.

## Additional attributes

In addition to the attributes common to {{HTMLElement("input")}} elements, month inputs offer the following attributes.

### list

The value of the `list` attribute is the {{domxref("Element.id", "id")}} of a {{HTMLElement("datalist")}} element located in the same document.
The `<datalist>` provides a list of predefined values to suggest to the user for this input.
List values that are not compatible with the [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#type) are omitted from the suggested options.
The values provided are suggestions, not requirements: users can select from the predefined list or enter a different value.

### max

The `max` attribute value is the latest year and month, in `YYYY-MM` format, that the element accepts as valid.
If the [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) entered into the element exceeds this, the element fails [constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation).
If the value of the `max` attribute isn't a valid string in `YYYY-MM` format, then the element has no maximum value.

The `max` value must specify a year-month pairing later than or equal to the one specified by the `min` attribute.

### min

The `min` attribute value is the earliest year and month, in `YYYY-MM` format, that the element accepts as valid.
If the [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) entered is less than this, the element fails [constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation).
If the value specified for `min` isn't a valid year-month value in the `YYYY-MM` format, the input has no minimum value.

This value must be a year-month pairing that is earlier than or equal to the one specified by the `max` attribute.

### readonly

The `readonly` {{glossary("boolean")}} attribute, if present, means this field cannot be edited by the user.
Its `value` can, however, still be changed using JavaScript code that directly sets the value of the {{domxref("HTMLInputElement.value")}} property.

> [!NOTE]
> Because a read-only field cannot be changed by the user, the `required` attribute does not have any effect on inputs with the `readonly` attribute also specified.

### step

The `step` attribute specifies the granularity that the value must adhere to. The value is either an integer or the keyword `any`. Only values that are a whole number of steps from the step base are valid. The _step base_ is the [`min`](#min) value, if specified; the value of the [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) attribute, if set; otherwise `1970-01`, the Unix epoch, is used if neither is provided.

For `month` inputs, `step` is given in months. The default value of `step` is 1, indicating 1 month.

A string value of `any` means that no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)). In reality, it has the same effect as `1` for `month` inputs because only whole months are valid.

> [!NOTE]
> When user-entered data doesn't adhere to the stepping configuration, the {{Glossary("user agent")}} may round to the nearest valid value, preferring numbers in the positive direction when two options are equally close.

## Using month inputs

Date-related inputs (including `month`) normalize the data format sent to the server, regardless of the user's locale. We'll look at basic and more complex uses of `<input type="month">`, then offer advice on mitigating the browser support issue in the section [Handling browser support](#handling_browser_support).

### Basic uses of month

The most basic use of `<input type="month">` involves a basic {{HTMLElement("input")}} and {{htmlelement("label")}} element combination, as seen below:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" />
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Setting maximum and minimum dates

You can use the [`min`](/en-US/docs/Web/HTML/Reference/Elements/input#min) and [`max`](/en-US/docs/Web/HTML/Reference/Elements/input#max) attributes to restrict the range of dates that the user can choose. In this example, we specify a minimum month of `1900-01` and a maximum month of `2026-12`:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input
    id="bday-month"
    type="month"
    name="bday-month"
    min="1900-01"
    max="2026-12" />
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

The result here is that:

- Only months between January 1900 and December 2026 can be selected; months outside this range can't be scrolled to in the control.
- Months outside the specified range are invalid (see [Validation](#validation)) but may still be available.

### Setting the value using JavaScript

The date value can be set with JavaScript using the {{domxref("HTMLInputElement.value")}} property:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" />
```

```js
const monthControl = document.querySelector('input[type="month"]');
monthControl.value = "2001-06";
```

{{EmbedLiveSample("Setting_the_value_using_JavaScript", 600, 60)}}

## Validation

The [`min`](/en-US/docs/Web/HTML/Reference/Elements/input#min) and [`max`](/en-US/docs/Web/HTML/Reference/Elements/input#max) can be used to restrict the available dates (see [Setting maximum and minimum dates](#setting_maximum_and_minimum_dates)), and the [`required`](/en-US/docs/Web/HTML/Reference/Elements/input#required) attribute can be used to make filling in the date mandatory. Browsers will display an error if the user tries to submit a date outside the set bounds or leaves the date field empty.

This example includes minimum and maximum dates and makes the field required:

```html
<form>
  <div>
    <label for="month">
      What month would you like to visit (June to Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

If you submit the form without both the month and year specified (or with a date outside the set bounds), the browser displays an error.

{{ EmbedLiveSample('Validation', 600, 120) }}

In this example, we used {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes to match the input based on whether the current value is valid.
We put the icons on a {{htmlelement("span")}} next to the input, not on the input itself.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> HTML form validation is _not_ a substitute for scripts that ensure that the entered data is in the proper format.
> It's far too easy for someone to change the HTML and bypass the validation, or to remove it entirely.
> It's also possible for someone to bypass your HTML entirely and submit the data directly to your server.
> Server-side code should validate all received data to ensure it is properly formatted (and that it is not too large, the wrong type, and so forth).

## Handling browser support

The control's UI varies by browser and is generally presented as either a calendar-like grid or two wheel pickers. If a browser doesn't support the `month` input, the control degrades gracefully to [`<input type="text">`](/en-US/docs/Web/HTML/Reference/Elements/input/text), but without the automatic validation of the `yyyy-mm` format that is expected. For this reason, you can include the [`pattern`](/en-US/docs/Web/HTML/Reference/Elements/input#pattern) attribute to limit the values the text input will accept. 
When supported, the `month` input doesn't use the `pattern` attribute, but if the browser falls back to a `text` input, it uses `pattern`, hinting to the user the date format expected via the `placeholder` attribute.
For example, try viewing the following demo in a browser that doesn't support `month` inputs:

```html
<form>
  <div>
    <label for="month">
      What month would you like to visit (June to Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required
      pattern="20[2-9]{2}-[0-9]{2}"
      placeholder="YYYY-MM" />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

If you try submitting it, the browser displays an error message (and highlights the input as invalid) if your entry doesn't match the pattern `20nn-nn`, where `n` is a number from `0` to `9`. This doesn't prevent people from entering invalid values that follow the pattern, such as `2099-42`.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

## Examples

In this example, we create two sets of UI elements, each designed to let the user select a month and year, presenting the month and year in two separate {{htmlelement("select")}} elements as a fallback.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

The form that requests the month and year. 
The first is a native `month` input, and the other is a pair of {{HTMLElement("select")}} elements that let users choose a month and year independently, for compatibility with browsers that don't yet support `<input type="month">`.

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">What month would you like to visit us?</label>
    <input type="month" id="month-visit" name="month-visit" />
    <span class="validity"></span>
  </div>
  <fieldset class="fallbackDatePicker">
   <legend>What month would you like to visit us?</legend>
    <p>
        <label for="month">Month:</label>
        <select id="month" name="month">
          <option selected value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
    <p>
    <p>
        <label for="year">Year:</label>
        <select id="year" name="year"></select>
    </p>
  </fieldset>
</form>
```

The {{HTMLElement("div")}} with the ID `nativeDatePicker` uses the `month` input type to request the month and year, while the `<fieldset>` with the ID `fallbackDatePicker` uses a pair of `<select>` elements; the first requesting the month and the second the year.

The `<select>` for choosing the month is hardcoded with the month names, as they don't change.
The list of available year values is dynamically generated depending on the current year (see the code comments below for detailed explanations of how these functions work).

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

### JavaScript

The JavaScript code that handles selecting which approach to use and to set up the list of years to include in the non-native year `<select>` follows.

The part of the example that may be of most interest is the feature detection code.
To detect whether the browser supports `<input type="month">`, we create a new {{htmlelement("input")}} element, set its `type` to `month`, then immediately check what its type is.
Browsers that don't support type `month` will return `text`, since that's what month falls back to when not supported.
If `<input type="month">` is not supported, we hide the native picker and show the fallback picker UI instead.

```js
// Get UI elements
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");

// Hide fallback initially
fallbackPicker.style.display = "none";

// Test whether a new date input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "month";
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === "text") {
  // Hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";

  // Populate the years dynamically
  populateYears();
}

function populateYears() {
  // Get the current year as a number
  const date = new Date();
  const year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        A string representing a month and year, or
        empty.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} and
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Supported common attributes</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/en-US/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">no corresponding role</a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The generic {{HTMLElement("input")}} element and the interface used to manipulate it, {{domxref("HTMLInputElement")}}
- [Date and time formats used in HTML](/en-US/docs/Web/HTML/Guides/Date_and_time_formats)
- [Date and Time picker tutorial](/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/en-US/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/en-US/docs/Web/HTML/Reference/Elements/input/time), and [`<input type="week">`](/en-US/docs/Web/HTML/Reference/Elements/input/week)
