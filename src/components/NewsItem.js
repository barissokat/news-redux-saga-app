import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Image = styled.img`
  height: auto;
  width: 600px;
  border: 4px solid Black;
  border-radius: 20px;
`

const Article = styled.article`
  margin: 0 auto;
`

const Body = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.div`
  color: #1e293b;
  width: 600px;
  margin: 1.5rem;
`

const ErrorMessage = styled.h2`
  color: red;
`

const ReadMoreButton = styled.a`
  border-bottom: 1px solid black;
  text-decoration: none;
  color: black;
  font-weight: 600;
`

const NewsItem = ({ article }) =>
  article
    ? (
      <Article>
        {article.error && <ErrorMessage>{article.error}</ErrorMessage>}
        {article.title && (
          <Body>
            <h1>{article.title}</h1>
            <Image src={article.urlToImage} alt='' />
            <Description>{article.description}</Description>
            <ReadMoreButton href={article.url} target='_blank' rel='noreferrer'>
              READ MORE
            </ReadMoreButton>
          </Body>
        )}
      </Article>
      )
    : null

const mapStateToProps = (state) => ({
  article: state.news
})

export default connect(mapStateToProps, null)(NewsItem)
