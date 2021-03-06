import {
  useShopQuery,
  Image,
  flattenConnection,
  Link,
  ProductProvider,
  ProductProviderFragment,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import CollectionList from '../components/CollectionList.server';
import AboutUs from '../components/AboutUs.server';
import FeaturedProduct from '../components/FeaturedProduct.server';

export default function Index() {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numProductMetafields: 0,
      includeReferenceMetafieldDetails: false,
      numProductVariants: 1,
      numProductMedia: 1,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
      numProductSellingPlanGroups: 10,
      numProductSellingPlans: 10,
    },
  });

  const featuredProduct = data.product;
  return (
    <Layout>
      <div className="flex flex-row p-6">
        <div className="w-4/6">
          <Image
            src={`https://media.istockphoto.com/photos/charcuterie-boards-of-assorted-meats-cheeses-and-appetizers-top-view-picture-id1186420213?k=20&m=1186420213&s=612x612&w=0&h=XiiILxWmHQPm6fUat-Vsoruts6C3h7OB-7ltMqz6-CQ=`}
            width="100%"
            height="100%"
          />
        </div>
        <div className="text-5xl ml-5 place-self-center w-1/4">
          Seasonal charcuterie boards and wine pairings
        </div>
      </div>
      <div className="p-10">
        <h1 className="uppercase text-center text-2xl p-5 font-bold">
          Featured Product
        </h1>
        <div>
          <FeaturedProduct product={featuredProduct} />
        </div>
      </div>
      <div className="p-10">
        <h1 className="uppercase text-center text-2xl p-5 font-bold">Shop</h1>
        <CollectionList />
      </div>
      <div>
        <h1 className="uppercase text-center text-2xl p-5 font-bold">
          About Us
        </h1>
        <AboutUs />
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query welcomeContent(
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
  ) {
    shop {
      name
    }
    collections(first: 10) {
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
    product(handle: "thanksgiving-meat-and-cheese") {
      ...ProductProviderFragment
    }
  }
  ${Image.Fragment}
  ${ProductProviderFragment}
`;
