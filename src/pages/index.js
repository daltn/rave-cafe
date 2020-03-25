import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [hover, setHover] = useState(false)

  return (
    <Layout>
      <SEO title="rave cafe" />
      <Image />
      <h1>rave.cafe</h1>
    </Layout>
  )
}

export default IndexPage
