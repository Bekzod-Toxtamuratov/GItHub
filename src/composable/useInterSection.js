import { ref, onMounted } from "vue";

export function useInterSectionObServer(target) {
  const isInterSecting = ref(false);

  const observer = new IntersectionObserver((entry) => {
    console.log("entry", entry[0].isIntersecting);
    isInterSecting.value = entry[0].isIntersecting;
  });
  onMounted(() => {
    observer.observe(target.value);
  });
  return { isInterSecting };
}
