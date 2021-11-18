// The `useShopQuery` hook makes server-only GraphQL queries to the Storefront API.
import { useShopQuery, Link } from "@shopify/hydrogen";
import CartSection from './CartSection.client';
// Import `gql` to parse GraphQL queries.
import gql from "graphql-tag";

// The `Layout` component accepts `children` as a prop. This injects any nested components into the layout when you call it.
export default function Layout({ children }) {
  // Your shop domain and token are automatically configured, so you only need to pass in a GraphQL query.
  const { data } = useShopQuery({
    query: QUERY,
  });

  // Return JSX with the Tailwind classes that determine the styling of the layout.
  return (
    <>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 focus:block sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-h-screen max-w-screen">
        <div className="my-10 flex items-center justify-center">
          <h1 className="mr-6">
            <Link
              className="font-bold uppercase text-2x-l tracking-widest"
              to="/"
            >
              {data.shop.name}
            </Link>
          </h1>
          <CardSection/>
        </div>
        <main className="mx-auto max-w-7xl px-6">{children}</main>
      </div>
    </>
  );
}

// The GraphQL query used to fetch shop data.
const QUERY = gql`
  query ShopQuery {
    shop {
      name
    }
  }
`;
