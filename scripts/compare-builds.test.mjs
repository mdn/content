import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { comparePages, countFlaws } from "./compare-builds.mjs";

describe("comparePages", () => {
  const cases = [
    {
      name: "identical builds",
      base: { a: "1", b: "2" },
      pr: { a: "1", b: "2" },
      expected: { changed: [], total: 2 },
    },
    {
      name: "modified, added and removed pages",
      base: { a: "1", b: "2", c: "3" },
      pr: { a: "1", b: "x", d: "4" },
      expected: { changed: ["b", "c", "d"], total: 4 },
    },
  ];

  for (const { name, base, pr, expected } of cases) {
    it(name, () => {
      const actual = comparePages(
        new Map(Object.entries(base)),
        new Map(Object.entries(pr)),
      );
      assert.deepEqual(actual, expected);
    });
  }
});

describe("countFlaws", () => {
  const cases = [
    { name: "no doc", page: {}, expected: 0 },
    { name: "no flaws", page: { doc: {} }, expected: 0 },
    {
      name: "flaws of several types",
      page: { doc: { flaws: { macros: [{}, {}], broken_links: [{}] } } },
      expected: 3,
    },
  ];

  for (const { name, page, expected } of cases) {
    it(name, () => assert.equal(countFlaws(page), expected));
  }
});
