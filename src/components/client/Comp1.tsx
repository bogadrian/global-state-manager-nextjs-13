'use client';

import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { currentAdminAtom } from '../store/index';

export const Comp1 = ({
  data
}: {
  data: { id: string; name: string; role: string }[];
}) => {
  const [_, setAdmin] = useAtom(currentAdminAtom);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setAdmin(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '40vh',
        border: '3px solid #133ea4'
      }}
    >
      <h1>Client Component 1</h1>
      <h2 style={{ padding: '20px 0 20px 0', color: 'red' }}>Users:</h2>
      <h2>
        {data.map(el => (
          <div key={el.id}>{el.role === 'user' ? el.name : ''}</div>
        ))}
      </h2>
      <div style={{ marginTop: '30px' }}>
        <label htmlFor="users" style={{ marginRight: '20px' }}>
          Change admin
        </label>
        <select id="users" name="users" onChange={handleChange}>
          {data.map(el => {
            return (
              <option value={el.name}>
                {el.name} {el.role}{' '}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
