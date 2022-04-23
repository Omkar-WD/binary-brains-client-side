import { Input } from "@chakra-ui/react";
export const Batch = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>
        <form>
          <br />
          <Input placeholder="batch Name" width={550} onChange={handleChange} />
        </form>
      </div>
    </>
  );
};
