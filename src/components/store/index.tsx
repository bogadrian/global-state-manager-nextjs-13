'use client';

import { atom, Provider } from 'jotai';

export const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export const currentAdminAtom = atom('Adrian');
