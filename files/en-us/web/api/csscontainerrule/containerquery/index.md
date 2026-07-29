---
title: "CSSContainerRule: containerQuery property"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
page-type: web-api-instance-property
browser-compat: api.CSSContainerRule.containerQuery
---

{{ APIRef("CSSOM") }}

The read-only **`containerQuery`** property of the {{domxref("CSSContainerRule")}} interface represents the query part of the container condition for a container rule that only defines one container condition.
If there are multiple container conditions, the value is set to the empty string.

## Value

A string that contains the query part of the container condition defined in a container rule, but only if it has just one container condition defined.
Note that the value may not be identical to the original string, as normalizations such as removing whitespace may happen.

If no query is defined, or if the rule defines multiple container conditions, this is the empty string (`""`).

## Description

This property reflects the value of the query part of the container condition in a corresponding {{cssxref("@container")}} at-rule that has just one container condition.

For example, the value of `containerQuery` for the {{cssxref("@container")}} below is `(width >= 700px)`:

```css
@container sidebar (width >= 700px) {
  /* Styles */
}
```

> [!NOTE]
> The `containerQuery` value has been superseded by {{domxref("CSSContainerRule.conditions")}}, which should be used in supporting browsers.
> Browsers that do not support `conditions` cannot parse `@container` definitions with multiple container conditions.

## Examples

### Basic usage

The example below defines a {{cssxref("@container")}} rule with a single container condition, and displays the properties of the associated {{domxref("CSSContainerRule")}}.
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

The CSS for the container element specifies the type of the container along with a name.
The card has a default font size, which is overridden for the `@container` named `sidebar` if its width is greater than or equal to `700px`.

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

#### JavaScript

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its `id`, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the third rule above, we can access the associated `CSSContainerRule` using the third entry (index "2") in the `cssRules`.

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
```

We then use `containerRule` to log the query of the container condition.
If `CSSContainerRule.conditions` is supported in the browser, we show the name and query from that as well.

```js
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
}
```

#### Results

The example output is shown below.
The log section lists the query of the only container condition using `containerQuery`.
It also shows the name and query using the `conditions` property, if supported.

{{EmbedLiveSample("Basic usage","100%","320px")}}

The text in the card `<div>` should double in size as the page width reaches `700px`, and halve as it goes below `700px` again.

### Multiple container conditions

The example below is almost exactly the same as the previous example except that the CSS specifies multiple container conditions.

Note that we've hidden the HTML because it is the same as in the previous example.

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

The card has a default font size, which is overridden for the `@container` named `sidebar` if its width is greater than or equal to `700px` or if the container has the name `other-name`.
Note that this condition is contrived to demonstrate the effect of multiple conditions (it does not affect the behavior of the example).

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

The code is slightly different from the previous case because if multiple container conditions are not supported by the browser, the `containerRule` will be `undefined`.
We therefore only log the value of `containerQuery` if the browser supports multiple container conditions — it will be the empty string.

```js
if (!containerRule) {
  // Browser doesn't support multiple container conditions
  log(
    "No CSSContainerRule was created. This browser doesn't support @container with multiple conditions.",
  );
} else {
  log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
}

if ("conditions" in CSSContainerRule.prototype) {
  log("CSSContainerRule.conditions:");
  containerRule.conditions.forEach((item) => {
    const jsonString = JSON.stringify(item);
    log(`  ${jsonString}`);
  });
}
```

See [Feature testing](/en-US/docs/Web/API/CSSContainerRule#feature_testing) in `CSSContainerRule` for more information/examples.

#### Results

The example output is shown below.
Note that the rule doesn't exist at all if the browser doesn't support multiple container conditions.
If it does, then the value of `containerQuery` is the empty string.

{{EmbedLiveSample("Multiple container conditions","100%","250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("container")}} shorthand property
- [CSS containment module](/en-US/docs/Web/CSS/Guides/Containment)
- [Container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
