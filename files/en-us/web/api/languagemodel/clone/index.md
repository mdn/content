---
title: "LanguageModel: clone() method"
short-title: clone()
slug: Web/API/LanguageModel/clone
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`clone()`** method of the {{domxref("LanguageModel")}} interface creates a copy of the current session, including its full context window state. The cloned session can be used independently without affecting the original.

Because both the original and the clone share the same context history up to the point of cloning, you can explore multiple response paths or test variations without starting from scratch.

For example, you might build a shared context using {{domxref("LanguageModel.append()", "append()")}} or early {{domxref("LanguageModel.prompt()", "prompt()")}} `prompt()` calls, clone the session, and then send different follow-up prompts to each clone in parallel.

## Syntax

```js-nolint
clone()
clone(options)
```

### Parameters

- `options` {{optional_inline}}
  - : Represents the options that can be passed. If this argument is absent, the `options` from the original session, such as its abort signal, are used.
    Options include:
    - `signal` — An {{domxref("AbortSignal")}} to cancel the clone operation.

### Return value

A {{jsxref("Promise")}} that resolves with a new {{domxref("LanguageModel")}} instance. The new instance has the same internal model state, context history, and configuration as the original session at the time of cloning.

### Exceptions

- `OperationError` {{domxref("DOMException")}}
  - : Thrown if cloning fails for any other reason not listed in the other exception types.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.

## Examples

### Exploring multiple response paths

```js
// Set up system and user context
const session = await LanguageModel.create({
  initialPrompts: [
    { role: "system", content: "You are a creative writing assistant." },
  ],
});

await session.append(
  "The story begins in a small coastal town during a storm.",
);

// Branch into two different continuations
const [clone1, clone2] = await Promise.all([session.clone(), session.clone()]);

const [ending1, ending2] = await Promise.all([
  clone1.prompt("Write a happy ending."),
  clone2.prompt("Write a mysterious ending."),
]);

console.log("Happy ending:", ending1);
console.log("Mysterious ending:", ending2);
```

### Cloning to retry after a context overflow

```js
let session = await LanguageModel.create();
const checkpoint = await session.clone();

try {
  await session.append(veryLargeDocument);
} catch (err) {
  if (err.name === "QuotaExceededError") {
    console.warn("Document too large; reverting to checkpoint.");
    session = checkpoint;
  }
}
```

### Cloning a session with an abort signal

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  const clonedSession = await session.clone({
    signal: controller.signal,
  });
  console.log("Session cloned successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Clone operation was aborted.");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.append()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
