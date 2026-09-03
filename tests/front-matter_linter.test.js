import fs from "node:fs";
import { fileURLToPath } from "node:url";
import test from "node:test";
import assert from "node:assert/strict";

import {
  getAjvValidator,
  checkFrontMatter,
} from "../scripts/front-matter_utils.js";

const SAMPLES_DIRECTORY = new URL("front-matter_test_files/", import.meta.url);

const options = {};
options.config = JSON.parse(
  fs.readFileSync(
    fileURLToPath(new URL("config.json", SAMPLES_DIRECTORY)),
    "utf-8",
  ),
);
options.validator = getAjvValidator(options.config.schema);

function getPath(filePath) {
  return fileURLToPath(new URL(filePath, SAMPLES_DIRECTORY));
}

function getContent(filePath) {
  return fs.readFileSync(getPath(filePath), "utf-8");
}

test("Front-matter linter", async (t) => {
  await t.test(
    "should use double quotes and remove unwanted quotes",
    async () => {
      const filePath = getPath("./double_quotes.md");
      const validContent = getContent("./double_quotes.valid.md");

      options.fix = true;
      const result = await checkFrontMatter(filePath, options);
      assert.deepStrictEqual(result, [null, null, validContent]);
    },
  );

  await t.test(
    "should use single quotes to enclose double quoted words",
    async () => {
      const filePath = getPath("./single_quotes.md");
      const validContent = getContent("./single_quotes.valid.md");

      options.fix = true;
      const result = await checkFrontMatter(filePath, options);
      assert.deepStrictEqual(result, [null, null, validContent]);
    },
  );

  await t.test("should enforce the attribute order", async () => {
    const filePath = getPath("./attribute_order.md");
    const validContent = getContent("./attribute_order.valid.md");

    options.fix = false;
    let result = await checkFrontMatter(filePath, options);
    const expected =
      "tests/front-matter_test_files/attribute_order.md\n\t " +
      "Front matter attributes are not in required order: " +
      "title->short-title->slug->page-type->status->browser-compat->spec-urls";
    assert.deepStrictEqual(result, [null, expected, null]);

    options.fix = true;
    result = await checkFrontMatter(filePath, options);
    assert.deepStrictEqual(result, [null, null, validContent]);
  });

  await t.test("should flag invalid values", async () => {
    const filePath = getPath("./values.md");

    options.fix = false;
    const result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/values.md\n" +
      "'page-type' property must be equal to one of the allowed values:\n" +
      "\tlanding-page, guide, web-api-method\n" +
      "Front matter must match 'then' schema\n" +
      "Front matter must have required property 'slug'\n" +
      "'0' property must be equal to one of the allowed values:\n" +
      "\tdeprecated, experimental, non-standard\n" +
      "property 'spec-urls' must match format 'uri'";
    assert.deepStrictEqual(result, [expected, null, null]);
  });

  await t.test("should prettify the front-matter", async () => {
    const filePath = getPath("./prettify.md");
    const validContent = getContent("./prettify.valid.md");

    options.fix = true;
    const result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/prettify.md\n" +
      "property 'title' must not have more than 120 characters";
    assert.deepStrictEqual(result, [expected, null, validContent]);
  });

  await t.test("should flag and remove unknown attribute", async () => {
    const filePath = getPath("./unknown_attribute.md");
    const validContent = getContent("./unknown_attribute.valid.md");

    options.fix = false;
    let result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/unknown_attribute.md\n" +
      "'tags' property is not expected to be here";
    assert.deepStrictEqual(result, [expected, null, null]);

    options.fix = true;
    result = await checkFrontMatter(filePath, options);
    assert.deepStrictEqual(result, [expected, null, validContent]);
  });
});
