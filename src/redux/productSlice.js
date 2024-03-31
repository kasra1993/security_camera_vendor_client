import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productsDetailStatus: STATUS.IDLE,
  categories: [],
  categoriesStatus: STATUS.IDLE,
  subCategories: [],
  subCategoriesStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`${process.env.VITE_REACT_APP}product/${id}`);
  const data = await response.json();
  return data;
});

export const getCategories = createAsyncThunk("getCategories", async () => {
  console.log(process.env.VITE_REACT_APP);
  const response = await fetch(`${process.env.VITE_REACT_APP}categories`);
  console.log(response);
  const data = await response.json();
  console.log(data), "this is Data";
  return data;
});
export const getSubCategories = createAsyncThunk(
  "getSubCategories",
  async (id) => {
    const response = await fetch(
      `${process.env.VITE_REACT_APP}getCategory/${id}`
    );
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADİNG;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAİL;
      })

      .addCase(getDetailProduct.pending, (state, action) => {
        state.productsDetailStatus = STATUS.LOADİNG;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productsDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productsDetailStatus = STATUS.FAİL;
      })

      .addCase(getCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADİNG;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoriesStatus = STATUS.SUCCESS;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAİL;
      })
      .addCase(getSubCategories.pending, (state, action) => {
        state.subCategoriesStatus = STATUS.LOADİNG;
      })
      .addCase(getSubCategories.fulfilled, (state, action) => {
        state.subCategoriesStatus = STATUS.SUCCESS;
        state.subCategories = action.payload;
      })
      .addCase(getSubCategories.rejected, (state, action) => {
        state.subCategoriesStatus = STATUS.FAİL;
      });
  },
});

export default productSlice.reducer;
