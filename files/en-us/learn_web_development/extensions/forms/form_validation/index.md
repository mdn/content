---
title: Client-side form validation
slug: Learn_web_development/Extensions/Forms/Form_validation
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

It is important to ensure all required form controls are filled out, in the correct format, before submitting user entered form data to the server. This **client-side form validation** helps ensure data entered matches the requirements set forth in the various form controls.

This article leads you through basic concepts and examples of client-side form validation.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Computer literacy, a reasonable understanding of
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what client-side form validation is, why it's important,
        and how to apply various techniques to implement it.
      </td>
    </tr>
  </tbody>
</table>

Client-side validation is an initial check and an important feature of good user experience; by catching invalid data on the client-side, the user can fix it straight away.
If it gets to the server and is then rejected, a noticeable delay is caused by a round trip to the server and then back to the client-side to tell the user to fix their data.

However, client-side validation _should not be considered_ an exhaustive security measure! Your apps should always perform validation, including security checks, on any form-submitted data on the _server-side_ **as well** as the client-side, because client-side validation is too easy to bypass, so malicious users can still easily send bad data through to your server.

> [!NOTE]
> Read [Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) for an idea of what _could_ happen; implementing server-side validation is somewhat beyond the scope of this module, but you should bear it in mind.

## What is form validation?

Go to any popular site with a registration form, and you will notice that they provide feedback when you don't enter your data in the format they are expecting.
You'll get messages such as:

- "This field is required" (You can't leave this field blank).
- "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).
- "Please enter a valid email address" (the data you entered is not in the right format).
- "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

This is called **form validation**.
When you enter data, the browser (and the web server) will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called **client-side** validation, while validation done on the server is called **server-side** validation.
In this chapter we are focusing on client-side validation.

If the information is correctly formatted, the application allows the data to be submitted to the server and (usually) saved in a database; if the information isn't correctly formatted, it gives the user an error message explaining what needs to be corrected, and lets them try again.

We want to make filling out web forms as easy as possible. So why do we insist on validating our forms?
There are three main reasons:

- **We want to get the right data, in the right format.** Our applications won't work properly if our users' data is stored in the wrong format, is incorrect, or is omitted altogether.
- **We want to protect our users' data**. Forcing our users to enter secure passwords makes it easier to protect their account information.
- **We want to protect ourselves**. There are many ways that malicious users can misuse unprotected forms to damage the application. See [Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Never trust data passed to your server from the client. Even if your form is validating correctly and preventing malformed input on the client-side, a malicious user can still alter the network request.

## Different types of client-side validation

There are two different types of client-side validation that you'll encounter on the web:

- **HTML form validation**
  HTML form attributes can define which form controls are required and which format the user-entered data must be in to be valid.
- **JavaScript form validation**
  JavaScript is generally included to enhance or customize HTML form validation.

Client side validation can be accomplished with little to no JavaScript. HTML validation is faster than JavaScript, but is less customizable than JavaScript validation. It is generally recommended to begin your forms using robust HTML features, then enhance the user experience with JavaScript as needed.

## Using built-in form validation

One of the most significant features of [form controls](/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) is the ability to validate most user data without relying on JavaScript.
This is done by using validation attributes on form elements.
We've seen many of these earlier in the course, but to recap:

- [`required`](/en-US/docs/Web/HTML/Attributes/required): Specifies whether a form field needs to be filled in before the form can be submitted.
- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) and [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength): Specifies the minimum and maximum length of textual data (strings).
- [`min`](/en-US/docs/Web/HTML/Attributes/min), [`max`](/en-US/docs/Web/HTML/Attributes/max), and [`step`](/en-US/docs/Web/HTML/Attributes/step): Specifies the minimum and maximum values of numerical input types, and the increment, or step, for values, starting from the minimum.
- [`type`](/en-US/docs/Web/HTML/Element/input#input_types): Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern): Specifies a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) that defines a pattern the entered data needs to follow.

If the data entered in a form field follows all of the rules specified by the attributes applied to the field, it is considered valid. If not, it is considered invalid.

When an element is valid, the following things are true:

- The element matches the {{cssxref(":valid")}} CSS pseudo-class, which lets you apply a specific style to valid elements. The control will also match {{cssxref(":user-valid")}} if the user has interacted with the control, and may match other UI pseudo-classes, such as {{cssxref(":in-range")}}, depending on the input type and attributes.
- If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).

When an element is invalid, the following things are true:

- The element matches the {{cssxref(":invalid")}} CSS pseudo-class. If the user has interacted with the control, it also matches the {{cssxref(":user-invalid")}} CSS pseudo-class. Other UI pseudo-classes may also match, such as {{cssxref(":out-of-range")}}, depending on the error. These let you apply a specific style to invalid elements.
- If the user tries to send the data, the browser will block the form submission and display an error message. The error message will differ depending on the type of error. The [Constraint Validation API](#the_constraint_validation_api) is described below.

## Built-in form validation examples

In this section, we'll test out some of the attributes that we discussed above.

### Simple start file

Let's start with a simple example: an input that allows you to choose whether you prefer a banana or a cherry.
This example involves a basic text {{HTMLElement("input")}} with an associated {{htmlelement("label")}} and a submit {{htmlelement("button")}}.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i-like" />
  <button>Submit</button>
</form>
```

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Simple_start_file", "100%", 80)}}

To begin, make a copy of the [`fruit-start.html` file found on GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) in a new directory on your hard drive.

### The required attribute

A common HTML validation feature is the [`required`](/en-US/docs/Web/HTML/Attributes/required) attribute.
Add this attribute to an input to make an element mandatory.
When this attribute is set, the element matches the {{cssxref(':required')}} UI pseudo-class and the form won't submit, displaying an error message on submission, if the input is empty.
While empty, the input will also be considered invalid, matching the {{cssxref(':invalid')}} UI pseudo-class.

If any radio button in a same-named group has the `required` attribute, one of the radio buttons in that group must be checked for the group to be valid; the checked radio doesn't have to be the one with the attribute set.

> [!NOTE]
> Only require users to input data you need: For example, is it really necessary to know someone's gender or title?

Add a `required` attribute to your input, as shown below.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry? (required)</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

We added "(required)" to the {{htmlelement("label")}} to inform the user that the {{htmlelement("input")}} is required. Indicating to the user when form fields are required is not only good user experience, it is required by WCAG [accessibility](/en-US/docs/Learn_web_development/Core/Accessibility) guidelines.

We include CSS styles that are applied based on whether the element is required, valid, and invalid:

```css
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

This CSS causes the input to have a red dashed border when it is invalid and a more subtle solid black border when valid.
We also added a background gradient when the input is required _and_ invalid. Try out the new behavior in the example below:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

Try submitting the form from the [live `required` example](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-required.html) without a value. Note how the invalid input gets focus, a default error message ("Please fill out this field") appears, and the form is prevented from being sent. You can also see the [source code on GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-required.html).

### Validating against a regular expression

Another useful validation feature is the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute, which expects a [Regular Expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) as its value.
A regular expression (regexp) is a pattern that can be used to match character combinations in text strings, so regexps are ideal for form validation and serve a variety of other uses in JavaScript.

Regexps are quite complex, and we don't intend to teach you them exhaustively in this article.
Below are some examples to give you a basic idea of how they work.

- `a` — Matches one character that is `a` (not `b`, not `aa`, and so on).
- `abc` — Matches `a`, followed by `b`, followed by `c`.
- `ab?c` — Matches `a`, optionally followed by a single `b`, followed by `c`. (`ac` or `abc`)
- `ab*c` — Matches `a`, optionally followed by any number of `b`s, followed by `c`. (`ac`, `abc`, `abbbbbc`, and so on).
- `a|b` — Matches one character that is `a` or `b`.
- `abc|xyz` — Matches exactly `abc` or exactly `xyz` (but not `abcxyz` or `a` or `y`, and so on).

There are many more possibilities that we don't cover here.
For a complete list and many examples, consult our [Regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) documentation.

Let's implement an example.
Update your HTML to add a [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute like this:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

This gives us the following update — try it out:

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

You can find this [example live on GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-pattern.html) along with the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-pattern.html).

In this example, the {{HTMLElement("input")}} element accepts one of four possible values: the strings "banana", "Banana", "cherry", or "Cherry". Regular expressions are case-sensitive, but we've made it support capitalized as well as lower-case versions using an extra "Aa" pattern nested inside square brackets.

At this point, try changing the value inside the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute to equal some of the examples you saw earlier, and look at how that affects the values you can enter to make the input value valid.
Try writing some of your own, and see how it goes.
Make them fruit-related where possible so that your examples make sense!

If a non-empty value of the {{HTMLElement("input")}} doesn't match the regular expression's pattern, the `input` will match the {{cssxref(':invalid')}} pseudo-class. If empty, and the element is not required, it is not considered invalid.

Some {{HTMLElement("input")}} element types don't need a [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute to be validated against a regular expression. For example, specifying the `email` type validates the inputs value against a well-formed email address pattern or a pattern matching a comma-separated list of email addresses if it has the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute.

> [!NOTE]
> The {{HTMLElement("textarea")}} element doesn't support the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute.

### Constraining the length of your entries

You can constrain the character length of all text fields created by {{HTMLElement("input")}} or {{HTMLElement("textarea")}} by using the [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) and [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) attributes.
A field is invalid if it has a value and that value has fewer characters than the [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) value or more than the [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) value.

Browsers often don't let the user type a longer value than expected into text fields. A better user experience than just using `maxlength` is to also provide character count feedback in an accessible manner and let the user edit their content down to size.
An example of this is the character limit when posting on social media. JavaScript, including [solutions using `maxlength`](https://github.com/mimo84/bootstrap-maxlength), can be used to provide this.

> [!NOTE]
> Length constraints are never reported if the value is set programmatically. They are only reported for user-provided input.

### Constraining the values of your entries

For numeric fields, including [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number) and the various date input types, the [`min`](/en-US/docs/Web/HTML/Attributes/min) and [`max`](/en-US/docs/Web/HTML/Attributes/max) attributes can be used to provide a range of valid values.
If the field contains a value outside this range, it will be invalid.

Let's look at another example.
Create a new copy of the [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) file.

Now delete the contents of the `<body>` element, and replace it with the following:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Here you'll see that we've given the `text` field a `minlength` and `maxlength` of six, which is the same length as banana and cherry.
- We've also given the `number` field a `min` of one and a `max` of ten.
  Entered numbers outside this range will show as invalid; users won't be able to use the increment/decrement arrows to move the value outside of this range.
  If the user manually enters a number outside of this range, the data is invalid.
  The number is not required, so removing the value will result in a valid value.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Here is the example running live:

{{EmbedLiveSample("Constraining_the_values_of_your_entries", "100%", 100)}}

Try this [example live on GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/fruit-length.html) and view the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-length.html).

Numeric input types, like `number`, `range` and `date`, can also take the [`step`](/en-US/docs/Web/HTML/Attributes/step) attribute. This attribute specifies what increment the value will go up or down by when the input controls are used (such as the up and down number buttons, or sliding the ranges thumb). The `step` attribute is omitted in our example, so the value defaults to `1`. This means that floats, like 3.2, will also show as invalid.

### Full example

Here is a full example to show usage of HTML's built-in validation features.
First, some HTML:

```html
<form>
  <fieldset>
    <legend>
      Do you have a driver's license?<span aria-label="required">*</span>
    </legend>
    <input type="radio" required name="driver" id="r1" value="yes" /><label
      for="r1"
      >Yes</label
    >
    <input type="radio" required name="driver" id="r2" value="no" /><label
      for="r2"
      >No</label
    >
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1"
      >What's your favorite fruit?<span aria-label="required">*</span></label
    >
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

And now some CSS to style the HTML:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

This renders as follows:

{{EmbedLiveSample("Full_example", "100%", 420)}}

This [full example is live on GitHub](https://mdn.github.io/learning-area/html/forms/form-validation/full-example.html) along with the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/full-example.html).

See [Validation-related attributes](/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes) for a complete list of attributes that can be used to constrain input values and the input types that support them.

## Validating forms using JavaScript

If you want to change the text of the native error messages, JavaScript is needed.
In this section we will look at the different ways to do this.

### The Constraint Validation API

The Constraint Validation API consists of a set of methods and properties available on the following form element DOM interfaces:

- [`HTMLButtonElement`](/en-US/docs/Web/API/HTMLButtonElement) (represents a [`<button>`](/en-US/docs/Web/HTML/Element/button) element)
- [`HTMLFieldSetElement`](/en-US/docs/Web/API/HTMLFieldSetElement) (represents a [`<fieldset>`](/en-US/docs/Web/HTML/Element/fieldset) element)
- [`HTMLInputElement`](/en-US/docs/Web/API/HTMLInputElement) (represents an [`<input>`](/en-US/docs/Web/HTML/Element/input) element)
- [`HTMLOutputElement`](/en-US/docs/Web/API/HTMLOutputElement) (represents an [`<output>`](/en-US/docs/Web/HTML/Element/output) element)
- [`HTMLSelectElement`](/en-US/docs/Web/API/HTMLSelectElement) (represents a [`<select>`](/en-US/docs/Web/HTML/Element/select) element)
- [`HTMLTextAreaElement`](/en-US/docs/Web/API/HTMLTextAreaElement) (represents a [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) element)

The Constraint Validation API makes the following properties available on the above elements.

- `validationMessage`: Returns a localized message describing the validation constraints that the control doesn't satisfy (if any). If the control is not a candidate for constraint validation (`willValidate` is `false`) or the element's value satisfies its constraints (is valid), this will return an empty string.
- `validity`: Returns a `ValidityState` object that contains several properties describing the validity state of the element. You can find full details of all the available properties in the {{domxref("ValidityState")}} reference page; below is listed a few of the more common ones:

  - {{domxref("ValidityState.patternMismatch", "patternMismatch")}}: Returns `true` if the value does not match the specified [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern), and `false` if it does match. If true, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
  - {{domxref("ValidityState.tooLong", "tooLong")}}: Returns `true` if the value is longer than the maximum length specified by the [`maxlength`](/en-US/docs/Web/HTML/Element/input#maxlength) attribute, or `false` if it is shorter than or equal to the maximum. If true, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
  - {{domxref("ValidityState.tooShort", "tooShort")}}: Returns `true` if the value is shorter than the minimum length specified by the [`minlength`](/en-US/docs/Web/HTML/Element/input#minlength) attribute, or `false` if it is greater than or equal to the minimum. If true, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
  - {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}: Returns `true` if the value is greater than the maximum specified by the [`max`](/en-US/docs/Web/HTML/Element/input#max) attribute, or `false` if it is less than or equal to the maximum. If true, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
  - {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}}: Returns `true` if the value is less than the minimum specified by the [`min`](/en-US/docs/Web/HTML/Element/input#min) attribute, or `false` if it is greater than or equal to the minimum. If true, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
  - {{domxref("ValidityState.typeMismatch", "typeMismatch")}}: Returns `true` if the value is not in the required syntax (when [`type`](/en-US/docs/Web/HTML/Element/input#type) is `email` or `url`), or `false` if the syntax is correct. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
  - `valid`: Returns `true` if the element meets all its validation constraints, and is therefore considered to be valid, or `false` if it fails any constraint. If true, the element matches the {{cssxref(":valid")}} CSS pseudo-class; the {{cssxref(":invalid")}} CSS pseudo-class otherwise.
  - `valueMissing`: Returns `true` if the element has a [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute, but no value, or `false` otherwise. If true, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.

- `willValidate`: Returns `true` if the element will be validated when the form is submitted; `false` otherwise.

The Constraint Validation API also makes the following methods available on the above elements and the [`form`](/en-US/docs/Web/HTML/Element/form) element.

- `checkValidity()`: Returns `true` if the element's value has no validity problems; `false` otherwise. If the element is invalid, this method also fires an [`invalid` event](/en-US/docs/Web/API/HTMLInputElement/invalid_event) on the element.
- `reportValidity()`: Reports invalid field(s) using events. This method is useful in combination with `preventDefault()` in an `onSubmit` event handler.
- `setCustomValidity(message)`: Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard HTML validation constraints. The message is shown to the user when reporting the problem.

#### Implementing a customized error message

As you saw in the HTML validation constraint examples earlier, each time a user tries to submit an invalid form, the browser displays an error message. The way this message is displayed depends on the browser.

These automated messages have two drawbacks:

- There is no standard way to change their look and feel with CSS.
- They depend on the browser locale, which means that you can have a page in one language but an error message displayed in another language, as seen in the following Firefox screenshot.

![Example of an error message with Firefox in French on an English page](error-firefox-win7.png)

Customizing these error messages is one of the most common use cases of the Constraint Validation API.
Let's work through an example of how to do this.

We'll start with some HTML (feel free to put this in a blank HTML file; use a fresh copy of [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) as a basis, if you like):

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Add the following JavaScript to the page:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Here we store a reference to the email input, then add an event listener to it that runs the contained code each time the value inside the input is changed.

Inside the contained code, we check whether the email input's `validity.typeMismatch` property returns `true`, meaning that the contained value doesn't match the pattern for a well-formed email address. If so, we call the {{domxref("HTMLInputElement.setCustomValidity()","setCustomValidity()")}} method with a custom message. This renders the input invalid, so that when you try to submit the form, submission fails and the custom error message is displayed.

If the `validity.typeMismatch` property returns `false`, we call the `setCustomValidity()` method with an empty string. This renders the input valid, so the form will submit. During validation, if any form control has a `customError` that is not the empty string, form submission is blocked.

You can try it out below:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/custom-error-message.html", '100%', 120)}}

You can find this example live on GitHub as [custom-error-message.html](https://mdn.github.io/learning-area/html/forms/form-validation/custom-error-message.html), along with the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/custom-error-message.html).

#### Extending built-in form validation

The previous example showed how you can add a customized message for a particular type of error (`validity.typeMismatch`).
It is also possible to use all of the built in form validation, and then add to it using `setCustomValidity()`.

Here we demonstrate how you can extend the built in [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email) validation to only accept addresses with the `@example.com` domain.
We start with the HTML {{htmlelement("form")}} below.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

The validation code is shown below.
In the event of any new input the code first resets the custom validity message by calling `setCustomValidity("")`.
It then uses `email.validity.valid` to check if the entered address is invalid and if so, returns from the event handler.
This ensures that all the normal built-in validation checks are run while the entered text is not a valid email address.

Once the email address is valid, the code adds a custom constraint, calling `setCustomValidity()` with an error message if the address does not end with `@example.com`.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
```

You can try this example in the page at the {{LiveSampleLink('Extending_built-in_form_validation', 'Live sample demo link')}}.
Try submitting an invalid email address, a valid email address that doesn't end in `@example.com`, and one that does end in `@example.com`.

#### A more detailed example

Now that we've seen a really basic example, let's see how we can use this API to build some slightly more complex custom validation.

First, the HTML. Again, feel free to build this along with us:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

This form uses the [`novalidate`](/en-US/docs/Web/HTML/Element/form#novalidate) attribute to turn off the browser's automatic validation. Setting the `novalidate` attribute on the form stops the form from showing its own error message bubbles, and allows us to instead display the custom error messages in the DOM in some manner of our own choosing.
However, this doesn't disable support for the constraint validation API nor the application of CSS pseudo-classes like {{cssxref(":valid")}}, etc.
That means that even though the browser doesn't automatically check the validity of the form before sending its data, you can still do it yourself and style the form accordingly.

Our input to validate is an [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email), which is `required`, and has a `minlength` of 8 characters. Let's check these using our own code, and show a custom error message for each one.

We are aiming to show the error messages inside a `<span>` element.
The [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attribute is set on that `<span>` to make sure that our custom error message will be presented to everyone, including it being read out to screen reader users.

Now onto some basic CSS to improve the look of the form slightly, and provide some visual feedback when the input data is invalid:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* error message styles */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Now let's look at the JavaScript that implements the custom error validation.
There are many ways to pick a DOM node; here we get the form itself and the email
input box, as well as the span element into which we will place the error message.

Using event handlers, we check if the form fields are valid each time the user types something. If there is an error, we show it. If there is no error, we remove any error messaging.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}
```

Every time we change the value of the input, we check to see if it contains valid data. If it has then we remove any error message being shown. If the data is not valid, we run `showError()` to show the appropriate error.

Every time we try to submit the form, we again check to see if the data is valid. If so, we let the form submit. If not, we run `showError()` to show the appropriate error, and stop the form submitting with [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault).

The `showError()` function uses various properties of the input's `validity` object to determine what the error is, and then displays an error message as appropriate.

Here is the live result:

{{EmbedGHLiveSample("learning-area/html/forms/form-validation/detailed-custom-validation.html", '100%', 150)}}

You can find this example live on GitHub as [detailed-custom-validation.html](https://mdn.github.io/learning-area/html/forms/form-validation/detailed-custom-validation.html) along with the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/detailed-custom-validation.html).

The constraint validation API gives you a powerful tool to handle form validation, letting you have enormous control over the user interface above and beyond what you can do with HTML and CSS alone.

### Validating forms without a built-in API

In some cases, such as [custom controls](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), you won't be able to or won't want to use the Constraint Validation API. You're still able to use JavaScript to validate your form, but you'll just have to write your own.

To validate a form, ask yourself a few questions:

- What kind of validation should I perform?
  - : You need to determine how to validate your data: string operations, type conversion, regular expressions, and so on. It's up to you.
- What should I do if the form doesn't validate?
  - : This is clearly a UI matter. You have to decide how the form will behave. Does the form send the data anyway?
    Should you highlight the fields that are in error?
    Should you display error messages?
- How can I help the user to correct invalid data?

  - : In order to reduce the user's frustration, it's very important to provide as much helpful information as possible in order to guide them in correcting their inputs.
    You should offer up-front suggestions so they know what's expected, as well as clear error messages.
    If you want to dig into form validation UI requirements, here are some useful articles you should read:

    - [Help users enter the right data in forms](https://web.dev/Learn_web_development/Extensions/Forms/validation/)
    - [Validating input](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### An example that doesn't use the constraint validation API

In order to illustrate this, the following is a simplified version of the previous example without the Constraint Validation API.

The HTML is almost the same; we just removed the HTML validation features.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
  </p>
  <button>Submit</button>
</form>
```

Similarly, the CSS doesn't need to change very much; we've just turned the {{cssxref(":invalid")}} CSS pseudo-class into a real class and avoided using the attribute selector.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input {
  appearance: none;
  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
  /* make sure keyboard-only users see a change when focusing */
  border-style: dashed;
}

/* error messages */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

The big changes are in the JavaScript code, which needs to do much more heavy lifting.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Update email input class based on validity
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// Update error message and visibility
const updateError = (isValidInput) => {
  if (isValidInput) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Initialize email validity on page load
const initializeValidation = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
};

// Handle input event to update email validity
const handleInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", initializeValidation);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

The result looks like this:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

As you can see, it's not that hard to build a validation system on your own. The difficult part is to make it generic enough to use both cross-platform and on any form you might create. There are many libraries available to perform form validation, such as [Validate.js](https://rickharrison.github.io/validate.js/).

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation).

## Summary

Client-side form validation sometimes requires JavaScript if you want to customize styling and error messages, but it _always_ requires you to think carefully about the user.
Always remember to help your users correct the data they provide. To that end, be sure to:

- Display explicit error messages.
- Be permissive about the input format.
- Point out exactly where the error occurs, especially on large forms.

Once you have checked that the form is filled out correctly, the form can be submitted.
We'll cover [sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) next.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

### Advanced Topics

- [How to build custom form controls](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
