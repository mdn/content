---
title: "HTMLFieldSetElement: elements property"
short-title: elements
slug: Web/API/HTMLFieldSetElement/elements
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.elements
---

{{APIRef("HTML DOM")}}

The **`elements`** read-only property of the {{domxref("HTMLFieldSetElement")}} interface returns an {{domxref("HTMLCollection")}} object containing all form control elements ({{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("object")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, and {{htmlelement("textarea")}} elements) that are descendants of this field set.

You can access a particular form control in the returned collection by using either an
index or the element's `name` or `id` attributes.

## Value

An {{domxref("HTMLCollection")}}.

## Examples

```html
<form id="my-form">
  <fieldset id="my-fieldset">
    <legend>My fieldset</legend>
    <p>
      <label for="username">Username:</label>
      <input type="text" name="username" />
    </p>
    <p>
      <label for="password">Password:</label>
      <input type="password" name="password" />
    </p>
    <p>
      <input type="checkbox" name="remember-me" />
      <label for="remember-me">Remember me</label>
    </p>
  </fieldset>
</form>
```

```js
const fieldset = document.getElementById("my-fieldset");
console.log(fieldset.elements.length); // 3
console.log(fieldset.elements["username"].value); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFormElement.elements")}}
- {{HTMLElement("fieldset")}}
