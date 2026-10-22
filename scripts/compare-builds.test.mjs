import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { comparePages, countIssues } from "./compare-builds.mjs";

describe("comparePages", () => {
  const cases = [
    {
      name: "identical builds",
      base: { a: "1", b: "2" },
      pr: { a: "1", b: "2" },
      expected: { added: [], removed: [], modified: [], total: 2 },
    },
    {
      name: "modified, added and removed pages",
      base: { a: "1", b: "2", c: "3" },
      pr: { a: "1", b: "x", d: "4" },
      expected: { added: ["d"], removed: ["c"], modified: ["b"], total: 4 },
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

describe("countIssues", () => {
  const cases = [
    { name: "no issues", issues: {}, expected: 0 },
    {
      name: "issues in several files",
      issues: { "a/index.md": [{}, {}], "b/index.md": [{}] },
      expected: 3,
    },
    {
      name: "ignored issues are not counted",
      issues: { "a/index.md": [{ ignore: true }, { ignore: false }, {}] },
      expected: 2,
    },
  ];

  for (const { name, issues, expected } of cases) {
    it(name, () => assert.equal(countIssues(issues), expected));
  }
});
