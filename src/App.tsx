import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModel } from "./components/ui/CreateContentModel";
import { LoadingIcon } from "./icons/LoadingIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CreateContentModel
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex gap-1 justify-end items-center">
        <Button
          onClick={() => setModalOpen(!isModalOpen)}
          startIcon={<PlusIcon size="md" />}
          variant="secondary"
          size="md"
          text="Add Content"
          loading={false}
          loadIcon={<LoadingIcon size="sm" />}
        />
        <Button
          startIcon={<ShareIcon size="md" />}
          variant="primary"
          size="md"
          text="Share"
          loading={false}
          loadIcon={<LoadingIcon size="sm" />}
          onClick={() => {}}
        />
      </div>
      <div className="flex">
        <Card
          theme="dark"
          type="youtube"
          link="https://www.youtube.com/watch?v=4tQu4e_8Ego&ab_channel=HarkiratSingh"
          title="First YT "
        />
        <Card
          theme="light"
          type="twitter"
          link="https://x.com/han_wahe_sameer/status/1874493401430958569"
          title="First X post"
        />
      </div>
    </>
  );
}

export default App;
