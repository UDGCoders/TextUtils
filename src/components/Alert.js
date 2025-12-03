import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} text-center position-relative mx-auto alert-dismissible fade show `}role="alert">
    <strong>{props.alert.type}</strong> {props.alert.msg}
  </div>
  )
}
