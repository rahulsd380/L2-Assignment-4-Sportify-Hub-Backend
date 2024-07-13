export type TOrder = {
    customer_name: string;
    email: string;
    phone: string;
    shipping_address: string;
    delivery_amount: number;
    sub_total: number;
    total: number;
    vat: number;
    products: Array<{
      product_name: string;
      price: number;
    }>;
  }