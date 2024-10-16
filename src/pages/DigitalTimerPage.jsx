import DigitalTimer from "../components/DigitalTimer";
import Layout from "../components/Layout";

export default function DigitalTimerPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-8 mx-auto max-w-sm sm:max-w-sm md:max-w-md">
        <DigitalTimer />
      </div>
    </Layout>
  );
}
