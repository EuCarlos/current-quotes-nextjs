import React from "react";
import packageJSON from "../../package.json";

interface SeoTagsProps {
  title: string;
  description: string;
  image: string;
  keywords?: string[]
}

export const SeoTags: React.FC<SeoTagsProps> = ({
  description,
  title,
  image,
  keywords = []
}) => (
  <>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.toString()} />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content={packageJSON.homepage} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="carlosalves.vercel.app" />
    <meta property="twitter:url" content={packageJSON.homepage} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <title>{title}</title>
  </>
);
