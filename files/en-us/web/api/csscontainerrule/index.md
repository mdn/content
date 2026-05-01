---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
page-type: web-api-interface
browser-compat: api.CSSContainerRule
---

{{ APIRef("CSSOM") }}

The **`CSSContainerRule`** interface represents a single CSS {{cssxref("@container")}} rule.

A {{cssxref("@container")}} rule defines container conditions that apply styles to a containment context if it has a matching `name` and/or if it's properties match a `query`.
Each a
The styles are applied if any of the conditions are met (an "OR" relationship).
Each container condition consists of an optional name an/or query, where a query tests against features such as 

```css
@container main-content (width > 600px) and (width < 800px), (height > 800px) {
  .card {
    display: grid;
  }
}
```


each container condition has a name and/or a query that define a set of feature  

An object of this type can be used to get the the array of container condition objects reflected from the associated {{cssxref("@container")}}.
Each container condition maps to one of the comma-separate conditions 
Each container condition is represented by an object that contains properties `name` and `query`, which may contain the empty string.

Note that the container name and query together define the "condition text", which can be obtained using {{domxref("CSSConditionRule.conditionText")}}.



An object of this type can be used to get the query conditions for the {{cssxref("@container")}}, along with the container name if one is defined.
Note that the container name and query together define the "condition text", which can be obtained using {{domxref("CSSConditionRule.conditionText")}}.

Note that older specifications supported only a single container conditional, which was accessible via the `containerName` and `containerQuery`

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

- {{domxref("CSSContainerRule.containerName")}} {{ReadOnlyInline}}
  - : Returns a string representing the name of the first container condition of a {{cssxref("@container")}}, when there is just one condition.
    If there are multiple container conditions, or if there is just one condition that does not specify a name, this is the empty string.
- {{domxref("CSSContainerRule.containerQuery")}} {{ReadOnlyInline}}
  - : Returns a string representing the container query for the first container condition of a {{cssxref("@container")}}, when there is only one condition.
    This represents a set of feature tests that must all be true for the condition to apply.
    If there are multiple container conditions, or if there is just one condition that does not specify a name, this is the empty string.
- {{domxref("CSSContainerRule.conditions")}} {{ReadOnlyInline}}
  - : Returns an array of objects, each that specifies a container condition for a {{cssxref("@container")}} rule.
    The objects have a `name` string property and a `query` string property, either of which may be the empty string if not defined.
    The `query` string represents the set of feature tests that must all be true for the particular condition to apply.

## Instance methods

_No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Examples

### Feature testing for conditions

The example below defines an unnamed {{cssxref("@container")}} rule, and displays the properties of the associated `CSSContainerRule`.
The CSS is the same as in the `@container` example [Setting styles based on a container's size](/en-US/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

The first part of the code simply creates a {{htmlelement("pre")}} element for logging the container rule properties, along with a style block, and a JavaScript `log()` method to simplify adding the properties.

```html
<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

The CSS for the example is shown below.
As described in the corresponding {{cssxref("@container")}} example, the CSS for the container element specifies the type of the container.
The {{cssxref("@container")}} then applies a new width, font-size and background color to the card if the width is less than 650px.

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

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its id, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the second rule above, we can access the associated `CSSContainerRule` using the second entry, with index "1", in the `cssRules`.
Last of all, we log the `containerName`, `containerQuery` and `conditionText` (inherited) properties.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
console.log(containerRule);

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions is supported.");
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
} else {
  log("CSSContainerRule.conditions not supported");
  log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
  log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
}
```

> [!NOTE]
> The styles for this example are defined in an inline HTML `style` element with an id in order to make it easy for the code to find the correct sheet.
> You might also locate the correct sheets for each example from the document by indexing against the length (e.g., `document.styleSheets[document.styleSheets.length-1]` but that makes working out correct sheet for each example more complicated).

The example output is shown below.
The log section lists the `containerName`, which is an empty string as no name has been defined.
The `containerQuery` and `conditionText` strings are also logged, and have the same value because there is no name defined.
The card should change background and as the width of the page transitions through 650px.

{{EmbedLiveSample("Feature testing for conditions","100%","300px")}}

### Unnamed container rule

The example below defines an unnamed {{cssxref("@container")}} rule, and displays the properties of the associated `CSSContainerRule`.
The CSS is the same as in the `@container` example [Setting styles based on a container's size](/en-US/docs/Web/CSS/Reference/At-rules/@container#setting_styles_based_on_a_containers_size).

The first part of the code simply creates a {{htmlelement("pre")}} element for logging the container rule properties, along with a style block, and a JavaScript `log()` method to simplify adding the properties.

```html
<pre id="log"></pre>
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

Then we define the HTML for a `card` (`<div>`) contained within a `post`.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

The CSS for the example is shown below.
As described in the corresponding {{cssxref("@container")}} example, the CSS for the container element specifies the type of the container.
The {{cssxref("@container")}} then applies a new width, font-size and background color to the card if the width is less than 650px.

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

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its id, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the second rule above, we can access the associated `CSSContainerRule` using the second entry, with index "1", in the `cssRules`.
Last of all, we log the `containerName`, `containerQuery` and `conditionText` (inherited) properties.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);

log("CSSContainerRule.conditions:");
containerRule.conditions.forEach((item) => {
  const jsonString = JSON.stringify(item);
  log(`  ${jsonString}`);
});
```

> [!NOTE]
> The styles for this example are defined in an inline HTML `style` element with an id in order to make it easy for the code to find the correct sheet.
> You might also locate the correct sheets for each example from the document by indexing against the length (e.g., `document.styleSheets[document.styleSheets.length-1]` but that makes working out correct sheet for each example more complicated).

The example output is shown below.
The log section lists the `containerName`, which is an empty string as no name has been defined.
The `containerQuery` and `conditionText` strings are also logged, and have the same value because there is no name defined.
The card should change background and as the width of the page transitions through 650px.

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### Named container rule

The example below defines a named {{cssxref("@container")}} rule, and displays the properties of the associated `CSSContainerRule`.
The CSS is very similar to that in the `@container` example [Creating named container contexts](/en-US/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).

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

First we define the HTML for a `card` (`<div>`) contained within a `post` (the example does not show the logging code, as this is the same as in the previous example).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

As described in {{cssxref("@container")}}, the CSS for the container element specifies the type of the container, and may also specify a name for the container.
The card has a default font size, which is overridden for the `@container` named `sidebar` if the minimum width is greater than 700px.

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

The code for getting the sheet and rules is almost identical to the previous example.
The only difference is that in this example we have three CSS rules, so to get the associated `CSSContainerRule` we get the third entry in the `cssRules`.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);

log("CSSContainerRule.conditions:");
containerRule.conditions.forEach((item) => {
  const jsonString = JSON.stringify(item);
  log(`  ${jsonString}`);
});
```

The example output is shown below.
The log section lists the `containerName` and `containerQuery` strings.
The `conditionText` is also logged, and shows the combination of these two strings.
The title in the card section should double in size as the width of the page goes over 700px.

{{EmbedLiveSample("Named container rule","100%","300px")}}

### Multiple container rules

The example below defines a named {{cssxref("@container")}} rule, and displays the properties of the associated `CSSContainerRule`.
The CSS is very similar to that in the `@container` example [Creating named container contexts](/en-US/docs/Web/CSS/Reference/At-rules/@container#creating_named_container_contexts).

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

First we define the HTML for a `card` (`<div>`) contained within a `post` (the example does not show the logging code, as this is the same as in the previous example).

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

As described in {{cssxref("@container")}}, the CSS for the container element specifies the type of the container, and may also specify a name for the container.
The card has a default font size, which is overridden for the `@container` named `sidebar` if the minimum width is greater than 700px.

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

The code for getting the sheet and rules is almost identical to the previous example.
The only difference is that in this example we have three CSS rules, so to get the associated `CSSContainerRule` we get the third entry in the `cssRules`.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);

log("CSSContainerRule.conditions:");
containerRule.conditions.forEach((item) => {
  const jsonString = JSON.stringify(item);
  log(`  ${jsonString}`);
});
```

The example output is shown below.
The log section lists the `containerName` and `containerQuery` strings.
The `conditionText` is also logged, and shows the combination of these two strings.
The title in the card section should double in size as the width of the page goes over 700px.

{{EmbedLiveSample("Multiple container rules","100%","600px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("container-name")}}, {{cssxref("container-type")}}, and {{cssxref("container")}} shorthand properties
- [CSS containment module](/en-US/docs/Web/CSS/Guides/Containment)
- [Container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
