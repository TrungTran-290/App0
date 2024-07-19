import "./header.css";
function Header() {
  const arr = [
    { name: "Test1" },
    { name: "Test2" },
    { name: "Test3" },
    { name: "Test4" },
  ];
  return (
    <div className="BigHead">
      This is the Header
      {arr &&
        arr.map((item, count) => {
          return <p key={count}>{item.name}</p>;
        })}
    </div>
  );
}
export default Header;
