import React from 'react'
import Spinner from '../Spinner/Spinner'
import './Loading.css'

const Loading = ({ visibility }) => {
  const loading = visibility ? (
    <div className="LoadingContainer">
      <div className="loading">
        <Spinner
          visibility
          height={200}
          width={200}
        />
      </div>
    </div>
  ) : null
  return (
    <div>
      {loading}
    </div>
  )
}

export default Loading
