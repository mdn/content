---
title: Debounce
slug: Glossary/Debounce
page-type: glossary-definition
---

{{GlossarySidebar}}

**Debouncing**, in the context of programming, means to discard operations that occur too close together during a specific interval, and consolidate them into a single invocation.

Debouncing is very similar to {{glossary("throttle", "throttling")}}. The key difference is that throttling enforces limits on continuous operations, while debouncing waits for invocations to stop for a specific time to consolidate many noisy invocations into one single invocation.

A typical use case of debouncing is when responding to user input. When the user is typing, no other action should be taken to avoid the UI becoming laggy. When the user pauses typing, we can start processing the input, such as filtering results, giving suggestions, etc. If the function `search` is debounced by 10 milliseconds, it means:

1. The first call to `search` is known as the _leading edge_.
2. For every next call to `search`, if it is within 10 milliseconds from the previous call, it is in the same "batch" as the previous call.
3. After 10 milliseconds have elapsed from the last call to `search`, if no other calls have happened, we have reached the _trailing edge_.

Usually, `search` is executed once on the trailing edge only, although sometimes it might be executed on the leading edge, or even both edges, depending on the specific use case. If executed on both edges, the debouncing implementation usually also ensures that the next leading edge invocation doesn't fire at least 10 milliseconds after the previous trailing edge.

## See also

- Glossary terms:
  - {{Glossary("Throttle")}}
  - {{Glossary("Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) on CSS-Tricks (April 6, 2016)
