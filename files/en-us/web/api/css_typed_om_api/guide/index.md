---
title: Using the CSS Typed Object Model
slug: Web/API/CSS_Typed_OM_API/Guide
page-type: guide
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

The **[CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)** exposes CSS values as typed JavaScript objects to allow their performant manipulation.

Converting [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) value strings into meaningfully-typed JavaScript representations and back (via {{domxref("HTMLElement.style")}}) can incur a significant performance overhead.

The CSS Typed OM makes CSS manipulation more logical and performant by providing object features (rather than CSSOM string manipulation), providing access to types, methods, and an object model for CSS values.

This article provides an introduction to all of its main features.

## computedStyleMap()

With the CSS Typed OM API, we can access all the CSS properties and values — including custom properties — that are impacting an element. Let's see how this works by creating our first example, which explores {{domxref('Element.computedStyleMap()', 'computedStyleMap()')}}.

### Getting all the properties and values

#### HTML

We start with some HTML: a paragraph with a link, as well as a definition list to which we will add all the CSS Property / Value pairs.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

#### JavaScript

We add JavaScript to grab our unstyled link and return back a definition list of all the default CSS property values impacting the link using `computedStyleMap()`.

```js
// Get the element
const myElement = document.querySelector("a");

// Get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const defaultComputedStyles = myElement.computedStyleMap();

// Iterate through the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of defaultComputedStyles) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

The `computedStyleMap()` method returns a {{domxref('StylePropertyMapReadOnly')}} object containing the [`size`](/en-US/docs/Web/API/StylePropertyMapReadOnly/size) property, which indicates how many properties are in the map. We iterate through the style map, creating a [`<dt>`](/en-US/docs/Web/HTML/Element/dt) and [`<dd>`](/en-US/docs/Web/HTML/Element/dd) for each property and value respectively.

#### Result

In [browsers that support `computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap#browser_compatibility), you'll see a list of all the CSS properties and values. In other browsers, you'll just see a link.

{{EmbedLiveSample("Getting_all_the_properties_and_values", 120, 300)}}

Did you realize how many default CSS properties a link had? Update the JavaScript on line 2 to select the {{htmlelement("p")}} rather than the {{htmlelement("a")}}. You'll notice a difference in the [`margin-top`](/en-US/docs/Web/CSS/margin-top) and [`margin-bottom`](/en-US/docs/Web/CSS/margin-bottom) default computed values.

### .get() method / custom properties

Let's update our example to only retrieve a few properties and values. Let's start by adding some CSS to our example, including a custom property and an inheritable property:

```css
p {
  font-weight: bold;
}

a {
  --color: red;
  color: var(--color);
}
```

Instead of getting _all_ the properties, we create an array of properties of interest and use the {{domxref('StylePropertyMapReadOnly.get()')}} method to get each of their values:

```html hidden
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

```js
// Get the element
const myElement = document.querySelector("a");

// Get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// Array of properties we're interested in
const ofInterest = ["font-weight", "border-left-color", "color", "--color"];

// iterate through our properties of interest
for (const value of ofInterest) {
  // Properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(value));
  stylesList.appendChild(cssProperty);

  // Values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(allComputedStyles.get(value)));
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample(".get_method_custom_properties", 120, 300)}}

We included {{cssxref('border-left-color')}} to demonstrate that, had we included all the properties, every value that defaults to [`currentcolor`](/en-US/docs/Web/CSS/color_value) (including {{cssxref('caret-color')}}, {{cssxref('outline-color')}}, {{cssxref('text-decoration-color')}}, {{cssxref('column-rule-color')}}, etc.) would return `rgb(255, 0, 0)`. The link has inherited `font-weight: bold;` from the paragraph's styles, listing it as `font-weight: 700`. Custom properties, like our `--color: red`, are properties. As such, they are accessible via `get()`.

You'll note that custom properties retain the value as written in the stylesheet, whereas computed styles will be listed as the computed value — {{cssxref('color')}} was listed as an [`rgb()`](/en-US/docs/Web/CSS/color_value) value and the {{cssxref('font-weight')}} returned was `700` even though we use a {{cssxref('&lt;color&gt;', 'named color')}} and the `bold` keyword.

### CSSUnitValue and CSSKeywordValue

The power of the CSS Typed OM is that values are separate from units; parsing and concatenating string values may become be a thing of the past. Every CSS property in a style map has a value. If the value is a keyword, the object returned is a [`CSSKeywordValue`](/en-US/docs/Web/API/CSSKeywordValue). If the value is numeric, a [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue) is returned.

`CSSKeywordValue` is a class that defines keywords like `inherit`, `initial`, `unset`, and other strings you don't quote, such as `auto` and `grid`. This subclass gives you a `value` property via {{domxref("cssKeywordValue.value")}}.

`CSSUnitValue` is returned if the value is a unit type. It is a class that defines numbers with units of measurement like `20px`, `40%`, `200ms`, or `7`. It is returned with two properties: a `value` and a `unit`. With this type we can access the numeric value — {{domxref('cssUnitValue.value')}} — and its unit — {{domxref('cssUnitValue.unit')}}.

Let's write a plain paragraph, apply no styles, and inspect a few of its CSS properties by returning a table with the unit and value:

```html
<p>
   This is a paragraph with some content. Open up this example in Codepen or
   JSFiddle, and change some features. Try adding some CSS, such as a width
   for this paragraph, or adding a CSS property to the ofInterest array.
</p>
<table id="regurgitation">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Unit</th>
    </tr>
</table>
```

For each property of interest, we list the name of the property, use `.get(propertyName).value` to return the value, and, if the object returned by the `get()` is a `CSSUnitValue`, list the unit type we retrieve with `.get(propertyName).unit`.

```js
// Get the element we're inspecting
const myElement = document.querySelector("p");

// Get the table we'll be populating
const stylesTable = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// Array of properties we're interested in
const ofInterest = [
  "padding-top",
  "margin-bottom",
  "font-size",
  "font-stretch",
  "animation-duration",
  "animation-iteration-count",
  "width",
  "height",
];

// Iterate through our properties of interest
for (const value of ofInterest) {
  // Create a row
  const row = document.createElement("tr");

  // Add the name of the property
  const cssProperty = document.createElement("td");
  cssProperty.appendChild(document.createTextNode(value));
  row.appendChild(cssProperty);

  // Add the unitless value
  const cssValue = document.createElement("td");

  // Shrink long floats to 1 decimal point
  let propVal = allComputedStyles.get(value).value;
  propVal = propVal % 1 ? propVal.toFixed(1) : propVal;
  cssValue.appendChild(document.createTextNode(propVal));
  row.appendChild(cssValue);

  // Add the type of unit
  const cssUnit = document.createElement("td");
  cssUnit.appendChild(
    document.createTextNode(allComputedStyles.get(value).unit),
  );
  row.appendChild(cssUnit);

  // Add the row to the table
  stylesTable.appendChild(row);
}
```

{{EmbedLiveSample("CSSUnitValue_and_CSSKeywordValue", 120, 300)}}

For those of you using a non-supporting browser, the above output should look something like this:

| Property                                 | Value | Unit        |
| ---------------------------------------- | ----- | ----------- |
| {{cssxref("padding-top")}}               | 0     | `px`        |
| {{cssxref("margin-bottom")}}             | 16    | `px`        |
| {{cssxref("font-size")}}                 | 16    | `px`        |
| {{cssxref("font-stretch")}}              | 100   | `%`         |
| {{cssxref("animation-duration")}}        | 0     | `px`        |
| {{cssxref("animation-iteration-count")}} | 1     | _number_    |
| {{cssxref("width")}}                     | auto  | _undefined_ |
| {{cssxref("height")}}                    | auto  | _undefined_ |

You'll note the {{cssxref('&lt;length&gt;')}} unit returned is `px`, the {{cssxref('&lt;percentage&gt;')}} unit returned is `percent`, the {{cssxref('&lt;time&gt;')}} unit is `s` for 'seconds', and the unitless {{cssxref('&lt;number&gt;')}} unit is `number`.

We didn't declare a {{cssxref('width')}} or a {{cssxref('height')}} for the paragraph, both of which default to `auto` and therefore return a [`CSSKeywordValue`](/en-US/docs/Web/API/CSSKeywordValue) instead of a [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue). `CSSKeywordValue`s do not have a unit property, so in these cases our `get().unit` returns `undefined`.

Had the `width` or `height` been defined in a `<length>` or `<percent>`, the [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue) unit would have been `px` or `percent` respectively.

There are other types available:

- An [`<image>`](/en-US/docs/Web/CSS/image) will return a {{domxref('CSSImageValue')}}.
- A [`<color>`](/en-US/docs/Web/CSS/color_value) would return a {{domxref('CSSStyleValue')}}.
- A {{cssxref('transform')}} returns a `CSSTransformValue`.
- A [custom property](/en-US/docs/Web/CSS/--*) returns a {{domxref('CSSUnparsedValue')}}.

You can use a `CSSUnitValue` or `CSSKeywordValue` to create other objects.

## CSSStyleValue

The `CSSStyleValue` interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) is the base class of all CSS values accessible through the Typed OM API, including {{domxref('CSSImageValue')}}, {{domxref('CSSKeywordValue')}}, {{domxref('CSSNumericValue')}}, {{domxref('CSSPositionValue')}}, {{domxref('CSSTransformValue')}}, and {{domxref('CSSUnparsedValue')}}.

It has two methods:

- {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}}
- {{domxref("CSSStyleValue/parseAll_static", "CSSStyleValue.parseAll()")}}

As noted above, `StylePropertyMapReadOnly.get('--customProperty')` returns a {{domxref('CSSUnparsedValue')}}. We can parse `CSSUnparsedValue` object instances with the inherited {{domxref('CSSStyleValue/parse_static', 'CSSStyleValue.parse()')}} and {{domxref('CSSStyleValue/parseAll_static', 'CSSStyleValue.parseAll()')}} methods.

Let's examine a CSS example with several custom properties, transforms, `calc()`s, and other features. We'll take a look at what their types are by employing short JavaScript snippets outputting to {{domxref('console.log()')}}:

```css
:root {
  --mainColor: hsl(198, 43%, 42%);
  --black: hsl(0, 0%, 16%);
  --white: hsl(0, 0%, 97%);
  --unit: 1.2rem;
}

button {
  --mainColor: hsl(198, 100%, 66%);
  display: inline-block;
  padding: var(--unit) calc(var(--unit) * 2);
  width: calc(30% + 20px);
  background: no-repeat 5% center url(magicwand.png) var(--mainColor);
  border: 4px solid var(--mainColor);
  border-radius: 2px;
  font-size: calc(var(--unit) * 2);
  color: var(--white);
  cursor: pointer;
  transform: scale(0.95);
}
```

Let's add the class to a button (a button which does nothing).

```html
<button>Styled Button</button>
```

```js hidden
// get the element
const button = document.querySelector("button");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// CSSMathSum Example
let btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'

// CSSTransformValue
let transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true

// CSSImageValue
let bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")

// CSSUnparsedValue
let unit = allComputedStyles.get("--unit");

console.log(unit);

let parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit);
console.log(parsedUnit.unit);
console.log(parsedUnit.value);
```

We grab our `StylePropertyMapReadOnly` with the following JavaScript:

```js
const allComputedStyles = document.querySelector("button").computedStyleMap();
```

The following examples reference `allComputedStyles`:

### CSSUnparsedValue

The {{domxref('CSSUnparsedValue')}} represents [custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties):

```js
// CSSUnparsedValue
const unit = allComputedStyles.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"
```

When we invoke `get()`, a custom property of type `CSSUnparsedValue` is returned. Note the space before the `1.2rem`. To get a unit and value, we need a `CSSUnitValue`, which we can retrieve using the `CSSStyleValue.parse()` method on the `CSSUnparsedValue`.

```js
const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit); // CSSUnitValue {value: 1.2, unit: "rem"}
console.log(parsedUnit.unit); // "rem"
console.log(parsedUnit.value); // 1.2
```

### CSSMathSum

Although the [`<button>`](/en-US/docs/Web/HTML/Element/button) element is an inline element by default, we've added [`display: inline-block;`](/en-US/docs/Web/CSS/CSS_display) to enable sizing. In our CSS we have `width: calc(30% + 20px);`, which is a [`calc()`](/en-US/docs/Web/CSS/calc) function to define the width.

When we `get()` the `width`, we get a [`CSSMathSum`](/en-US/docs/Web/API/CSSMathSum) returned. {{domxref('CSSMathSum.values')}} is a {{domxref('CSSNumericArray')}} with 2 `CSSUnitValues`.

The value of {{domxref('CSSMathValue.operator')}} is `sum`:

```js
const btnWidth = allComputedStyles.get("width");

console.log(btnWidth); // CSSMathSum
console.log(btnWidth.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(btnWidth.operator); // 'sum'
```

### CSSTransformValue with CSSScale

The [`display: inline-block;`](/en-US/docs/Web/CSS/CSS_display) also enables transforming. In our CSS we have `transform: scale(0.95);`, which is a {{cssxref('transform')}} function.

```js
const transform = allComputedStyles.get("transform");

console.log(transform); // CSSTransformValue {0: CSSScale, 1: CSSTranslate, length: 2, is2D: true}
console.log(transform.length); // 1
console.log(transform[0]); // CSSScale {x: CSSUnitValue, y: CSSUnitValue, z: CSSUnitValue, is2D: true}
console.log(transform[0].x); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].y); // CSSUnitValue {value: 0.95, unit: "number"}
console.log(transform[0].z); // CSSUnitValue {value: 1, unit: "number"}
console.log(transform.is2D); // true
```

When we `get()` the `transform` property, we get a {{domxref('CSSTransformValue')}}. We can query the length (or number) of transform functions with the `length` property.

Seen as we have a length of `1`, which represents a single transform function, we log the first object and get a `CSSScale` object. We get `CSSUnitValues` when we query the `x`, `y`, and `z` scaling. The readonly `CSSScale.is2D` property is `true` in this scenario.

Had we added `translate()`, `skew()`, and `rotate()` transform functions, the length would have been `4`, each with their own `x`, `y`, `z` values, and each with an `.is2D` property. For example, had we included `transform: translate3d(1px, 1px, 3px)`, the `.get('transform')` would have returned a `CSSTranslate` with `CSSUnitValues` for `x`, `y`, and `z`, and the readonly `.is2D` property would have been `false`.

### CSSImageValue

Our button has one background image: a magic wand.

```js
const bgImage = allComputedStyles.get("background-image");

console.log(bgImage); // CSSImageValue
console.log(bgImage.toString()); // url("magicwand.png")
```

When we `get()` the `'background-image'`, a {{domxref('CSSImageValue')}} is returned. While we used the CSS {{cssxref('background')}} shorthand property, the inherited {{jsxref("Object/toString", "Object.prototype.toString()")}} method, shows we returned only the image, `'url("magicwand.png")'`.

Notice that the value returned is the absolute path to the image — this is returned even if the original `url()` value was relative. Had the background image been a gradient or multiple background images, `.get('background-image')` would have returned a `CSSStyleValue`. The `CSSImageValue` is returned only if there is a single image, and only if that single image declaration is a URL.

### Summary

This should get you started with understanding the CSS Typed OM. Take a look at all the [CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API) interfaces to learn more.

## See also

- [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide)
