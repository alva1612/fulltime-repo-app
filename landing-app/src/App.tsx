import { BaseLayout } from "./common/layouts/BaseLayout";
import { RepoLanding } from "./features/repo/pages/RepoLanding";

function App() {
  console.log("-----", import.meta.env);
  return (
    <BaseLayout>
      <RepoLanding />
    </BaseLayout>
  );
}

export default App;
