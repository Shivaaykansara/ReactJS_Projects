import { BioProvider } from ".";
import { Todo } from "./components/Todo";

const App = () => {
  return (
    <BioProvider>
      <Todo />
    </BioProvider>
  );
};

export default App;
