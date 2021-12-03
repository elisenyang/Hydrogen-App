// The `useShopQuery` hook makes server-only GraphQL queries to the Storefront API.
import {useShopQuery, Link, flattenConnection} from '@shopify/hydrogen';
// Import `gql` to parse GraphQL queries.
import gql from 'graphql-tag';
import CartProvider, {useCart} from './CartProvider.client';
import {useContext} from 'react';

import Navigation from './Navigation.client';
import Footer from './Footer.server';
import CartSection from './CartSection.client';

// The `Layout` component accepts `children` as a prop. This injects any nested components into the layout when you call it.
export default function Layout({children}) {
  // Your shop domain and token are automatically configured, so you only need to pass in a GraphQL query.
  const {data} = useShopQuery({
    query: QUERY,
  });

  const collections = flattenConnection(data.collections);

  // Return JSX with the Tailwind classes that determine the layout styling.
  return (
    <div>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 focus:block sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div>Î
        <header className="my-10 text-center">
          <h1 className="font-bold uppercase tracking-wider text-2x-l">
            <Link to="/">{data.shop.name}</Link>
          </h1>
            <CartSection />
          <Navigation collections={collections} />
        </header>
      </div>
      <main id="mainContent" className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// The GraphQL query used to fetch shop data.
const QUERY = gql`
  query ShopNameQuery {
    shop {
      name
    }
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;
