import React from 'react'

const config = {
  logo: (
    <span>
      <img
        src="/img/logo.svg"
        alt="Raven House Logo"
        height="32"
        style={{ marginRight: '8px' }}
      />
    </span>
  ),
  project: {
    link: 'https://github.com/satyambnsal/docs.ravenhouse',
  },
  docsRepositoryBase: 'https://github.com/satyambnsal/docs.ravenhouse/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} Raven House. All rights reserved.`,
  },
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Raven House documentation"
      />
      <meta
        name="og:title"
        content="Raven House: Privacy-focused NFT Marketplace"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Raven House Docs',
    }
  },
  // banner: {
  //   key: 'aztec-testnet',
  //   text: '⚠️ Raven House is currently running on Aztec Testnet. Use with caution.',
  // },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 275.59,
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
}

export default config
