import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function UseGithubUser(username) {
    const { data, error, mutate } = useSWR('https://api.github.com/users', fetcher);

  function fetchUsers() {
    mutate();
  }

  return { users: data, error, isLoading: !data && !error, onRefresh: fetchUsers };
}
