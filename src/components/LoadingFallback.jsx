import { Link } from '@shopify/hydrogen'

export default function LoadingFallback() {
  return (
    <header className="my-10 text-center">
      <h1 className="font-bold uppercase tracking-wider text-2x-l">
      <Link to="/">Brick Lane Boards</Link>        
    </h1>
  </header>
  );
}
