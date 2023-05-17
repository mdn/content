---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
page-type: http-header
browser-compat: http.headers.Content-Language
---

{{HTTPSidebar}}

The **`Content-Language`** {{Glossary("representation header")}} is used to **describe the language(s) intended for the audience**, so users can differentiate it according to their own preferred language.

For example, if "`Content-Language: de-DE`" is set, it says that the document is intended for German language speakers (however, it doesn't indicate the document is written in German. For example, it might be written in English as part of a language course for German speakers. If you want to indicate which language the document is written in, use the [`lang` attribute](/en-US/docs/Web/HTML/Global_attributes/lang) instead).

If no `Content-Language` is specified, the default is that the content is intended for all language audiences. Multiple language tags are also possible, as well as applying the `Content-Language` header to various media types and not only to textual documents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        yes, with the additional restriction that values can only be
        <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, space or
        <code>*,-.;=</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Directives

- `language-tag`
  - : Multiple language tags are separated by a comma. Each language tag is a sequence of one or more case-insensitive subtags, each separated by a hyphen character ("`-`", `%x2D`). In most cases, a language tag consists of a primary language subtag that identifies a broad family of related languages (e.g., "`en`" = English) and is optionally followed by a series of subtags that refine or narrow that language's range (e.g., "`en-CA`" = the variety of English as communicated in Canada).

> **Note:** Language tags are formally defined in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), which rely on the [ISO 639](https://en.wikipedia.org/wiki/ISO_639) standard (quite often the [ISO 639-1 code list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) for [language codes](https://en.wikipedia.org/wiki/Language_code) to be used.

## Examples

### Indicating the language a document is written in

The global [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute is used on HTML elements to indicate the language of an entire [HTML](/en-US/docs/Web/HTML) document or parts of it.

```html
<html lang="de">
  …
</html>
```

Do **not** use this meta element like this for stating a document language:

```html example-bad
<!-- ⚠️ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### Indicating a target audience for a resource

The `Content-Language` header is used to specify the **page's intended audience** and can indicate that this is more than one language.

```http
Content-Language: de, en
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` attribute](/en-US/docs/Web/HTML/Global_attributes/lang)
