import lettuce from '../assets/shopping-products/lettuce.jpg';
import tomatoes from '../assets/shopping-products/tomatoes.jpg';
import radish from '../assets/shopping-products/radish.jpg';
import strawberries from '../assets/shopping-products/strawberries.jpg';
import cucumbers from '../assets/shopping-products/cucumbers.jpg';
import beans from '../assets/shopping-products/beans.jpg';
import bellpeppers from '../assets/shopping-products/bellpeppers.jpg';
import chives from '../assets/shopping-products/chives.jpg';
import blueberries from '../assets/shopping-products/blueberries.png';
import kale from '../assets/shopping-products/kale.jpg';
import basil from '../assets/shopping-products/basil.jpg';
import grapes from '../assets/shopping-products/grapes.jpg';
import celery from '../assets/shopping-products/celery.jpg';
import sage from '../assets/shopping-products/sage.jpg';
import spinach from '../assets/shopping-products/spinach.jpg';
import { v4 as uuidv4 } from 'uuid';

const ShoppingData = [
  {
    id: uuidv4(),
    image: lettuce,
    name: 'Lettuces',
    price: 15,
  },
  {
    id: uuidv4(),
    image: tomatoes,
    name: 'Tomatoes',
    price: 42,
  },
  {
    id: uuidv4(),
    image: radish,
    name: 'Radish',
    price: 25,
  },
  {
    id: uuidv4(),
    image: spinach,
    name: 'Spinach',
    price: 20,
  },
  {
    id: uuidv4(),
    image: strawberries,
    name: 'Strawberries',
    price: 150,
  },
  {
    id: uuidv4(),
    image: cucumbers,
    name: 'Cucumbers',
    price: 40,
  },
  {
    id: uuidv4(),
    image: beans,
    name: 'Beans',
    price: 38,
  },
  {
    id: uuidv4(),
    image: bellpeppers,
    name: 'Bell Peppers',
    price: 35,
  },
  {
    id: uuidv4(),
    image: chives,
    name: 'Chives',
    price: 120,
  },
  {
    id: uuidv4(),
    image: blueberries,
    name: 'Blueberries',
    price: 500,
  },
  {
    id: uuidv4(),
    image: kale,
    name: 'Kale',
    price: 200,
  },
  {
    id: uuidv4(),
    image: basil,
    name: 'Basil',
    price: 100,
  },
  {
    id: uuidv4(),
    image: grapes,
    name: 'Grapes',
    price: 55,
  },
  {
    id: uuidv4(),
    image: celery,
    name: 'Celery',
    price: 120,
  },
  {
    id: uuidv4(),
    image: sage,
    name: 'Sage',
    price: 350,
  },
];
export default ShoppingData;
