import { AiFillPieChart } from "react-icons/ai";
import { GiChart } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";

export var navbarConfig = {
  config: [
    {
      type: "SubMenu",
      title: "Charts",
      icon: <AiOutlinePieChart />,
      data: [
        {
          type: "MenuItem",
          title: "Pie Chart",
          icon: <AiFillPieChart />,
        },
        {
          type: "MenuItem",
          title: "Line Chart",
          icon: <GiChart />,
        },
      ],
    },
    {
      type: "MenuItem",
      title: "Documentation",
      icon: <GrDocumentText />,
    },
    {
      type: "MenuItem",
      title: "Calendar",
      icon: <AiOutlineCalendar />,
    },
  ],
};
