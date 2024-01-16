import fs from "node:fs/promises";
import path from "node:path";

import YAML from "js-yaml";
import * as prettier from "prettier";
import AJV from "ajv";
import grayMatter from "gray-matter";
import addFormats from "ajv-formats";
import { betterAjvErrors } from "@apideck/better-ajv-errors";

export function getRelativePath(filePath) {
  return path.relative(process.cwd(), filePath);
}

export function getAjvValidator(schema) {
  const ajv = new AJV({ allowUnionTypes: true, allErrors: true });
  addFormats.default(ajv);
  return ajv.compile(schema);
}

function areAttributesInOrder(frontMatter, order) {
  const attrs = Object.keys(frontMatter).filter((item) => order.includes(item));
  const orderedAttrs = order.filter((item) => frontMatter[item]);
  return orderedAttrs.every((item, index) => item === attrs[index]);
}

export async function checkFrontMatter(filePath, options) {
  let content = await fs.readFile(filePath, "utf-8");
  const document = grayMatter(content);
  const fmObject = document.data;
  const order = options.config["attribute-order"];

  // validate and collect errors
  const validator = options.validator;
  const valid = validator(fmObject);
  const validationErrors = betterAjvErrors({
    schema: validator.schema,
    data: fmObject,
    errors: validator.errors,
  });
  const errors = [];
  if (!valid) {
    for (const error of validationErrors) {
      let message = error.message.replace("{base}", "Front matter");
      if (error.context.allowedValues) {
        message += `:\n\t${error.context.allowedValues.join(", ")}`;
      }
      errors.push(message);
    }
  }

  const isInOrder = areAttributesInOrder(fmObject, order);
  let fixableError = null;

  if (!options.fix && !isInOrder) {
    fixableError = `${getRelativePath(
      filePath,
    )}\n\t Front matter attributes are not in required order: ${order.join(
      "->",
    )}`;
  }

  //  if --fix option is true, then fix the order and prettify
  if (options.fix) {
    const fmOrdered = {};
    for (const attr of options.config["attribute-order"]) {
      const value = fmObject[attr];
      if (value) {
        if (attr === "status" && Array.isArray(value) && value.length) {
          fmOrdered[attr] = value.sort();
        } else if (attr === "browser-compat" || attr === "spec-urls") {
          if (Array.isArray(value) && value.length === 1) {
            fmOrdered[attr] = value[0];
          } else {
            fmOrdered[attr] = value;
          }
        } else {
          fmOrdered[attr] = value;
        }
      }
    }

    let yml = YAML.dump(fmOrdered, {
      skipInvalid: true,
      lineWidth: options.config.lineWidth,
      quotingType: '"',
    });
    yml = yml.replace(/[\s\n]+$/g, "");
    yml = await prettier.format(yml, { parser: "yaml" });
    content = `---\n${yml}---\n${document.content}`;
  } else {
    content = null;
  }

  return [
    errors.length
      ? `Error: ${getRelativePath(filePath)}\n${errors.join("\n")}`
      : null,
    fixableError,
    content,
  ];
}
