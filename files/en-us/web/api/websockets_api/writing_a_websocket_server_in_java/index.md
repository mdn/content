---
title: Writing a WebSocket server in Java
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}}

This example shows you how to create a WebSocket API server using Oracle Java.

Although other server-side languages can be used to create a WebSocket server, this example uses Oracle Java to simplify the example code.

This server conforms to [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455), so it only handles connections from Chrome version 16, Firefox 11, IE 10 and higher.

## First steps

WebSockets communicate over a [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection. Java's [ServerSocket](https://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html) class is located in the `java.net` package.

### ServerSocket

The `ServerSocket` constructor accepts a single parameter `port` of type `int`.

When you instantiate the ServerSocket class, it is bound to the port number you specified by the _port_ argument.

Here's an implementation split into parts:

```java
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class WebSocket {
  public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
    ServerSocket server = new ServerSocket(80);
    try {
      System.out.println("Server has started on 127.0.0.1:80.\r\nWaiting for a connection…");
      Socket client = server.accept();
      System.out.println("A client connected.");
```

### Socket Methods

- `java.net.Socket.getInputStream()`
  - : Returns an input stream for this socket.
- `java.net.Socket.getOutputStream()`
  - : Returns an output stream for this socket.

### OutputStream Methods

```java
write(byte[] b, int off, int len)
```

Writes `len` bytes from the specified byte array starting at offset `off` to this output stream.

### InputStream Methods

```java
read(byte[] b, int off, int len)
```

Reads up to _len_ bytes of data from the input stream into an array of bytes.

Let us extend our example.

```java
InputStream in = client.getInputStream();
OutputStream out = client.getOutputStream();
Scanner s = new Scanner(in, "UTF-8");
```

## Handshaking

When a client connects to a server, it sends a GET request to upgrade the connection to a WebSocket from a simple HTTP request. This is known as handshaking.

```java
try {
  String data = s.useDelimiter("\\r\\n\\r\\n").next();
  Matcher get = Pattern.compile("^GET").matcher(data);
```

Creating the response is easier than understanding why you must do it in this way.

You must,

1. Obtain the value of _Sec-WebSocket-Key_ request header without any leading and trailing whitespace
2. Link it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
3. Compute SHA-1 and Base64 code of it
4. Write it back as value of _Sec-WebSocket-Accept_ response header as part of an HTTP response.

```java
if (get.find()) {
  Matcher match = Pattern.compile("Sec-WebSocket-Key: (.*)").matcher(data);
  match.find();
  byte[] response = ("HTTP/1.1 101 Switching Protocols\r\n"
    + "Connection: Upgrade\r\n"
    + "Upgrade: websocket\r\n"
    + "Sec-WebSocket-Accept: "
    + Base64.getEncoder().encodeToString(MessageDigest.getInstance("SHA-1").digest((match.group(1) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").getBytes("UTF-8")))
    + "\r\n\r\n").getBytes("UTF-8");
  out.write(response, 0, response.length);
```

## Decoding messages

After a successful handshake, client can send messages to the server, but now these are encoded.

If we send "abcdef", we get these bytes:

```plain
129 134 167 225 225 210 198 131 130 182 194 135
```

- 129:

  | FIN (Is this the whole message?) | RSV1 | RSV2 | RSV3 | Opcode   |
  | -------------------------------- | ---- | ---- | ---- | -------- |
  | 1                                | 0    | 0    | 0    | 0x1=0001 |

  FIN: You can send your message in frames, but now keep things simple.
  Opcode _0x1_ means this is a text. [Full list of Opcodes](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

- 134:

  If the second byte minus 128 is between 0 and 125, this is the length of the message. If it is 126, the following 2 bytes (16-bit unsigned integer), if 127, the following 8 bytes (64-bit unsigned integer, the most significant bit MUST be 0) are the length.

  > [!NOTE]
  > It can take 128 because the first bit is always 1.

- 167, 225, 225 and 210 are the bytes of the key to decode. It changes every time.

- The remaining encoded bytes are the message.

### Decoding algorithm

decoded byte = encoded byte XOR (position of encoded byte BITWISE AND 0x3)th byte of key

Example in Java:

```java
          byte[] decoded = new byte[6];
          byte[] encoded = new byte[] { (byte) 198, (byte) 131, (byte) 130, (byte) 182, (byte) 194, (byte) 135 };
          byte[] key = new byte[] { (byte) 167, (byte) 225, (byte) 225, (byte) 210 };
          for (int i = 0; i < encoded.length; i++) {
            decoded[i] = (byte) (encoded[i] ^ key[i & 0x3]);
          }
        }
      } finally {
        s.close();
      }
    } finally {
      server.close();
    }
  }
}
```

## Related

- [Writing WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
