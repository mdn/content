---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
page-type: http-header
browser-compat: http.headers.Content-Location
---

{{HTTPSidebar}}

The **`Content-Location`** header indicates an alternate
location for the returned data. The principal use is to indicate the URL of a resource
transmitted as the result of [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation).

{{HTTPHeader("Location")}} and `Content-Location` are different.
`Location` indicates the URL of a redirect, while
`Content-Location` indicates the direct URL to use to access the resource,
without further content negotiation in the future. `Location` is a header
associated with the response, while `Content-Location` is associated with the
data returned. This distinction may seem abstract without [examples](#examples).

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
  </tbody>
</table>

## Syntax

```http
Content-Location: <url>
```

## Directives

- \<url>
  - : A [relative](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#examples_of_relative_urls)
    (to the request URL) or [absolute](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#examples_of_absolute_urls)
    URL.

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

### Pointing to a new document (HTTP 201 Created)

Say you're creating a new blog post through a site's API:

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

The site returns the published post in the response body. The server specifies _where_ the new post is with the `Content-Location` header, indicating that this location refers to the content (the body) of this response:

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# My first blog post

I made this through `example.com`'s API. I hope it worked.
```

### Indicating the URL of a transaction's result

Say you have a
[`<form>`](/en-US/docs/Web/HTML/Element/form) for sending
money to another user of a site.

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >How much?
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
