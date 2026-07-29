import { correctContentPathFromEnv, parseEnvValue } from "./utils.js";

export const CONTENT_ROOT = correctContentPathFromEnv("CONTENT_ROOT");

export const CONTENT_TRANSLATED_ROOT = correctContentPathFromEnv(
  "CONTENT_TRANSLATED_ROOT",
);

export const MAX_FILE_SIZE = parseEnvValue(
  process.env.FILECHECK_MAX_FILE_SIZE || 500 * 1024, // 500KiB
);
