import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`, { credentials: 'include' });
				const data = await res.json();
				if (data.error) {
					if (data.error === "Unauthorized") {
						localStorage.removeItem("chat-user");
						window.location.reload(); 
					}
					throw new Error(data.error);
				}
				setMessages(data);
			} catch (error) {
				if (error.message !== "Unauthorized") {
					console.error(error.message);
				}
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;
