---
title: Percent-encoding
slug: Glossary/Percent-encoding
page-type: glossary-definition
---

{{GlossarySidebar}}

**Percent-encoding** is a mechanism to encode 8-bit characters that have specific meaning in the context of {{Glossary("URL", "URLs")}}. It is sometimes called URL encoding. The encoding consists of substitution: A '%' followed by the hexadecimal representation of the ASCII value of the replace character.

Special characters needing encoding are: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, as well as `'%'` itself. Other characters don't need to be encoded, though they could.

| Character | Encoding     |
| --------- | ------------ |
| `':'`     | `%3A`        |
| `'/'`     | `%2F`        |
| `'?'`     | `%3F`        |
| `'#'`     | `%23`        |
| `'['`     | `%5B`        |
| `']'`     | `%5D`        |
| `'@'`     | `%40`        |
| `'!'`     | `%21`        |
| `'$'`     | `%24`        |
| `'&'`     | `%26`        |
| `"'"`     | `%27`        |
| `'('`     | `%28`        |
| `')'`     | `%29`        |
| `'*'`     | `%2A`        |
| `'+'`     | `%2B`        |
| `','`     | `%2C`        |
| `';'`     | `%3B`        |
| `'='`     | `%3D`        |
| `'%'`     | `%25`        |
| `' '`     | `%20` or `+` |

Depending on the context, the character `' '` is translated to a `'+'` (like in the percent-encoding version used in an `application/x-www-form-urlencoded` message), or in `'%20'` like on URLs.

## See also

- Definition of [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.
- {{RFC(3986)}}, section 2.1, where this encoding is defined.
- [`encodeURI()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) and [`encodeURIComponent()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) — functions to percent-encode URLs
