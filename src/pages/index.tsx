import React from 'react'
import { css } from '@emotion/core'

const index = () => {
  const styles = (red) => {
    console.log(red)
    return css`
      color: ${red};
    `
  }

  return (
    <div>
      <h1 css={styles('blue')}>Hello World</h1>
    </div>
  )
}

export default index
