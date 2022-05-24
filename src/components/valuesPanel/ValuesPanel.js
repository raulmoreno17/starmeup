import "./ValuesPanel.scss";
import CoreValue from "../UI/coreValue/CoreValue";

const ValuesPanel = () => {
  const values = [
    {
      image: "../../../assets/values/kudos.png",
      text: "KUDOS",
      color: "#6a65e5",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "BE KIND",
      color: "#b3ca2f",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "TEAM PLAYER",
      color: "#9055d8",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "CONSTANTLY INNOVATE",
      color: "#eb0b8a",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "EXCELLENCE IN YOUR WORK",
      color: "#00c3e6",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "THINK BIG",
      color: "#04ccc2",
    },
    {
      image: "../../../assets/values/kudos.png",
      text: "HAVE FUN",
      color: "#f0a420",
    },
  ];
  return (
    <div className="values-panel__container">
      {values.map((value) => {
        return (
          <CoreValue
            image={value.image}
            text={value.text}
            color={value.color}
          />
        );
      })}
    </div>
  );
};

export default ValuesPanel;
