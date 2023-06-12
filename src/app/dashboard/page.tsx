import { Comp4SS } from '@/components/srver/Comp4SS';
import { HomePageCard } from '../../components/client/HomePageCard';

const Page = async () => {
  return (
    <div>
      <h1>Server Component Page</h1>
      <HomePageCard>
        {/* @ts-expect-error Async Server Component */}
        <Comp4SS />
      </HomePageCard>
    </div>
  );
};

export default Page;
