/* eslint-env node */
import { Footer, Layout, Navbar, Link } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'


import { } from 'nextra'
export const metadata = {
  description: 'Raven House is privacy focused NFT infrastructure platform on Aztec layer 2 blockchain',
  metadataBase: new URL('https://docs.ravenhouse.xyz'),
  keywords: [
    'NFT',
    "Aztec",
    "Zero Knowledge",
    "WEB3",
    "BLOCKCHAIN",
    "PRIVACY"
  ],
  title: {
    default: 'Raven House | NFT Infrastructure on Aztec',
    template: '%s - Raven House'
  },
  applicationName: 'Raven House',
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Raven House',
    locale: 'en_US',
    type: 'website'
  },
  generator: 'Next.js',
  appleWebApp: {
    title: 'Raven House'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://x.com/ravenhousenft'
  }
}


const banner = (
  <Banner dismissible={false}>
    🎉 Raven House is live on Aztec Testnet.
    <Link href="https://app.ravenhouse.xyz/" className="text-current!">
      Try Now
    </Link>
    .
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span>
        <img
          src="/img/logo.svg"
          alt="Raven House Logo"
          height="32"
          style={{ marginRight: '8px' }}
        />
      </span>
    }
    chatLink="https://discord.com/invite/CR8nKg5gYB"
  />
)

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="aztec network"
      href="https://aztec.network/"
    >
      Powered by
      Aztec
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} RavenHouse.
    </p>
  </Footer>
)

export default async function RootLayout({ children }) {

  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
