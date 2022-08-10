---
title: AudioWorkletGlobalScope.registerProcessor()
slug: Web/API/AudioWorkletGlobalScope/registerProcessor
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioWorkletGlobalScope
  - AudioWorkletProcessor
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletGlobalScope.registerProcessor
---
{{ APIRef("Web Audio API") }}

The **`registerProcessor`** method of the
{{domxref("AudioWorkletGlobalScope")}} interface registers a class constructor derived
from {{domxref("AudioWorkletProcessor")}} interface under a specified _name_.

## Syntax

```js
registerProcessor(name, processorCtor)
```

### Parameters

- `name`
  - : A string representing the name under which the processor will be registered.
- `processorCtor`
  - : The constructor of a class derived from {{domxref("AudioWorkletProcessor")}}.

> **Note:** A key-value pair `{ name: constructor }`
> is saved internally in the {{domxref("AudioWorkletGlobalScope")}} once the processor
> is registered. The _name_ is to be referred to when creating an
> {{domxref("AudioWorkletNode")}} based on the registered processor. A new processor by
> the given name is internally created and associated with the new node.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}

  - : Thrown under the following conditions:

    - The _name_ is an empty string.
    - A constructor under the given _name_ is already registered. Registering
      the same name twice is not allowed.

- {{jsxref("TypeError")}}

  - : Thrown under the following conditions:

    - The _processorCtor_ is not a callable constructor.
    - The {{domxref("AudioWorkletProcessor.parameterDescriptors",
        "parameterDescriptors")}} property of the constructor exists and doesn't return an
      array of {{domxref("AudioParamDescriptor")}}-based objects.

## Examples

In this example we create a custom `AudioWorkletNode` that outputs silence.

First, we need to define a custom {{domxref("AudioWorkletProcessor")}} and register it.
Note that this should be done in a separate file.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    return true
  }
}

registerProcessor('test-processor', TestProcessor)
```

Next, in our main script file we'll load the processor, create an instance of
`AudioWorkletNode` — passing it the processor name that we used when calling
`registerProcessor` — and connect it to an audio graph.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('test-processor.js')
const node = new AudioWorkletNode(audioContext, 'test-processor')
node.connect(audioContext.destination)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
