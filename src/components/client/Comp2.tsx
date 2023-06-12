'use client';

import { useAtom } from 'jotai';
import { currentAdminAtom } from '../store/index';

export const Comp2 = ({
  data
}: {
  data: { id: string; name: string; role: string }[];
}) => {
  const [admin] = useAtom(currentAdminAtom);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '300px',
        height: '40vh',
        border: '3px solid #16c364',
        marginTop: '20px'
      }}
    >
      <h4>Dashboard Client Component</h4>
      <h2>{admin}</h2>
    </div>
  );
};
