---
title: Using WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
page-type: guide
browser-compat: api.RTCRtpReceiver.transform
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms provide a mechanism to inject a high performance [Stream API](/en-US/docs/Web/API/Streams_API) for modifying encoded video and audio frame into the incoming and outgoing WebRTC pipelines.
This enables use cases such as end-to-end encryption of encoded frames by third-party code.

The API defines both main thread and worker side objects.
The main-thread interface is a {{domxref("RTCRtpScriptTransform")}} instance, which on construction specifies the {{domxref("Worker")}} that is to implement the transformer code.
The transform running in the worker is inserted into the incoming or outgoing WebRTC pipeline by adding the `RTCRtpScriptTransform` to {{domxref("RTCRtpReceiver.transform")}} or {{domxref("RTCRtpSender.transform")}}, respectively.

A counterpart {{domxref("RTCRtpScriptTransformer")}} object is created in the worker thread, which has a {{domxref("ReadableStream")}} `readable` property, a {{domxref("WritableStream")}} `writable` property, and an `options` object passed from the associated {{domxref("RTCRtpScriptTransform")}} constructor.
Encoded video frames ({{domxref("RTCEncodedVideoFrame")}}) or audio frames ({{domxref("RTCEncodedAudioFrame")}}) from the WebRTC pipeline are enqueued on `readable` for processing.

The `RTCRtpScriptTransformer` is made available to code as the `transformer` property of the {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} event, which is fired at the worker global scope whenever an encoded frame is enqueued for processing (and initially on construction of the corresponding {{domxref("RTCRtpScriptTransform")}}).
The worker code must implement a handler for the event that reads encoded frames from `transformer.readable`, modifies them as needed, and writes them to `transformer.writable` in the same order and without any duplication.

While the interface doesn't place any other restrictions on the implementation, a natural way to transform the frames is to create a [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains) that sends frames enqueued on the `event.transformer.readable` stream through an {{DOMxRef("TransformStream")}} to the `event.transformer.writable` stream.
We can use the `event.transformer.options` property to configure any transform code that depends on whether the transform is enqueuing incoming frames from the packetizer or outgoing frames from a codec.

The {{domxref("RTCRtpScriptTransformer")}} interface also provides methods that can be used when sending encoded video to get the codec to generate a "key" frame, and when receiving video to request that a new key frame be sent.
These may be useful to allow a recipient to start viewing the video more quickly, if (for example) they join a conference call when delta frames are being sent.

The following examples provide more specific examples of how to use the framework using a {{DOMxRef("TransformStream")}} based implementation.

## Test if encoded transforms are supported

Test if [encoded transforms are supported](#browser_compatibility) by checking for the existence of {{domxref("RTCRtpSender.transform")}} (or {{domxref("RTCRtpReceiver.transform")}}):

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Adding a transform for outgoing frames

A transform running in a worker is inserted into the outgoing WebRTC pipeline by assigning its corresponding `RTCRtpScriptTransform` to the {{domxref("RTCRtpSender.transform")}} for an outgoing track.

This example shows how you might stream video from a user's webcam over WebRTC, adding a WebRTC encoded transform to modify the outgoing streams.
The code assumes that there is an {{domxref("RTCPeerConnection")}} called `peerConnection` that is already connected to a remote peer.

First we get a {{domxref("MediaStreamTrack")}}, using {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} to get a video {{domxref("MediaStream")}} from a media device, and then the {{domxref("MediaStream.getTracks()")}} method to get the first {{domxref("MediaStreamTrack")}} in the stream.

The track is added to the peer connection using {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}}, which starts streaming it to the remote peer.
The `addTrack()` method returns the {{domxref("RTCRtpSender")}} that is being used to send the track.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

An `RTCRtpScriptTransform` is then constructed taking a worker script, which defines the transform, and an optional object that can be used to pass arbitrary messages to the worker (in this case we've used a `name` property with value "senderTransform" to tell the worker that this transform will be added to the outbound stream).
We add the transform to the outgoing pipeline by assigning it to the {{domxref("RTCRtpSender.transform")}} property.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

The [Using separate sender and receiver transforms](#using_separate_sender_and_receiver_transforms) section below shows how the `name` might be used in a worker.

Note that you can add the transform at any time, but by adding it immediately after calling `addTrack()` the transform will get the first encoded frame that is sent.

## Adding a transform for incoming frames

A transform running in a worker is inserted into the incoming WebRTC pipeline by assigning its corresponding `RTCRtpScriptTransform` to the {{domxref("RTCRtpReceiver.transform")}} for an incoming track.

This example shows how you add a transform to modify an incoming stream.
The code assumes that there is an {{domxref("RTCPeerConnection")}} called `peerConnection` that is already connected to a remote peer.

First we add an `RTCPeerConnection` [`track` event](/en-US/docs/Web/API/RTCPeerConnection/track_event) handler to catch the event when the peer starts receiving a new track.
Within the handler we construct an `RTCRtpScriptTransform` and add it to `event.receiver.transform` (`event.receiver` is a {{domxref("RTCRtpReceiver")}}).
As in the previous section, the constructor takes an object with `name` property, but here we use `receiverTransform` as the value to tell the worker that frames are incoming.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Note again that you can add the transform stream at any time.
However by adding it in the `track` event handler ensures that the transform stream will get the first encoded frame for the track.

## Worker implementation

The worker script must implement a handler for the {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} event, creating a [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains) that pipes the `event.transformer.readable` ({{DOMxRef("ReadableStream")}}) stream through a {{DOMxRef("TransformStream")}} to the `event.transformer.writable` ({{DOMxRef("WritableStream")}}) stream.

A worker might support transforming incoming or outgoing encoded frames, or both, and the transform might be hard coded, or configured at run-time using information passed from the web application.

### Basic WebRTC Encoded Transform

The example below shows a basic WebRTC Encoded transform, which negates all bits in queued frames.
It does not use or need options passed in from the main thread because the same algorithm can be used in the sender pipeline to negate the bits and in the receiver pipeline to restore them.

The code implements an event handler for the `rtctransform` event.
This constructs a {{DOMxRef("TransformStream")}}, then pipes through it using {{domxref("ReadableStream.pipeThrough()")}}, and finally pipes to `event.transformer.writable` using {{domxref("ReadableStream.pipeTo()")}}.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    start() {}, // Called on startup.
    flush() {}, // Called when the stream is about to be closed.
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The implementation of the WebRTC encoded transform is similar to a "generic" {{DOMxRef("TransformStream")}}, but with some important differences.
Like the generic stream, its [constructor](/en-US/docs/Web/API/TransformStream/TransformStream#parameters) takes an object that defines an _optional_ [`start()`](/en-US/docs/Web/API/TransformStream/TransformStream#startcontroller) method, which is called on construction, [`flush()`](/en-US/docs/Web/API/TransformStream/TransformStream#flushcontroller) method, which is called as the stream is about to be closed, and [`transform()`](/en-US/docs/Web/API/TransformStream/TransformStream#transformchunk_controller) method, which is called every time there is a chunk to be processed.
Unlike the generic constructor any `writableStrategy` or `readableStrategy` properties that are passed in the constructor object are ignored, and the queuing strategy is entirely managed by the user agent.

The `transform()` method also differs in that it is passed either an {{domxref("RTCEncodedVideoFrame")}} or {{domxref("RTCEncodedAudioFrame")}} rather than a generic "chunk".
The actual code shown here for the method isn't notable other than it demonstrates how to convert the frame to a form where you can modify it and enqueue it afterwards on the stream.

### Using separate sender and receiver transforms

The previous example works if the transform function is the same when sending and receiving, but in many cases the algorithms will be different.
You could use separate worker scripts for the sender and receiver, or handle both cases in one worker as shown below.

If the worker is used for both sender and receiver, it needs to know whether the current encoded frame is outgoing from a codec, or incoming from the packetizer.
This information can be specified using the second option in the [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform).
For example, we can define a separate `RTCRtpScriptTransform` for the sender and receiver, passing the same worker, and an options object with property `name` that indicates whether the transform is used in the sender or receiver (as shown in previous sections above).
The information is then available in the worker in `event.transformer.options`.

In this example we implement the `onrtctransform` event handler on the global dedicated worker scope object.
The value of the `name` property is used to determine which `TransformStream` to construct (the actual constructor methods are not shown).

```js
// Code to instantiate transform and attach them to sender/receiver pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // returns a TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // returns a TransformStream
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Note that the code to create the pipe chain is the same as in the previous example.

### Runtime communication with the transform

The [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) allows you to pass options and transfer objects to the worker.
In the previous example we passed static information, but sometimes you might want to modify the transform algorithm in the worker at runtime, or get information back from the worker.
For example, a WebRTC conference call that supports encryption might need to add a new key to the algorithm used by the transform.

While it is possible to share information between the worker running the transform code and the main thread using {{domxref("Worker.postMessage()")}}, it is generally easier to share a {{domxref("MessageChannel")}} as an [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) option, because then the channel context is directly available in the `event.transformer.options` when you are handling a new encoded frame.

The code below creates a {{domxref("MessageChannel")}} and [transfers](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) its second port to the worker.
The main thread and transform can subsequently communicate using the first and second ports.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");

// Create a channel
// Pass channel.port2 to the transform as a constructor option
// and also transfer it to the worker
const channel = new MessageChannel();
const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypt", port: channel.port2 },
  [channel.port2],
);

// Use the port1 to send a string.
// (we can send and transfer basic types/objects).
channel.port1.postMessage("A message for the worker");
channel.port1.start();
```

In the worker the port is available as `event.transformer.options.port`.
The code below shows how you might listen on the port's `message` event to get messages from the main thread.
You can also use the port to send messages back to the main thread.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Triggering a key frame

Raw video is rarely sent or stored because it consumes a lot of space and bandwidth to represent each frame as a complete image.
Instead, codecs periodically generate a "key frame" that contains enough information to construct a full image, and between key frames sends "delta frames" that just include the changes since the last delta frame.
While this is far more efficient that sending raw video, it means that in order to display the image associated with a particular delta frame, you need the last key frame and all subsequent delta frames.

This can cause a delay for new users joining a WebRTC conference application, because they can't display video until they have received their first key frame.
Similarly, if an encoded transform was used to encrypt frames, the recipient would not be able to display video until they get the first key frame encrypted with their key.

In order to ensure that a new key frame can be sent as early as possible when needed, the {{domxref("RTCRtpScriptTransformer")}} object in `event.transformer` has two methods: {{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}, which causes the codec to generate a key frame, and {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}}, which a receiver can use to request a key frame from the sender.

The example below shows how the main thread might pass an encryption key to a sender transform, and trigger the codec to generate a key frame.
Note that the main thread doesn't have direct access to the {{domxref("RTCRtpScriptTransformer")}} object, so it needs to pass the key and restriction identifier ("rid") to the worker (the "rid" is a stream id, which indicates the encoder that must generate the key frame).
Here we do that with a `MessageChannel`, using the same pattern as in the previous section.
The code assumes there is already a peer connection, and that `videoSender` is an {{domxref("RTCRtpSender")}}.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoSender.transform = new RTCRtpScriptTransform(
  worker,
  { name: "senderTransform", port: channel.port2 },
  [channel.port2],
);

// Post rid and new key to the sender
channel.port1.start();
channel.port1.postMessage({
  rid: "1",
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

The {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} event handler in the worker gets the port and uses it to listen for `message` events from the main thread.
If an event is received it gets the `rid` and `key`, and then calls `generateKeyFrame()`.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

The code for a receiver to request a new key frame would be almost identical, except that "rid" isn't specified.
Here is the code for just the port message handler:

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  transformer.sendKeyFrameRequest();
};
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpScriptTransform")}}
- {{domxref("RTCRtpReceiver.transform")}}
- {{domxref("RTCRtpSender.transform")}}
- {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event
- {{domxref("RTCTransformEvent")}}
- {{domxref("RTCRtpScriptTransformer")}}
- {{domxref("RTCEncodedVideoFrame")}}
- {{domxref("RTCEncodedAudioFrame")}}
