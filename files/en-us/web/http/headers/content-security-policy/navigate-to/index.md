---
title: 'CSP: navigate-to'
slug: Web/HTTP/Headers/Content-Security-Policy/navigate-to
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Navigation
  - Reference
  - Security
browser-compat: http.headers.csp.Content-Security-Policy.navigate-to
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`navigate-to`** directive
restricts the URLs to which a document can initiate navigations by any means including
{{HTMLElement("form")}} (if {{CSP("form-action")}} is not specified),
{{HTMLElement("a")}}, {{DOMxRef("window.location")}}, {{DOMxRef("window.open")}}, etc.
This is an enforcement on what navigations this document initiates, **not**
on what this document is allowed to navigate to.

> **Note:** If the {{CSP("form-action")}} directive is present,
> the `navigate-to` directive will not act on navigations
> that are form submissions.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be set for the `navigate-to` policy:

```
Content-Security-Policy: navigate-to <source>;
Content-Security-Policy: navigate-to <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Examples

### Meta tag configuration

```html
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">
```

### Violation case

Using a {{HTMLElement("form")}} element with an action set to inline JavaScript will
result in a CSP violation.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="navigate-to 'none'">

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue">
  <input type="submit" id="submit" value="submit">
</form>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPheader("Content-Security-Policy")}}
- {{CSP("form-action")}}
- {{HTMLElement("a")}} `href` attribute
- {{HTMLElement("form")}}
- {{DOMxRef("window.location")}}
- {{DOMxRef("window.open")}}
