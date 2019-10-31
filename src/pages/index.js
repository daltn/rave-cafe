import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [hover, setHover] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <h1
        onMouseOver={() => setHover(!hover)}
        className={hover ? "spin blur" : "spin"}
      >
        rave.cafe opening soon
      </h1>
      <Image />
    </Layout>
  )
}

export default IndexPage
