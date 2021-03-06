import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import Pagination from '../components/Posts/Pagination'
import Post from '../components/Posts/Post'
import config from '../config'

const PostTemplate = ({ pageContext, data: { markdownRemark } }) => (
  <Layout>
    <Helmet title={`${markdownRemark.frontmatter.title} - ${config.title}`} />
    <Post key={markdownRemark.id} post={markdownRemark} isHome={false} />
    <Pagination {...pageContext}>
      {({ prev, next }) => (
        <div>
          {prev && (
            <Link style={{ float: 'left' }} to={prev.slug}>
              {`« ${prev.title}`}
            </Link>
          )}
          {next && (
            <Link style={{ float: 'right' }} to={next.slug}>
              {`${next.title} »`}
            </Link>
          )}
        </div>
      )}
    </Pagination>
    <Comment />
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      # tableOfContents
      frontmatter {
        date(formatString: "MM月DD, YYYY")
        path
        title
      }
    }
  }
`
