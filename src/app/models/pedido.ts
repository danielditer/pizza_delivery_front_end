export interface Pedido {
    id?: string;
    customerId?: number;
    customerName?: String;
    lines?: any;
    status?: number;
    userId?: number;
}
export interface Linea{
    productId: number;
    product:Producto;
}
export interface Producto{
    id: number;
    name: String;
    price: number;
}