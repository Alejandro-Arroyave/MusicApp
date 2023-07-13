import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

type DrawerOptions = {
  id: string;
  text: string;
  icon: JSX.Element;
};

export const drawerOptions: DrawerOptions[] = [
  {
    id: "home",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    id: "home",
    text: "Search",
    icon: <SearchIcon />,
  },
  {
    id: "home",
    text: "Your music",
    icon: <ImportContactsIcon />,
  },
];
