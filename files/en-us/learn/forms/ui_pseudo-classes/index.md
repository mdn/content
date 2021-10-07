---
title: UI pseudo-classes
slug: Learn/Forms/UI_pseudo-classes
tags:
  - Beginner
  - CSS
  - Example
  - Forms
  - Guide
  - HTML
  - Pseudo-classes
  - Styling
  - Web
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In the previous articles, we covered the styling of various form controls, in a general manner. This included some usage of pseudo-classes, for example using `:checked` to target a checkbox only when it is selected. In this article, we will explore in detail the different UI pseudo-classes available to us in modern browsers for styling forms in different states.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, and a basic understanding of
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">HTML</a> and
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS</a>, including general
        knowledge of
        <a
          href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >pseudo-classes and pseudo-elements</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what parts of forms are hard to style, and why; to learn
        what can be done to customize them.
      </td>
    </tr>
  </tbody>
</table>

## What pseudo-classes do we have available?

The original pseudo-classes available to us (as of [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)) that are relevant to forms are:

- {{cssxref(":hover")}}: Selects an element only when it is being hovered over by a mouse pointer.
- {{cssxref(":focus")}}: Selects an element only when it is focused (i.e. by being tabbed to via the keyboard).
- {{cssxref(":active")}}: selects an element only when it is being activated (i.e. while it is being clicked on, or when the

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  key is being pressed down in the case of a keyboard activation).

These basic pseudo-classes should be familiar to you now. More recently, the [CSS Selector Level 3](https://www.w3.org/TR/css3-selectors/) and [CSS Basic UI Level 3](https://dev.w3.org/csswg/css3-ui/#pseudo-classes) added more pseudo-classes related to HTML forms that provide several other useful targeting conditions that you can take advantage of. We'll discuss these in more detail in the sections below, but briefly, the main ones we'll be looking at are:

- {{cssxref(':required')}} and {{cssxref(':optional')}}: Targets required or optional form controls.
- {{cssxref(":valid")}} and {{cssxref(":invalid")}}, and {{cssxref(":in-range")}} and {{cssxref(":out-of-range")}}: Target form controls that are valid/invalid according to form validation constraints set on them, or in-range/out-of-range.
- {{cssxref(":enabled")}} and {{cssxref(":disabled")}}, and {{cssxref(":read-only")}} and {{cssxref(":read-write")}}: Target enabled or disabled form controls (e.g. with the `disabled` HTML attribute set), and read-write or read-only form controls (e.g. with the `readonly` HTML attribute set).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, and {{cssxref(":default")}}: Respectively target checkboxes and radio buttons that are checked, in an indeterminate state (neither checked or not checked), and the default selected option when the page loads (e.g. an [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) with the `checked` attribute set, or an [`<option>`](/en-US/docs/Web/HTML/Element/option) element with the `selected` attribute set).

There are many others too, but the ones listed above are the most obviously useful. Some of the others are aimed at solving very specific niche problems, or not very well supported in browsers yet. The ones listed above all have pretty good browser support, but of course, you should test your form implementations carefully to make sure they work for your target audience.

> **Note:** A number of the pseudo-classes discussed here are concerned with styling form controls based on their validation state (is their data valid, or not?) You'll learn much more about setting and controlling validation constraints in our next article — [Client-side form validation](/en-US/docs/Learn/Forms/Form_validation) — but for now we'll keep things simple with regards to form validation, so it doesn't confuse things.

## Styling inputs based on whether they are required or not

One of the most basic concepts with regards to client-side form validation is whether a form input is required (it has to be filled in before the form can be submitted) or optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, and {{htmlelement('textarea')}} elements have a `required` attribute available which, when set, means that you have to fill in that control before the form will successfully submit. For example:

```html
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required>
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required>
    </div>
    <div>
      <label for="email">Email address (include if you want a response): </label>
      <input id="email" name="email" type="email">
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

Here, the first name and last name are required, but the email address is optional.

You can match these two states using the {{cssxref(':required')}} and {{cssxref(':optional')}} pseudo-classes. For example, if we apply the following CSS to the above HTML:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

The required controls would have a black border, and the optional control will have a silver border, like so:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

You can also try submitting the form without filling it in, to see the client-side validation error messages browsers give you by default.

The above form isn't bad, but it isn't great either. For a start, we are signalling required versus optional status using color alone, which isn't great for colorblind people. Second, the standard convention on the web for required status is an asterisk (\*), or the word "required" being associated with the controls in question.

In the next section, we'll look at a better example of indicating required fields using `:required`, which also digs into using generated content.

> **Note:** You'll probably not find yourself using the `:optional` pseudo-class very often. Form controls are optional by default, so you could just do your optional styling by default, and add styles on top for required controls.

> **Note:** If one radio button in a same-named group of radio buttons has the `required` attribute, all the radio buttons will be invalid until one is selected, but only the one with the attribute assigned will actually match {{cssxref(':required')}}**.**

## Using generated content with pseudo-classes

In previous articles, we've seen the usage of [generated content](/en-US/docs/Web/CSS/CSS_Generated_Content), but we thought now would be a good time to talk about it in a bit more detail.

The idea is that we can use the [`::before`](/en-US/docs/Web/CSS/::before) and [`::after`](/en-US/docs/Web/CSS/::after) pseudo-elements along with the [`content`](/en-US/docs/Web/CSS/content) property to make a chunk of content appear before or after the affected element. The chunk of content is not added to the DOM, so is invisible to screenreaders; it is part of the document's styles. Because it is a pseudo element, it can be targeted with styles in the same way that any actual DOM node can.

This is really useful when you want to add a visual indicator to an element, such as a label or icon, but don't want it to be picked up by assistive technologies. For example, in our [custom radio buttons example](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html), we use generated content to handle the placement and animation of the inner circle when a radio button is selected:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

This is really useful — screenreaders already let their users know when a radio button or checkbox they encounter is checked/selected, so you don't want them to read out another DOM element that indicates selection — that could be confusing. Having a purely visual indicator solves this problem.

> **Note:** This also shows how you can combine a pseudo-class and pseudo-element if required.

Back to our required/optional example from before, this time we'll not alter the appearance of the input itself — we'll use generated content to add an indicating label ([see it live here](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), and see the [source code here](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/required-optional-generated.html)).

First of all, we'll add a paragraph to the top of the form to say what you are looking for:

```html
<p>Required fields are labelled with "required".</p>
```

Screenreader users will get "required" read out as an extra bit of information when they get to each required input, which sighted users will get our label.

Since form inputs don't directly support having generated content put on them (this is because generated content is placed relative to an element's formatting box, but form inputs work more like replaced elements and therefore don't have one), we will add an empty [`<span>`](/en-US/docs/Web/HTML/Element/span) to hang the generated content on:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required>
  <span></span>
</div>
```

The immediate problem with this was that the span was dropping onto a new line below the input because the input and label are both set with `width: 100%`. To fix this we style the parent `<div>` to become a flex container, but also tell it to wrap its contents onto new lines if the content becomes too long:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

The effect this has is that the label and input sit on separate lines because they are both `width: 100%`, but the `<span>` has a width of 0 so can sit on the same line as the input.

Now onto the generated content. We create it using this CSS:

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

We set the `<span>` to `position: relative` so that we can set the generated content to `position: absolute` and position it relative to the `<span>` rather than the \<body> (The generated content acts as though it is a child node of the element it is generated on, for the purposes of positioning).

Then we give the generated content the content "required", which is what we wanted our label to say, and style and position it as we want. The result is seen below.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling controls based on whether their data is valid

The other really important, fundamental concept in form validation is whether a form control's data is valid or not (in the case of numerical data, we can also talk about in-range and out-of-range data). Form controls with [constraint limitations](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) can be targeted based on these states.

### :valid and :invalid

You can target form controls using the {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes. Some points worth bearing in mind:

- Controls with no constraint validation will always be valid, and therefore matched with `:valid`.
- Controls with `required` set on them that have no value are counted as invalid — they will be matched with `:invalid` and `:required`.
- Controls with built-in validation, such as `<input type="email">` or `<input type="url">` are (matched with) `:invalid` when the data entered into them does not match the pattern they are looking for (but they are valid when empty).
- Controls whose current value is outside the range limits specified by the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max","input")}} attributes are (matched with) `:invalid`, but also matched by {{cssxref(":out-of-range")}}, as you'll see later on.
- There are some other ways to make an element matched by `:valid`/`:invalid`, as you'll see in the [Client-side form validation](/en-US/docs/Learn/Forms/Form_validation) article. But we'll keep things simple for now.

Let's go in and look at a simple example of `:valid`/`:invalid` (see [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) for the live version, and also check out the [source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/valid-invalid.html)).

As in the previous example, we've got extra `<span>`s to generate content on, which we'll use to provide indicators of valid/invalid data:

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required>
  <span></span>
</div>
```

To provide these indicators, we use the following CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: '✖';
  color: red;
}

input:valid + span::before {
  content: '✓';
  color: green;
}
```

As before, we set the `<span>`s to `position: relative` so that we can position the generated content relative to them. We then absolutely position different generated content depending on whether the form's data is valid or invalid — a green check or a red cross, respectively. To add a bit of extra urgency to the invalid data, we've also given the inputs a thick red border when invalid.

> **Note:** We've used `::before` to add these labels, as we were already using `::after` for the "required" labels.

You can try it below:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Notice how the required text inputs are invalid when empty, but valid when they have something filled in. The email input on the other hand is valid when empty, as it is not required, but invalid when it contains something that is not a proper email address.

### In-range and out-of-range data

As we hinted at above, there are two other related pseudo-classes to consider — {{cssxref(":in-range")}} and {{cssxref(":out-of-range")}}. These match numeric inputs where range limits are specified by the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max","input")}}, when their data is inside or outside the specified range, respectvely.

> **Note:** Numeric input types are `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`.

It is worth noting that inputs whose data is in-range will also be matched by the `:valid` pseudo-class and inputs whose data is out-of-range will also be matched by the `:invalid` pseudo-class. So why have both? The issue is really one of semantics — out-of-range is a more specific type of invalid communication, so you might want to provide a different message for out-of-range inputs, which will be more helpful to users than just saying "invalid". You might even want to provide both.

Let's look at an example that does exactly this. Our [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) demo (see also the [source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/out-of-range.html)) builds on top of the previous example to provide out-of-range messages for the numeric inputs, as well as saying whether they are required.

The numeric input looks like this:

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required>
  <span></span>
</div>
```

And the CSS looks like this:

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Required";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Outside allowable value range";
  left: -182px;
}
```

This is a similar story to what we had before in the `:required` example, except that here we've split out the declarations that apply to any `::after` content into a separate rule, and given the separate `::after` content for `:required` and `:out-of-range` states their own content and styling. You can try it here:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

It is possible for the number input to be both required and out-of-range at the same time, so what happens then? Because the `:out-of-range` rule appears later in the source code than the `:required` rule, the [cascade rules](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) come into play, and the out of range message is shown.

This works quite nicely — when the page first loads, "Required" is shown, along with a red cross and border. When you've typed in a valid age (i.e. in the range of 12-120), the input turns valid. If however, you then change the age entry to one that is out of range, the "Outside allowable value range" message then pops up in place of "Required".

> **Note:** To enter an invalid/out-of-range value, you'll have to actually focus the form and type it in using the keyboard. The spinner buttons won't let you increment/decrement the value outside the allowable range.

## Styling enabled and disabled inputs, and read-only and read-write

An enabled element is an element that can be activated; it can be selected, clicked on, typed into, etc.  A disabled element on the other hand cannot be interacted with in any way, and its data isn't even sent to the server

These two states can be targeted using {{cssxref(":enabled")}} and {{cssxref(":disabled")}}. Why are disabled inputs useful? Well, sometimes if some data does not apply to a certain user, you might not even want to submit that data when they submit the form. A classic example is a shipping form — commonly you'll get asked if you want to use the same address for billing and shipping; if so, you can just send a single address to the server, and might as well just disable the billing address fields.

Let's have a look at an example that does just this. First of all, the HTML is a simple form containing text inputs, plus a checkbox to toggle disabling the billing address on and off. The billing address fields are disabled by default.

```html
<form>
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <div>
      <label for="name1">Name: </label>
      <input id="name1" name="name1" type="text" required>
    </div>
    <div>
      <label for="address1">Address: </label>
      <input id="address1" name="address1" type="text" required>
    </div>
    <div>
      <label for="pcode1">Zip/postal code: </label>
      <input id="pcode1" name="pcode1" type="text" required>
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <div>
      <label for="billing-checkbox">Same as shipping address:</label>
      <input type="checkbox" id="billing-checkbox" checked>
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">Name: </label>
      <input id="name" name="name" type="text" disabled required>
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">Address: </label>
      <input id="address2" name="address2" type="text" disabled required>
    </div>
    <div>
      <label for="pcode2" class="billing-label disabled-label">Zip/postal code: </label>
      <input id="pcode2" name="pcode2" type="text" disabled required>
    </div>
  </fieldset>

  <div><button>Submit</button></div>
</form>
```

Now onto the CSS. The most relevant parts of this example are as follows:

```css
input[type="text"]:disabled {
    background: #eee;
    border: 1px solid #ccc;
}

.disabled-label {
  color: #aaa;
}
```

We've directly selected the inputs we want to disable using `input[type="text"]:disabled`, but we also wanted to gray out the corresponding text labels. These weren't quite as easy to select, so we've used a class to provide them with that styling.

Now finally, we've used some JavaScript to toggle the disabling of the billing address fields:

```js
// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {

  // Attach `change` event listener to checkbox
  document.getElementById('billing-checkbox').addEventListener('change', toggleBilling);
}, false);

function toggleBilling() {
  // Select the billing text fields
  let billingItems = document.querySelectorAll('#billing input[type="text"]');
  // Select the billing text labels
  let billingLabels = document.querySelectorAll('.billing-label');

  // Toggle the billing text fields and labels
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;

    if(billingLabels[i].getAttribute('class') === 'billing-label disabled-label') {
      billingLabels[i].setAttribute('class', 'billing-label');
    } else {
      billingLabels[i].setAttribute('class', 'billing-label disabled-label');
    }
  }
}
```

It uses the [`change` event](/en-US/docs/Web/API/HTMLElement/change_event) to let the user enable/disable the billing fields, and toggle the styling of the associated labels.

You can see the example in action below (also [see it live here](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), and see the [source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Read-only and read-write

In a similar manner to `:disabled` and `:enabled`, the `:read-only` and `:read-write` pseudo-classes target two states that form inputs toggle between. Read-only inputs have their values submitted to the server, but the user can't edit them, whereas read-write means they can be edited — their default state.

An input is set to read-only using the `readonly` attribute. As an example, imagine a confirmation page where the developer has sent the details filled in on previous pages over to this page, with the aim of getting the user to check them all in one place, add any final data that is needed, and then confirm the order by submitting. At this point, all the final form data can be sent to the server in one go.

Let's look at what a form might look like (see [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) for the live example; also [see the source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/readonly-confirmation.html)).

A fragment of the HTML is as follows — note the readonly attribute:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text"
         value="Mr Soft" readonly>
</div>
```

If you try the live example, you'll see that the top set of form elements are not focusable, however, the values are submitted when the form is submitted. We've styled the form controls using the `:read-only` and `:read-write` pseudo-classes, like so:

```css
input:-moz-read-only, textarea:-moz-read-only,
input:read-only, textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Firefox only supported these pseudo-classes with a prefix up to version 78; at which point it started to support the unprefixed version. The full example looks like so:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Note:** `:enabled` and `:read-write` are two more pseudo-classes that you'll probably rarely use, given that they describe the default states of input elements.

## Radio and checkbox states — checked, default, indeterminate

As we've seen in earlier articles in the module, {{HTMLElement("input/radio", "radio buttons")}} and {{HTMLElement("input/checkbox", "checkboxes")}} can be checked or unchecked. But there are a couple of other states to consider too:

- {{cssxref(":default")}}: Matches radios/checkboxes that are checked by default, on page load (i.e. by setting the `checked` attribute on them) These match the {{cssxref(":default")}} pseudo-class, even if the user unchecks them.
- {{cssxref(":indeterminate")}}: When radios/checkboxes are neither checked nor unchecked, they are considered _indeterminate_ and will match the {{cssxref(":indeterminate")}} pseudo-class. More on what this means below.

### :checked

When checked, they will be matched by the {{cssxref(":checked")}} pseudo-class.

The most common use of this is to add a different style onto the checkbox/radiobutton when it is checked, in cases where you've removed the system default styling with `appearance: none;` and want to build the styles back up yourself. We saw examples of this in the previous article when we talked about [Using `appearance: none` on radios/checkboxes](/en-US/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes).

As a recap, the `:checked` code from our [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) example looks like so:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

You can try it out here:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/radios-styled.html", '100%', 200)}}

Basically, we build the styling for the radio button "inner circle" using the `::before` pseudo element, but set a `scale(0)` [`transform`](/en-US/docs/Web/CSS/transform) on it. We then use a [`transition`](/en-US/docs/Web/CSS/transition) to make it nicely animate into view when the radio is selected/checked. The advantage of using a transform rather than transitioning [`width`](/en-US/docs/Web/CSS/width)/[`height`](/en-US/docs/Web/CSS/height) is that you can use [`transform-origin`](/en-US/docs/Web/CSS/transform-origin) to make it grow from the center of the circle, rather than having it appear to grow from the circle's corner.

### :default and :indeterminate

As mentioned above, the {{cssxref(":default")}} pseudo-class matches radios/checkboxes that are checked by default, on page load, even when unchecked. This could be useful for adding an indicator to a list of options to remind the user what the defaults (or starting options) were, in case they want to reset their choices.

Also mentioned above radios/checkboxes will be matched by the {{cssxref(":indeterminate")}} pseudo-class when they are in a state where they are neither checked nor unchecked. But what does this mean? Elements that are indeterminate include:

- {{HTMLElement("input/radio")}} inputs, when all radio buttons in a same-named group are unchecked
- {{HTMLElement("input/checkbox")}} inputs whose `indeterminate` property is set to `true` via JavaScript
- {{HTMLElement("progress")}} elements that have no value.

This isn't something you'll likely use very often. One use case could be an indicator to tell users that they really need to select a radio button before they move on.

Let's look at a couple of modified versions of the previous example that remind the user what the default option was, and style the radio buttons when indeterminate. Both of these have the following HTML structure for the inputs:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry">
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

For the `:default` example, we've added the `checked` attribute to the middle radio button input, so it will be selected by default when loaded. We then style this with the following CSS:

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

This provides a little "Default" label on the one the was originally selected when the page loaded. Note here we are using the general sibling combinator (`~`) rather than the adjacent sibling combinator (`+`) — we need to do this because the `<span>` does not come right after the `<input>` in the source order.

See the live result below:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> **Note:** You can also find the example live on GitHub at [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) (also see the [source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/radios-checked-default.html).)

For the `:indeterminate` example, we've got no default selected radio button — this is important — if there was, then there would be no indeterminate state to style. We style the indeterminate radio buttons with the following CSS:

```css
input[type="radio"]:indeterminate {
  border: 2px solid red;
  animation: 0.4s linear infinite alternate border-pulse;
}

@keyframes border-pulse {
  from {
    border: 2px solid red;
  }

  to {
    border: 6px solid red;
  }
}
```

This creates a fun little animated border on the radio buttons, which hopefully indicates that you need to select one of them!

See the live result below:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> **Note:** You can also find the example live on GitHub at [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) (also see the [source code](https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> **Note:** You can find an [interesting example involving `indeterminate` states](/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) on the [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) reference page.

## More pseudo-classes

There are a number of other pseudo-classes of interest, and we don't have space to write about them all in detail here. Let's talk about a few more that you should take the time to investigate.

The following are fairly well-supported in modern browsers:

- The {{cssxref(":focus-within")}} pseudo-class matches an element that has received focus or _contains_ an element that has received focus. This is useful if you want a whole form to highlight in some way when an input inside it is focused.
- The {{cssxref(":focus-visible")}} pseudo-class matches focused elements that received focus via keyboard interaction (rather than touch or mouse) — useful if you want to show a different style for keyboard focus compared to mouse (or other) focus.
- The {{cssxref(":placeholder-shown")}} pseudo-class matches {{htmlelement('input')}} and {{htmlelement('textarea')}} elements that have their placeholder showing (i.e. the contents of the [`placeholder`](/en-US/docs/Web/HTML/Attributes/placeholder) attribute) because the value of the element is empty.

The following are also interesting, but as yet not well-supported in browsers:

- The {{cssxref(":blank")}} pseudo-class selects empty form controls. {{cssxref(":empty")}} also matches elements that have no children, like {{HTMLElement("input")}}, but it is more general — it also matches other empty elements like {{HTMLElement("br")}} and {{HTMLElement("hr")}}. `:empty` has reasonable browser support; the `:blank` pseudo-class's specification is not yet finished, so it not yet supported in any browser.
- The [`:user-invalid`](https://drafts.csswg.org/selectors-4/#user-invalid-pseudo) pseudo-class, when supported, will be similar to {{cssxref(":invalid")}}, but with better user experience. If the value is valid when the input receives focus, the element may match `:invalid` as the user enters data if the value is temporarily invalid, but will only match `:user-invalid` when the element loses focus. If the value was originally invalid, it will match both `:invalid` and `:user-invalid` for the whole duration of the focus. In a similar manner to `:invalid`, it will stop matching `:user-invalid` if the value does become valid.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Advanced styling](/en-US/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Summary

This completes our look at UI pseudo-classes that relate to form inputs. Keep playing with them, and create some fun form styles! Next up, we'll move on to something different — [client-side form validation](/en-US/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

## In this module

- [Your first form](/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure a web form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [Basic native form controls](/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [The HTML5 input types](/en-US/docs/Learn/Forms/HTML5_input_types)
- [Other form controls](/en-US/docs/Learn/Forms/Other_form_controls)
- [Styling web forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced form styling](/en-US/docs/Learn/Forms/Advanced_form_styling)
- [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)
- [Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- [How to build custom form controls](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
