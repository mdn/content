---
title: Writing a WebSocket server in C#
slug: Web/API/WebSockets_API/Writing_WebSocket_server
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}}

If you would like to use the WebSocket API, it is useful if you have a server. In this article I will show you how to write one in C#. You can do it in any server-side language, but to keep things simple and more understandable, I chose Microsoft's language.

This learning example demonstrates the handshake and basic message framing defined by [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455).

> [!WARNING]
> This is not a complete WebSocket implementation: for example, its receive loop does not buffer partial frames or handle control frames and fragmented messages. Use a WebSocket library for a production server.

## First steps

WebSockets communicate over a [TCP (Transmission Control Protocol)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection. Luckily, C# has a [TcpListener](https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener?view=net-6.0) class which does as the name suggests. It is in the `System.Net.Sockets` namespace.

> [!NOTE]
> It is a good idea to include the namespace with the `using` keyword in order to write less. It allows usage of a namespace's classes without typing the full namespace every time.

### TcpListener

Constructor:

```cs
TcpListener(System.Net.IPAddress localAddr, int port)
```

`localAddr` specifies the IP of the listener, and `port` specifies the port.

> [!NOTE]
> To create an `IPAddress` object from a `string`, use the `Parse` static method of `IPAddress`.

Methods:

- `Start()`
- `System.Net.Sockets.TcpClient AcceptTcpClient()`
  Waits for a TCP connection, accepts it and returns it as a TcpClient object.

Here's a barebones server implementation:

```cs
using System.Net.Sockets;
using System.Net;
using System;

class Server {
    public static void Main() {
        TcpListener server = new TcpListener(IPAddress.Parse("127.0.0.1"), 80);

        server.Start();
        Console.WriteLine("Server has started on 127.0.0.1:80.{0}Waiting for a connection…", Environment.NewLine);

        TcpClient client = server.AcceptTcpClient();

        Console.WriteLine("A client connected.");
    }
}
```

### TcpClient

Methods:

- `System.Net.Sockets.NetworkStream GetStream()`
  Gets the stream which is the communication channel. Both sides of the channel have reading and writing capability.

Properties:

- `int Available`
  This Property indicates how many bytes of data have been sent. The value is zero until `NetworkStream.DataAvailable` is _true_.

### NetworkStream

Methods:

- Writes bytes from buffer, offset and size determine length of message.

  ```cs
  Write(byte[] buffer, int offset, int size)
  ```

- Reads bytes to `buffer`. `offset` and `size` determine the length of the message.

  ```cs
  Read(byte[] buffer, int offset, int size)
  ```

Let us extend our example.

```cs
TcpClient client = server.AcceptTcpClient();

Console.WriteLine("A client connected.");

NetworkStream stream = client.GetStream();

// Enter to an infinite cycle to be able to handle every change in stream
while (true) {
    while (!stream.DataAvailable);

    byte[] bytes = new byte[client.Available];

    stream.Read(bytes, 0, bytes.Length);
}
```

## Handshaking

When a client connects to a server, it sends a GET request to upgrade the connection to a WebSocket from a simple HTTP request. This is known as handshaking.

This sample code can detect a GET from the client. Note that this will block until the first 3 bytes of a message are available. Alternative solutions should be investigated for production environments.

```cs
using System.Text;
using System.Text.RegularExpressions;

while(client.Available < 3)
{
   // wait for enough bytes to be available
}

byte[] bytes = new byte[client.Available];

stream.Read(bytes, 0, bytes.Length);

// Translate bytes of request to string
String data = Encoding.UTF8.GetString(bytes);

if (Regex.IsMatch(data, "^GET")) {

} else {

}
```

The response is easy to build, but might be a little difficult to understand. The full explanation of the Server handshake can be found in RFC 6455, section 4.2.2. For our purposes, we'll just build a simple response.

You must:

1. Obtain the value of the "Sec-WebSocket-Key" request header without any leading or trailing whitespace
2. Concatenate it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (a special GUID specified by RFC 6455)
3. Compute SHA-1 and Base64 hash of the new value
4. Write the hash back as the value of {{httpheader("Sec-WebSocket-Accept")}} response header in an HTTP response

```cs
if (new System.Text.RegularExpressions.Regex("^GET").IsMatch(data))
{
    const string eol = "\r\n"; // HTTP/1.1 defines the sequence CR LF as the end-of-line marker

    byte[] response = Encoding.UTF8.GetBytes("HTTP/1.1 101 Switching Protocols" + eol
        + "Connection: Upgrade" + eol
        + "Upgrade: websocket" + eol
        + "Sec-WebSocket-Accept: " + Convert.ToBase64String(
            System.Security.Cryptography.SHA1.Create().ComputeHash(
                Encoding.UTF8.GetBytes(
                    new System.Text.RegularExpressions.Regex("Sec-WebSocket-Key: (.*)").Match(data).Groups[1].Value.Trim() + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
                )
            )
        ) + eol
        + eol);

    stream.Write(response, 0, response.Length);
}
```

## Decoding messages

After a successful handshake, the client will send encoded messages to the server.

If we send "MDN", we get these bytes:

```plain
129 131 61 84 35 6 112 16 109
```

Let's take a look at what these bytes mean.

The first byte, which currently has a value of 129, is a bitfield that breaks down as such:

| FIN (Bit 0) | RSV1 (Bit 1) | RSV2 (Bit 2) | RSV3 (Bit 3) | Opcode (Bit 4:7) |
| ----------- | ------------ | ------------ | ------------ | ---------------- |
| 1           | 0            | 0            | 0            | 0x1=0001         |

- FIN bit: This bit indicates whether the full message has been sent from the client. Messages may be sent in frames, but for now we will keep things simple.
- RSV1, RSV2, RSV3: These bits must be 0 unless an extension is negotiated which supplies a nonzero value to them.
- Opcode: These bits describe the type of message received. Opcode 0x1 means this is a text message. [Full list of Opcodes](https://datatracker.ietf.org/doc/html/rfc6455#section-5.2)

The second byte, which currently has a value of 131, is another bitfield that breaks down as such:

| MASK (Bit 0) | Payload Length (Bit 1:7) |
| ------------ | ------------------------ |
| 1            | 0x83=0000011             |

- MASK bit: Defines whether the "Payload data" is masked. If set to 1, a masking key is present in Masking-Key, and this is used to unmask the "Payload data". All messages from the client to the server have this bit set.
- Payload Length: If this value is between 0 and 125, then it is the length of message. If it is 126, the following 2 bytes (16-bit unsigned integer) are the length. If it is 127, the following 8 bytes (64-bit unsigned integer) are the length.

> [!NOTE]
> Because the first bit is always 1 for client-to-server messages, you can subtract 128 from this byte to get rid of the MASK bit.

Note that the MASK bit is set in our message. This means that the next four bytes (61, 84, 35, and 6) are the mask bytes used to decode the message. These bytes change with every message.

The remaining bytes are the encoded message payload.

### Decoding algorithm

_D_i_ = _E_i_ XOR _M_\_(_i_ mod 4)

where _D_ is the decoded message array, _E_ is the encoded message array, _M_ is the mask byte array, and _i_ is the index of the message byte to decode.

Example in C#:

```cs
byte[] decoded = new byte[3];
byte[] encoded = new byte[3] {112, 16, 109};
byte[] mask = new byte[4] {61, 84, 35, 6};

for (int i = 0; i < encoded.Length; i++) {
    decoded[i] = (byte)(encoded[i] ^ mask[i % 4]);
}
```

## Sending messages from the server

After the handshake, either side can send messages without waiting for a message from the other side. For example, the server can push a notification when a file changes or an administrator enters a message in its terminal.

Sending plain UTF-8 bytes is not enough: the message needs a WebSocket frame. The following method sends a text message in one frame. It sets the FIN bit and text opcode, writes the UTF-8 byte length (which may differ from the string length), then appends the payload. Extended lengths use network byte order, with the most significant byte first. Unlike client frames, server frames must not be masked.

Add this method to the `Server` class:

```cs
static void SendText(NetworkStream stream, string message) {
    byte[] payload = Encoding.UTF8.GetBytes(message);
    int headerLength = payload.Length <= 125 ? 2 : payload.Length <= 65535 ? 4 : 10;
    byte[] frame = new byte[headerLength + payload.Length];
    frame[0] = 0x81; // FIN = 1, opcode = 1 (text)

    // Server-to-client frames are not masked.
    if (headerLength == 2) {
        frame[1] = (byte)payload.Length;
    } else if (headerLength == 4) {
        frame[1] = 126;
        frame[2] = (byte)(payload.Length >> 8);
        frame[3] = (byte)(payload.Length & 0xff);
    } else {
        frame[1] = 127;
        ulong length = (ulong)payload.Length;
        for (int i = 0; i < 8; i++) {
            frame[2 + i] = (byte)((length >> (8 * (7 - i))) & 0xff);
        }
    }

    Array.Copy(payload, 0, frame, headerLength, payload.Length);
    // Keep frames intact if multiple server tasks use this helper.
    lock (stream) {
        stream.Write(frame, 0, frame.Length);
    }
}
```

In the complete example below, a background task reads lines from the server's terminal and calls `SendText()`. Start this task after writing the handshake response. This lets the receive loop continue independently of terminal input. The helper serializes writes; the receive loop may read from the `NetworkStream` at the same time.

To try it, start the server, open `client.html`, then type a message in the server's terminal and press Enter. The browser displays the message even if you have not clicked its send button. You can also send messages from the browser to the server using the text area.

## Put together

### ws-server.cs

```cs
//
// csc ws-server.cs
// ws-server.exe

using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

class Server {
    static void SendText(NetworkStream stream, string message) {
        byte[] payload = Encoding.UTF8.GetBytes(message);
        int headerLength = payload.Length <= 125 ? 2 : payload.Length <= 65535 ? 4 : 10;
        byte[] frame = new byte[headerLength + payload.Length];
        frame[0] = 0x81; // FIN = 1, opcode = 1 (text)

        // Server-to-client frames are not masked.
        if (headerLength == 2) {
            frame[1] = (byte)payload.Length;
        } else if (headerLength == 4) {
            frame[1] = 126;
            frame[2] = (byte)(payload.Length >> 8);
            frame[3] = (byte)(payload.Length & 0xff);
        } else {
            frame[1] = 127;
            ulong length = (ulong)payload.Length;
            for (int i = 0; i < 8; i++) {
                frame[2 + i] = (byte)((length >> (8 * (7 - i))) & 0xff);
            }
        }

        Array.Copy(payload, 0, frame, headerLength, payload.Length);
        // Keep frames intact if multiple server tasks use this helper.
        lock (stream) {
            stream.Write(frame, 0, frame.Length);
        }
    }

    public static void Main() {
        string ip = "127.0.0.1";
        int port = 80;
        var server = new TcpListener(IPAddress.Parse(ip), port);

        server.Start();
        Console.WriteLine("Server has started on {0}:{1}, Waiting for a connection…", ip, port);

        TcpClient client = server.AcceptTcpClient();
        Console.WriteLine("A client connected.");

        NetworkStream stream = client.GetStream();

        // enter to an infinite cycle to be able to handle every change in stream
        while (true) {
            while (!stream.DataAvailable);
            while (client.Available < 3); // match against "get"

            byte[] bytes = new byte[client.Available];
            stream.Read(bytes, 0, bytes.Length);
            string s = Encoding.UTF8.GetString(bytes);

            if (Regex.IsMatch(s, "^GET", RegexOptions.IgnoreCase)) {
                Console.WriteLine("=====Handshaking from client=====\n{0}", s);

                // 1. Obtain the value of the "Sec-WebSocket-Key" request header without any leading or trailing whitespace
                // 2. Concatenate it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (a special GUID specified by RFC 6455)
                // 3. Compute SHA-1 and Base64 hash of the new value
                // 4. Write the hash back as the value of "Sec-WebSocket-Accept" response header in an HTTP response
                string swk = Regex.Match(s, "Sec-WebSocket-Key: (.*)").Groups[1].Value.Trim();
                string swkAndSalt = swk + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
                byte[] swkAndSaltSha1 = System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(swkAndSalt));
                string swkAndSaltSha1Base64 = Convert.ToBase64String(swkAndSaltSha1);

                // HTTP/1.1 defines the sequence CR LF as the end-of-line marker
                byte[] response = Encoding.UTF8.GetBytes(
                    "HTTP/1.1 101 Switching Protocols\r\n" +
                    "Connection: Upgrade\r\n" +
                    "Upgrade: websocket\r\n" +
                    "Sec-WebSocket-Accept: " + swkAndSaltSha1Base64 + "\r\n\r\n");

                stream.Write(response, 0, response.Length);

                // Terminal input can send messages without any client request.
                Task.Run(() => {
                    Console.WriteLine("Type a message and press Enter to send it to the browser.");
                    try {
                        string message;
                        while ((message = Console.ReadLine()) != null) {
                            SendText(stream, message);
                        }
                    } catch (IOException ex) {
                        Console.WriteLine("Could not send the message: {0}", ex.Message);
                    } catch (ObjectDisposedException) {
                        Console.WriteLine("The connection is closed.");
                    }
                });
            } else {
                bool fin = (bytes[0] & 0b10000000) != 0,
                    mask = (bytes[1] & 0b10000000) != 0; // must be true, "All messages from the client to the server have this bit set"
                int opcode = bytes[0] & 0b00001111; // expecting 1 - text message
                ulong offset = 2,
                      msgLen = bytes[1] & (ulong)0b01111111;

                if (msgLen == 126) {
                    // bytes are reversed because websocket will print them in Big-Endian, whereas
                    // BitConverter will want them arranged in little-endian on windows
                    msgLen = BitConverter.ToUInt16(new byte[] { bytes[3], bytes[2] }, 0);
                    offset = 4;
                } else if (msgLen == 127) {
                    // To test the below code, we need to manually buffer larger messages — since the NIC's autobuffering
                    // may be too latency-friendly for this code to run (that is, we may have only some of the bytes in this
                    // websocket frame available through client.Available).
                    msgLen = BitConverter.ToUInt64(new byte[] { bytes[9], bytes[8], bytes[7], bytes[6], bytes[5], bytes[4], bytes[3], bytes[2] },0);
                    offset = 10;
                }

                if (msgLen == 0) {
                    Console.WriteLine("msgLen == 0");
                } else if (mask) {
                    byte[] decoded = new byte[msgLen];
                    byte[] masks = new byte[4] { bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3] };
                    offset += 4;

                    for (ulong i = 0; i < msgLen; ++i)
                        decoded[i] = (byte)(bytes[offset + i] ^ masks[i % 4]);

                    string text = Encoding.UTF8.GetString(decoded);
                    Console.WriteLine("{0}", text);
                } else
                    Console.WriteLine("mask bit not set");

                Console.WriteLine();
            }
        }
    }
}
```

### client.html

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
    <script src="client.js" defer></script>
  </head>
  <body>
    <h2>WebSocket Test</h2>
    <textarea cols="60" rows="6"></textarea>
    <button>send</button>
    <div id="output"></div>
  </body>
</html>
```

### styles.css

```css
textarea {
  vertical-align: bottom;
}
#output {
  overflow: auto;
}
#output > p {
  overflow-wrap: break-word;
}
#output .received {
  color: blue;
}
#output .error {
  color: red;
}
```

### client.js

```js
const button = document.querySelector("button");
const output = document.querySelector("#output");
const textarea = document.querySelector("textarea");
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);

button.addEventListener("click", onClickButton);

websocket.onopen = (e) => {
  writeToScreen("CONNECTED");
};

websocket.onclose = (e) => {
  writeToScreen("DISCONNECTED");
};

websocket.onmessage = (e) => {
  writeToScreen(`RECEIVED: ${e.data}`, "received");
};

websocket.onerror = () => {
  writeToScreen(
    "A WebSocket error occurred. Check the browser console.",
    "error",
  );
};

function doSend(message) {
  writeToScreen(`SENT: ${message}`);
  websocket.send(message);
}

function writeToScreen(message, className = "") {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  paragraph.className = className;
  output.prepend(paragraph);
}

function onClickButton() {
  const text = textarea.value;

  text && doSend(text);
  textarea.value = "";
  textarea.focus();
}
```

## Related

- [Writing WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
