---
title: "CSSKeywordValue: CSSKeywordValue() constructor"
short-title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
page-type: web-api-constructor
browser-compat: api.CSSKeywordValue.CSSKeywordValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSKeywordValue()`** constructor creates a new {{domxref("CSSKeywordValue")}} object which represents a CSS keyword or other identifier.

## Syntax

```js-nolint
new CSSKeywordValue(value)
```

### Parameters

- `value`
  - : A {{jsxref('String')}} that will be used to set {{domxref("CSSKeywordValue.value")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `value` parameter is not specified, or if it is an empty string.

## Examples

### Basic usage

This example sets the CSS {{cssxref('display')}} property to `initial`, constructing a `CSSKeywordValue` for the keyword.

#### HTML

The HTML defines an element on which we'll set the value of the `display` keyword, an {{htmlelement("hr")}} element, a button that will be used to set the value of the `display` keyword, and a "Reset" button to reset the example.

```html
<div id="myElement">
  Check the developer tools to see the log in the console and to inspect this
  div's style attributes.
</div>
<hr />
<button id="set-initial" type="button">Set initial</button>
<button id="reset" type="button">Reset</button>
```

#### CSS

The CSS initially sets the element to `flex`, which forces it to display full-width, and gives it a solid border with padding and margins.

```css
#myElement {
  display: flex;
  border: solid;
  padding: 10px;
  margin: 5px;
}
```

#### JavaScript

The code first gets a handle to the "Set initial" button and adds a listener to handle the click event when it is pressed.

The listener then gets the element's inline styles using {{domxref("HTMLElement.attributeStyleMap")}}, and sets the `display` attribute with a newly constructed `CSSKeywordValue`.
It then logs the value of that keyword to the console.

```js
const setInitialButton = document.querySelector("#set-initial");

setInitialButton.addEventListener("click", () => {
  const myElementInlineStyles =
    document.getElementById("myElement").attributeStyleMap;
  myElementInlineStyles.set("display", new CSSKeywordValue("initial"));
  console.log(`display: ${myElementInlineStyles.get("display").value}`);
});
```

Note that we can't log the value of the inline styles before pressing the button, because there aren't any.

```js hidden
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Result

Right click on the element and open the [developer tools inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html) to inspect its styles.
You should see that `display: flex` is set on `#myElement`.
Press "Set initial" to make set the inline style of `display` to `"initial"`.
You should see the styles change in the inspector, and the element will also shrink slightly as the `flex` is disabled.

{{EmbedLiveSample("Basic usage", 120, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
