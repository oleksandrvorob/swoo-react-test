import React from 'react';

import Box from "../../components/Box";
import Button from "../../components/Button";
import { CountView } from "./Counter.style";

// hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";

// actions
import { decrement, increment, selectCount } from "../../../slice/Counter";

export default function Counter() {

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const counterUp = () => {
    dispatch(increment())
  }

  const counterDown = () => {
    dispatch(decrement())
  }

  return (
    <Box data-testid="counterApp" >
      <Button testId="counterDown" onClick={counterDown} title="-1" />
      <CountView data-testid="counter">{count}</CountView>
      <Button testId="counterUp" onClick={counterUp} title="1" />
    </Box>
  )
  
}
