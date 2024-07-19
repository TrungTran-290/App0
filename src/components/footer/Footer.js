import "./footer.css";
function Footer() {
  // const {name2, age2}=props
  const arr = [
    {
      name: " Le Meo",
      age: 1,
    },
    {
      name: " Le Tho",
      age: 2,
    },
    {
      name: " Le Nai",
      age: 3,
    },
  ];
  return (
    <>
      <div className="Foot1">
        This is Footer1
        {arr &&
          arr.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
      </div>
      {/* <div className="Foot2">This is Footer2 {props.name1}
       
      </div> */}
    </>
  );
}
export default Footer;
