import { ref } from "vue";
import api from "@/api";

export function useProducts() {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const limit = ref(8);
  const limit2 = ref(5);
  const skip = ref(0);

  const fetchProducts = () => {
    loading.value = true;

    api
      .get(`/products?limit=${limit.value}&skip=${skip.value}`)
      .then((res) => {
        products.value = [...products.value, ...res.data.products];
        console.log(products.value);
        skip.value += limit.value;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const fetchProducts2 = () => {
    loading.value = true;

    api
      .get(`/products?limit=${limit2.value}&skip=${skip.value}`)
      .then((res) => {
        products.value = [...products.value, ...res.data.products];
        console.log(products.value);
        skip.value += limit2.value;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { products, error, loading, fetchProducts, fetchProducts2 };
}
