import React from 'react'
export const End = (props) => {
  return (
    <>
    <div className='ends'>
      <div>
        Your score: {props.score}<br></br>
        Total Score possible :{props.totalScore}
      </div>
    </div>
    </>
  )
}
export default End;
