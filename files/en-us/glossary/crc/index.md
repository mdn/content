---
title: CRC
slug: Glossary/CRC
page-type: glossary-definition
sidebar: glossarysidebar
---

A **CRC** (Cyclic Redundancy Check) is an error-detecting code used to verify data integrity. It generates a fixed-size checksum from data, which can be recalculated and compared to detect accidental changes or corruption during transmission or storage.

CRC is widely used in:

- Database systems for data integrity verification
- Network protocols (Ethernet, USB, Bluetooth)
- File formats (ZIP, PNG, GZIP)
- Storage devices for detecting read/write errors

## Example

The following JavaScript example calculates a simple CRC-32 checksum:

```js
function crc32(data) {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }

  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = table[(crc ^ data.charCodeAt(i)) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

console.log(crc32("Hello, World!").toString(16)); // "ec4ac3d0"
```

## See also

- [Cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) on Wikipedia
- Related glossary terms:
  - {{Glossary("Hash function")}}
  - {{Glossary("Checksum")}}
