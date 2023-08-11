---
title: "CloseEvent: code property"
short-title: code
slug: Web/API/CloseEvent/code
page-type: web-api-instance-property
browser-compat: api.CloseEvent.code
---

{{APIRef("Websockets API")}}

The **`code`** read-only property of the {{domxref("CloseEvent")}} interface returns a [WebSocket connection close code](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) indicating the reason the server gave for closing the connection.

## Value

An integer [WebSocket connection close code](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) in the range `1000` - `4999`, indicating the reason the server gave for closing the connection.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Status code</th>
      <th>Meaning</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code>–<code>999</code></td>
      <td></td>
      <td>Not used.</td>
    </tr>
    <tr>
      <td><code>1000</code></td>
      <td>Normal Closure</td>
      <td>
        The connection successfully completed the purpose for which it was
        created.
      </td>
    </tr>
    <tr>
      <td><code>1001</code></td>
      <td>Going Away</td>
      <td>
        The endpoint is going away, either because of a server failure or
        because the browser is navigating away from the page that opened the
        connection.
      </td>
    </tr>
    <tr>
      <td><code>1002</code></td>
      <td>Protocol error</td>
      <td>
        The endpoint is terminating the connection due to a protocol error.
      </td>
    </tr>
    <tr>
      <td><code>1003</code></td>
      <td>Unsupported Data</td>
      <td>
        The connection is being terminated because the endpoint received data of
        a type it cannot accept. (For example, a text-only endpoint received
        binary data.)
      </td>
    </tr>
    <tr>
      <td><code>1004</code></td>
      <td>Reserved</td>
      <td>
        <strong>Reserved.</strong> A meaning might be defined in the future.
      </td>
    </tr>
    <tr>
      <td><code>1005</code></td>
      <td>No Status Rcvd</td>
      <td>
        <strong>Reserved.</strong> Indicates that no status code was provided even though one was expected.
      </td>
    </tr>
    <tr>
      <td><code>1006</code></td>
      <td>Abnormal Closure</td>
      <td>
       <strong>Reserved.</strong> Indicates that a connection was closed abnormally (that is, with no
        close frame being sent) when a status code is expected.
      </td>
    </tr>
    <tr>
      <td><code>1007</code></td>
      <td>Invalid frame payload data</td>
      <td>
        The endpoint is terminating the connection because a message was
        received that contained inconsistent data (e.g., non-UTF-8 data within a
        text message).
      </td>
    </tr>
    <tr>
      <td><code>1008</code></td>
      <td>Policy Violation</td>
      <td>
        The endpoint is terminating the connection because it received a message
        that violates its policy. This is a generic status code, used when codes
        1003 and 1009 are not suitable.
      </td>
    </tr>
    <tr>
      <td><code>1009</code></td>
      <td>Message Too Big</td>
      <td>
        The endpoint is terminating the connection because a data frame was
        received that is too large.
      </td>
    </tr>
    <tr>
      <td><code>1010</code></td>
      <td>Mandatory Ext.</td>
      <td>
        The client is terminating the connection because it expected the server
        to negotiate one or more extension, but the server didn't.
      </td>
    </tr>
    <tr>
      <td><code>1011</code></td>
      <td>Internal Error</td>
      <td>
        The server is terminating the connection because it encountered an
        unexpected condition that prevented it from fulfilling the request.
      </td>
    </tr>
    <tr>
      <td><code>1012</code></td>
      <td><a href="http://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">Service Restart</a></td>
      <td>
        The server is terminating the connection because it is restarting.
      </td>
    </tr>
    <tr>
      <td><code>1013</code></td>
      <td><a href="http://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">Try Again Later</a></td>
      <td>
        The server is terminating the connection due to a temporary condition,
        e.g. it is overloaded and is casting off some of its clients.
      </td>
    </tr>
    <tr>
      <td><code>1014</code></td>
      <td><a href="https://www.ietf.org/mail-archive/web/hybi/current/msg10748.html">Bad Gateway</a></td>
      <td>
        The server was acting as a gateway or proxy and received an invalid
        response from the upstream server. This is similar to 502 HTTP Status
        Code.
      </td>
    </tr>
    <tr>
      <td><code>1015</code></td>
      <td>TLS handshake</td>
      <td>
        <strong>Reserved.</strong> Indicates that the connection was closed due
        to a failure to perform a TLS handshake (e.g., the server certificate
        can't be verified).
      </td>
    </tr>
    <tr>
      <td><code>1016</code>–<code>2999</code></td>
      <td></td>
      <td>
        For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.
      </td>
    </tr>
    <tr>
      <td><code>3000</code>–<code>3999</code></td>
      <td></td>
      <td>
        For use by libraries, frameworks, and applications. These status codes are <a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">registered directly with IANA</a>. The interpretation of these codes is undefined by the WebSocket protocol.
      </td>
    </tr>
    <tr>
      <td><code>4000</code>–<code>4999</code></td>
      <td></td>
      <td>
         For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol.
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example prints the value of `code` to the console.

```js
WebSocket.onclose = (event) => {
  console.log(event.code);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
- [WebSocket Close Code Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number) (IANA)
