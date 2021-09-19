import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import Footer from 'components/Footer'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div className="flex min-h-screen flex-col justify-between">
        <NProgressHandler />
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Port Manager for Mac — Manage ports from your menu bar</title>
          <meta
            name="description"
            content="Find, open and kill ports in a couple of clicks. Works with Node, Python, Ruby, PHP, HTTP and pretty much any process listening on a TCP port."
          />

          <meta
            property="og:title"
            content="Port Manager for Mac — Manage ports from your menu bar"
          />
          <meta property="og:url" content="https://portmanager.app/" />
          <meta
            property="og:image"
            content="https://portmanager.app/img/social.png"
          />

          <link rel="stylesheet" href="style.css" />
          <link rel="icon" href="img/logo.png" />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
        <div className="bg-primary">
          <Footer />
        </div>
      </div>
    )
  }
}
export default MyApp
