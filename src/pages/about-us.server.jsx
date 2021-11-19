import { Image, useShop, useShopQuery, flattenConnection } from '@shopify/hydrogen'
import Layout from "../components/Layout.server";
import AboutUs from "../components/AboutUs.server";
import Button from '../components/Button.client';
import gql from 'graphql-tag';


export default function aboutUsPage() {
    const { data } = useShopQuery({
        query: QUERY
    })

    return (
        <Layout>
            <div>{data.page.title}</div>
            {data.page.body}
        </Layout>
    )
}

const QUERY = gql`
{ page(handle: "about") {
    handle
    body
    title
 }
}
`;