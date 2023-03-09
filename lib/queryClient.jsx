import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const BASE_URL = 'https://fakestoreapi.com/'

export const getQuery = (() => {
  let client = null
  return () => {
    {
      if (!client) client = QueryClient
      return client
    }
  }
})()

export const fetcher = async ({ method, path, body, params }) => {
  try {
    const url = `${BASE_URL}${path}`
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL,
      },
    }
    const res = await fetch(url, fetchOptions)
    const json = await res.json()
    return json
  } catch (e) {
    console.err(e)
  }
}
