/**
 * @flow
 * @module Types
 *
 * @author Oleg Nosov <olegnosov1@gmail.com>
 * @license MIT
 *
 * @description
 * Redux cart data types file
 *
 */

 declare function onUpdateProductType(key : string, updateProperties : Object): void;

 declare function onRemoveProductType(key : string): void;

 declare function getBoundLocalizationType(id : string, params? : Object) : string;

 declare function getLocalizationType(
   localization : LocalizationObjectType,
   language : string,
   id : string,
   params? : Object,
 ) : string;

 /**
 * @namespace ProductInfoType
 * @memberof Types
 * @prop {string} name - Display name
 * @prop {Object.<string, number>} prices -
 * Object contains { [currency]: price } pairs
 * @prop {string} imagePath - Path to main image
 * @prop {string} path - Link to product's page
 * @prop {Array<string>=} propertiesToShowInCart - Array
 * of names of properties which need to be shown in cart
 *
 */
 declare type ProductInfoType = {
  name : string,
  prices: {
    [currency: string]: number,
  },
  imagePath : string,
  path: string,
  propertiesToShowInCart?: Array<string>,
}

/**
* @namespace ProductType
* @memberof Types
* @prop {string} id
* @prop {number} quantity
* @prop {Object.<string, string|number>} properties -
* Custom product properties.
* In order to make prop visible in cart, add its name
* to productPropsToShow array
* @prop {ProductInfoType} productInfo
* @example
*  {
*    id: 'macbook-case',
*    quantity: 3,
*    properties: {
*      colour: 'red'
*    },
*    productInfo: {
*      name: 'Macbook case',
*      prices: {
*       GBP: 50
*      },
*      path: '/shop/macbook-case/',
*      imagePath: '/shop/macbook-case/1-483x321.jpeg',
*      propertiesToShowInCart: ['colour']
*    }
*  }
*/
 declare type ProductType = {
  id : string,
  quantity : number,
  properties : {
    [propName : string] : string | number,
  },
  productInfo : ProductInfoType,
};

/**
* @namespace ProductsMapType
* @memberof Types
* @prop {ProductType} productKey - Pair (productKey: product)
*/
 declare type ProductsMapType = {
  [productKey: string] : ProductType,
};

/**
* @namespace CartType
* @memberof Types
* @prop {number} total - Grand total
* @prop {string} summary - Readable stringified cart
* @prop {Object.<string, ProductType>} products - Products map
*/
 declare type CartType = {
  products : ProductsMapType,
  currency: string,
};


 declare type CartAddActionType = {
  type : 'cart/ADD',
  key : string,
  id : string,
  quantity : number,
  properties : {
    [propName : string] : string | number,
  },
  productInfo : ProductInfoType,
  productCurrency : string,
};

 declare type CartUpdateActionType = {
  type : 'cart/UPDATE',
  key : string,
  quantity: number,
  updateProperties: Object,
};

 declare type CartRemoveActionType = {
  type : 'cart/REMOVE',
  key : string,
};

 declare type CartSetCurrencyActionType = {
  type : 'cart/SET_CURRENCY',
  currency : string,
};

 declare type CartEmptyActionType = {
  type : 'cart/EMPTY',
};

declare type CartActionType =
  CartAddActionType
  | CartUpdateActionType
  | CartRemoveActionType
  | CartEmptyActionType
  | CartSetCurrencyActionType;

declare type LocalizationObjectType = {
  [languageName : string] : {
    [componentName : string ] : {
      [id : string] : string | {
        component : string | Function,
        props? : Object,
        text : string,
      },
    },
  },
};
