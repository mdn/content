---
title: "CSSContainerRule: conditions property"
short-title: conditions
slug: Web/API/CSSContainerRule/conditions
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSContainerRule.conditions
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The read-only **`conditions`** property of the {{domxref("CSSContainerRule")}} interface represents an associated CSS {{cssxref("@container")}} at-rule as an array of objects, where each object represents a single container condition.

## Value

An array of objects where each object has the form:

```js
({ name: "<container-name>", query: "<container-query>" });
```

Either the `name` or `query` may be the empty string, but not both.

## Description

The **`conditions`** property represents an associated CSS {{cssxref("@container")}} at-rule as an array of objects.

Each object represents a container condition as a `name` string property and a `query` string property, either of which may be the empty string if not defined.
The `name` represents the name of a container, and the `query` string represents the set of feature tests that must be true for the particular container condition to match.

For example, given the following {{cssxref("@container")}}:

```css
@container sidebar (width >= 700px), (height >= 400px) {
  /* Styles */
}
```

The `conditions` would be an array like this:

```js
[
  { name: "sidebar", query: "(width >= 700px)" },
  { name: "", query: "(height >= 400px)" },
];
```

## Examples

See also [Examples](/en-US/docs/Web/API/CSSContainerRule#examples) in `CSSContainerRule`.

### Basic usage

The example shows how multiple container conditions are represented in the `conditions` property.

Note that we've hidden the logging code, as it is not relevant.

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

The CSS for the container element specifies the type of the container, and may also specify a name.
The card has a default font size, which is overridden when it is contained inside a `sidebar` `@container` when its width is greater than or equal to `700px`, or when it is inside a container named `other-name`.
Note that this condition is contrived to demonstrate how multiple conditions are represented (`other-name` doesn't actually do anything).

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

  @container sidebar (width >= 700px), other-name {
    .card {
      font-size: 2em;
    }
  }
</style>
```

#### JavaScript

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its `id`, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the third rule above, we can access the associated `CSSContainerRule` using the third entry (index "2") in the `cssRules`.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

We then use the `containerRule` to log the value of the `conditions` property.

```js
if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
} else {
  log("CSSContainerRule.conditions is not supported.");
}
```

> [!NOTE]
> On browsers that don't support `conditions`, you may be able to use {{domxref("CSSContainerRule.containerName")}} and {{domxref("CSSContainerRule.containerQuery")}}, provided that the `@container` only specifies one container condition.
> For more information, see the [Feature testing](/en-US/docs/Web/API/CSSContainerRule#feature_testing) example in `CSSContainerRule`.

#### Results

The example output is shown below.

{{EmbedLiveSample("Basic usage","100%","300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("container")}} shorthand property
- [CSS containment module](/en-US/docs/Web/CSS/Guides/Containment)
- [Container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
