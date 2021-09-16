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
          <title>
            Port Mananager for Mac - Manage ports from your menu bar
          </title>
          <meta
            property="og:title"
            content="Port Mananager for Mac - Manage ports from your menu bar"
          />
          <meta
            name="description"
            content="Port Mananager for Mac - Manage ports from your menu bar"
          />
          <meta property="og:image" content="/img/logo.png" />
        </Head>
        <main className="flex flex-col relative">
          <div>
            <Component {...pageProps} />
          </div>
          <div className="bg-primary h-60 flex justify-center items-center">
            <Footer />
          </div>
        </main>
      </div>
    )
  }
}
export default MyApp
