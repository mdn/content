---
title: <input type="number">
slug: Web/HTML/Element/input/number
page-type: html-element
browser-compat: html.elements.input.type_number
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elements of type **`number`** are used to let the user enter a number. They include built-in validation to reject non-numerical entries.

The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

On browsers that don't support inputs of type `number`, a `number` input falls back to type `text`.

## Value

A number representing the value of the number entered into the input. You can set a default value for the input by including a number inside the [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute, like so:

```html
<input id="number" type="number" value="42" />
```

{{EmbedLiveSample('Value', 600, 40)}}

## Additional attributes

In addition to the attributes commonly supported by all {{HTMLElement("input")}} types, inputs of type `number` support these attributes.

### `list`

The values of the list attribute is the {{domxref("Element.id", "id")}} of a {{HTMLElement("datalist")}} element located in the same document. The {{HTMLElement("datalist")}} provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the [`type`](/en-US/docs/Web/HTML/Element/input#type) are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.

### `max`

The maximum value to accept for this input. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) entered into the element exceeds this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If the value of the `max` attribute isn't a number, then the element has no maximum value.

This value must be greater than or equal to the value of the `min` attribute.

### `min`

The minimum value to accept for this input. If the [`value`](/en-US/docs/Web/HTML/Element/input#value) of the element is less than this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If a value is specified for `min` that isn't a valid number, the input has no minimum value.

This value must be less than or equal to the value of the `max` attribute.

### `placeholder`

The `placeholder` attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text _must not_ include carriage returns or line feeds.

If the control's content has one directionality ({{Glossary("LTR")}} or {{Glossary("RTL")}}) but needs to present the placeholder in the opposite directionality, you can use Unicode bidirectional algorithm formatting characters to override directionality within the placeholder; see [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) for more information.

> [!NOTE]
> Avoid using the `placeholder` attribute if you can. It is not as semantically useful as other ways to explain your form, and can cause unexpected technical issues with your content. See [`<input>` labels](/en-US/docs/Web/HTML/Element/input#labels) for more information.

### `readonly`

A Boolean attribute which, if present, means this field cannot be edited by the user. Its `value` can, however, still be changed by JavaScript code directly setting the {{domxref("HTMLInputElement")}} `value` property.

> [!NOTE]
> Because a read-only field cannot have a value, `required` does not have any effect on inputs with the `readonly` attribute also specified.

### `step`

The `step` attribute is a number that specifies the granularity that the value must adhere to, or the special value `any`, which is described below. Only values which are equal to the basis for stepping ([`min`](#min) if specified, [`value`](/en-US/docs/Web/HTML/Element/input#value) otherwise, and an appropriate default value if neither of those is provided) are valid.

A string value of `any` means that no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)).

> [!NOTE]
> When the data entered by the user doesn't adhere to the stepping configuration, the {{Glossary("user agent")}} may round to the nearest valid value, preferring numbers in the positive direction when there are two equally close options.

The default stepping value for `number` inputs is `1`, allowing only integers to be entered—_unless_ the stepping base is not an integer.

## Using number inputs

The `number` input type should only be used for incremental numbers, especially when spinbutton incrementing and decrementing are helpful to user experience. The `number` input type is not appropriate for values that happen to only consist of numbers but aren't strictly speaking a number, such as postal codes in many countries or credit card numbers. For non-numeric inputs, consider using a different input type, such as [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel) or other {{HTMLElement('input')}} type with the [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) attribute:

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">` elements can help simplify your work when building the user interface and logic for entering numbers into a form. When you create a number input with the proper `type` value, `number`, you get automatic validation that the entered text is a number, and usually a set of up and down buttons to step the value up and down.

> [!WARNING]
> Logically, you should not be able to enter characters inside a number input other than numbers. Some browsers allow invalid characters, others do not; see [Firefox bug 1398528](https://bugzil.la/1398528).

> [!NOTE]
> A user can tinker with your HTML behind the scenes, so your site _must not_ use client-side validation for security purposes. You _must_ verify on the server side any transaction in which the provided value may have security implications of any kind.

Mobile browsers further help with the user experience by showing a special keyboard more suited for entering numbers when the user tries to enter a value.

### A basic number input

In its most basic form, a number input can be implemented like this:

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

{{EmbedLiveSample('A_basic_number_input', 600, 40)}}

A number input is considered valid when empty and when a single number is entered, but is otherwise invalid. If the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute is used, the input is no longer considered valid when empty.

> [!NOTE]
> Any number is an acceptable value, as long as it is a [valid floating point number](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) (that is, not [NaN](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) or [Infinity](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Placeholders

Sometimes it's helpful to offer an in-context hint as to what form the input data should take. This can be especially important if the page design doesn't offer descriptive labels for each {{HTMLElement("input")}}. This is where **placeholders** come in. A placeholder is a value most commonly used to provide a hint as to the format the input should take `value`. It is displayed inside the edit box when the element's `value` is `""`. Once data is entered into the box, the placeholder disappears; if the box is emptied, the placeholder reappears.

Here, we have an `number` input with the placeholder "Multiple of 10". Note how the placeholder disappears and reappears as you manipulate the contents of the edit field.

```html
<input type="number" placeholder="Multiple of 10" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Controlling step size

By default, the up and down buttons provided for you to step the number up and down will step the value up and down by 1. You can change this by providing a [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute, which takes as its value a number specifying the step amount. Our above example contains a placeholder saying that the value should be a multiple of 10, so it makes sense to add a `step` value of `10`:

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

{{EmbedLiveSample('Controlling_step_size', 600, 40)}}

In this example, you should find that the up and down step arrows will increase and decrease the value by 10 each time, not 1. You can still manually enter a number that's not a multiple of 10, but it will be considered invalid.

### Specifying minimum and maximum values

You can use the [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes to specify a minimum and maximum value that the field can have. For example, let's give our example a minimum of `0`, and a maximum of `100`:

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

{{EmbedLiveSample('Specifying_minimum_and_maximum_values', 600, 40)}}

In this updated version, you should find that the up and down step buttons will not allow you to go below 0 or above 100. You can still manually enter a number outside these bounds, but it will be considered invalid.

### Allowing decimal values

One issue with number inputs is that their step size is 1 by default. If you try to enter a number with a decimal (such as "1.0"), it will be considered invalid. If you want to enter a value that requires decimals, you'll need to reflect this in the `step` value (e.g. `step="0.01"` to allow decimals to two decimal places). Here's a basic example:

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

{{EmbedLiveSample("Allowing_decimal_values", 600, 40)}}

See that this example allows any value between `0.0` and `10.0`, with decimals to two places. For example, "9.52" is valid, but "9.521" is not.

If you want to allow arbitrary decimal values, you can set the `step` value to `"any"`.

### Controlling input size

{{HTMLElement("input")}} elements of type `number` don't support form sizing attributes such as [`size`](/en-US/docs/Web/HTML/Element/input#size). You'll have to resort to [CSS](/en-US/docs/Web/CSS) to change the size of these controls.

For example, to adjust the width of the input to be only as wide as is needed to enter a three-digit number, we can change our HTML to include an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) and to shorten our placeholder since the field will be too narrow for the text we have been using so far:

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Then we add some CSS to narrow the width of the element with the `id` selector `#number`:

```css
#number {
  width: 3em;
}
```

The result looks like this:

{{EmbedLiveSample('Controlling_input_size', 600, 40)}}

### Offering suggested values

You can provide a list of default options from which the user can select by specifying the [`list`](/en-US/docs/Web/HTML/Element/input#list) attribute, which contains as its value the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value. Each `option`'s `value` is the corresponding suggested value for the number entry box.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

## Validation

We have already mentioned a number of validation features of `number` inputs, but let's review them now:

- `<input type="number">` elements automatically invalidate any entry that isn't a number (or empty, unless `required` is specified).
- You can use the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute to make an empty entry invalid. (In other words, the input _must_ be filled in.)
- You can use the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute to constrain valid values to a certain set of steps (e.g., multiples of 10).
- You can use the [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes to constrain valid values to lower and upper bounds.

The following example exhibits all of the above features, as well as using some CSS to display valid and invalid icons, depending on the `input`'s value:

```html
<form>
  <div>
    <label for="balloons">Number of balloons to order (multiples of 10):</label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

{{EmbedLiveSample("Validation", 600, 110)}}

Try submitting the form with different invalid values entered — e.g., no value; a value below 0 or above 100; a value that is not a multiple of 10; or a non-numerical value — and see how the error messages the browser gives you differ with different ones.

The CSS applied to this example is as follows:

```css
div {
  margin-bottom: 10px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

Here we use the {{cssxref(":invalid")}} and {{cssxref(":valid")}} pseudo classes to display an appropriate invalid or valid icon as generated content on the adjacent {{htmlelement("span")}} element, as a visual indicator of validity.

We put it on a separate `<span>` element for added flexibility. Some browsers don't display generated content very effectively on some types of form inputs. (Read, for example, the section on [`<input type="date">` validation](/en-US/docs/Web/HTML/Element/input/date#validation).)

> [!WARNING]
> HTML form validation is _not_ a substitute for server-side scripts that ensure that the entered data is in the proper format!
>
> It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to bypass your HTML and submit the data directly to your server.
>
> If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data is submitted (or data which is too large, is of the wrong type, and so forth).

### Pattern validation

`<input type="number">` elements do not support use of the [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern) attribute for making entered values conform to a specific regex pattern.

The rationale for this is that number inputs won't be valid if they contain anything except numbers, and you can constrain the minimum and maximum number of valid digits using the [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes (as explained above).

## Accessibility

The implicit [role](/en-US/docs/Web/Accessibility/ARIA/Roles) for the `<input type="number">` element is [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role). If spinbutton is not an important feature for your form control, consider _not_ using `type="number"`. Instead, use [`inputmode="numeric"`](/en-US/docs/Web/HTML/Global_attributes/inputmode) along with a [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute that limits the characters to numbers and associated characters. With `<input type="number">`, there is a risk of users accidentally incrementing a number when they're trying to do something else. Additionally, if users try to enter something that's not a number, there's no explicit feedback about what they're doing wrong.

Also consider using the [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute to help users complete forms more quickly and with fewer chances of errors. For example, to enable autofill on a zip code field, set `autocomplete="postal-code"`.

## Examples

We've already covered the fact that by default, the increment is `1`, and you can use the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute to allow decimal inputs. Let's take a closer look.

In the following example is a form for entering the user's height. It defaults to accepting a height in meters, but you can click the relevant button to change the form to accept feet and inches instead. The input for the height in meters accepts decimals to two places.

{{EmbedLiveSample("Examples", 600, 150)}}

The HTML looks like this:

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Enter your height — meters:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="e.g. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Enter your height — </span>
    <label for="feet">feet:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">inches:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Enter height in feet and inches" />
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

You'll see that we are using many of the attributes we've already looked at in the article earlier on. Since we want to accept a meter value in centimeters, we've set the `step` value to `0.01`, so that values like _1.78_ are not seen as invalid. We've also provided a placeholder for that input.

We've hidden the feet and inches inputs initially using `style="display: none;"`, so that meters is the default entry type.

Now, onto the CSS. This looks very similar to the validation styling we saw before; nothing remarkable here.

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

And finally, the JavaScript:

```js
const metersInputGroup = document.querySelector(".metersInputGroup");
const feetInputGroup = document.querySelector(".feetInputGroup");
const metersInput = document.querySelector("#meters");
const feetInput = document.querySelector("#feet");
const inchesInput = document.querySelector("#inches");
const switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener("click", () => {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Enter height in meters";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Enter height in feet and inches";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

After declaring a few variables, an event listener is added to the `button` to control the switching mechanism. This involves changing over the button's `class` and {{HTMLElement("label")}}, and updating the display values of the two sets of inputs when the button is pressed.

(Note that we're not converting back and forth between meters and feet/inches here, which a real-life web application would probably do.)

> [!NOTE]
> When the user clicks the button, the `required` attribute(s) are removed from the input(s) we are hiding, and empty the `value` attribute(s). This is so the form can be submitted if both input sets aren't filled in. It also ensures that the form won't submit data that the user didn't mean to.
>
> If you didn't do this, you'd have to fill in both feet/inches **and** meters to submit the form!

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>A {{jsxref("Number")}} representing a number, or empty</td>
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
         <a href="/en-US/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
         <a href="/en-US/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/en-US/docs/Web/HTML/Element/input#value"><code>value</code></a>,
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
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role">spinbutton</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel)
- [Article: Why Gov.UK changed the input type for numbers](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)
