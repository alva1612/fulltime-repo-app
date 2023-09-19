import { BaseLayout } from "./common/layouts/BaseLayout";
import { RepoLanding } from "./features/repo/pages/RepoLanding";

function App() {
  return (
    <BaseLayout>
      <RepoLanding />
    </BaseLayout>
  );
}

export default App;
