import { existsSync, realpathSync } from "node:fs";
import { basename, join, resolve } from "node:path";

export function createRegExpFromExtensions(...extensions) {
  return new RegExp(`\\.(${extensions.join("|")})$`, "i");
}

export function correctPathFromEnv(envVarName) {
  let pathName = process.env[envVarName];
  if (!pathName) {
    return;
  }
  pathName = realpathSync(pathName);
  return pathName;
}

export function correctContentPathFromEnv(envVarName) {
  let pathName = correctPathFromEnv(envVarName);
  if (!pathName) {
    return;
  }
  if (basename(pathName) !== "files" && existsSync(join(pathName, "files"))) {
    // It can be "corrected"
    pathName = join(pathName, "files");
    console.warn(
      `Corrected the ${envVarName} environment variable to ${pathName}`,
    );
  } else if (!existsSync(pathName)) {
    throw new Error(`${resolve(pathName)} does not exist`);
  }
  return pathName;
}

export function parseEnvValue(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    throw new Error(`Error parsing value '${value}' in .env file: `, {
      cause: e,
    });
  }
}
