import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Pagination from '../components/Posts/Pagination'

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const pageProps = { previousUrl, nextUrl, first, last }
  return (
    <Layout>
      <Posts posts={group} />
      <Pagination {...pageProps}>
        {({ first, last, previousUrl, nextUrl }) => (
          <div>
            {!first && (
              <Link style={{ float: 'left' }} to={previousUrl}>
                « 上一页
              </Link>
            )}
            {!last && (
              <Link style={{ float: 'right' }} to={nextUrl}>
                下一页 »
              </Link>
            )}
            <div style={{ width: '80px', margin: '0 auto' }}>
              <Link to="/archives">博客归档</Link>
            </div>
          </div>
        )}
      </Pagination>
    </Layout>
  )
}

export default IndexPage
