import React from "react";
import { TodoApp } from "./TodoApp"
import { FlashMessage } from "./components/FlashMessage/FlashMessage";

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
            <TodoApp />
          </InconpleteTodoProvider>
        </ConpleteTodoProvider>
      </FlashProvider>
    </>
  );
}

