---
title: <input type="week">
slug: Web/HTML/Element/input/week
page-type: html-element
browser-compat: html.elements.input.type_week
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elements of type **`week`** create input fields allowing easy entry of a year plus the [ISO 8601 week number](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) during that year (i.e., week 1 to [52 or 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

The control's user interface varies from browser to browser; cross-browser support is currently a bit limited, with only Chrome/Opera and Microsoft Edge supporting it at this time. In non-supporting browsers, the control degrades gracefully to function identically to [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text).

![An input reading 'week 01, 2017'. The background of the 2017 is the same blue as the focus ring. There are 3 icons in the input: x or clear, a spinner with small up and down arrows, and a larger down arrow. A calendar is a pop-up below the input set to January 2017. The first column of the calendar is the week: 52, 1, 2, 3, 4, 5. the full month calendar is to the right of that. The row with Week 1 and January 2 to 8 is highlighted. On the same line as the month, there are buttons to move right and left for the next and previous months.](week-control-chrome.png)

## Value

A string representing the value of the week/year entered into the input. The format of the date and time value used by this input type is described in [Week strings](/en-US/docs/Web/HTML/Date_and_time_formats#week_strings).

You can set a default value for the input by including a value inside the [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute, like so:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

One thing to note is that the displayed format may differ from the actual `value`, which is always formatted `yyyy-Www`. When the above value is submitted to the server, for example, browsers may display it as `Week 01, 2017`, but the submitted value will always look like `week=2017-W01`.

You can also get and set the value in JavaScript using the input element's {{domxref("HTMLInputElement.value", "value")}} property, for example:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Additional attributes

In addition to the attributes common to {{HTMLElement("input")}} elements, week inputs offer the following attributes.

### max

The latest (time-wise) year and week number, in the string format discussed in the [Value](#value) section above, to accept. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) entered into the element exceeds this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If the value of the `max` attribute isn't a valid week string, then the element has no maximum value.

This value must be greater than or equal to the year and week specified by the `min` attribute.

### min

The earliest year and week to accept. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) of the element is less than this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If a value is specified for `min` that isn't a valid week string, the input has no minimum value.

This value must be less than or equal to the value of the `max` attribute.

### readonly

A Boolean attribute which, if present, means this field cannot be edited by the user. Its `value` can, however, still be changed by JavaScript code directly setting the {{domxref("HTMLInputElement")}} `value` property.

> [!NOTE]
> Because a read-only field cannot have a value, `required` does not have any effect on inputs with the `readonly` attribute also specified.

### step

The `step` attribute is a number that specifies the granularity that the value must adhere to, or the special value `any`, which is described below. Only values which are equal to the basis for stepping ([`min`](#min) if specified, [`value`](/en-US/docs/Web/HTML/Element/input#value) otherwise, and an appropriate default value if neither of those is provided) are valid.

A string value of `any` means that no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)).

> [!NOTE]
> When the data entered by the user doesn't adhere to the stepping configuration, the {{Glossary("user agent")}} may round to the nearest valid value, preferring numbers in the positive direction when there are two equally close options.

For `week` inputs, the value of `step` is given in weeks, with a scaling factor of 604,800,000 (since the underlying numeric value is in milliseconds). The default value of `step` is 1, indicating 1week. The default stepping base is -259,200,000, which is the beginning of the first week of 1970 (`"1970-W01"`).

_At this time, it's unclear what a value of `"any"` means for `step` when used with `week` inputs. This will be updated as soon as that information is determined._

## Using week inputs

Week inputs sound convenient at first glance, since they provide an easy UI for choosing weeks, and they normalize the data format sent to the server, regardless of the user's browser or locale. However, there are issues with `<input type="week">` because browser support is not guaranteed across all browsers.

We'll look at basic and more complex uses of `<input type="week">`, then offer advice on mitigating the browser support issue later on (see [Handling browser support](#handling_browser_support)).

### Basic uses of week

The most basic use of `<input type="week">` involves a basic `<input>` and {{htmlelement("label")}} element combination, as seen below:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Controlling input size

`<input type="week">` doesn't support form sizing attributes such as [`size`](/en-US/docs/Web/HTML/Element/input#size). You'll have to resort to [CSS](/en-US/docs/Web/CSS) for sizing needs.

### Using the step attribute

You should be able to use the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute to vary the number of weeks jumped whenever they are incremented or decremented, however it doesn't seem to have any effect on supporting browsers.

## Validation

By default, `<input type="week">` does not apply any validation to entered values. The UI implementations generally don't let you specify anything that isn't a valid week/year, which is helpful, but it's still possible to submit with the field empty, and you might want to restrict the range of choosable weeks.

### Setting maximum and minimum weeks

You can use the [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes to restrict the valid weeks that can be chosen by the user. In the following example we are setting a minimum value of `Week 01, 2017` and a maximum value of `Week 52, 2017`:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Here's the CSS used in the above example. Here we make use of the {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS properties to style the input based on whether the current value is valid. We had to put the icons on a {{htmlelement("span")}} next to the input, not on the input itself, because in Chrome the generated content is placed inside the form control, and can't be styled or shown effectively.

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

The result here is that only weeks between W01 and W52 in 2017 will be seen as valid and be selectable in supporting browsers.

### Making week values required

In addition you can use the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute to make filling in the week mandatory. As a result, supporting browsers will display an error if you try to submit an empty week field.

Let's look at an example; here we've set minimum and maximum weeks, and also made the field required:

```html
<form>
  <div>
    <label for="week">What week would you like to start?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2017-W52"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

If you try to submit the form with no value, the browser displays an error. Try playing with the example now:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Here is a screenshot for those of you who aren't using a supporting browser:

![The week form control has two dashes where the week number should be. A popup with a yellow warning symbol and a 'Please fill out this field' is emanating from the two dashes, which are highlighted in blue, the same blue as the input's focus ring.](week-validation-chrome.png)

> [!WARNING]
> HTML form validation is _not_ a substitute for scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to bypass your HTML entirely and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data is submitted (or data which is too large, of the wrong type, and so forth).

## Handling browser support

As mentioned above, the major problem with using week inputs right now is browser support: Safari and Firefox don't support it on desktop, and old versions of IE don't support it.

Mobile platforms such as Android and iOS make perfect use of such input types, providing specialist UI controls that make it really easy to select values in a touchscreen environment. For example, the `week` picker on Chrome for Android looks like this:

![A modal popup. The header reads 'set week'. There are two columns: the left has 36 in the middle at full opacity, with 35 above it and 37 below being semi-opaque. On the right side, 2017 is fully opaque. There are no other options. Three text links or buttons on the bottom include 'clear' on the 'left' and 'cancel' and 'set' on the right.](week-chrome-android.png)

Non-supporting browsers gracefully degrade to a text input, but this creates problems both in terms of consistency of user interface (the presented control will be different), and data handling.

The second problem is the more serious. As mentioned earlier, with a `week` input the actual value is always normalized to the format `yyyy-Www`. When the browser falls back to a generic text input, there's nothing to guide the user toward correctly formatting the input (and it's certainly not intuitive). There are multiple ways in which people could write week values; for example:

- `Week 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- etc.

The best way to deal with week/years in forms in a cross-browser way at the moment is to get the user to enter the week number and year in separate controls ({{htmlelement("select")}} elements being popular; see below for an example), or use JavaScript libraries such as [jQuery date picker](https://jqueryui.com/datepicker/).

## Examples

In this example we create two sets of UI elements for choosing weeks: a native picker created using `<input type="week">`, and a set of two {{htmlelement("select")}} elements for choosing weeks/years in older browsers that don't support the `week` input type.

{{EmbedLiveSample('Examples', 600, 140)}}

The HTML looks like so:

```html
<form>
  <div class="nativeWeekPicker">
    <label for="week">What week would you like to start?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2018-W52"
      required />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">What week would you like to start?</p>
  <div class="fallbackWeekPicker">
    <div>
      <span>
        <label for="week">Week:</label>
        <select id="fallbackWeek" name="week"></select>
      </span>
      <span>
        <label for="year">Year:</label>
        <select id="year" name="year">
          <option value="2017" selected>2017</option>
          <option value="2018">2018</option>
        </select>
      </span>
    </div>
  </div>
</form>
```

The week values are dynamically generated by the JavaScript code below.

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

The other part of the code that may be of interest is the feature detection code. To detect whether the browser supports `<input type="week">`, we create a new {{htmlelement("input")}} element, try setting its `type` to `week`, then immediately check what its `type` is set to. Non-supporting browsers will return `text`, because the `week` type falls back to type `text`. If `<input type="week">` is not supported, we hide the native picker and show the fallback picker UI ({{htmlelement("select")}}s) instead.

```js
// Get UI elements
const nativePicker = document.querySelector(".nativeWeekPicker");
const fallbackPicker = document.querySelector(".fallbackWeekPicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const weekSelect = document.querySelector("#fallbackWeek");

// Hide fallback initially
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Test whether a new date input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "week";
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === "text") {
  // Hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // populate the weeks dynamically
  populateWeeks();
}

function populateWeeks() {
  // Populate the week select with 52 weeks
  for (let i = 1; i <= 52; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    weekSelect.appendChild(option);
  }
}
```

> [!NOTE]
> Remember that some years have 53 weeks in them (see [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! You'll need to take this into consideration when developing production apps.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        A string representing a week and year, or
        empty
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
        <a href="/en-US/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/en-US/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/en-US/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/en-US/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/en-US/docs/Web/HTML/Element/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        and {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">no corresponding role</a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The generic {{HTMLElement("input")}} element and the interface used to manipulate it, {{domxref("HTMLInputElement")}}
- [Date and time formats used in HTML](/en-US/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date), [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time), and [`<input type="month">`](/en-US/docs/Web/HTML/Element/input/month)
