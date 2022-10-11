import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setGreeting } from "../redux/utils";

export const useGreeting = () => {
  const date = new Date();
  const dispatcher = useAppDispatch();

  useEffect(() => {
    const hour = date.getHours();
    if (hour >= 0 && hour < 12)
      dispatcher(setGreeting("Bom dia"));
    else if (hour >= 12 && hour < 19)
      dispatcher(setGreeting("Boa tarde"));
    else
      dispatcher(setGreeting("Boa noite"));
  }, []);
}
