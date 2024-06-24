import { ReactDOM } from "react";

// __mocks__/expo-router.js
export const Link = ({ children }: { children: ReactDOM }) => children;
export const useLinkTo = jest.fn();
