import { strict as assert } from "assert";
import { test } from "node:test";
import {
  isExcludedFilePath,
  normalizePathForMatch,
} from "../scripts/front-matter_linter.js";

test("isExcludedFilePath recognizes excluded segments and dirs", () => {
  // paths that should be excluded
  assert.equal(
    isExcludedFilePath("tests/front-matter_test_files/prettify.md"),
    true,
  );
  assert.equal(
    isExcludedFilePath("scripts\\filecheck\\fixtures\\sample.md"),
    true,
  ); // windows-style
  assert.equal(isExcludedFilePath("/some/path/conflicting/index.md"), true);
  assert.equal(isExcludedFilePath("/some/path/orphaned/index.md"), true);

  // paths that should NOT be excluded
  assert.equal(isExcludedFilePath("/some/path/other/index.md"), false);
  assert.equal(isExcludedFilePath("/some/path/index.md"), false);

  // normalizePathForMatch behavior
  assert.equal(normalizePathForMatch("a\\b\\c"), "a/b/c");
});
