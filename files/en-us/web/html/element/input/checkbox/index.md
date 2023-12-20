---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
page-type: html-element
browser-compat: html.elements.input.type_checkbox
---

{{HTMLSidebar}}

{{htmlelement("input")}} elements of type **`checkbox`** are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note:** [Radio buttons](/en-US/docs/Web/HTML/Element/input/radio) are similar to checkboxes, but with an important distinction — [same-named radio buttons](/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group) are grouped into a set in which only one radio button can be selected at a time, whereas checkboxes allow you to turn single values on and off. Where multiple same-named controls exist, radio buttons allow one to be selected out of them all, whereas checkboxes allow multiple values to be selected.

## Value

A string representing the value of the checkbox. This is not displayed on the client-side, but on the server this is the `value` given to the data submitted with the checkbox's `name`. Take the following example:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">Subscribe to newsletter?</label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form>
```

In this example, we've got a name of `subscribe`, and a value of `newsletter`. When the form is submitted, the data name/value pair will be `subscribe=newsletter`.

If the `value` attribute was omitted, the default value for the checkbox is `on`, so the submitted data in that case would be `subscribe=on`.

> **Note:** If a checkbox is unchecked when its form is submitted, neither the name nor the value is submitted to the server. There is no HTML-only method of representing a checkbox's unchecked state (e.g. `value=unchecked`). If you wanted to submit a default value for the checkbox when it is unchecked, you could include JavaScript to create a {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} within the form with a value indicating an unchecked state.

## Additional attributes

In addition to the common attributes shared by all {{HTMLElement("input")}} elements, "`checkbox`" inputs support the following attributes.

- `checked`

  - : A [boolean](/en-US/docs/Glossary/Boolean/HTML) attribute indicating whether this checkbox is checked by default (when the page loads). It does _not_ indicate whether this checkbox is currently checked: if the checkbox's state is changed, this content attribute does not reflect the change. (Only the {{domxref("HTMLInputElement")}}'s `checked` IDL attribute is updated.)
    > **Note:** Unlike other input controls, a checkbox's value is only included in the submitted data if the checkbox is currently `checked`. If it is, then the value of the checkbox's `value` attribute is reported as the input's value, or `on` if no `value` is set.
    > Unlike other browsers, Firefox by default [persists the dynamic checked state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the [`autocomplete`](/en-US/docs/Web/HTML/Element/input#autocomplete) attribute to control this feature.

- `value`

  - : The `value` attribute is one which all {{HTMLElement("input")}}s share; however, it serves a special purpose for inputs of type `checkbox`: when a form is submitted, only checkboxes which are currently checked are submitted to the server, and the reported value is the value of the `value` attribute. If the `value` is not otherwise specified, it is the string `on` by default. This is demonstrated in the section [Value](#value) above.

## Using checkbox inputs

We already covered the most basic use of checkboxes above. Let's now look at the other common checkbox-related features and techniques you'll need.

### Handling multiple checkboxes

The example we saw above only contained one checkbox; in real-world situations you'll be likely to encounter multiple checkboxes. If they are completely unrelated, then you can just deal with them all separately, as shown above. However, if they're all related, things are not quite so simple.

For example, in the following demo we include multiple checkboxes to allow the user to select their interests (see the full version in the [Examples](#examples) section).

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

In this example you will see that we've given each checkbox the same `name`. If both checkboxes are checked and then the form is submitted, you'll get a string of name/value pairs submitted like this: `interest=coding&interest=music`. When this string reaches the server, you need to parse it other than as an associative array, so all values, not only the last value, of `interest` are captured. For one technique used with Python, see [Handle Multiple Checkboxes with a Single Serverside Variable](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable), for example.

### Checking boxes by default

To make a checkbox checked by default, you give it the `checked` attribute. See the below example:

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### Providing a bigger hit area for your checkboxes

In the above examples, you may have noticed that you can toggle a checkbox by clicking on its associated {{htmlelement("label")}} element as well as on the checkbox itself. This is a really useful feature of HTML form labels that makes it easier to click the option you want, especially on small-screen devices like smartphones.

Beyond accessibility, this is another good reason to properly set up `<label>` elements on your forms.

### Indeterminate state checkboxes

In addition to the checked and unchecked states, there is a third state a checkbox can be in: **indeterminate**. This is a state in which it's impossible to say whether the item is toggled on or off. This is set using the {{domxref("HTMLInputElement")}} object's `indeterminate` property via JavaScript (it cannot be set using an HTML attribute):

```js
inputInstance.indeterminate = true;
```

A checkbox in the indeterminate state has a horizontal line in the box (it looks somewhat like a hyphen or minus sign) instead of a check/tick in most browsers.

There are not many use cases for this property. The most common is when a checkbox is available that "owns" a number of sub-options (which are also checkboxes). If all of the sub-options are checked, the owning checkbox is also checked, and if they're all unchecked, the owning checkbox is unchecked. If any one or more of the sub-options have a different state than the others, the owning checkbox is in the indeterminate state.

This can be seen in the below example (thanks to [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) for the inspiration). In this example we keep track of the ingredients we are collecting for a recipe. When you check or uncheck an ingredient's checkbox, a JavaScript function checks the total number of checked ingredients:

- If none are checked, the recipe name's checkbox is set to unchecked.
- If one or two are checked, the recipe name's checkbox is set to `indeterminate`.
- If all three are checked, the recipe name's checkbox is set to `checked`.

So in this case the `indeterminate` state is used to state that collecting the ingredients has started, but the recipe is not yet complete.

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **Note:** If you submit a form with an indeterminate checkbox, the same thing happens as if the checkbox were unchecked — no data is submitted to represent the checkbox.

## Validation

Checkboxes do support [validation](/en-US/docs/Web/HTML/Constraint_validation) (offered to all {{HTMLElement("input")}}s). However, most of the {{domxref("ValidityState")}}s will always be `false`. If the checkbox has the [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute, but is not checked, then {{domxref("ValidityState.valueMissing")}} will be `true`.

## Examples

The following example is an extended version of the "multiple checkboxes" example we saw above — it has more standard options, plus an "other" checkbox that when checked causes a text field to appear to enter a value for the "other" option. This is achieved with a simple block of JavaScript. The example includes implicit labels, with the `<input>` directly inside the `<label>`. The text input, without a visible label, includes the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute which provides its accessible name. This example also includes some CSS to improve the styling.

### HTML

```html
<form>
  <fieldset>
    <legend>Choose your interests</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Coding
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Music
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Art
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Sports
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Cooking
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Other
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Other interest" />
    </div>
    <div>
      <button type="submit">Submit form</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

{{EmbedLiveSample('Examples', '100%', 300)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        A string representing the value of the
        checkbox.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>{{domxref("HTMLElement/change_event", "change")}} and {{domxref("HTMLElement/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Supported common attributes</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <code><a href="#checked">checked</a></code>,
        <code><a href="#indeterminate">indeterminate</a></code> and
        <code><a href="#value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS selectors that let you style checkboxes based on their current state
- {{domxref("HTMLInputElement")}}: HTML DOM API that implements the `<input>` element
- [CSS property compatibility table for form controls](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
