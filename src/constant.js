import {
  DotChartOutlined,
  FileSearchOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { createContext } from "react";

import CatalogService from "./pages/1-catalog-service/catalog-page";
import OfferService from "./pages/2-offer-service/offer-page";
import OrderService from "./pages/3-order-service/order-page";

import ab1 from "./images/ab1.svg";
import ab2 from "./images/ab2.svg";
import ab3 from "./images/ab3.svg";
import ab4 from "./images/ab4.svg";
import ab5 from "./images/ab5.svg";
import ab6 from "./images/ab6.svg";

export const avatars = {
  "Alvabot 1": ab1,
  "Alvabot 2": ab2,
  "Alvabot 3": ab3,
  "Alvabot 4": ab4,
  "Alvabot 5": ab5,
  "Alvabot 6": ab6,
};

export const StateContext = createContext();
export const CatalogContext = createContext();
export const OfferContext = createContext();

export const steps = [
  {
    title: "Catalog Service",
    description: `gRPC-Web+Unary`,
    app: <CatalogService />,
    image: <ShopOutlined />,
    footer: { title: "Ask For Offers", step: 1 },
  },
  {
    title: "Offer Service",
    description: `gRPC-Web+Streaming`,
    app: <OfferService />,
    image: <DotChartOutlined />,
    footer: { title: "Place Order", step: 2 },
  },

  {
    title: "Order Service",
    description: `gRPC-Web+Unary & Streaming`,
    app: <OrderService />,
    image: <FileSearchOutlined />,
  },
];
