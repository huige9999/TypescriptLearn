import { ref, onMounted, watchEffect, isRef, Ref } from "vue";



export const useFetch = <T>(url: Ref<string> | string) => {
    const data = ref<T | null>(null);
    const isLoading = ref<boolean>(false);
    const error = ref<Error | null>(null);

    const fetchData = async () => {
        isLoading.value = true;
        try {
            const res = await fetch(url);
            data.value = await res.json();
        } catch (err) {
            error.value = err as Error;
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(() => {
        fetchData();
    })
    if (isRef(url)) {
        watchEffect(() => {
            fetchData();
        })
    }

    return {
        data,
        isLoading,
        error
    }
}