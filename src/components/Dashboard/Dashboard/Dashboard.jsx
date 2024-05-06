import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="py-[20px]">
        <div className="flex items-center justify-center gap-5">
          {user?.picture && (
            <img src={user.picture} alt={user?.name} className="rounded-full" />
          )}
          <h2>{user?.name}</h2>
        </div>
        <div className="flex items-center justify-center mt-[100px]">
          <button
            onClick={() => logout()}
            className="bg-[#196BFE] smd:w-[170px] lg:w-[253px] smd:h-[31px] lg:h-[50px] smd:mt-[10px] lg:mt-[20px] text-[#ffffff] smd:text-[14px] lg:text-[18px] font-bold"
          >
            Sign Out
          </button>
        </div>

        {/* <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}{" "}
            </li>
          ))}
        </ul> */}
      </div>
    )
  );
};
