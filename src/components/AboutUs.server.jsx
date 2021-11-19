import { useShopQuery, flattenConnection, Image } from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Button from './Button.client';

export default function AboutUs() {

    const {data} = useShopQuery({
        query: QUERY
      })
    
    const aboutUsContent = flattenConnection(data.articles)[0];

    return (
        <div className="flex flex-row">
            <Image image={aboutUsContent.image} options={{width: 450, height: 450, crop: 'center'}}/>
            <div className="ml-5 space-y-5">
                <div className="text-xl">{aboutUsContent.title}</div>
                <div>{aboutUsContent.content}</div>
            <Button to="./about-us" label="Learn More"/>
            </div>
        </div>
    )
}

const QUERY = gql`
    ${Image.Fragment}
  { articles(first:1) {
  edges {
    node {
      title
      content
      image {
        ...ImageFragment
      }
      handle
    }
  }
}}
`;