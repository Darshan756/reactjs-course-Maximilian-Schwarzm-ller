import React from 'react'

const Input = ({ label,id,error,...props }) => {
  return (
    
        <div className="control no-margin">
          <label htmlFor="email">{label}</label>
          <input {...props} id={id} />
          <div className="control-error">
            {{error} && <p>{error}</p>}
            </div>
        </div>
  )
}

export default Input