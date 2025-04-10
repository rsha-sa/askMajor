import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import AskPage from './routes/AskPage';
import ChatPage from './routes/chatPage/ChatPage';
import RootLayouts from './layouts/rootLayouts/RootLayouts';
import AskLayouts from './layouts/askLayouts/AskLayouts';
import { BoxIconElement } from 'boxicons';
import "./index.css";


const router = createBrowserRouter([
  {
    element: <RootLayouts />, 
    children: [
      {
        element: <AskLayouts />, 
        children: [
          {
            path: "/", 
            element: <AskPage />, 
          },
          {
            path: "/chats/:id",
            element: <ChatPage />, 
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
