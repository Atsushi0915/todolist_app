import React from "react";

import { TodoRouter } from "./router/TodoRouter";
import { FlashMessage } from "./components/flashMessage/FlashMessage";

import { ConpleteTodoProvider } from "./providers/ConpleteTodoProvider";
import { FlashProvider } from "./providers/FlashProvider";
import { InconpleteTodoProvider } from "./providers/InconpleteTodoProvider";
import { OldTodoProvider } from "./providers/OldTodoProvider";
import { SearchNameProvider } from "./providers/SearchNameProvider";



export const App = () => {
  return (
    <>
      <FlashProvider>
        <ConpleteTodoProvider>
          <InconpleteTodoProvider>
            <OldTodoProvider>
              <SearchNameProvider>
                <FlashMessage />
                <TodoRouter />
              </SearchNameProvider>
            </OldTodoProvider>
          </InconpleteTodoProvider>
        </ConpleteTodoProvider>
      </FlashProvider>
    </>
  );
}

