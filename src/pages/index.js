import React from "react"

import Layout from "../layouts/Layout"
import Hero from "../components/Hero"
import Signup from "../components/Signup"
import ValueProp from "../components/ValueProp"

const IndexPage = () => (
  <Layout>
  <Hero /> 
   <ValueProp />
    <Signup /> 
  </Layout>
)

export default IndexPage
