import { useEffect, useState } from 'react';
import axios from 'axios';
import { normalizeProducts } from '../utils/normalizeProducts';


const useGetProducts = (source) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [requestVersion, setRequestVersion] = useState(0);

    const reload = () => {
        setRequestVersion((version) => version + 1);
    };

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProducts = async () => {
            if (!source || !source.endpoint) {
                setProducts([]);
                setError('Products endpoint is not configured.');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError('');
            try {
                const response = await axios.get(source.endpoint, {
                    signal: controller.signal,
                    timeout: source.timeoutMs,
                });
                if (!isMounted) return;
                // Normalize once at fetch time to keep rendering predictable.
                setProducts(normalizeProducts(response.data));
            } catch (requestError) {
                if (!isMounted || controller.signal.aborted) return;
                setProducts([]);
                setError("We couldn't load products right now. Please try again.");
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };
        getProducts();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [requestVersion, source]);

    return { products, loading, error, reload };
};
    
export default useGetProducts;
