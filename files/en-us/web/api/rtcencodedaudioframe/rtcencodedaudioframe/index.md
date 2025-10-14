---
title: "RTCEncodedAudioFrame: RTCEncodedAudioFrame() constructor"
short-title: RTCEncodedAudioFrame()
slug: Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame
page-type: web-api-constructor
browser-compat: api.RTCEncodedAudioFrame.RTCEncodedAudioFrame
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`RTCEncodedAudioFrame()`** constructor creates a new {{domxref("RTCEncodedAudioFrame")}} object. ....

## Syntax

```js-nolint

new RTCEncodedAudioFrame(originalFrame);
new RTCEncodedAudioFrame(originalFrame, options);
```

<!--
+    [Throws]
+    constructor(RTCEncodedAudioFrame originalFrame, optional RTCEncodedAudioFrameOptions options = {});


dictionary RTCEncodedAudioFrameOptions {
    RTCEncodedAudioFrameMetadata metadata;
};

[Exposed=(Window,DedicatedWorker), Serializable]
interface RTCEncodedAudioFrame {
    constructor(RTCEncodedAudioFrame originalFrame, optional RTCEncodedAudioFrameOptions options = {});
    attribute ArrayBuffer data;
    RTCEncodedAudioFrameMetadata getMetadata();
};



---

In the IDL


dictionary RTCEncodedAudioFrameMetadata : RTCEncodedFrameMetadata {
    short sequenceNumber;
    double audioLevel;
};

dictionary RTCEncodedAudioFrameMetadata {
    unsigned long synchronizationSource;
    octet payloadType;
    sequence<unsigned long> contributingSources;
    short sequenceNumber;

----

Video IDL

dictionary RTCEncodedVideoFrameMetadata {
    unsigned long long frameId;
    sequence<unsigned long long> dependencies;
    unsigned short width;
    unsigned short height;
    unsigned long spatialIndex;
    unsigned long temporalIndex;
    unsigned long synchronizationSource;
    octet payloadType;
    sequence<unsigned long> contributingSources;
    long long timestamp;    // microseconds
};





+dictionary RTCEncodedVideoFrameOptions {
+    RTCEncodedVideoFrameMetadata metadata;
+};

NOte
 RTCEncodedVideoFrameMetadata getMetadata();


dictionary RTCEncodedVideoFrameMetadata : RTCEncodedFrameMetadata {
    unsigned long long frameId;
    sequence<unsigned long long> dependencies;
    unsigned short width;
    unsigned short height;
    unsigned long spatialIndex;
    unsigned long temporalIndex;
    long long timestamp;    // microseconds
};

dictionary RTCEncodedFrameMetadata {
    unsigned long synchronizationSource;
    octet payloadType;
    sequence<unsigned long> contributingSources;

};
-->

### Parameters

- `originalFrame`

  - : A ...

- `options` {{optional_inline}}

  - : An object with a single property

    - `metadata`
      - : An object setting the frame metadata.
        This is the same kind of object as the return value of {{DOMxRef("RTCEncodedAudioFrame.getMetadata()")}}.

## Examples

### Creating a ...

```js

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
