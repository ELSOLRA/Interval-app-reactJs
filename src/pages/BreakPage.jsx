import Break_Pause from "../components/Break_Pause";
import Layout from "../components/Layout";

export default function BreakPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-8 mx-auto max-w-sm sm:max-w-sm md:max-w-md">
        <Break_Pause />
      </div>
    </Layout>
  );
}
