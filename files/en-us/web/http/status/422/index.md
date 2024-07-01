---
title: 422 Unprocessable Content
slug: Web/HTTP/Status/422
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.422
---

{{HTTPSidebar}}

The HTTP **`422 Unprocessable Content`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.

Clients that receive a `422` response should expect that repeating the request without modification will fail with the same error.

## Status

```http
422 Unprocessable Content
```

## Examples

### SHA validation failure

The following example is based on GitHub's API and makes a request to [update a file contents](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents).
The `content` field is Base64 encoded, but uses `\n` line feeds every 60 characters, with one terminating the string:

```http
PUT /repos/mdn/content/contents/README.md HTTP/1.1
Host: api.github.com
Accept: application/vnd.github+json
Authorization: Bearer abcd123
X-GitHub-Api-Version: 2022-11-28
Content-Type: application/json
Content-Length: 165

{
  "message": "My commit",
  "content": "WW9zaGkgd2FzIHRoZXJlLCBzbyB3ZXJlIEF5c2UsIGFuZCBCZWxnaW4uIEl0\nIHdhcyBncmVhdCE=\n",
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

The server expects strictly {{rfc("4648")}}-compliant Base64 encoded content, so you will receive a `422` Unprocessable Entity response.
The `message` field provides context about the validation error:

```http
HTTP/1.1 422 Unprocessable Entity
Date: Fri, 28 Jun 2024 12:00:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 187

{
  "message": "content is not valid Base64",
  "documentation_url": "https://docs.github.com/en/rest/repos/contents"
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
