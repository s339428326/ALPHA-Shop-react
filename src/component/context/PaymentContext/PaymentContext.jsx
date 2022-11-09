import { createContext } from "react";

const paymentData = {
  cardName: "none",
  cardNumber: "none",
  cardDate: "none",
  cardCCV: "none",
  paymentPrice: 0,
};

export const PaymentContext = createContext(paymentData);
