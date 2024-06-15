import { ref } from "vue";
import api from "@/api";

export function usePopularProducts() {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const limit = ref(4);
  const skip = ref(0);

  const fetchPopularProducts = () => {
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

  return { products, error, loading, fetchPopularProducts };
}
