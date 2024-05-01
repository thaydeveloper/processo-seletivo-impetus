import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Produto, ProdutosState } from "../../types/typesData";

export const fetchProdutos = createAsyncThunk(
  "produtos/fetchProdutos",
  async (): Promise<Produto[]> => {
    const response = await axios.get<Produto[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

const initialState: ProdutosState = {
  items: [],
  status: "idle",
  error: null,
};

const produtosSlice = createSlice({
  name: "produtos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProdutos.fulfilled,
        (state, action: PayloadAction<Produto[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default produtosSlice.reducer;
