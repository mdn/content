---
title: LanguageModelToolFunction callback
slug: Web/API/LanguageModelToolFunction
page-type: web-api-callback-function
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelToolFunction`** callback of the [Prompt API](/en-US/docs/Web/API/Prompt_API) is the type of function assigned to the `execute` property of a {{domxref("LanguageModelTool")}} dictionary. When the language model decides to invoke a tool, the user agent calls this function on its behalf, passing the arguments the model specified, and uses the returned string as the tool's result.

## Syntax

```js-nolint
new LanguageModelToolFunction(arguments)
```

### Parameters

- `arguments` {{optional_inline}}
  - : Zero or more arguments passed by the language model when invoking the tool. The values correspond to the properties defined in the tool's `inputSchema` JSON Schema object.

### Return value

A {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the result of the tool invocation. This string is returned to the language model to continue generation.

## Description

`LanguageModelToolFunction` callbacks are defined by the developer and registered as part of a {{domxref("LanguageModelTool")}} dictionary passed to {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}. When the language model's generated output indicates a tool call, the user agent invokes the `execute` function with the arguments the model specified. The returned string is fed back to the model as the tool's output.

The function must return a `Promise` resolving to a `DOMString`. This allows the implementation to perform asynchronous operations such as network requests or database lookups before returning a result.

## Examples

### Defining a tool with a callback

This example creates a session with a `getWeather` tool. When the model decides to call the tool, the user agent invokes `execute` with the arguments the model provides.

```js
async function getWeatherData(location) {
  const response = await fetch(`https://api.example.com/weather?city=${location}`);
  const data = await response.json();
  return `${data.temp}°C, ${data.description}`;
}

const session = await LanguageModel.create({
  tools: [
    {
      name: "getWeather",
      description: "Returns the current weather for a given city.",
      inputSchema: {
        type: "object",
        properties: {
          location: { type: "string", description: "The city name." },
        },
        required: ["location"],
      },
      execute: async (...args) => {
        const location = args[0];
        return await getWeatherData(location);
      },
    },
  ],
});

const response = await session.prompt("What's the weather like in Tokyo?");
console.log(response);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModelTool")}}
- {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
