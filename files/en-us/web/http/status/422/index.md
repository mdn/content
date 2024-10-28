---
title: 422 Unprocessable Content
slug: Web/HTTP/Status/422
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.422
---

{{HTTPSidebar}}

The HTTP **`422 Unprocessable Content`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server understood the content type of the request content, and the syntax of the request content was correct, but it was unable to process the contained instructions.

Clients that receive a `422` response should expect that repeating the request without modification will fail with the same error.

## Status

```http
422 Unprocessable Content
```

## Examples

### SHA validation failure

The following example makes a request to update file contents ([based on GitHub's API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents)).
The `content` field is {{glossary("Base64")}} encoded and uses `\n` line feeds every 60 characters, with one terminating the string:

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.example.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

In this implementation, the server expects strictly {{rfc("4648")}}-compliant Base64 encoded content (using [strict encoding methods](https://ruby-doc.org/3.3.2/stdlibs/base64/Base64.html#method-i-strict_encode64)).
A `422` Unprocessable Content response is returned and the `message` field provides context about the validation error:

```http
HTTP/1.1 422 Unprocessable Content
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "content is not valid Base64",
  "documentation_url": "https://docs.example.com/en/rest/repos/contents"
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
