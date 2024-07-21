import React from 'react'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'

export default function App() {
  return (

    <div>
      <Heading content="This is heading 1" />
      <Heading content="This is heading 2" />
      <Heading content="This is heading 3" />

      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>

      <Paragraph>
        <span>Lorem ipsum 1</span>
        <span>Lorem ipsum 2</span>
      </Paragraph>
    </div>
  )
}
