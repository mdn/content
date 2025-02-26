---
title: Quality values
slug: Glossary/Quality_values
page-type: glossary-definition
---

{{GlossarySidebar}}

**Quality values**, or _q-values_ and _q-factors_, are used to describe the order of priority of values in a comma-separated list. It is a special syntax allowed in some [HTTP headers](/en-US/docs/Web/HTTP/Headers) and in HTML.

The importance of a value is marked by the suffix `';q='` immediately followed by a value between `0` and `1` included, with up to three decimal digits, the highest value denoting the highest priority. When not present, the default value is `1`.

## Examples

The following syntax

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

indicates the order of priority:

| Value                                   | Priority |
| --------------------------------------- | -------- |
| `text/html` and `application/xhtml+xml` | `1.0`    |
| `application/xml`                       | `0.9`    |
| `*/*`                                   | `0.8`    |

If there is no priority defined for the first two values, the order in the list is irrelevant. Nevertheless, with the same quality, more specific values have priority over less specific ones:

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Value       | Priority                      |
| ----------- | ----------------------------- |
| `text/html` | `0.8` (but totally specified) |
| `text/*`    | `0.8` (partially specified)   |
| `*/*`       | `0.8` (not specified)         |

Some syntax, like the one of {{HTTPHeader("Accept")}}, allow additional specifiers like `text/html;level=1`. These increase the specificity of the value. Their use is extremely rare.

## More information

- [HTTP headers](/en-US/docs/Web/HTTP/Headers) using q-values in their syntax: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}.
- [Header field definitions.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
