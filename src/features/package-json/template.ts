import { TARGET_PACKAGE_VERSION } from "@version";
import { join } from "path.std";

export const packageJson = {
  name: "deno-npm",
  version: TARGET_PACKAGE_VERSION,
  description:
    "An inofficial distribution of the deno binary, a secure runtime for JavaScript and TypeScript (Offline-Install), based on deno-bin",
  type: "module",
  // Not needded for type module
  // main: "index.js",
  // Note: Automatically added files:
  // main script (if applicable), Readme.md, package.json
  files: [
    "bin",
  ],
  bin: {
    "deno": "./bin/deno.js",
    "deno-bin-offline": "./bin/deno.js",
    "deno-npm": "./bin/deno.js",
  },
  scripts: {
    "start": "node ./bin/deno.js",
    "deno-version": "./bin/deno.js --version",
  },
  repository: {
    type: "git",
    url: "git+https://github.com/codemonument/deno-bin-offline.git",
  },
  keywords: [
    "deno",
  ],
  author: "Benjamin Jesuiter",
  license: "MIT",
  bugs: {
    url: "https://github.com/codemonument/deno-bin-offline/issues",
  },
  homepage: "https://github.com/codemonument/deno-bin-offline#readme",
  dependencies: {},
  devDependencies: {
    "@types/node": "^18.11.9",
  },
};

export async function renderPackageJson(outPath?: string) {
  if (!outPath) {
    outPath = `dist/`;
  }

  await Deno.writeTextFile(
    join(outPath, "package.json"),
    JSON.stringify(packageJson, null, "\t"),
  );

  console.info(`Rendered package.json!`);
}
