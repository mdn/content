---
title: WebDriver errors
short-title: Errors
slug: Web/WebDriver/Reference/Errors
page-type: landing-page
sidebar: webdriver
---

Any WebDriver [command](/en-US/docs/Web/WebDriver/Reference/Commands) that is sent to might plausibly receive an error [response](/en-US/docs/Web/WebDriver/Reference/Response). An error is represented by an [HTTP response](/en-US/docs/Web/HTTP) with an [HTTP status code](/en-US/docs/Web/HTTP/Reference/Status) in the 4xx or 5xx range, and a JSON payload holding details of the error.

## Payload

The **error object** is a JSON Object that bears three, and sometimes four, fields:

- `error`
  - : Error type.
- `message`
  - : Human-readable description of the nature of the error.
- `stacktrace`
  - : Stacktrace report of the active stack frames at the time when the error occurred.
- `data` (optional)

  - : Arbitrary and implementation-defined data that it can be useful to present the user with.

    Many drivers include the [user prompt](/en-US/docs/Web/API/Window/alert)'s text when encountering an [unexpected alert open](/en-US/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) error.

## Example

For example a [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) request to `/session/1234/url`, where `1234` is a bogus session, would return a response with the {{HTTPStatus(404, "404 Not Found")}} status and the following body:

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

It is optional for the driver to annotate errors with additional error data. Notably, this is common when a user prompt, such as `window.alert`, has opened a modal dialog after execution of your previous WebDriver command request.

Because both WebDriver and JavaScript execution is halted by such a dialog, we see an [unexpected alert open](/en-US/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen) error in the subsequent response:

```json
{
  "value": {
    "error": "unexpected alert open",
    "message": "",
    "stacktrace": "",
    "data": {
      "text": "Message from window.alert"
    }
  }
}
```

In most [clients](/en-US/docs/Web/WebDriver/Reference/Clients) the error would be represented by some sort of error _type_ or _object representation_. In Python it is represented as a [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/common/selenium.common.exceptions.html), in Node.js as a [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html), and in Java also as a [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html).

## Table of errors

| Error type                                                                                      | HTTP status code                                 | Description                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/en-US/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | The [Element Click](/en-US/docs/Web/WebDriver/Reference/ElementClick) [command](/en-US/docs/Web/WebDriver/Reference/Command) could not be completed because the [element](/en-US/docs/Web/WebDriver/Reference/WebElement) receiving the events is obscuring the element that was requested clicked. |
| [element not interactable](/en-US/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | A [command](/en-US/docs/Web/WebDriver/Reference/Command) could not be completed because the element is not pointer- or keyboard interactable.                                                                                                                                                       |
| [insecure certificate](/en-US/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | Navigation caused the user agent to hit a certificate warning, which is usually the result of an expired or invalid TLS certificate.                                                                                                                                                                |
| [invalid argument](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | The arguments passed to a [command](/en-US/docs/Web/WebDriver/Reference/Command) are either invalid or malformed.                                                                                                                                                                                   |
| [invalid cookie domain](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | An illegal attempt was made to set a cookie under a different domain than the current page.                                                                                                                                                                                                         |
| [invalid element state](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | A [command](/en-US/docs/Web/WebDriver/Reference/Command) could not be completed because the element is in an invalid state, e.g., attempting to [clear](/en-US/docs/Web/WebDriver/Reference/ElementClear) an element that isn't both editable and resettable.                                       |
| [invalid selector](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | An element retrieval command provided an unknown selector strategy.                                                                                                                                                                                                                                 |
| [invalid session id](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | Given session ID is not recognized, meaning the session either does not exist of that it's not active. Note that a session that [has been deleted](/en-US/docs/Web/WebDriver/Reference/DeleteSession) cannot be re-used.                                                                            |
| [JavaScript error](/en-US/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | An error occurred while executing JavaScript supplied by the user.                                                                                                                                                                                                                                  |
| [move target out of bounds](/en-US/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | The target for mouse interaction is not in the browser's viewport and cannot be brought into that viewport.                                                                                                                                                                                         |
| [no such alert](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | An attempt was made to operate on a user prompt when one was not open.                                                                                                                                                                                                                              |
| [no such cookie](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | No cookie matching the given path name was found amongst the [cookies](/en-US/docs/Glossary/Cookie) of the current [document](/en-US/docs/Web/API/Document).                                                                                                                                        |
| [no such element](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | An element could not be located on the page using the given search parameters.                                                                                                                                                                                                                      |
| [no such frame](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | A [command](/en-US/docs/Web/WebDriver/Reference/Command) to switch to a frame could not be satisfied because the frame could not be found.                                                                                                                                                          |
| [no such window](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | A [command](/en-US/docs/Web/WebDriver/Reference/Command) to switch to a window could not be satisfied because the window could not be found.                                                                                                                                                        |
| [script timeout](/en-US/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | A script did not complete before its timeout expired.                                                                                                                                                                                                                                               |
| [session not created](/en-US/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | A new session could not be created, either because the browser could not be started or because the provided [capabilities](/en-US/docs/Web/WebDriver/Reference/Capabilities) to start the session did not match.                                                                                    |
| [stale element reference](/en-US/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | A [command](/en-US/docs/Web/WebDriver/Reference/Command) failed because the referenced [element](/en-US/docs/Web/WebDriver/Reference/WebElement) is no longer attached to the DOM.                                                                                                                  |
| [timeout](/en-US/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | An operation did not complete before its timeout expired.                                                                                                                                                                                                                                           |
| [unable to set cookie](/en-US/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | A [command](/en-US/docs/Web/WebDriver/Reference/Command) to set a cookie's value could not be satisfied.                                                                                                                                                                                            |
| [unable to capture screen](/en-US/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | A screen capture was made impossible.                                                                                                                                                                                                                                                               |
| [unexpected alert open](/en-US/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | A modal dialog was open, blocking this operation.                                                                                                                                                                                                                                                   |
| [unknown command](/en-US/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | A [command](/en-US/docs/Web/WebDriver/Reference/Command) could not be executed because the driver was unaware of it.                                                                                                                                                                                |
| [unknown error](/en-US/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | An unknown error occurred in the driver whilst processing the [command](/en-US/docs/Web/WebDriver/Reference/Command).                                                                                                                                                                               |
| [unknown method](/en-US/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | The requested [command](/en-US/docs/Web/WebDriver/Reference/Command) matched a known URL but did not match a method for that URL.                                                                                                                                                                   |
| [unsupported operation](/en-US/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | Indicates that a [command](/en-US/docs/Web/WebDriver/Reference/Command) that should have executed properly cannot be supported for some reason.                                                                                                                                                     |

## See also

- [WebDriver responses](/en-US/docs/Web/WebDriver/Reference/Response)
- [WebDriver commands](/en-US/docs/Web/WebDriver/Reference/Commands)
