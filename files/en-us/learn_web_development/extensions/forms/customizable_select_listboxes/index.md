---
title: Customizable select listboxes
short-title: Customizable listboxes
slug: Learn_web_development/Extensions/Forms/Customizable_select_listboxes
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

This article follows on from the previous one, and looks at how to style customizable listbox {{htmlelement("select")}} elements.

One of the major advantages of customizable `<select>` listboxes over "classic" select listboxes is that you can fully style all parts of the control, and you can include a much wider variety of child elements inside them, which means greater flexibility in terms of design and functionality.

## Select listboxes vs dropdown selects

In the previous article we talked about "dropdown" `<select>` elements, which are controls that have a button that, when pressed, shows a dropdown picker from which you can select an option. These are specified using basic HTML such as `<select>`.

"Listbox" `<select>` elements by contrast are controls featuring a box that shows multiple options at once, from which you can select one or multiple options. You opt into rendering a "listbox" select by specifying the `multiple` attribute (to allow multiple selections) and/or a `size` value of more than `1`. For example, `<select multiple>` or `<select size="3">`.

The following live example illustrates the difference:

```html hidden live-sample___select-comparison
<form>
  <p>
    <label for="pet-select">Select pet dropdown:</label><br />
    <select id="pet-select">
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="chicken">Chicken</option>
      <option value="fish">Fish</option>
      <option value="Hamster">Hamster</option>
    </select>
  </p>
  <p>
    <label for="pet-select2">Select pets listbox:</label><br />
    <select id="pet-select2" multiple>
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="chicken">Chicken</option>
      <option value="fish">Fish</option>
      <option value="hamster">Hamster</option>
    </select>
  </p>
</form>
```

```css hidden live-sample___select-comparison
select,
::picker(select) {
  appearance: base-select;
}

form {
  display: flex;
  gap: 100px;
  justify-content: center;
}
```

{{EmbedLiveSample("select-comparison", "100%", "200px")}}

> [!NOTE]
> The `multiple` attribute, as well as any `size` value greater than `1`, opts the `<select>` element into listbox mode.

### How do customizable listboxes compare to customizable dropdowns?

A customizable listbox `<select>` is easier to style than the dropdown variant:

- There is no dropdown picker, so you don't need to worry about styling it with the {{cssxref("::picker()", "::picker(select)")}} pseudo-element or its {{cssxref(":open")}} and closed states.
- You don't need to worry about styling the select button's icon using {{cssxref("::picker-icon")}}, or manipulating how the currently selected `<option>` is displayed inside the button using the {{htmlelement("selectedcontent")}} element.
- There is only a single container involved; you don't need to worry about the position of the picker relative to the button.

## A basic customized listbox

Let's walk through a basic example to show how a customized listbox is implemented. The markup for this example looks like so:

```html live-sample___basic-listbox live-sample___expanding-listbox
<p>
  <label for="pet-select">Select pets:</label><br />
  <select id="pet-select" multiple>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="chicken">Chicken</option>
    <option value="fish">Fish</option>
    <option value="hamster">Hamster</option>
  </select>
</p>
```

There is nothing remarkable here. Note that we are rendering our listbox using `<select multiple>` rather than `<select size="3">`. The only difference is that we can select multiple options rather than a single option. The styling works in exactly the same way.

We begin our styling by opting the `<select>` into custom styling with an {{cssxref("appearance")}} value of `base-select`:

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  appearance: base-select;
}
```

With that done, we can now style our {{htmlelement("select")}} and {{htmlelement("option")}} elements however we want.

Our basic styles look like this:

```css live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox
select {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #eee;
  width: 200px;
  height: 130px;
}

option {
  background: #eee;
  padding: 10px;
  height: 40px;
  outline: none;
}

option:nth-of-type(odd) {
  background: #fff;
}
```

Next, we set an {{cssxref("order")}} value of `1` on the {{cssxref("::checkmark")}} pseudo-element to make the checkmark for selected options appear on the right rather than the left, and set a custom checkmark icon using the {{cssxref("content")}} property.

```css live-sample___basic-listbox live-sample___expanding-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Finally, we set a `bold` {{cssxref("font-weight")}} on {{cssxref(":checked")}} options, and a custom {{cssxref("background")}} color for option {{cssxref(":hover")}} and {{cssxref(":focus")}} states so that you always know which option you have hovered or focused.

```css live-sample___basic-listbox live-sample___expanding-listbox
option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

This example renders like so:

{{EmbedLiveSample("basic-listbox", "100%", "200px")}}

## Listbox style variations

Because customized listboxes are just standard HTML elements, you can style them however you want. In this section we show you a couple of variations on the previous example. They both use the same or similar markup; we've added a bit of extra CSS to significantly change the look and feel.

### Expanding listbox

In this example, we present the listbox at the {{cssxref("height")}} of a single option by default, hiding the {{cssxref("overflow")}} this creates, and adding a {{cssxref("transition")}} to smoothly animate the `<select>` height when its state changes. We also set an {{cssxref("interpolate-size")}} value of `allow-keywords` to opt the browser in to animating between lengths and keywords.

```css live-sample___expanding-listbox
select {
  height: 44px;
  overflow: hidden;
  transition: 0.6s height;
  interpolate-size: allow-keywords;
}
```

We change the `height` to `fit-content` when the `<select>` is hovered or focused so that it expands to its full height. Note that when you tab into a customized select, the first `<option>` receives the focus rather than the `<select>` itself. As a result, we had to use `select:has(option:focus)` to select the `<select>` when an `<option>` is focused, rather than just `select:focus`.

```css live-sample___expanding-listbox
select:hover,
select:has(option:focus) {
  height: fit-content;
}
```

The example now renders like this:

{{EmbedLiveSample("expanding-listbox", "100%", "260px")}}

### Horizontal listbox

In this example, we present the listbox options horizontally rather than vertically.

The HTML is the same as the previous examples, except that we've included an extra wrapper `<div>` to allow us to set a `width` on the `<select>` and then a different `width` on the wrapper so that all the `<option>` elements can be kept on one line and scrolled when the `<select>` becomes too narrow to fit them all.

```html live-sample___horizontal-listbox
<p>
  <label for="pet-select">Select pets:</label><br />
  <select id="pet-select" multiple>
    <div class="wrapper">
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="chicken">Chicken</option>
      <option value="fish">Fish</option>
      <option value="hamster">Hamster</option>
      <option value="gerbil">Gerbil</option>
      <option value="guinea">Guinea pig</option>
    </div>
  </select>
</p>
```

In the CSS, we start by setting the containing {{htmlelement("p")}} element's {{cssxref("width")}} and {{cssxref("margin")}} so that the demo will be centered horizontally in the viewport and take up most of the width. We then size the `<select>` to take up the full width of its parent and only be as tall as the `<option>` elements. The `.wrapper` `<div>` is given a {{cssxref("display")}} value of `flex`, causing the `<option>` elements to be laid out horizontally in a row; we then set its `width` so that it is always as wide as the `<option>` elements.

```css live-sample___horizontal-listbox
p {
  width: 90%;
  margin: 0 auto;
}

select {
  width: 100%;
  height: fit-content;
}

.wrapper {
  display: flex;
  width: fit-content;
}
```

Next, we give the `<option>` elements some extra padding to space them out horizontally, and a {{cssxref("position")}} value of relative so we can position their descendants relative to them.

```css live-sample___horizontal-listbox
option {
  padding: 10px 30px;
  position: relative;
}
```

Finally, we absolutely position the option checkmarks and give them a custom look.

```css live-sample___horizontal-listbox
option::checkmark {
  position: absolute;
  top: -2px;
  left: 2px;
  font-size: 1.5rem;
  color: red;
  text-shadow: 1px 1px 1px black;
}
```

```css hidden live-sample___horizontal-listbox
option:hover,
option:focus {
  background: plum;
}
```

Our second variation renders like this:

{{EmbedLiveSample("horizontal-listbox", "100%", "100px")}}

## A more complex listbox

In this section we'll walk through a more complex example, which provides a contact picker listbox with a built-in filter field and a link to access a (fictional) contact editing mode.

### HTML

In the markup, we include a {{htmlelement("form")}} that contains a heading and a wrapper {{htmlelement("div")}}. Inside the wrapper, we include three more `<div>` elements that respectively contain a text {{htmlelement("input")}} representing our filter field, a listbox {{htmlelement("select")}}, and a link. The `<select>` will be populated with {{htmlelement("option")}} elements representing our contact choices via JavaScript.

```html live-sample___complex-listbox
<form>
  <h2>Contact select</h2>
  <div class="wrapper">
    <div class="filter">
      <input
        type="text"
        aria-label="Filter contacts"
        placeholder="Filter by name, e.g. amara" />
    </div>
    <div class="options">
      <select
        multiple
        name="contact-select"
        aria-label="Select contacts"></select>
    </div>
    <div class="edit">
      <a href="#">Edit contacts</a>
    </div>
  </div>
</form>
```

### CSS

We start our CSS by opting the `<select>` element into custom styling, as before:

```css hidden live-sample___complex-listbox
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___complex-listbox
select {
  appearance: base-select;
}
```

Most of the styling is fairly rudimentary, but we'll run through it, pointing out anything significant along the way. First of all, we style the `.wrapper` `<div>`, giving it a fixed {{cssxref("width")}} that controls the horizontal sizing of the entire control.

```css live-sample___complex-listbox
.wrapper {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #ddd;
  width: 250px;
}
```

Next, we style the filter `<input>`, the `.options` `<div>` and the contained `<select>`, and the `.edit` `<div>` containing the link. Most notably, we give the `<select>` a fixed {{cssxref("height")}} and an {{cssxref("overflow-y")}} value of `scroll` so that the contained `<option>` elements will scroll inside it.

```css live-sample___complex-listbox
.filter input {
  display: block;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #bbb;
  width: 95%;
  margin: 8px auto;
}

.options {
  padding: 0 5px;
  background: #ddd;
}

select {
  height: 200px;
  overflow-y: scroll;
  width: 100%;
  border: 1px solid #bbb;
}

.edit {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

We style our `<option>` elements in a similar manner to earlier examples, giving them zebra-striping, and clear `:hover` and `:focus` styles:

```css live-sample___complex-listbox
option {
  background: #eee;
  padding: 10px;
}

option:nth-of-type(odd) {
  background: #fff;
}

option:checked {
  font-weight: bold;
}

option:hover,
option:focus {
  background: plum;
}
```

Our next step is to get rid of the default focus outline for the `<input>`, `<option>`, and `<a>` elements. We already provided alternative styling for the `<option>` elements in the previous code block; here, we provide more subtle alternatives for the `<input>` and `<a>` elements.

```css live-sample___complex-listbox
input,
option,
a {
  outline: none;
}

input:hover,
input:focus {
  border: 1px solid #999;
  background: #eef;
}

.edit a {
  color: #333;
}

a:hover,
a:focus {
  outline: 2px dotted #666;
}
```

Finally, we provide custom styling for the checkmarks of selected options via the `::checkmark` pseudo-element:

```css live-sample___complex-listbox
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

### JavaScript

The last addition our example needs is some JavaScript to power the option populating and filtering functionality.

In a real site you will probably pull in an up-to-date contacts list from a server, but in this case we've provided the data in a static `contacts` object (we've hidden most of the contacts for brevity). For each contact, we store a name and a boolean indicating if they were selected in the `<select>` element.

```js
const contacts = [
  { name: "Aisha Khan", selected: false },
  // …
];
```

```js hidden live-sample___complex-listbox
const contacts = [
  { name: "Aisha Khan", selected: false },
  { name: "Aisyah Rahman", selected: false },
  { name: "Amara Okafor", selected: false },
  { name: "Ananya Sharma", selected: false },
  { name: "Andrei Popescu", selected: false },
  { name: "Anh Nguyen", selected: false },
  { name: "Arjun Patel", selected: false },
  { name: "Arun Prasetyo", selected: false },
  { name: "Aya Nakamura", selected: false },
  { name: "Benjamin Brown", selected: false },
  { name: "Carlos Mendez", selected: false },
  { name: "Chloe Dubois", selected: false },
  { name: "Clara Fischer", selected: false },
  { name: "Daniel Kim", selected: false },
  { name: "Daniel Muller", selected: false },
  { name: "Diego Alvarez", selected: false },
  { name: "Ethan Williams", selected: false },
  { name: "Fatima Al-Farsi", selected: false },
  { name: "Freya Andersen", selected: false },
  { name: "Gabriel Costa", selected: false },
  { name: "Hannah Cohen", selected: false },
  { name: "Hiroshi Tanaka", selected: false },
  { name: "Isabella Martinez", selected: false },
  { name: "Jakub Novak", selected: false },
  { name: "Jonas Schmidt", selected: false },
  { name: "Kanya Chaiyaporn", selected: false },
  { name: "Kwame Mensah", selected: false },
  { name: "Leila Haddad", selected: false },
  { name: "Lena Gruber", selected: false },
  { name: "Liam O'Connor", selected: false },
  { name: "Liam Silva", selected: false },
  { name: "Lucas Silva", selected: false },
  { name: "Maria Santos", selected: false },
  { name: "Mariam Said", selected: false },
  { name: "Mateo Garcia", selected: false },
  { name: "Maya Chen", selected: false },
  { name: "Maya Nguyen", selected: false },
  { name: "Mohamed Salah", selected: false },
  { name: "Nadia Rahman", selected: false },
  { name: "Nathan Lee", selected: false },
  { name: "Nguyen Minh", selected: false },
  { name: "Noah Kim", selected: false },
  { name: "Oliver Smith", selected: false },
  { name: "Omar Hassan", selected: false },
  { name: "Ravi Reddy", selected: false },
  { name: "Samuel Johnson", selected: false },
  { name: "Sofia Rossi", selected: false },
  { name: "Thomas Anderson", selected: false },
  { name: "Valentina Ivanova", selected: false },
  { name: "Yusuf Demir", selected: false },
];
```

We start by grabbing references to our `.filter` `<input>` and `<select>` elements:

```js live-sample___complex-listbox
const filterInput = document.querySelector(".filter input");
const select = document.querySelector("select");
```

Next, we define a function called `populateOptions()`, which takes an array of objects as a parameter. Inside the function we first empty the contents of the `<select>` element. We then loop through the input array and create an `<option>` element for each object in the array, setting its `textContent` and `selected` properties to equal the object's `name` and `selected` properties. Each `<option>` element is appended to the DOM as a child of the `<select>`.

```js live-sample___complex-listbox
function populateOptions(array) {
  select.innerHTML = "";

  array.forEach((obj) => {
    const option = document.createElement("option");
    option.textContent = obj.name;
    option.selected = obj.selected;
    select.appendChild(option);
  });
}
```

Now we define another function, `filterOptions()`, which takes a filter string and an array of objects as parameters. We check if the string is equal to the empty string or one or more spaces by comparing the return value of its {{jsxref("String.trim", "trim()")}} method to `""`. If this returns `true`, we run the `populateOptions()` function, passing it the full array so that the `<select>` is populated with all `<option>` elements. If it returns `false`, we filter the input array using its {{jsxref("Array.filter", "filter()")}} method to include only objects whose `name` property {{jsxref("String.startsWith", "startsWith()")}} the `filter` string, then we pass the filtered array to the `populateOptions()` function so that the `<select>` is populated with a filtered set of `<option>` elements.

```js live-sample___complex-listbox
function filterOptions(filter, array) {
  if (filter.trim() === "") {
    populateOptions(array);
  } else {
    const filteredArray = array.filter((obj) =>
      obj.name.toLowerCase().startsWith(filter.toLowerCase()),
    );
    populateOptions(filteredArray);
  }
}
```

> [!NOTE]
> We convert both the object `name` and the `filter` string to lowercase using {{jsxref("String.toLowerCase", "toLowerCase()")}} so that the filter matching is case-insensitive.

Next, we add an {{domxref("Element.input_event", "input")}} event listener to the `.filter` `<input>` element so that when its value is edited, it runs the `filterOptions()` function to filter the displayed `<option>` elements. We pass it the `<input>`'s current value as the filter string, and the `contacts` array as the input array.

```js live-sample___complex-listbox
filterInput.addEventListener("input", () => {
  filterOptions(filterInput.value, contacts);
});
```

The next bit of code adds a {{domxref("HTMLElement.change_event", "change")}} event listener to the `<select>` element so that every time an `<option>` is selected or deselected, the `selected` status of the objects in the `contacts` array is synchronized with the selected status of the currently displayed `<option>` objects. This is required because every time we apply a new filter to our `<select>` element, the displayed `<option>` elements are freshly generated from the `contacts` array, which includes their selected state. If we didn't do this, we would lose our selected options each time we changed the filter.

There is no way to detect exactly which `<option>` has been changed each time one is toggled, so we have solved the problem like this:

1. Get an array of all the currently displayed `<option>` values by creating an array from the {{domxref("HTMLSelectElement.options", "select.options")}} collection using {{jsxref("Array.from")}}, then mapping it using its {{jsxref("Array.map", "map()")}} method to replace each `<option>` in the array with its value.
2. Get an array of all the currently selected `<option>` values using the same methodology, except that this time we create the input array from the {{domxref("HTMLSelectElement.selectedOptions", "select.selectedOptions")}} collection.
3. For each contact object in the `contacts` array, check whether the contact `name` property value is included in the `allCurrentValues` array using the {{jsxref("Array.includes", "includes()")}} method. If not, ignore it, so that we don't end up toggling the selected status of the contacts that aren't even displayed. If so, set the contact `selected` property to the result of checking whether the `currentSelectedValues` array {{jsxref("Array.includes", "includes()")}} the contact `name` — if this is the case, set the object property to `true`, or `false` otherwise.

```js live-sample___complex-listbox
select.addEventListener("change", () => {
  const allCurrentValues = Array.from(select.options).map(
    (option) => option.value,
  );
  const currentSelectedValues = Array.from(select.selectedOptions).map(
    (option) => option.value,
  );

  contacts.forEach((contact) => {
    if (allCurrentValues.includes(contact.name)) {
      contact.selected = currentSelectedValues.includes(contact.name);
    }
  });
});
```

Finally, we run the `populateOptions()` function, passing it the `contacts` array, so that on page load the full list of contacts is displayed.

```js live-sample___complex-listbox
populateOptions(contacts);
```

### Result

The example renders like so:

{{EmbedLiveSample("complex-listbox", "100%", "380px")}}

```css hidden live-sample___basic-listbox live-sample___expanding-listbox live-sample___horizontal-listbox live-sample___complex-listbox
@supports not (appearance: base-select) {
  body::before {
    content: "Your browser does not support `appearance: base-select`.";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

## Next up

In the next article of this module, we will explore the different [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) available to us in modern browsers for styling forms in different states.

## See also

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}
- {{cssxref("appearance")}}
- {{cssxref("::checkmark")}}
- {{cssxref(":checked")}}
- [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
