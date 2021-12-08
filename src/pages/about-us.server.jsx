import { useShopQuery, RawHtml } from '@shopify/hydrogen'
import Layout from "../components/Layout.server";
import gql from 'graphql-tag';


export default function aboutUsPage() {
    const { data } = useShopQuery({
        query: QUERY
    })

    return (
        <Layout>
            <h1>{data.page.title}</h1>
            <RawHtml string={data.page.body} as="span"/>
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