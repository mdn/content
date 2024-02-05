---
title: "CSSContainerRule: containerName property"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
page-type: web-api-instance-property
browser-compat: api.CSSContainerRule.containerName
---

{{ APIRef("CSSOM") }}

The read-only **`containerName`** property of the {{domxref("CSSContainerRule")}} interface represents the container name of the associated CSS {{cssxref("@container")}} at-rule.

For example, the value of `containerName` for the {{cssxref("@container")}} below is `sidebar`:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## Value

A string that contains the [`container-name`](/en-US/docs/Web/CSS/container-name) of the {{cssxref("@container")}} associated with this {{domxref("CSSContainerRule")}}.
If the `@container` is not [named](/en-US/docs/Web/API/CSSContainerRule#unnamed_container_rule), the function returns the empty string (`""`).

## Examples

The example below defines a named {{cssxref("@container")}} rule, and displays the properties of the associated {{domxref("CSSContainerRule")}}.
The CSS is very similar to that in the `@container` example [Creating named container contexts](/en-US/docs/Web/CSS/@container#creating_named_container_contexts).

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

The CSS for the container element specifies the type of the container, and may also specify a name.
The card has a default font size, which is overridden for the `@container` named `sidebar` if the minimum width is greater than 700px.

```html
<style id="examplestyles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* Default heading styles for the card title */
  .card h2 {
    font-size: 1em;
  }

  @container sidebar (min-width: 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

The code below gets the {{domxref("HTMLStyleElement")}} associated with the example using its `id`, and then uses its `sheet` property to get the {{domxref("StyleSheet")}}.
From the `StyleSheet` we get the set of `cssRules` added to the sheet.
Since we added the `@container` as the third rule above, we can access the associated `CSSContainerRule` using the third entry (index "2"), in the `cssRules`.
Last of all, we log the container name and query properties (the code that does the logging is not shown).

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

The example output is shown below.
The log section lists the container name string.
The title in the card section should double in size as the width of the page goes over 700px.

{{EmbedLiveSample("Examples","100%","250px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
