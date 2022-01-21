import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getNews } from '../redux/actions/index'

const NewsButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: black;
  border: 2px solid black;
  font-weight: 700;
  font-size: 1.5rem
`

const Button = ({ getNews }) => {
  return <NewsButton onClick={getNews}>Get News</NewsButton>
}

const mapDispatchToProps = {
  getNews: getNews
}

export default connect(null, mapDispatchToProps)(Button)
