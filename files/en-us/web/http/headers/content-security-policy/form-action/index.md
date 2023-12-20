---
title: "CSP: form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.form-action
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`** directive restricts the URLs which can be used as the target of form submissions from a given context.

> **Warning:** Whether `form-action` should block redirects after a form submission is [debated](https://github.com/w3c/webappsec-csp/issues/8) and browser implementations of this aspect are inconsistent (e.g. Firefox 57 doesn't block the redirects whereas Chrome 63 does).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
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

One or more sources can be set for the `form-action` policy:

```http
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Meta tag configuration

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Apache configuration

```apacheconf
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Nginx configuration

```nginx
add_header Content-Security-Policy "form-action 'none';"
```

### Violation case

Using a {{HTMLElement("form")}} element with an action set to inline JavaScript will result in a CSP violation.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
// Error: Refused to send form data because it violates the following
// Content Security Policy directive: "form-action 'none'".
-->
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}
