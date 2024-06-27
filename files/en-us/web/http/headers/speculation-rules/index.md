---
title: Speculation-Rules
slug: Web/HTTP/Headers/Speculation-Rules
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Speculation-Rules
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Speculation-Rules`** response header provides one or more URLs pointing to text resources containing speculation rule JSON definitions. When the response is an HTML document, these rules will be added to the document's speculation rule set. See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) for more information.

The resource file containing the speculation rules JSON can have any valid name and extension, but it must be served with an `application/speculationrules+json` MIME type.

> **Note:** This mechanism provides an alternative to specifying the JSON definition inside an inline [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules) element. Specifying an HTTP header is useful in cases where developers are not able to directly modify the document itself.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Speculation-Rules: <url-list>
```

## Directives

- \<url-list>
  - : A comma-separated list of URLs pointing to text resources containing speculation rule JSON definitions. The JSON contained in the text files must follow the same rules as that contained inside inline `<script type="speculationrules">` elements. See [Speculation rules JSON representation](/en-US/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) for the syntax reference.

## Examples

Single speculation rules file reference:

```http
Speculation-Rules: "/rules/prefetch.json"
```

Multiple speculation rules file references:

```http
Speculation-Rules: "/rules/prefetch.json","/rules/prerender.json"
```

> **Note:** The URL values must be contained in quotes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules)
