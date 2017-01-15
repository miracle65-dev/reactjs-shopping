/**
 * @flow
 * @module cartReducer
 *
 * @author Oleg Nosov <olegnosov1@gmail.com>
 * @license MIT
 *
 * @description
 * Redux reducer to operate with cart
 *
 */
import { combineReducers } from 'redux';
import products from './cart/products';
import currency from './cart/currency';

/**
 * @module cartReducer
 * @description
 * Default state value is
 * { products: {}, currency: '' }
 */
export default combineReducers({ products, currency });
