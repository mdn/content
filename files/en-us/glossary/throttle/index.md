---
title: Throttle
slug: Glossary/Throttle
page-type: glossary-definition
---

{{GlossarySidebar}}

**Throttling** originally meant slowing down the rate of fluid flow using an obstruction. In the context of programming, it refers to slowing down a process such that an operation can only be performed at a certain rate.

Throttling is very similar to {{glossary("debounce", "debouncing")}}. The key difference is that when invocations happen continuously, throttling ensures that the operation is still performed at a certain maximum rate, while debouncing waits indefinitely until the invocations stop for a certain amount of time.

A typical use case of throttling is when synchronizing with another constantly-updating state. Consider a function `onScrolled`, which listens for the [`scroll`](/en-US/docs/Web/API/Document/scroll_event) event. The `scroll` event may fire as often as every pixel scrolled, so the function will be called in very short intervals. If `onScrolled` is computationally expensive, earlier invocations might block later invocations from happening on time, or block other things from executing in the meantime, leading to a noticeable {{glossary("jank")}}. In this case, we can throttle `onScrolled`, such that it can only be called at most once every 10 milliseconds:

1. The first call to `onScrolled` is known as the _leading edge_.
2. For every next call to `onScrolled`, if it is within 10 milliseconds from the first call, it is in the same "batch" as the first call.
3. After 10 milliseconds have elapsed from the first call to `onScrolled`, we have reached the _trailing edge_.

Usually, `onScrolled` is executed once on the leading edge only, although sometimes it might be executed on the trailing edge, or even both edges, depending on the specific use case. If executed on both edges, the throttling implementation usually also ensures that the next leading edge invocation doesn't fire at least 10 milliseconds after the previous trailing edge.

Via throttling, the effect of `onScrolled` is still continuously updated and applied — for example, if it moves another DOM element based on the document's scroll position, that DOM element is still continuously moved while the page is scrolling — but it isn't executed more often than necessary.

{{glossary("Network throttling")}} means to simulate a slower network connection by only allowing a certain amount of data to be transferred at a time. _Throttling a timer_ means to coarsen the timer's precision such that when reading the timer (such as {{jsxref("Date.now()")}}) continuously, the timer's value only changes at a certain maximum rate. Both are specific applications of the general concept of throttling.

## See also

- Glossary terms:
  - {{Glossary("Debounce")}}
  - {{Glossary("Rate limit")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) on CSS-Tricks (April 6, 2016)
