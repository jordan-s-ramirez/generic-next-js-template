import { AiFillPieChart } from "react-icons/ai";
import { GiChart } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";

export var navbarConfig = {
  config: [
    {
      type: "SubMenu",
      title: "Charts",
      icon: <AiOutlinePieChart />,
      data: [
        {
          type: "MenuItem",
          description: "Internal Report Coming Soon?",
          url: "/pie-chart",
          title: "Pie Chart",
          icon: <AiFillPieChart />,
        },
        {
          type: "MenuItem",
          description: "Internal Report Coming Soon?",
          url: "/line-chart",
          title: "Line Chart",
          icon: <GiChart />,
        },
      ],
    },
    {
      type: "MenuItem",
      description: "Generic Documentation",
      url: "/documentation",
      title: "Documentation",
      icon: <GrDocumentText />,
    },
    {
      type: "MenuItem",
      description: "Generic Calendar",
      url: "/calendar",
      title: "Calendar",
      icon: <AiOutlineCalendar />,
    },
    {
      type: "MenuItem",
      description: "Generic Help Page",
      url: "/help",
      title: "Help",
      icon: <IoMdHelpCircleOutline />,
    },
  ],
};
