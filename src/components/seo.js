// File: src/components/seo.js
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;


// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// function Seo({ description, title, children }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description
//   const defaultTitle = site.siteMetadata?.title

//   return (
//     <>
//       <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
//       <meta name="description" content={metaDescription} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={metaDescription} />
//       <meta property="og:type" content="website" />
//       <meta name="twitter:card" content="summary" />
//       <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={metaDescription} />
//       {children}
//     </>
//   )
// }

// export default Seo
