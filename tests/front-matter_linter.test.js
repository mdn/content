import fs from "node:fs";
import { fileURLToPath } from "node:url";
import AJV from "ajv";
import addFormats from "ajv-formats";

import {
  getAjvValidator,
  checkFrontMatter,
} from "../scripts/front-matter_utils.js";

const SAMPLES_DIRECTORY = new URL("front-matter_test_files/", import.meta.url);

const options = {};

options.config = JSON.parse(
  fs.readFileSync(
    fileURLToPath(new URL("config.json", SAMPLES_DIRECTORY), "utf-8")
  )
);
options.validator = getAjvValidator(options.config.schema);

describe("Test front-matter linter", () => {
  it("should use double quotes and remove unwanted quotes", async () => {
    const filePath = fileURLToPath(
      new URL("./double_quotes.md", SAMPLES_DIRECTORY)
    );
    const validPath = fileURLToPath(
      new URL("./double_quotes.valid.md", SAMPLES_DIRECTORY)
    );
    const validContent = fs.readFileSync(validPath, "utf-8");

    options.fix = true;
    const result = await checkFrontMatter(filePath, options);
    await expect(result).toEqual([null, null, validContent]);
  });

  it("should enforce the attribute order", async () => {
    const filePath = fileURLToPath(
      new URL("./attribute_order.md", SAMPLES_DIRECTORY)
    );
    const validPath = fileURLToPath(
      new URL("./attribute_order.valid.md", SAMPLES_DIRECTORY)
    );
    const validContent = fs.readFileSync(validPath, "utf-8");

    options.fix = false;
    let result = await checkFrontMatter(filePath, options);
    const expected =
      "tests/front-matter_test_files/attribute_order.md\n\t " +
      "Front matter attributes are not in required order: " +
      "title->short-title->slug->page-type->status->browser-compat->spec-urls";
    await expect(result).toEqual([null, expected, null]);

    options.fix = true;
    result = await checkFrontMatter(filePath, options);
    await expect(result).toEqual([null, null, validContent]);
  });

  it("should flag invalid values", async () => {
    const filePath = fileURLToPath(new URL("./values.md", SAMPLES_DIRECTORY));

    options.fix = false;
    let result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/values.md\n" +
      "'page-type' property must be equal to one of the allowed values:\n" +
      "\tlanding-page, guide, web-api-method\n" +
      "Front matter must match 'then' schema\n" +
      "Front matter must have required property 'slug'\n" +
      "'0' property must be equal to one of the allowed values:\n" +
      "\tdeprecated, experimental, non-standard\n" +
      "property 'spec-urls' must match format 'uri'";
    await expect(result).toEqual([expected, null, null]);
  });

  it("should prettify the front-matter", async () => {
    const filePath = fileURLToPath(new URL("./prettify.md", SAMPLES_DIRECTORY));
    const validPath = fileURLToPath(
      new URL("./prettify.valid.md", SAMPLES_DIRECTORY)
    );
    const validContent = fs.readFileSync(validPath, "utf-8");

    options.fix = true;
    const result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/prettify.md\n" +
      "property 'title' must not have more than 120 characters";
    await expect(result).toEqual([expected, null, validContent]);
  });

  it("should flag and remove unknown attribute", async () => {
    const filePath = fileURLToPath(
      new URL("./unknown_attribute.md", SAMPLES_DIRECTORY)
    );
    const validPath = fileURLToPath(
      new URL("./unknown_attribute.valid.md", SAMPLES_DIRECTORY)
    );
    const validContent = fs.readFileSync(validPath, "utf-8");

    options.fix = false;
    let result = await checkFrontMatter(filePath, options);
    const expected =
      "Error: tests/front-matter_test_files/unknown_attribute.md\n" +
      "'tags' property is not expected to be here";
    await expect(result).toEqual([expected, null, null]);

    options.fix = true;
    result = await checkFrontMatter(filePath, options);
    await expect(result).toEqual([expected, null, validContent]);
  });
});
