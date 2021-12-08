import {Link, Image} from '@shopify/hydrogen/client';

export default function CollectionCard(props) {
  return (
    <div className="m-1">
      <Link to={`/collections/${props.collection.handle}`}>
        <Image
          image={props.collection.image}
          options={{width: 300, height: 300, crop: 'center'}}
        />
        <p className="text-center text-lg">{props.collection.title}</p>
      </Link>
    </div>
  );
}
