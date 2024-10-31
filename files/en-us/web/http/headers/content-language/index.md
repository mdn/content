---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
page-type: http-header
browser-compat: http.headers.Content-Language
---

{{HTTPSidebar}}

The HTTP **`Content-Language`** {{Glossary("representation header")}} is used to describe the language(s) intended for the audience, so users can differentiate it according to their own preferred language.

For example, `Content-Language: de-DE` indicates that the document is intended for German language speakers. The document may be written in English, not German, as part of a language course for German speakers. To indicate the language the document is **written in**, use the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute instead.

If no `Content-Language` is specified, the default is that the content is intended for all language audiences. Multiple language tags are also possible, as well as applying the `Content-Language` header to various media types and not only to textual documents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        Yes*
      </td>
    </tr>
  </tbody>
</table>

\* Values can only be `0-9`, `A-Z`, `a-z`, a space, or the characters `*,-.;=`.

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Directives

- `language-tag`
  - : Multiple language tags are separated by a comma. Each language tag is a sequence of one or more case-insensitive subtags, each separated by a hyphen character (`-`). In most cases, a language tag consists of a primary language subtag that identifies a broad family of related languages (e.g., `en` = English) and is optionally followed by a series of subtags that refine or narrow that language's range (e.g., `en-CA` = the variety of English as communicated in Canada).

> [!NOTE]
> Language tags are formally defined in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), which rely on the [ISO 639](https://en.wikipedia.org/wiki/ISO_639) standard (quite often the [ISO 639-1 code list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) for [language codes](https://en.wikipedia.org/wiki/Language_code) to be used.

## Examples

### Indicating the language a document is written in

The global [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute is used on HTML elements to indicate the language of an entire [HTML](/en-US/docs/Web/HTML) document or parts of it.

```html
<html lang="de">
  …
</html>
```

Do **not** use this meta element to state the document language, as shown below:

```html example-bad
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
