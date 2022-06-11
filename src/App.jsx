import React from "react";

import { TodoRouter } from "./router/TodoRouter";
import { FlashMessage } from "./components/flashMessage/FlashMessage";

import { ConpleteTodoProvider } from "./providers/ConpleteTodoProvider";
import { FlashProvider } from "./providers/FlashProvider";
import { InconpleteTodoProvider } from "./providers/InconpleteTodoProvider";



export const App = () => {
  return (
    <>
      <FlashProvider>
        <ConpleteTodoProvider>
          <InconpleteTodoProvider>
            <FlashMessage />
            <TodoRouter />
          </InconpleteTodoProvider>
        </ConpleteTodoProvider>
      </FlashProvider>
    </>
  );
}

