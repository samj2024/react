

import React from 'react'
import Input from './Input'
import Button from './Button'

import GithubSearch from './components/GithubSearch'

export default function GithubSearch() {
    function findUser() {

    }
  return (
    <div>
        <Input />
        <Button onClick={findUser}> Search </Button>
    </div>
  )
}
