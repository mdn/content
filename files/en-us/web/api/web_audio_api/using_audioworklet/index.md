---
title: Background audio processing using AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
page-type: guide
tags:
  - API
  - Audio
  - AudioWorklet
  - Background
  - Examples
  - Guide
  - Processing
  - Web Audio
  - Web Audio API
  - WebAudio API
  - sound
---
{{DefaultAPISidebar("Web Audio API")}}

This article explains how to create an audio worklet processor and use it in a Web Audio application.

When the Web Audio API was first introduced to browsers, it included the ability to use JavaScript code to create custom audio processors that would be invoked to perform real-time audio manipulations. The drawback to `ScriptProcessorNode` was that it ran on the main thread, thus blocking everything else going on until it completed execution. This was far less than ideal, especially for something that can be as computationally expensive as audio processing.

Enter {{domxref("AudioWorklet")}}. An audio context's audio worklet is a {{domxref("Worklet")}} which runs off the main thread, executing audio processing code added to it by calling the context's {{domxref("Worklet.addModule", "audioWorklet.addModule()")}} method. Calling `addModule()` loads the specified JavaScript file, which should contain the implementation of the audio processor. With the processor registered, you can create a new {{domxref("AudioWorkletNode")}} which passes the audio through the processor's code when the node is linked into the chain of audio nodes along with any other audio nodes.

It's worth noting that because audio processing can often involve substantial computation, your processor may benefit greatly from being built using [WebAssembly](/en-US/docs/WebAssembly), which brings near-native or fully native performance to web apps. Implementing your audio processing algorithm using WebAssembly can make it perform markedly better.

## High level overview

Before we start looking at the use of AudioWorklet on a step-by-step basis, let's start with a brief high-level overview of what's involved.

1. Create module that defines a audio worklet processor class, based on {{domxref("AudioWorkletProcessor")}} which takes audio from one or more incoming sources, performs its operation on the data, and outputs the resulting audio data.
2. Access the audio context's {{domxref("AudioWorklet")}} through its {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} property, and call the audio worklet's {{domxref("Worklet.addModule", "addModule()")}} method to install the audio worklet processor module.
3. As needed, create audio processing nodes by passing the processor's name (which is defined by the module) to the {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} constructor.
4. Set up any audio parameters the {{domxref("AudioWorkletNode")}} needs, or that you wish to configure. These are defined in the audio worklet processor module.
5. Connect the created `AudioWorkletNode`s into your audio processing pipeline as you would any other node, then use your audio pipeline as usual.

Throughout the remainder of this article, we'll look at these steps in more detail, with examples (including working examples you can try out on your own).

The example code found on this page is derived from [this working example](https://mdn.github.io/webaudio-examples/audioworklet/) which is part of MDN's [GitHub repository of Web Audio examples](https://github.com/mdn/webaudio-examples/). The example creates an oscillator node and adds white noise to it using an {{domxref("AudioWorkletNode")}} before playing the resulting sound out. Slider controls are available to allow controlling the gain of both the oscillator and the audio worklet's output.

[**See the code**](https://github.com/mdn/webaudio-examples/tree/master/audioworklet)

[**Try it live**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Creating an audio worklet processor

Fundamentally, an audio worklet processor (which we'll refer to usually as either an "audio processor" or as a "processor" because otherwise this article will be about twice as long) is implemented using a JavaScript module that defines and installs the custom audio processor class.

### Structure of an audio worklet processor

An audio worklet processor is a JavaScript module which consists of the following:

- A JavaScript class which defines the audio processor. This class extends the {{domxref("AudioWorkletProcessor")}} class.
- The audio processor class must implement a {{domxref("AudioWorkletProcessor.process", "process()")}} method, which receives incoming audio data and writes back out the data as manipulated by the processor.
- The module installs the new audio worklet processor class by calling {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}, specifying a name for the audio processor and the class that defines the processor.

A single audio worklet processor module may define multiple processor classes, registering each of them with individual calls to `registerProcessor()`. As long as each has its own unique name, this will work just fine. It's also more efficient than loading multiple modules from over the network or even the user's local disk.

### Basic code framework

The barest framework of an audio processor class looks like this:

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList, outputList, parameters) {
    // Using the inputs (or not, as needed),
    // write the output into each of the outputs
    // …
    return true;
  }
};

registerProcessor("my-audio-processor", MyAudioProcessor);
```

After the implementation of the processor comes a call to the global function {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}, which is only available within the scope of the audio context's {{domxref("AudioWorklet")}}, which is the invoker of the processor script as a result of your call to {{domxref("Worklet.addModule", "audioWorklet.addModule()")}}. This call to `registerProcessor()` registers your class as the basis for any {{domxref("AudioWorkletProcessor")}}s created when {{domxref("AudioWorkletNode")}}s are set up.

This is the barest framework and actually has no effect until code is added into `process()` to do something with those inputs and outputs. Which brings us to talking about those inputs and outputs.

### The input and output lists

The lists of inputs and outputs can be a little confusing at first, even though they're actually very simple once you realize what's going on.

Let's start at the inside and work our way out. Fundamentally, the audio for a single audio channel (such as the left speaker or the subwoofer, for example) is represented as a [`Float32Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) whose values are the individual audio samples. By specification, each block of audio your `process()` function receives contains 128 frames (that is, 128 samples for each channel), but it is planned that _this value will change in the future_, and may in fact vary depending on circumstances, so you should _always_ check the array's [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) rather than assuming a particular size. It is, however, guaranteed that the inputs and outputs will have the same block length.

Each input can have a number of channels. A mono input has a single channel; stereo input has two channels. Surround sound might have six or more channels. So each input is, in turn, an array of channels. That is, an array of `Float32Array` objects.

Then, there can be multiple inputs, so the `inputList` is an array of arrays of `Float32Array` objects. Each input may have a different number of channels, and each channel has its own array of samples.

Thus, given the input list `inputList`:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (or inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (or inputList[0][0][0])
```

The output list is structured in exactly the same way; it's an array of outputs, each of which is an array of channels, each of which is an array of `Float32Array` objects, which contain the samples for that channel.

How you use the inputs and how you generate the outputs depends very much on your processor. If your processor is just a generator, it can ignore the inputs and just replace the contents of the outputs with the generated data. Or you can process each input independently, applying an algorithm to the incoming data on each channel of each input and writing the results into the corresponding outputs' channels (keeping in mind that the number of inputs and outputs may differ, and the channel counts on those inputs and outputs may also differ). Or you can take all the inputs and perform mixing or other computations that result in a single output being filled with data (or all the outputs being filled with the same data).

It's entirely up to you. This is a very powerful tool in your audio programming toolkit.

### Processing multiple inputs

Let's take a look at an implementation of `process()` that can process multiple inputs, with each input being used to generate the corresponding output. Any excess inputs are ignored.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);

  for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
    const input = inputList[inputNum];
    const output = outputList[inputNum];
    const channelCount = Math.min(input.length, output.length);

    for (let channelNum = 0; channelNum < channelCount; channelNum++) {
      input[channelNum].forEach((sample, i) => {
        // Manipulate the sample
        output[channelNum][i] = sample;
      });
    }
  };

  return true;
}
```

Note that when determining the number of sources to process and send through to the corresponding outputs, we use [`Math.min()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) to ensure that we only process as many channels as we have room for in the output list. The same check is performed when determining how many channels to process in the current input; we only process as many as there are room for in the destination output. This avoids errors due to overrunning these arrays.

### Mixing inputs

Many nodes perform **mixing** operations, where the inputs are combined in some way into a single output. This is demonstrated in the following example.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);
  for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
    let input = inputList[inputNum];
    let output = outputList[0];
    let channelCount = Math.min(input.length, output.length);

    for (let channelNum = 0; channelNum < channelCount; channelNum++) {
      for (let i = 0; i < input[channelNum].length; i++) {
        let sample = output[channelNum][i] + input[channelNum][i];

        if (sample > 1.0) {
          sample = 1.0;
        } else if (sample < -1.0) {
          sample = -1.0;
        }

        output[channelNum][i] = sample;
      }
    }
  };

  return true;
}
```

This is similar code to the previous sample in many ways, but only the first output—`outputList[0]`—is altered. Each sample is added to the corresponding sample in the output buffer, with a simple code fragment in place to prevent the samples from exceeding the legal range of -1.0 to 1.0 by capping the values; there are other ways to avoid clipping that are perhaps less prone to distortion, but this is a simple example that's better than nothing.

## Lifetime of an audio worklet processor

The only means by which you can influence the lifespan of your audio worklet processor is through the value returned by `process()`, which should be a Boolean value indicating whether or not to override the {{Glossary("user agent")}}'s decision-making as to whether or not your node is still in use.

In general, the lifetime policy of any audio node is simple: if the node is still considered to be actively processing audio, it will continue to be used. In the case of an {{domxref("AudioWorkletNode")}}, the node is considered to be active if its `process()` function returns `true` *and* the node is either generating content as a source for audio data, or is receiving data from one or more inputs.

Specifying a value of `true` as the result from your `process()` function in essence tells the Web Audio API that your processor needs to keep being called even if the API doesn't think there's anything left for you to do. In other words, `true` overrides the API's logic and gives you control over your processor's lifetime policy, keeping the processor's owning {{domxref("AudioWorkletNode")}} running even when it would otherwise decide to shut down the node.

Returning `false` from the `process()` method tells the API that it should follow its normal logic and shut down your processor node if it deems it appropriate to do so. If the API determines that your node is no longer needed, `process()` will not be called again.

> **Note:** At this time, unfortunately, Chrome does not implement this algorithm in a manner that matches the current standard. Instead, it keeps the node alive if you return `true` and shuts it down if you return `false`. Thus for compatibility reasons you must always return `true` from `process()`, at least on Chrome. However, once [this Chrome issue](https://bugs.chromium.org/p/chromium/issues/detail?id=921354) is fixed, you will want to change this behavior if possible as it may have a slight negative impact on performance.

## Creating an audio processor worklet node

To create an audio node that pumps blocks of audio data through an {{domxref("AudioWorkletProcessor")}}, you need to follow these simple steps:

1. Load and install the audio processor module
2. Create an {{domxref("AudioWorkletNode")}}, specifying the audio processor module to use by its name
3. Connect inputs to the `AudioWorkletNode` and its outputs to appropriate destinations (either other nodes or to the {{domxref("AudioContext")}} object's {{domxref("AudioContext.destination", "destination")}} property.

To use an audio worklet processor, you can use code similar to the following:

```js
let audioContext = null;

async function createMyAudioProcessor() {
  if (!audioContext) {
    try {
      audioContext = new AudioContext();
      await audioContext.resume();
      await audioContext.audioWorklet.addModule("module-url/module.js");
    } catch (e) {
      return null;
    }
  }

  return new AudioWorkletNode(audioContext, "processor-name");
}
```

This `createMyAudioProcessor()` function creates and returns a new instance of {{domxref("AudioWorkletNode")}} configured to use your audio processor. It also handles creating the audio context if it hasn't already been done.

In order to ensure the context is usable, this starts by creating the context if it's not already available, then adds the module containing the processor to the worklet. Once that's done, it instantiates and returns a new `AudioWorkletNode`. Once you have that in hand, you connect it to other nodes and otherwise use it just like any other node.

You can then create a new audio processor node by doing this:

```js
let newProcessorNode = createMyAudioProcessor();
```

If the returned value, `newProcessorNode`, is non-`null`, we have a valid audio context with its hiss processor node in place and ready to use.

## Supporting audio parameters

Just like any other Web Audio node, {{domxref("AudioWorkletNode")}} supports parameters, which are shared with the {{domxref("AudioWorkletProcessor")}} that does the actual work.

### Adding parameter support to the processor

To add parameters to an {{domxref("AudioWorkletNode")}}, you need to define them within your {{domxref("AudioWorkletProcessor")}}-based processor class in your module. This is done by adding the static getter {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} to your class. This function should return an array of {{domxref("AudioParam")}} objects, one for each parameter supported by the processor.

In the following implementation of `parameterDescriptors()`, the returned array has two `AudioParam` objects. The first defines `gain` as a value between 0 and 1, with a default value of 0.5. The second parameter is named `frequency` and defaults to 440.0, with a range from 27.5 to 4186.009, inclusively.

```js
static get parameterDescriptors() {
  return [
   {
      name: "gain",
      defaultValue: 0.5,
      minValue: 0,
      maxValue: 1
    },
    {
      name: "frequency",
      defaultValue: 440.0,
      minValue: 27.5,
      maxValue: 4186.009
    }
  ];
}
```

Accessing your processor node's parameters is as simple as looking them up in the `parameters` object passed into your implementation of {{domxref("AudioWorkletProcessor.process", "process()")}}. Within the `parameters` object are arrays, one for each of your parameters, and sharing the same names as your parameters.

- A-rate parameters
  - : For a-rate parameters—parameters whose values automatically change over time—the parameter's entry in the `parameters` object is an array of {{domxref("AudioParam")}} objects, one for each frame in the block being processed. These values are to be applied to the corresponding frames.
- K-rate parameters
  - : K-rate parameters, on the other hand, can only change once per block, so the parameter's array has only a single entry. Use that value for every frame in the block.

In the code below, we see a `process()` function that handles a `gain` parameter which can be used as either an a-rate or k-rate parameter. Our node only supports one input, so it just takes the first input in the list, applies the gain to it, and writes the resulting data to the first output's buffer.

```js
process(inputList, outputList, parameters) {
  const input = inputList[0];
  const output = outputList[0];
  const gain = parameters.gain;

  for (let channelNum = 0; channelNum < input.length; channel++) {
    const inputChannel = input[channel];
    const outputChannel = output[channel];

    // If gain.length is 1, it's a k-rate parameter, so apply
    // the first entry to every frame. Otherwise, apply each
    // entry to the corresponding frame.

    if (gain.length === 1) {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[0];
      }
    } else {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[i];
      }
    }
  }

  return true;
}
```

Here, if `gain.length` indicates that there's only a single value in the `gain` parameter's array of values, the first entry in the array is applied to every frame in the block. Otherwise, for each frame in the block, the corresponding entry in `gain[]` is applied.

### Accessing parameters from the main thread script

Your main thread script can access the parameters just like it can any other node. To do so, first you need to get a reference to the parameter by calling the {{domxref("AudioWorkletNode")}}'s {{domxref("AudioWorkletNode.parameters", "parameters")}} property's {{domxref("AudioParamMap.get", "get()")}} method:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

The value returned and stored in `gainParam` is the {{domxref("AudioParam")}} used to store the `gain` parameter. You can then change its value effective at a given time using the {{domxref("AudioParam")}} method {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}}.

Here, for example, we set the value to `newValue`, effective immediately.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

You can similarly use any of the other methods in the {{domxref("AudioParam")}} interface to apply changes over time, to cancel scheduled changes, and so forth.

Reading the value of a parameter is as simple as looking at its {{domxref("AudioParam.value", "value")}} property:

```js
let currentGain = gainParam.value;
```

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome Developers blog)
