import ResponsiveAppBar from "./assets/components/header";
import BasicAccordion from "./assets/components/accordion";

const App = () => {
  return (
    <main>
      <BasicAccordion className="side" />
      <div className="appBar">
        <ResponsiveAppBar />
      </div>
    </main>
  );
};

export default App;
