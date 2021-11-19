import { useShopQuery, Image, flattenConnection, Link, ProductProviderFragment} from '@shopify/hydrogen'
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import CollectionList from '../components/CollectionList.server';
import AboutUs from '../components/AboutUs.server';


export default function Index() {
  const {data} = useShopQuery({
    query: QUERY
  })

  return (
    <Layout>
      <div className="flex flex-row bg-yellow-50 p-6">
        <div className="w-3/4">
        <Image src={`https://media.istockphoto.com/photos/charcuterie-boards-of-assorted-meats-cheeses-and-appetizers-top-view-picture-id1186420213?k=20&m=1186420213&s=612x612&w=0&h=XiiILxWmHQPm6fUat-Vsoruts6C3h7OB-7ltMqz6-CQ=`} width='100%' height='100%'/>
        </div>
        <div className="text-4xl ml-5 place-self-center w-1/4">Seasonal charcuterie boards and wine pairings</div>
      </div>
      <div className="p-10">
        <h1 className="uppercase text-center text-2xl p-5 font-bold">Shop</h1>
        <CollectionList/>
      </div>
      <div>
        <h1 className="uppercase text-center text-2xl p-5 font-bold">About Us</h1>
        <AboutUs />
      </div>
    </Layout>
  )
}

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