import { Analytics } from '@vercel/analytics/react';

function Home() {
  return (
    <div>
      <h1>Welcome to the a clone version of Tab News</h1>
      <p>Why did the chicken cross the road?</p>
      <p>
        <marquee>To show the skunk it could be done!</marquee>
      </p>
      <Analytics />
    </div>
  );
}

export default Home;
