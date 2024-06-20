import api from "../api";
import { ref } from "vue";
export function UseNewsProduct() {
  const news = ref(null);
  const error = ref(null);

  const fechData = () => {
    api
      .get("/products", { params: { limit: 3 } })
      .then((res) => {
        news.value = res.data.products;
        console.log(news.value);
      })
      .catch((err) => {
        console.log("error", err);
        error.value = err;
      });
  };
  return { news, error, fechData };
}
