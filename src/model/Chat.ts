export interface ChatMessage {
  senderId: string;
  message: string;
}

export interface ChatRoom {
  chatRoomId: string;
  chatRoomName: string;
}

export interface ChatPopupProps {
  chatRoomId: string;
  chatRoomName: string;
  socket: WebSocket;
  closePopup: () => void;
}
