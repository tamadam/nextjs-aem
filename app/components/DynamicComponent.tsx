import { componentMap } from "@/lib/component-map";

// Component to render a dynamic component based on its type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicComponent = ({ data, itemKey }: any) => {
  if (!data || !data[":type"]) return null;

  const Component = componentMap[data[":type"]];
  if (!Component) {
    console.error(`No component found for type: ${data[":type"]}`);
    return null;
  }

  return <Component data={data} itemKey={itemKey} />;
};

export default DynamicComponent;
