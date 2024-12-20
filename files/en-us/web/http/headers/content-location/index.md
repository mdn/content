---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
page-type: http-header
browser-compat: http.headers.Content-Location
---

{{HTTPSidebar}}

The HTTP **`Content-Location`** {{Glossary("representation header")}} indicates an alternate location for the returned data.
It's main use is to indicate the URL of a resource transmitted as the result of [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation).

The `Content-Location` header is different from the {{HTTPHeader("Location")}} header.
`Content-Location` indicates the direct URL to access the resource when [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) has happened, allowing the client to bypass future content negotiation for this resource.
`Location`, on the other hand, indicates either the target of a `3XX` redirection or the URL of a newly created resource in a {{HTTPStatus("201", "201 Created")}} response.

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
  </tbody>
</table>

## Syntax

```http
Content-Location: <url>
```

## Directives

- `<url>`
  - : A URL that can be [absolute](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) or [relative](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) to the request URL.

## Examples

### Requesting data from a server in different formats

Let's say a site's API can return data in {{glossary("JSON")}}, {{glossary("XML")}}, or
[CSV](https://en.wikipedia.org/wiki/Comma-separated_values) formats. If the URL for a particular document
is at `https://example.com/documents/foo`, the site could return different
URLs for `Content-Location` depending on the request's
{{HTTPHeader("Accept")}} header:

| Request header                        | Response header                         |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

These URLs are examples — the site could serve the different filetypes with any URL
patterns it wishes, such as a [query string parameter](/en-US/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`,
`/documents/foo?format=xml`, and so on.

Then the client could remember that the JSON version is available at that particular
URL, skipping content negotiation the next time it requests that document.

The server could also consider other [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) headers, such
as {{HTTPHeader("Accept-Language")}}.

### Indicating the URL of a transaction's result

Say you have a
[`<form>`](/en-US/docs/Web/HTML/Element/form) for sending
money to another user of a site.

```html
<form action="/send-payment" method="post">
  <p>
    <label>
      Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>
      How much?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Send Money</button>
</form>
```

When the form is submitted, the site generates a receipt for the transaction. The
server could use `Content-Location` to indicate that receipt's URL for future
access.

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Lots of HTML…)

<p>You sent $38.00 to ExampleUser.</p>

(Lots more HTML…)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Location")}}
