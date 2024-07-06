

export interface IProducts {
    id: number;
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string;
    categoryId?: number;
    quantity?: number;
};


export interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};


export interface IOrder {
  id: number;
  date: string;
  products: {
    id: number;
    name: string;
    quantity: number;
    image: string;
  }[];
};

export interface CardProductProps extends IProducts {
    addToCart: (product: IProducts) => void;
  };

  export interface Category {
    id: number;
    name: string;
  }


// export interface IOrder1 {
//     id: number;
//     date: string;
//     totalPrice: number;
//     status: string;
//   }

  

