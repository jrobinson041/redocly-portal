import * as React from "react";

import {
  useCatalog,
  FlexSection,
  Flex,
  WideTile,
  SectionHeader,
  LoadingAnimation,
  H2,
} from "@redocly/developer-portal/ui";

export function Catalog() {
  const { apis, loadingRbac } = useCatalog({ offset: 0, limit: 10 });

  if (!apis.length) {
    return <H2>You don't have access to any APIs.</H2>;
  }

  return (
    <>
      <Flex flexDirection="row" alignItems="baseline">
        <SectionHeader> API Catalog</SectionHeader>
        {loadingRbac ? <LoadingAnimation size={20} /> : null}
      </Flex>
      <FlexSection justifyContent="space-around" flexWrap="wrap">
        {apis.map((api) => (
          <WideTile to={api.link} header={api.title || api.link}>
            Tags:{" "}
            {api.defaultVersion.metadata?.tags?.map((tag) => (
              <span> {tag} </span>
            ))}
          </WideTile>
        ))}
        {apis.map((api) => (
          <WideTile to={api.link} header={api.title || api.link}>
            Tags:{" "}
            {api.defaultVersion.metadata?.tags?.map((tag) => (
              <span> {tag} </span>
            ))}
          </WideTile>
        ))}
        {apis.map((api) => (
          <WideTile to={api.link} header={api.title || api.link}>
            Tags:{" "}
            {api.defaultVersion.metadata?.tags?.map((tag) => (
              <span> {tag} </span>
            ))}
          </WideTile>
        ))}
      </FlexSection>
    </>
  );
}
