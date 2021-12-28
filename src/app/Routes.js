import Loadable from 'react-loadable';
import Loading from './modules/loading/Loading';
import * as ROUTES from './constants/routes';

const Home = Loadable({
  loader: () => import("./modules/home"),
  loading: Loading,
});

const Blog = Loadable({
  loader: () => import("./modules/blog"),
  loading: Loading,
});

const BlogDetail = Loadable({
  loader: () => import("./modules/blog-detail"),
  loading: Loading,
});

const Introduction = Loadable({
  loader: () => import("./modules/introduction/Introduction"),
  loading: Loading,
});

const Cart = Loadable({
  loader: () => import("./modules/carts"),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import("./modules/contact/Contact"),
  loading: Loading,
});

const Products = Loadable({
  loader: () => import("./modules/products/Products"),
  loading: Loading,
});

const ProductsDetail = Loadable({
  loader: () => import("./modules/product-detail"),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import("./modules/login"),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import("./modules/register"),
  loading: Loading,
});

export default [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: ROUTES.BLOG,
    component: Blog
  },
  {
    path: ROUTES.BLOG_DETAIL,
    component: BlogDetail
  },
  {
    path: ROUTES.INTRODUCTION,
    component: Introduction
  },
  {
    path: ROUTES.CART,
    component: Cart
  },
  {
    path: ROUTES.CONTACT,
    component: Contact
  },
  {
    path: ROUTES.PRODUCTS,
    component: Products
  },
  {
    path: ROUTES.PRODUCTS_DETAIL,
    component: ProductsDetail
  },
  {
    path: ROUTES.LOGIN,
    component: Login
  },
  {
    path: ROUTES.REGISTER,
    component: Register
  }
]
