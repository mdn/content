---
title: 409 Conflict
slug: Web/HTTP/Status/409
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.409
---

{{HTTPSidebar}}

The HTTP **`409 Conflict`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates a request conflict with the current state of the target resource.

In {{glossary("WebDAV")}} remote web authoring, 409 conflict responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
For example, conflicts occur if a request to create collection `/a/b/c/d/` is made, and `/a/b/c/` does not exist, the request must fail with a 409.
Additionally, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.

In other systems, 409 responses may be used for implementation-specific purposes, such as to indicate that the server has received multiple requests to update the same resource.

## Status

```http
409 Conflict
```

## Examples

### Concurrent tasks disallowed

In the following example, we want to kick off an automation process that performs a common task in the system:

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

In this implementation, the server disallows two concurrent jobs from running and returns a 409, providing the client an opportunity to check if they meant to perform the action or run a different task:

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "AutomationConflict",
  "task": "emailDogOwners",
  "message": "Task locked. Cannot start a new automation since job is already running.",
  "runningTaskId": "123"
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPMethod("PUT")}}
