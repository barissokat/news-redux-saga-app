import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import img from '../loading_spinner.gif'

const Spinner = styled.div`
  text-align: center;
`

const Laoading = ({ loading }) =>
  loading
    ? (
      <Spinner>
        <img src={img} alt='loading' />
      </Spinner>
      )
    : null

const mapStateToProps = state => ({
  loading: state.loading
})

export default connect(mapStateToProps, null)(Laoading)
