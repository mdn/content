---
title: "CSSContainerRule: containerQuery property"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
page-type: web-api-instance-property
browser-compat: api.CSSContainerRule.containerQuery
---

{{ APIRef("CSSOM") }}

The read-only **`containerQuery`** property of the {{domxref("CSSContainerRule")}} interface returns a string representing the container conditions that are evaluated when the container changes size in order to determine if the styles in the associated {{cssxref("@container")}} are applied.

For example, the value of `containerQuery` for the {{cssxref("@container")}} below is `(min-width: 700px)`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Value

A string containing the container query.

Note that the value may not be identical to the original string, as normalizations such as removing whitespace may happen.

## Examples

The example below defines an unnamed {{cssxref("@container")}} rule, and displays the properties of the associated {{domxref("CSSContainerRule")}}.
The CSS is the same as in the `@container` example [Setting styles based on a container's size](/en-US/docs/Web/CSS/@container#setting_styles_based_on_a_containers_size).

```html hidden
<div id="log">
  <h2>Log</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// Store reference to log list
const logList = document.querySelector("#log ul");
// Function to log data from underlying source
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

First we define the HTML for a `card` (`<div>`) contained within a `post`.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

The CSS for the container element specifies the type of the container.
The {{cssxref("@container")}} then applies a new width, font-size and background color to the contained element "card" if the width is less than 650px.

```html
<style id="examplestyles">
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
Since we added the `@container` as the second rule above, we can access the associated `CSSContainerRule` using the second entry (with index "1"), in the `cssRules`.
Last of all, we log the container name and query properties.

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

The example output is shown below.
The log section lists the query string.
The card should change background and as the width of the page transitions through 650px.

{{EmbedLiveSample("Examples","100%","250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
