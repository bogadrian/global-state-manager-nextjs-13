'use client';

export const HomePageCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1100px',
        height: '70vh',
        border: '3px solid #7f4848'
      }}
    >
      <h1>Client Component Home Page</h1>
      {children}
    </div>
  );
};
