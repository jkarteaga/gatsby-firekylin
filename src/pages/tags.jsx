import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styles from 'styles/posts.module.css'
import Layout from '../components/Layout'
import Title from '../components/Posts/Title'
import Tag from '../components/Tag'
import config from '../config'

const Tags = ({ tags }) => (
  <ul style={{ marginLeft: 0 }}>
    {tags.map((tag, i) => (
      <Tag key={i} value={tag.fieldValue} count={tag.totalCount} />
    ))}
  </ul>
)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <div className={styles.article}>
      <Helmet title={`标签 - ${config.title}`} />
      <Title>标签</Title>
      <Tags tags={group} />
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
