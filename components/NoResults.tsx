import React from 'react'

interface IProps {
  text: string
}
//IProps is a another way to use typescript, see  in VideoCard component
const NoResults = ({ text }: IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults