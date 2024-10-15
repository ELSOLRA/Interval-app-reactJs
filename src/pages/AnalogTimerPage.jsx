import AnalogTimer from "../components/AnalogTimer";
import Layout from "../components/Layout";

export default function AnalogTimerPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-8 mx-auto max-w-sm sm:max-w-sm md:max-w-md">
        <AnalogTimer />
      </div>
    </Layout>
  );
}
