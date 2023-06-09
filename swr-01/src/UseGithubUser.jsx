import React, { useEffect, useState } from 'react'
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function UseGithubUser(username) {
  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`,  fetcher)

  function fetchUserData() {
    mutate()
  }
   
      return {data, loading:!data && !error , error, fetchUserData};
    }
