"use client"
import Head from "next/head"
import React, { useEffect } from "react"

const NextHead = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title || "blog"
  }, [title])
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default NextHead
