import Header from "@site/src/components/Header";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
export default function Navbar() {
  const { siteConfig }: any = useDocusaurusContext();
  const items = siteConfig.themeConfig.navbar.items;
  console.log(items);
  const links = items.map((i: any) => ({ label: i.label, link: i.to }));
  return <Header links={links} className="navbar" />;
}
