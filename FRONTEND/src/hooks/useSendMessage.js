import { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const { setAuthUser } = useAuthContext();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) {
				if (data.error === "Unauthorized") {
					localStorage.removeItem("chat-user");
					setAuthUser(null);
				}
				throw new Error(data.error);
			}

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;
