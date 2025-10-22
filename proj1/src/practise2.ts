interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    getDiscountPrice(count:number):number;
    getDiscountPrice2: (count:number) => number;
}


type Category = 'Electronics' | 'Clothing' | 'Books';

type DetailProduct = Product & {category: Category};

const product: DetailProduct = {
    id: 1,
    name: "Smartphone",
    price: 699,
    getDiscountPrice(count) {
        return this.price * count * 0.9; // 10% discount
    },
    getDiscountPrice2: (count) => {
        return product.price * count * 0.85; // 15% discount
    },
    category: 'Electronics'
}