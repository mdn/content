---
title: Bitwise flags
slug: Glossary/Bitwise_flags
page-type: glossary-definition
---

{{GlossarySidebar}}

**Bitwise flags** are sets of variables, usually simple number values, which can be used to enable or disable specific usages or features of a method or other code structure. They can do this quickly and efficiently because they operate at the bit level. Related flags in the same group are generally given complementary values representing different bit positions in a single value (e.g. hexadecimal), so that multiple flag settings can be represented by a single value.

For example, in the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}}, a {{domxref("GPUBuffer")}} object instance is created using the {{domxref("GPUDevice.createBuffer()")}} method. When invoking this method, you define a `usage` property in the descriptor containing one or more flags that enable different allowed usages of that buffer.

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

These values are defined inside the same namespace, and each one has a hexadecimal value:

| Usage flag                     | Hexadecimal representation | Decimal equivalent |
| ------------------------------ | -------------------------- | ------------------ |
| `GPUBufferUsage.MAP_READ`      | 0x0001                     | 1                  |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                     | 2                  |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                     | 4                  |
| `GPUBufferUsage.COPY_DST`      | 0x0008                     | 8                  |
| `GPUBufferUsage.INDEX`         | 0x0010                     | 16                 |
| `GPUBufferUsage.VERTEX`        | 0x0020                     | 32                 |
| `GPUBufferUsage.UNIFORM`       | 0x0040                     | 64                 |
| `GPUBufferUsage.STORAGE`       | 0x0080                     | 128                |
| `GPUBufferUsage.INDIRECT`      | 0x0100                     | 256                |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                     | 512                |

When you query the {{domxref("GPUBuffer.usage")}} property, you get a single decimal number returned, which is the sum of the different decimal values for the different usage flags. Returning to the above example, querying `GPUBuffer.usage` for the `GPUBuffer` created with the usage specified earlier would return the following:

- `GPUBufferUsage.COPY_SRC`'s decimal equivalent, 4
- Add `GPUBufferUsage.MAP_WRITE`'s decimal equivalent, 2
- Equals 6.

Because of the values chosen for the different flags, each combination of values is unique, so the program can tell at a glance which flags are set from a single value. In addition, you can easily test which flags are set in the combined value using the bitwise and operator:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer has MAP_WRITE usage
}
```

## See also

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitwise operation](https://en.wikipedia.org/wiki/Bitwise_operation) on Wikipedia
