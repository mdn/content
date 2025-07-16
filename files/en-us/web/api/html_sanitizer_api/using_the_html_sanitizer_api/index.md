---
title: Using the HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
page-type: guide
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

The [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) provides methods that allow developers to safely inject untrusted HTML into an {{domxref("Element")}}, a {{domxref("ShadowRoot")}}, or a {{domxref("Document")}}.
The API also gives developers the flexibility to further restrict or expand what HTML entities are allowed if needed.

## Safe sanitization by default

The most common use case for the API is to safely inject a user-provided string into an {{domxref("Element")}}.
Unless the string to be injected _needs_ to contain unsafe HTML entities, you can use {{domxref('Element.setHTML()')}} as a drop in replacement for {{domxref("Element.innerHTML")}}.

For example, the following code will remove all XSS-unsafe elements and attributes in the input string (in this case the {{htmlelement("script")}} element), along with any elements that aren't permitted as children of the target element by the HTML specification:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

The other XSS-safe methods, {{domxref('ShadowRoot.setHTML()')}} and {{domxref('Document/parseHTML_static','Document.parseHTML()')}}, are used in the same way.

### Safe methods further restrict allowed entities

You can specify the HTML entities that you want to allow or remove by passing a {{domxref('Sanitizer')}} in the second argument of all the sanitizer methods.

For example, if you know that only {{htmlelement("p")}} and {{htmlelement("a")}} elements are expected in the context of "someElement" below, you might create a sanitizer configuration that allows only those elements:

```js
sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });
```

Note though that the unsafe HTML entities are always removed when using the safe methods.
When used with the safe methods, a permissive sanitizer configuration, will either allow the same or fewer entities than the default configuration.

## Allowing unsafe sanitization

Sometimes you might want to inject input needs to contain potentially unsafe elements or attributes.
In this case you can use one of the API XSS-unsafe methods: {{domxref('Element.setHTMLUnsafe()')}}, {{domxref('ShadowRoot.setHTMLUnsafe()')}}, and {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.

A common approach is to start from the default sanitizer, which only allows safe elements, and then allow just those unsafe entities that we expect in the input.

For example, in the following sanitizer all safe elements are allowed, and we further allow the unsafe `onclick` handler on `button` elements (only).

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer(); // Default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

With this code the `alert(1)` would be allowed, and there is a potential issue that the attribute might be used for malicious purposes.
However we know that all other XSS unsafe HTML entities have been removed, so we only need to worry about this one case, and can put in other mitigations.

The unsafe methods will use any sanitizer configuration you supply (or none), so you need to be more careful than when using the safe methods.

## Allow configurations

You can build an ["allow" sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) by specifying just the set of HTML elements and attributes you want to allow to be injected when using the sanitizer.
This form of configuration is easy to understand, and is useful if you know exactly what HTML entities are should be permitted in the target context.

For example, the following configuration "allows" the {{htmlelement("p")}} and {{htmlelement("div")}} elements and attributes `cite` and `onclick`.
It also replaces {{htmlelement("b")}} elements with their contents (this is a form of "allowing", since the element contents are not removed).

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  attributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

### Allowing elements

The allowed elements can be specified using the [`elements`](/en-US/docs/Web/API/SanitizerConfig#elements) property of the {{domxref("SanitizerConfig")}} instance passed to the `Sanitizer()` constructor (or directly to the sanitization methods).

The simplest way to use the property is to specify an array of element names:

```js
const sanitizer = Sanitizer({
  elements: ["div", "span"],
});
```

But you can also specify each of the allowed elements using an object that defines its `name` and `namespace`, as shown below (`Sanitizer` will automatically infer a namespace if it is able).

```js
const sanitizer = Sanitizer({
  elements: [
    {
      name: "div",
      namespace: "http://www.w3.org/1999/xhtml",
    },
    {
      name: "span",
      namespace: "http://www.w3.org/1999/xhtml",
    },
  ],
});
```

You can add the elements to the `Sanitizer` using its API.
Here we add the same elements to an empty sanitizer:

```js
const sanitizer = Sanitizer({});
sanitizer.allowElement("div");
sanitizer.allowElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Allowing global attributes

To allow attributes globally, on any element where allowed by the HTML specification, you can use the [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes_2) property of the {{domxref("SanitizerConfig")}}.

The simplest way to use the `attributes` property is to specify an array of attribute names:

```js
const sanitizer = Sanitizer({
  attributes: ["cite", "onclick"],
});
```

You can also specify each attribute with the `name` and `namespace` properties, just like elements:

```js
const sanitizer = Sanitizer({
  attributes: [
    {
      name: "cite",
      namespace: null,
    },
    {
      name: "onclick",
      namespace: null,
    },
  ],
});
```

You can also add each of the allowed attributes to the `Sanitizer` using its `allowAttribute()` method:

```js
const sanitizer = Sanitizer({});
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

### Allowing/removing attributes on a particular element

You can also allow or remove attributes on a particular element.
Note that this is part of an "allow configuration", because you are in this case still allowing the element to be injected.

To allow an attribute on an element you can specify the element as an object with the `name` and `attributes` properties.
The [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes) property contains an array of the allowed attributes on the element.

Below we show a sanitizer where the {{htmlelement("div")}}, {{htmlelement("a")}}, and {{htmlelement("span")}} elements are allowed, and the {{htmlelement("a")}} element additionally allows the `href`, `rel`, `hreflang` and `type` attributes.

```js
const sanitizer = Sanitizer({
  elements: [
    "div",
    { name: "a", attributes: ["href", "rel", "hreflang", "type"] },
    "span",
  ],
});
```

Similarly we can specify the attributes that are not allowed on an element using an element object with the [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes) property.
For example, the following sanitizer would strip the `type` attribute from all `<a>` elements.

```js
const sanitizer = Sanitizer({
  elements: ["div", { name: "a", removeAttributes: ["type"] }],
});
```

In both cases you can also specify each attribute as an object with `name` and `namespace` properties.
You can also use set the attribute properties using the same element object passed to {{domxref("Sanitizer.allowElement()")}}.

Note however that you can't specify both element `attributes` and `removeAttributes` in one call. Attempting to do so will raise an exception.

### Replacing child elements

You can specify an array of elements to replace with their inner content.
This is most commonly used to strip styles from elements.

For example, the following code uses the [`replaceWithChildrenElements`](/en-US/docs/Web/API/SanitizerConfig#replacewithchildrenelements) property of the {{domxref("SanitizerConfig")}} to specify that the {{htmlelement("b")}} element should be replaced:

```js
const replaceBoldSanitizer = Sanitizer({
  replaceWithChildrenElements: ["b"],
});

targetElement.setHTML("This <b>highlighting</b> isn't needed", {
  sanitizer: replaceBoldSanitizer,
});

// Log the result
targetElement.log(targetElement.innerHTML); // This highlighting isn't needed
```

As with elements and attributes, you can also specify the replacement elements with a namespace, or use the {{domxref("Sanitizer.replaceElementWithChildren()")}} method:

```js
const sanitizer = Sanitizer({});
sanitizer.replaceElementWithChildren("b");
sanitizer.replaceElementWithChildren({
  name: "i",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

## Remove configurations

You can build a ["remove" sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_and_remove_configurations) by specifying the set of HTML elements and attributes you want to remove from the input when using the sanitizer.
All other elements and attributes are allowed by the configuration, although they may be removed if you use the configuration in a safe sanitization method.

> [!NOTE]
> A sanitizer configuration can include allow lists or remove lists, but not both.

For example, the following configuration removes the {{htmlelement("script")}}, {{htmlelement("div")}} and {{htmlelement("span")}} elements and also the `onclick` attribute.

```js
const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

Specifying elements to remove is more useful when you want to tweak an existing configuration.
For example consider the case where we are using the (safe) default sanitizer, but want to also ensure

```js
const sanitizer = Sanitizer();
sanitizer.removeElement("div");

const sanitizer = Sanitizer({
  removeElements: ["script", "div", "span"],
  removeAttributes: ["onclick"],
});
```

### Removing elements

The [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) property of a {{domxref("SanitizerConfig")}} instance can be used the elements to remove.

The simplest way to use the property is to specify an array of element names:

```js
const sanitizer = Sanitizer({
  removeElements: ["div", "span"],
});
```

As when [allowing element](#allowing_elements) you can also specify each of the elements to remove using an object that defines its `name` and `namespace`.
You can also configure the removed elements using the using the `Sanitizer` API as shown:

```js
const sanitizer = Sanitizer({});
sanitizer.removeElement("div");
sanitizer.removeElement({
  name: "span",
  namespace: "http://www.w3.org/1999/xhtml",
});
```

### Removing attributes

The [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) property of the {{domxref("SanitizerConfig")}} can be used to specify attributes to be globally removed.

The simplest way to use the property is to specify an array of element names:

```js
const sanitizer = Sanitizer({
  removeAttributes: ["onclick", "lang"],
});
```

You can also specify each of the elements using an object that defines its `name` and `namespace`, and also use {{domxref("Sanitizer.removeAttribute()")}} to add an attribute to be removed from all elements.

```js
const sanitizer = Sanitizer({});
sanitizer.removeAttribute("onclick");
sanitizer.removeAttribute("lang");
```

## Comments and data attributes

The {{domxref("SanitizerConfig")}} can also be used to specify whether comments and `data-` attributes will be filtered from injected content, using the [comments](/en-US/docs/Web/API/SanitizerConfig#comments) and [dataAttributes](/en-US/docs/Web/API/SanitizerConfig#dataattributes) boolean properties, respectively.

To allow both comments and data attributes you might use a configuration like this:

```js
const sanitizer = Sanitizer({
  comments: true,
  dataAttributes: true,
});
```

You can similarly enable or disable the comments or data-attributes on an existing sanitizer using {{domxref("Sanitizer.setComments()")}} and {{domxref("Sanitizer.setDataAttributes()")}} methods:

```js
const sanitizer = Sanitizer({});
sanitizer.setComments(true);
sanitizer.setDataAttributes(true);
```

## Sanitizer vs SanitizerConfig

All the sanitization methods can be passed a sanitizer configuration that is either a {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} instance.

The {{domxref("Sanitizer")}} object is a wrapper around {{domxref("SanitizerConfig")}} that provides additional useful functionality:

- The default constructor creates a configuration that allows all XSS-safe elements and attributes, and which is therefore a good starting point for creating either slightly more or slightly less restrictive sanitizers.
- When you use the methods to allow or remove HTML entities, the entities are removed from the "opposite" lists.
  These normalizations make the configuration more efficient.
- The {{domxref("Sanitizer.removeUnsafe()")}} method can be used to remove all XSS-unsafe entities from an existing configuration.
- You can export the configuration to see exactly what entities are allowed and dropped.

Note though, if you can use the safe sanitization methods, then you may not need to define a sanitizer configuration at all.

## Examples

For other examples see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and the individual methods of the {{domxref("Sanitizer")}} interface.

### Sanitizer demo

This example shows how you can use the {{domxref("Sanitizer")}} methods to update a sanitizer.
The result is a demonstration interface where you can add elements and attributes to the allow and remove lists and see their effects when the sanitizer is used with {{domxref("Element.setHTML()")}} and {{domxref("Element.setHTMLUnsafe()")}}.

#### HTML

First we define buttons to reset the default sanitizer or an empty sanitizer.

```html
<div class="button-group">
  <button id="defaultSanitizerBtn">Default Sanitizer</button>
  <button id="emptySanitizerBtn">Empty Sanitizer</button>
</div>
```

This is followed by {{htmlelement("select")}} elements to allow users to choose elements to add to the allow and remove lists for elements and attributes.

```html
<div class="select-group">
  <label for="allowElementSelect">allowElement:</label>
  <select id="allowElementSelect">
    <option value="">--Choose element--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>

  <label for="removeElementSelect">removeElement:</label>
  <select id="removeElementSelect">
    <option value="">--Choose element--</option>
    <option value="h1">h1</option>
    <option value="div">div</option>
    <option value="span">span</option>
    <option value="script">script</option>
    <option value="p">p</option>
    <option value="button">button</option>
    <option value="img">img</option>
  </select>
</div>
<div class="select-group">
  <label for="allowAttributeSelect">allowAttribute:</label>
  <select id="allowAttributeSelect">
    <option value="">--Choose attribute--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
  <label for="removeAttributeSelect">removeAttribute:</label>
  <select id="removeAttributeSelect">
    <option value="">--Choose attribute--</option>
    <option value="class">class</option>
    <option value="autocapitalize">autocapitalize</option>
    <option value="hidden">hidden</option>
    <option value="lang">lang</option>
    <option value="title">title</option>
    <option value="onclick">onclick</option>
  </select>
</div>
```

Then we add buttons to toggle comments and data attributes to be allowed/removed.

```html
<div class="button-group">
  <button id="toggleCommentsBtn">Toggle comments</button>
  <button id="toggleDataAttributesBtn">Toggle data-attributes</button>
</div>
```

The remaining elements display the string to be parsed (editable) and the result of those two strings when injected into an element using `setHTML()` and `setHMLUnsafe()`, respectively:

```html
<div>
  <p>Original string (Editable)</p>
  <pre contenteditable id="unmodified"></pre>
  <p>setHTML() (HTML as string)</p>
  <pre id="setHTML"></pre>
  <p>setHTMLUnsafe() (HTML as string)</p>
  <pre id="setHTMLUnsafe"></pre>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 430px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

The code first tests whether the {{domxref("Sanitizer")}} interface is supported.
It then defines a string of "unsafe HTML", which contains a mixture of XSS-safe and XSS-unsafe elements (such as {{htmlelement("script")}}).
This is inserted into the first text area as text.
The text area is editable, so users can change the text later if they want.

We then get the elements for the `setHTML` and `setHTMLUnsafe` text areas where we will write the parsed HTML, and create an empty `Sanitizer` configuration.
The `applySanitizer()` method is called with the new sanitizer to log the result of sanitizing the initial string using both a safe and unsafe sanitizer.

```js
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
  const initialHTMLString =
    `<div id="mainDiv"><!-- HTML comment -->
    <p data-test="true">This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <p>Be <b>bold</b> and brave!</p>
    <script>alert(1)<` + "/script></div>";

  // Set unsafe string as a text node of first element
  const unmodifiedElement = document.querySelector("#unmodified");
  unmodifiedElement.innerText = initialHTMLString;
  unsafeHTMLString = unmodifiedElement.innerText;

  const setHTMLElement = document.querySelector("#setHTML");
  const setHTMLUnsafeElement = document.querySelector("#setHTMLUnsafe");
  // Create and apply default sanitizer when we start
  let sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
```

The `applySanitizer()` logging method is shown below.
This gets the initial content of the "untrusted string" from the first text area, and parses it using the {{domxref("Element.setHTML()")}} and {{domxref("Element.setHTMLUnsafe()")}} methods with the passed `sanitizer` argument into the respective text areas.
In each case the injected HTML is then read from the element with `innerHTML` and written back into the element as `innerText` (so that it is human readable).

The code then logs the current sanitizer configuration, which it obtains with {{domxref("Sanitizer.get()")}}.

```js
function applySanitizer(sanitizer) {
  // Get string to parse into element
  unsafeHTMLString = unmodifiedElement.innerText;

  // Sanitize string using safe method and then display as text
  setHTMLElement.setHTML(unsafeHTMLString, { sanitizer });
  setHTMLElement.innerText = setHTMLElement.innerHTML;

  // Sanitize string using unsafe method and then display as text
  setHTMLUnsafeElement.setHTMLUnsafe(unsafeHTMLString, { sanitizer });
  setHTMLUnsafeElement.innerText = setHTMLUnsafeElement.innerHTML;

  // Display sanitizer configuration
  const sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
}
```

Next we get elements for each of the buttons and selection lists.

```js
const defaultSanitizerBtn = document.querySelector("#defaultSanitizerBtn");
const emptySanitizerBtn = document.querySelector("#emptySanitizerBtn");
const allowElementSelect = document.querySelector("#allowElementSelect");
const removeElementSelect = document.querySelector("#removeElementSelect");
const allowAttributeSelect = document.querySelector("#allowAttributeSelect");
const removeAttributeSelect = document.querySelector("#removeAttributeSelect");

const toggleCommentsBtn = document.querySelector("#toggleCommentsBtn");
const toggleDataAttributesBtn = document.querySelector(
  "#toggleDataAttributesBtn",
);
```

The handlers for the first two button create the default and empty sanitizer respectively.
The `applySanitizer()` method we showed before is used to run the sanitizer and update the logs.

```js
defaultSanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer();
  applySanitizer(sanitizer);
});

emptySanitizerBtn.addEventListener("click", () => {
  sanitizer = new Sanitizer({});
  applySanitizer(sanitizer);
});
```

The handlers for the selection lists are shown next.
These call the associated sanitizer method on the current sanitizer whenever a new element or attribute is selected.
For example, the listener for the `allowElementSelect` calls {{domxref("Sanitizer.allowElement()")}} to add the selected element to the allowed elements.
In each case, `applySanitizer()` logs the results using the current sanitizer.

```js
allowElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeElementSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeElement(event.target.value);
    applySanitizer(sanitizer);
  }
});
allowAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.allowAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
removeAttributeSelect.addEventListener("change", (event) => {
  if (event.target.value !== "") {
    sanitizer.removeAttribute(event.target.value);
    applySanitizer(sanitizer);
  }
});
```

The handlers for the last two buttons are shown below.
These toggle the value of the `dataAttributesActive` and `commentsActive` variables and then use these values in {{domxref("Sanitizer.setComments()")}} and {{domxref("Sanitizer.setDataAttributes()")}}
Note that if the comments are initially disabled, the first press of the button may have no effect!

```js
let dataAttributesActive = true;
let commentsActive = true;

toggleCommentsBtn.addEventListener("click", () => {
  commentsActive = !commentsActive;
  sanitizer.setComments(commentsActive);
  applySanitizer(sanitizer);
});

toggleDataAttributesBtn.addEventListener("click", () => {
  dataAttributesActive = !dataAttributesActive;
  sanitizer.setDataAttributes(dataAttributesActive);
  applySanitizer(sanitizer);
});


} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The result is shown below.
Select the top buttons to set a new default or empty sanitizer, respectively.
You can then use the selection lists to add some elements and attributes to the respective sanitizer allow and remove lists, and the other buttons to toggle comments on and off.
The current sanitizer configuration is logged.
The text in the top text area is sanitized using the current sanitizer configuration and parsed with `setHTML()` and `setHTMLUnsafe()`.

{{EmbedLiveSample("Sanitizer demo","100","650px")}}

Note that adding elements and attributes to the allow lists removes them from the remove lists, and vice versa.
Also note that you can allow elements in sanitizer that will be injected with the unsafe methods, but not the safe methods.
