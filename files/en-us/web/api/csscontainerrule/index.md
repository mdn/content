---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
page-type: web-api-interface
browser-compat: api.CSSContainerRule
---

{{ APIRef("CSSOM") }}

The **`CSSContainerRule`** interface represents a single CSS {{cssxref("@container")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

- {{domxref("CSSContainerRule.conditions")}} {{ReadOnlyInline}}
  - : Returns an array of objects, each of which specifies a container condition in a {{cssxref("@container")}} rule.
    The objects have a `name` string property and a `query` string property, either of which may be the empty string if not defined.
    The `name` represents the name of a container, and the `query` represents the set of feature tests that must be true for the particular condition to apply.
- {{domxref("CSSContainerRule.containerName")}} {{ReadOnlyInline}}
  - : Returns a string representing the name of the container condition of a {{cssxref("@container")}}, when there is just one condition.
    If there are multiple container conditions, or if there is just one condition that does not specify a name, this is the empty string.
- {{domxref("CSSContainerRule.containerQuery")}} {{ReadOnlyInline}}
  - : Returns a string representing the container query for the container condition of a {{cssxref("@container")}}, when there is only one condition.
    This represents a set of feature tests that must all be true for the condition to apply.
    If there are multiple container conditions, or if there is just one condition that does not specify a query, this is the empty string.

## Instance methods

_No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Description

A `CSSContainerRule` object represents a {{cssxref("@container")}} rule.

A `@container` rule defines one or more comma-separated _container conditions_.
Each container condition consists of a "name" and/or a "query", where the "name" indicates the name of the container to which the condition applies and the "query" specifies one or more logically combined feature checks on a container's properties.
If any of the container conditions match a container, the indicated styles are applied.

> [!NOTE]
> Support for multiple container conditions is indicated by the `conditions` key in the [Browser compatibility](#browser_compatibility) table (earlier versions of the specification allowed only a single container condition).
> This affects how `CSSContainerRule` and `@container` are used.

A contrived example consisting of three conditions is shown below.
This will match a container named `main-content` if its width is between `600px` and `800px`, any container that has a height greater than `800px`, or any container named `other-content`.

```css
@container main-content (width > 600px) and (width < 800px), (height > 800px), other-content {
  /* Apply styles */
}
```

In supporting browsers, the `CSSContainerRule.conditions` property represents a `@container` as an array of objects, each of which defines a single container condition.
The objects have the properties `name` and `query`, which may be the empty string (`""`).
The `conditions` property for the `@container` example above would look like this:

```js
[
  { name: "main-content", query: "(width > 600px) and (width < 800px)" },
  { name: "", query: "(height > 800px)" },
  { name: "other-content", query: "" },
];
```

The `containerName` and `containerQuery` properties predate support for container rules with multiple container conditions.
For a container rule with a _single container condition_ they contain the name and query of that condition (mirroring the `name` and `query` properties of the object in the `conditions` array).
For a container rule with multiple conditions they are both set to the empty string.

Note that browsers that don't support the `conditions` property only allow container rules with a single container condition.
An `@container` with multiple container conditions will not be parsed, and no corresponding `CSSContainerRule` will be created.

You can also get the text for the whole condition using {{domxref("CSSConditionRule.conditionText")}}.

## Examples

### Feature testing

Feature testing can be complicated because you may need to handle cases where `CSSContainerRule` or `CSSContainerRule.conditions` are not supported, and also the particular case where `conditions` is not supported but multiple container conditions have been specified in the CSS.

This code shows how you can do it, assuming that you have already obtained `containerRule`, a `CSSContainerRule` instance that corresponds to an {{cssxref("@container")}} rule defined in the page CSS (the next example shows how you might get `containerRule`).

```js
if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created — @container with multiple conditions may not be parsed.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

Note that if it is defined, we prefer to use the information in `CSSContainerRule.conditions` rather than `containerName` and `containerQuery`.

### Unnamed container condition

The example below defines a {{cssxref("@container")}} rule that has a single container condition with no name, and displays the properties of the associated `CSSContainerRule`.
The CSS is the same as in the `@container` example [Setting styles based on a container's size](/en-US/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

Note that our code to log the results is not particularly relevant, so it has been hidden.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### HTML

First, we define the HTML for a `card` contained within a `post`.
These are represented by two nested {{htmlelement("div")}} elements.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

The CSS for the example is shown below.
The CSS first specifies the {{cssxref("container-type")}} for the container element (`post`).
The `@container` rule then applies a new `width`, `background-color`, and `font-size` to the card if the width is less than `650px`.

```html
<style id="example-styles">
  /* A container context based on inline size */
  .post {
    container-type: inline-size;
  }

  /* Apply styles if the container is narrower than 650px */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

> [!NOTE]
> The styles in these examples are defined in an inline HTML {{htmlelement("style")}} element with an `id`, to make it easy for the code to find the correct style sheet.
> You might also locate the correct style sheet for each example by indexing against the number of style sheets contained in the document, that is, the `length` of the `styleSheets` property (for example, `document.styleSheets[document.styleSheets.length-1]`), but that makes working out the correct sheet for each example more complicated.

#### JavaScript

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its `id`, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the second rule above, we can access the associated `CSSContainerRule` using the second entry, with index "1" in the `cssRules`.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
```

Next, we use our feature testing code from the previous example to find and log the information we want to display.

```js
if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Results

The example output is shown below.
This lists the condition using either the `conditions` property if it is supported or `containerName`/`containerQuery` if it is not.

{{EmbedLiveSample("Unnamed container condition","100%","300px")}}

Note that the card's `background-color` should change when the container width becomes smaller or larger than `650px`.

### Named container condition

The example below defines a {{cssxref("@container")}} rule that includes a name and a query, and displays the properties of the associated `CSSContainerRule`.

The CSS is very similar to that in the `@container` example [Creating named container contexts](/en-US/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).
Note that we've hidden the HTML, logging code, and feature checking code, as they are the same as in the previous example.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

In this example, the {{cssxref("@container")}} specifies a container name, `sidebar`, as well as the container type.
The card has a default font size, which is overridden when it is contained inside a `sidebar` `@container` when its width is greater than or equal to `700px`.

```html
<style id="example-styles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Default heading styles for the card title */
  .card h2 {
    font-size: 1em;
  }

  @container sidebar (width >= 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

```js hidden
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.

if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Results

The example output is shown below.
This lists the condition using either the `conditions` property if it is supported or `containerName`/`containerQuery` if it is not.
The `conditionText` is also logged, and shows the combination of these two strings.

{{EmbedLiveSample("Named container condition","100%","300px")}}

The text in the card `<div>` should double in size as the page width reaches `700px`, and halve as it goes below `700px` again.

### Multiple container conditions

The example below defines a {{cssxref("@container")}} rule that includes multiple container conditions, and displays the properties of the associated `CSSContainerRule`.

Note that we've hidden the HTML, logging code, and feature checking code, as they are the same as in the previous example.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

#### CSS

The `@container` declaration here defines two container conditions; it will match a container if either condition is true.

```html
<style id="example-styles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Default heading styles for the card title */
  .card h2 {
    font-size: 1em;
  }

  @container sidebar (width <= 600px), (aspect-ratio > 1/1) {
    .card {
      font-size: 2em;
      background-color: lightblue;
    }
  }
</style>
```

```js hidden
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.

if (typeof CSSContainerRule === "undefined") {
  // Browser doesn't support CSSContainerRule (at all)
  log("CSSContainerRule is not supported in this browser.");
} else if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created — @container with multiple conditions may not be parsed.",
  );
} else if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
} else {
  // @container exists but predates the multi-condition specification
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
}
```

#### Results

The example output is shown below.
Browsers that support the `conditions` property will show both conditions.
Those that do not will log a note indicating that multiple conditions cannot be parsed.

{{EmbedLiveSample("Multiple container conditions","100%","300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, and {{cssxref("container")}} shorthand properties
- [CSS containment module](/en-US/docs/Web/CSS/Guides/Containment)
- [Container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
