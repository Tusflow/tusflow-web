import * as OpenAPI from 'fumadocs-openapi';
import * as Typescript from 'fumadocs-typescript';
import * as path from 'node:path';
import { rimraf } from 'rimraf';

async function generateDocs() {
  await rimraf('./content/docs/openapi', {
    filter(v) {
      return !v.endsWith('index.mdx') && !v.endsWith('meta.json');
    },
  });

  const demoRegex =
    /^---type-table-demo---\r?\n(?<content>.+)\r?\n---end---$/gm;

  await Promise.all([
    OpenAPI.generateFiles({
      input: ['./tusflow.yaml'],
      output: './content/docs/api-reference',
      per: 'operation',
    }),
    Typescript.generateFiles({
      input: ['./content/docs/**/*.model.mdx'],
      transformOutput(_, content) {
        return content.replace(demoRegex, '---type-table---\n$1\n---end---');
      },
      output: (file) =>
        path.resolve(
          path.dirname(file),
          `${path.basename(file).split('.')[0]}.mdx`
        ),
    }),
  ]);
}

generateDocs().catch((error) => {
  console.error(error);
  process.exit(1);
});
