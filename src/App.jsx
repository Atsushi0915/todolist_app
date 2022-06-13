import React from "react";

import { ConpleteTodoProvider } from "./providers/ConpleteTodoProvider";
import { FlashProvider } from "./providers/FlashProvider";
import { InconpleteTodoProvider } from "./providers/InconpleteTodoProvider";
import { OldTodoProvider } from "./providers/OldTodoProvider";
import { SearchNameProvider } from "./providers/SearchNameProvider";

import { FlashMessage } from "./components/FlashMessage/FlashMessage";
import { TodoRouter } from "./router/TodoRouter";



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

