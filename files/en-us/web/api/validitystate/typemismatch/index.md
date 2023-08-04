---
title: "ValidityState: typeMismatch property"
short-title: typeMismatch
slug: Web/API/ValidityState/typeMismatch
page-type: web-api-instance-property
browser-compat: api.ValidityState.typeMismatch
---

{{APIRef("HTML DOM")}}

The read-only **`typeMismatch`** property of a **[`ValidityState`](/en-US/docs/Web/API/ValidityState)** object indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's [`type`](/en-US/docs/Web/HTML/Element/input#input_types) attribute.

If the `type` attribute expects specific strings, such as the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} types and the value doesn't conform to the constraints set by the type, the `typeMismatch` property will be true.

The {{HTMLElement("input/email", "email")}} input type expects one or more valid email addresses, depending on whether the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute is present. A valid email address includes an email prefix and a domain, with or without a top level domain. If the value of the email input is not an empty string, a single valid email address, or one or more comma separated email address if the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute is present, there is a `typeMismatch`.

The {{HTMLElement("input/url", "url")}} input type expects one or more valid URLs, depending on whether the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute is present. A valid URL includes a protocol, optionally with an IP address, or an optional subdomain, domain, and top level domain combination. If the value of the URL input is not an empty string, a single valid URL, or one or more comma separated URLS if the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute is present, there is a `typeMismatch`.

| Input type                              | Value             | Expected value                                                 |
| --------------------------------------- | ----------------- | -------------------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` or `x@y.z`  | email address, with or without [TLD](/en-US/docs/Glossary/TLD) |
| {{HTMLElement("input/url", "url")}}     | `x:` or `x://y.z` | protocol or full URL with protocol                             |

## Examples

Given the following:

```html
<p>
  <label>
    Enter an email address:
    <input type="email" value="example.com" />
  </label>
</p>
<p>
  <label>
    Enter a URL:
    <input type="url" value="example.com" />
  </label>
</p>
```

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 110)}}

The above each produce a `typeMismatch` because the email address is just a domain and the URL has no protocol

The `typeMismatch` occurs when there is a disconnect between the [`value`](/en-US/docs/Web/HTML/Attributes/value) expected via the [`type`](/en-US/docs/Web/HTML/Element/input#input_types) attribute and the data that is actually present. The `typeMismatch` is only one of the many possible errors and is only relevant for the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} types. When the value provided doesn't match the expected value based on the type for other input types, you get different errors. For example, if the {{HTMLElement("input/number", "number")}} input value is not a floating point number, the `badInput` is `true`. If the email is [`required`](/en-US/docs/Web/HTML/Attributes/required) but is empty, the {{domxref('ValidityState.valueMissing','valueMissing')}} will be `true`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
