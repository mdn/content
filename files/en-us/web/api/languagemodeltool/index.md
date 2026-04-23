---
title: LanguageModelTool
slug: Web/API/LanguageModelTool
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelTool`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) describes a tool that a language model session can invoke during generation. Tools allow the model to call developer-defined functions to retrieve external data or perform actions, and incorporate the results into its response.

Pass one or more `LanguageModelTool` objects in the `tools` array when calling {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}.

## Instance properties

- `name`
  - : A string giving the tool a unique name the model uses to refer to it when issuing a tool call.
- `description`
  - : A string describing what the tool does. The model uses this description to decide when and whether to invoke the tool.
- `inputSchema`
  - : An object containing a [JSON Schema](https://json-schema.org/) that describes the tool's input parameters. The model uses this schema to construct the arguments it passes to the tool's `execute` function.
- `execute`
  - : A {{domxref("LanguageModelToolFunction")}} callback that the user agent invokes when the model calls this tool. It receives the arguments the model provides and must return a {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the tool's result.

## Examples

### Defining a calculator tool

```js
const calculatorTool = {
  name: "calculate",
  description: "Evaluates a simple arithmetic expression and returns the numeric result.",
  inputSchema: {
    type: "object",
    properties: {
      expression: {
        type: "string",
        description: "A mathematical expression to evaluate, e.g. '2 + 2'.",
      },
    },
    required: ["expression"],
  },
  execute: async (...args) => {
    const expression = args[0];
    try {
      // NOTE: In production code, use a safe expression parser.
      const result = Function(`"use strict"; return (${expression})`)();
      return String(result);
    } catch {
      return "Error: invalid expression";
    }
  },
};

const session = await LanguageModel.create({ tools: [calculatorTool] });
const response = await session.prompt("What is 144 divided by 12?");
console.log(response);
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModelToolFunction")}}
- {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}
- {{domxref("LanguageModelCreateOptions")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
