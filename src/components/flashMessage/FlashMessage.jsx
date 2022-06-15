import React, { memo, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FlashContext } from "../../providers/FlashProvider";
import 'react-toastify/dist/ReactToastify.css';



export const FlashMessage = memo(() => {
  const { flashFlag } = useContext(FlashContext);
  
  const flashStatas = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: ""
  }
  
  switch(flashFlag){
    case "todoError":
      toast.error("登録できるタスクは５件までやで！！", flashStatas);
      break;

    case "allDelete":
      flashStatas.theme = "colored"
      toast.error("過去のタスクを全件削除しました", flashStatas);
      break;

    case "todoAdd":
      flashStatas.theme = "colored"
      toast.info("新しいタスクを登録したよん！", flashStatas);
      break;

    case "todoAddAndError":
      flashStatas.theme = "colored"
      toast.info("新しいタスクを登録したよん！", flashStatas);
      toast.error("登録できるタスクは５件までやで！！", flashStatas);
      break;

    case "todoCancel":
      flashStatas.theme = "dark"
      toast.warn("できまへんて！取り消したで・・・", flashStatas);
      break;

    case "todoDelete":
      flashStatas.theme = "colored"
      toast.error("もうええやろ。消しとくよっ！", flashStatas);
      break;

    case "todoConplete":
      flashStatas.position = "top-right"
      toast.info("やったでー！終わったで！！", flashStatas);
      break;

    case "todoBack":
      flashStatas.position = "bottom-right"
      toast.success("ふふふ、戻しといたよっ・・・", flashStatas);
      break;

    case "todoBackAndError":
      flashStatas.position = "bottom-right"
      toast.success("ふふふ、戻しといたよっ・・・", flashStatas);
      flashStatas.theme = "colored"
      flashStatas.position = "top-center"
      toast.error("登録できるタスクは５件までやで！！", flashStatas);
      break;
    case 'sampledataSet':
      toast.success("よっと！データ入れといたよっ！", flashStatas);
      break;
    default:
  }
  

  return (
    <>
      <ToastContainer />
    </>
  )
})