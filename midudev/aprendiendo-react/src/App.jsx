import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "pacoHdezs",
    name: "Paco Hernandez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas Chein",
    isFollowing: false,
  },
];

function App() {
  const formattedUserName = (userName) => {
    return <span>@{userName}</span>;
  };

  return (
    <section className="app">
      {users.map(({ userName, isFollowing, name }) => (
        <TwitterFollowCard
          key={userName}
          initialIsFollowing={isFollowing}
          formattedUserName={formattedUserName}
          userName={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
