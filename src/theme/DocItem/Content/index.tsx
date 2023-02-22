import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import React from "react";
import { ThemeClassNames } from "@docusaurus/theme-common";
import clsx from "clsx";
import { useDoc } from "@docusaurus/theme-common/internal";
import { useMantineTheme } from "@mantine/core";
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const theme = useMantineTheme();
  return (
    <div
      className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}
      style={{ marginTop: theme.spacing.lg * 2 }}
    >
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}

      <MDXContent>{children}</MDXContent>
    </div>
  );
}
