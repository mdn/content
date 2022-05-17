---
title: HTMLInputElement.showPicker()
slug: Web/API/HTMLInputElement/showPicker
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - Reference
browser-compat: api.HTMLInputElement.showPicker
---
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.showPicker()`** method displays the browser picker for an `input` element.

This is the same picker that would normally be displayed when the element is selected, but can be triggered from a button press or other user interaction.

Commonly browsers implement it for inputs of these types: `"date"`, `"month"`, `"week"`, `"time"`, `"datetime-local"`, `"color"`, or `"file"`.
It can also be prepopulated with items from a {{htmlelement("datalist")}} element or [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.

More generally, this method should ideally display the picker for any input element on the platform that has a picker.

## Syntax

```js
showPicker()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the element is not mutable, meaning that the user cannot modify it and/or that it cannot be automatically prefilled.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if not explicitly triggered by a user action such as a touch gesture or mouse click (the picker requires {{Glossary("Transient activation")}}).
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if called in a cross-origin iframe, except for file and color pickers (exempt for historical reasons).

## Examples

### Feature Detection

The code below shows how to check if `showPicker()` is supported:

```js
if ('showPicker' in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### Showing the normal pickers

This example shows how the picker can be launched for each of the inputs that normally support this feature.

#### HTML

```html
<p>
<input type="color">
<button id ="color">Show the color picker</button>
</p>

<p>
<input type="date">
<button id ="date">Show the date picker</button>
</p>

<p>
<input type="datetime-local">
<button id ="datetime-local">Show the datetime-local picker</button>
</p>

<p>
<input type="file">
<button id ="file">Show the file picker</button>
</p>

<p>
<input type="month">
<button id ="month">Show the month picker</button>
</p>

<p>
<input type="time">
<button id ="time">Show the time picker</button>
</p>

<p>
<input type="week">
<button id ="week">Show the week picker</button>
</p>
```

#### JavaScript

The code simply gets the previous element of the selected button and calls `showPicker()` on it.

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch(error) {
      window.alert(error);
    }
  });
});
```

#### Result

Click the button next to each input type to show its picker.

{{EmbedLiveSample("Showing the normal pickers","600px", "350px")}}

### showPicker() for a datalist input

This example shows how to show the picker for a input that specifies a text-based [`<datalist>`](/en-US/docs/Web/HTML/Element/datalist) (the same approach would work for other lists).

#### HTML

Here we define a `<datalist>` in HTML consisting of a number of internet browsers.

```html
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
<input type="text" list="browsers">
<button>Select browser</button>
```

#### JavaScript

The code below shows the picker for the input when the button is clicked.

```js
  const button = document.querySelector("button");
  const browserInput = document.querySelector("input");

  button.addEventListener("click", () => {
    try {
      browserInput.showPicker();
    } catch (error) {
      // Fall back to another picker mechanism
    }
  });
```

#### Result

Click the button to show the picker for the "browser options" input:

{{EmbedLiveSample("showPicker() for a datalist input","600px", "50px")}}

### showPicker() for autocomplete

This example shows how to show the picker for an [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) input.

#### HTML

Here we define an input that takes an autocomplete option of "name".

```html
<input autocomplete="name">
<button>Show autocomplete options</button>
```

#### JavaScript

The code below shows the picker for the input when the button is clicked.

```js
  const button = document.querySelector("button");
  const browserInput = document.querySelector("input");

  button.addEventListener("click", () => {
    try {
      browserInput.showPicker();
    } catch (error) {
      // Fall back to another picker mechanism
    }
  });
```

#### Result

Click the button to show the picker for the "name" autocomplete input:

{{EmbedLiveSample("showPicker() for autocomplete","600px", "50px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
- {{htmlelement("datalist")}}
- [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete)
