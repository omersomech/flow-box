import {
  Building,
  Package2Icon,
  PackageIcon,
  PersonStanding,
  WholeWord,
} from "lucide-react";

type category = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  href: string;
};

export const categories: category[] = [
  {
    id: "1",
    name: "All",
    description: "Description 1",
    icon: <WholeWord className="h-4 w-4" />,
    href: "/main/category",
  },
  {
    id: "2",
    name: "Business",
    description: "Description 1",
    icon: <Building className="h-4 w-4" />,
    href: "/main/category/business",
  },
  {
    id: "3",
    name: "Personal",
    description: "Description 2",
    icon: <PersonStanding className="h-4 w-4" />,
    href: "/main/category/personal",
  },
  {
    id: "4",
    name: "Products",
    description: "Description 3",
    icon: <PackageIcon className="h-4 w-4" />,
    href: "/main/category/products",
  },
];
