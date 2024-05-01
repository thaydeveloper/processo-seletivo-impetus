export interface Produto {
  id: number;
  title: string;
  price: number;
}

export interface ProdutosState {
  items: Produto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
