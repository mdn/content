---
title: "CSP: plugin-types"
slug: Web/HTTP/Headers/Content-Security-Policy/plugin-types
page-type: http-csp-directive
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Content-Security-Policy.plugin-types
---

{{HTTPSidebar}}{{deprecated_header}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`plugin-types`** directive restricts the set of plugins that
can be embedded into a document by limiting the types of resources which can be loaded.

Instantiation of an {{HTMLElement("embed")}} or {{HTMLElement("object")}} element will fail if:

- the element to load does not declare a valid MIME type,
- the declared type does not match one of specified types in the
  `plugin-types` directive,
- the fetched resource does not match the declared type.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
  </tbody>
</table>

## Syntax

One or more [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) can
be set for the `plugin-types` policy:

```http
Content-Security-Policy: plugin-types <type>/<subtype>;
Content-Security-Policy: plugin-types <type>/<subtype> <type>/<subtype>;
```

- \<type>/\<subtype>
  - : A valid [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

## Examples

### Disallowing plugins

To disallow all plugins, the {{CSP("object-src")}} directive should be set to
`'none'` which will disallow plugins. The `plugin-types` directive
is only used if you are allowing plugins with `object-src` at all.

```html
<meta http-equiv="Content-Security-Policy" content="object-src 'none'" />
```

## Specifications

Not part of any current specification. Used to be defined in [CSP 2](https://www.w3.org/TR/CSP2/#directive-plugin-types).

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}: {{CSP("object-src")}}
- {{HTMLElement("object")}}
- {{HTMLElement("embed")}}
- {{HTTPHeader("X-Content-Type-Options")}}
