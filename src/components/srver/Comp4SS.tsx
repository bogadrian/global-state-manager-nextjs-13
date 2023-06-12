import { Comp1 } from '../client/Comp1';

const getData = async (): Promise<
  { id: string; name: string; role: string }[]
> => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export const Comp4SS = async () => {
  const data = await getData();
  return (
    <>
      <Comp1 data={data} />
    </>
  );
};
