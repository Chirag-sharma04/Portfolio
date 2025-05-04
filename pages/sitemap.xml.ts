import { GetServerSideProps } from "next";

const generateSiteMap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/projects</loc>
      </url>
      <url>
        <loc>${process.env.NEXT_PUBLIC_URL}/contact</loc>
      </url>
   </urlset>`;
};

function SiteMap() {
  // This page does not render anything
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
