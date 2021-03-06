const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://zkh.kloud.one/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://zkh.kloud.one/upload/landing/e59/%D0%BB%D0%BE%D0%B3%D0%BE_big@2x.png',
    logoLink: 'https://zkh.kloud.one/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '1-about',
      '2-authorization',
      '3-profile',
      '4-applications'

    ],
    collapsedNav: [],
    links: [{ text: 'KLOUD.ONE', link: 'https://zkh.kloud.one/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://zkh.kloud.one/'>KLOUD.ONE </a>",
  },
  siteMetadata: {
    title: 'GitDocs Trusted.Plus',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GitDocs KLOUD.ONE',
      short_name: 'GitDocs KLOUD.ONE',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
