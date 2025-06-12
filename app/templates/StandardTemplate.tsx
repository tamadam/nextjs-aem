/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from "../components/Container";

const StandardTemplate = ({ data, baseContainerPath }: any) => {
  return (
    <>
      <Container data={data} baseContainerPath={baseContainerPath} />;
    </>
  );
};

export default StandardTemplate;
