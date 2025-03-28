import { notFound } from 'next/navigation';

import { getGithubLastEdit } from 'fumadocs-core/server';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { openapi, source } from 'lib/source';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const time = await getGithubLastEdit({
    owner: 'Tusflow',
    repo: 'tusflow-web',
    sha: 'main',
    path: `content/docs/${page.file.path}`,
  });

  return (
    <DocsPage
      editOnGithub={{
        owner: 'Tusflow',
        repo: 'tusflow-web',
        sha: 'main',
        path: `content/docs/${page.file.path}`,
      }}
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={new Date(time!)}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            APIPage: openapi.APIPage,
            pre: ({ ref: _ref, ...props }) => (
              <CodeBlock {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
