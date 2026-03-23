import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const { setAuthUser } = useAuthContext();
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users', { credentials: 'include' });
                const data = await res.json();
                if (data.error) {
                    if (data.error === "Unauthorized") {
                        localStorage.removeItem("chat-user");
                        setAuthUser(null);
                    }
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                if (error.message !== "Unauthorized") {
                    toast.error(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { conversations, loading };
}

export default useGetConversations
