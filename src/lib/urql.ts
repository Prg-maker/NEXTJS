import { create } from 'domain';
import {
  cacheExchange,
  createClient, 
  dedupExchange, 
  fetchExchange, 
  ssrExchange
} from 'urql'

const isServerSide =  typeof window == 'undefined';
const ssrCache = ssrExchange({isClient: ! isServerSide})

const client =createClient({
  url:'https://api-sa-east-1.graphcms.com/v2/cl125ysr36bv001z08oqy6dbq/master',
  exchanges:[
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange

  ]
})


export {client , ssrCache}