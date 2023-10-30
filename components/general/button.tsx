type props = {
  text: string;
  color: string;
};
const Zbutton = (props: props) => {
  return (
    <button
      className={` ${props.color} transition-all rounded-lg font-semibold transform duration-300 ease-in-out px-4 py-1 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-sm`}
    >
      {props.text}
    </button>
  );
};

export default Zbutton;
