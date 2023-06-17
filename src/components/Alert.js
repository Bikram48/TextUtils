import React from 'react'

export default function Alert(props) {
  return (
props.msg && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.msg.message}</strong>
</div>
  )
}