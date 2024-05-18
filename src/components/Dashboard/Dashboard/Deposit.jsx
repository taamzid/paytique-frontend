import { LeftDash } from "./LeftDash";
import RightDash from "./RightDash";
import Common from "./Common";

const Deposit = () => {
  return (
    <div className="grid smd:grid-cols-[1fr_2.5fr_1.5fr] slg:grid-cols-[.9fr_3fr_1fr] lg:grid-cols-[.8fr_3fr_1.1fr] h-[100vh]">
      <LeftDash />
      <div>
        <Common />
      </div>
      <RightDash />
    </div>
  );
};

export default Deposit;
