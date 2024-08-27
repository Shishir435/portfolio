import Head from "next/head"
import React from "react"

function NextHead({ pageTitle }: { pageTitle: string }) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`Read the ${pageTitle} blog post`} />
    </Head>
  )
}

export default NextHead
