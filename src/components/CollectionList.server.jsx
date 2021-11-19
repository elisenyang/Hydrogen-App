import { useShopQuery, Image, flattenConnection, Link } from '@shopify/hydrogen'
import gql from 'graphql-tag';

import CollectionCard from './CollectionCard.client';

export default function CollectionList() {
    const {data} = useShopQuery({
        query: QUERY
      })
    
    const collections = data && flattenConnection(data.collections)

    return (
        <div className="grid grid-cols-3 place-items-center">
        {collections.map((collection) => (
            <CollectionCard collection={collection} />
        ))}
      </div>
    )
};


const QUERY = gql`
  ${Image.Fragment}
  query welcomeContent {
    shop {
      name
    }
    collections(first:10) {
      edges {
        node {
          id
          title 
          handle
          image {
            ...ImageFragment
          }
        }
      }
    }
  }
`;