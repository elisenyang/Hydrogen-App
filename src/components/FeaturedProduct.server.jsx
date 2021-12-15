import ProductCard from './ProductCard.server';
import gql from 'graphql-tag';
import {
  ProductProvider,
  SelectedVariantImage,
  SelectedVariantAddToCartButton,
  SelectedVariantBuyNowButton,
  ProductTitle,
  ProductDescription,
  SelectedVariantPrice,
} from '@shopify/hydrogen';

export default function FeaturedProduct(props) {

  const featuredProduct = props.product;
  const firstVariant = featuredProduct.variants?.edges[0]?.node;

  return (
    <ProductProvider
      product={featuredProduct}
      initialVariantId={firstVariant.id}
    >
      <div className="flex flex-row">
        <SelectedVariantImage
          options={{width: 400, height: 400, crop: 'center'}}
        />
        <div className="flex flex-col justify-around">
          <div className="ml-3">
            <ProductTitle className="text-xl m-3" />
            <SelectedVariantPrice className="m-3" />
            <ProductDescription className="m-3" />
          </div>
          <div className="flex flex-row gap-x-2 ml-3">
            <SelectedVariantAddToCartButton className="w-5/12 block items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
              Add to Cart
            </SelectedVariantAddToCartButton>
            <SelectedVariantBuyNowButton className="w-5/12 block items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
              Buy Now
            </SelectedVariantBuyNowButton>
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};
