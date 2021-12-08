import {Link} from '@shopify/hydrogen/client';

export default function Navigation({collections}) {
  return (
    <nav className="lg:block text-center">
      <ul className="md:flex items-center justify-center">
        <li key="home">
          <Link to={'/'} className="block p-4 hover:opacity-80">Home</Link>
        </li>
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
        <li key="about-us">
          <Link to={'/about-us'} className="block p-4 hover:opacity-80">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
