/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Transition from './src/components/transition'

export const wrapPageElement = ({ element, props }) => {
  return (
    <div>
      <Transition {...props}>{element}</Transition>
    </div>
  )
}
