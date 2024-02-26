import {
  Building,
  Package2Icon,
  PackageIcon,
  PersonStanding,
  WholeWord,
} from "lucide-react";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  href: string;
  value: string;
  count?: number;
};
type FlowType = {
  id: string;
  name: string;
  value: string;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "All",
    description: "Description 1",
    icon: <WholeWord className="h-4 w-4" />,
    href: "/main/category/all",
    value: "all",
  },
  {
    id: "2",
    name: "Business",
    description: "Description 1",
    icon: <Building className="h-4 w-4" />,
    href: "/main/category/business",
    value: "business",
  },
  {
    id: "3",
    name: "Personal",
    description: "Description 2",
    icon: <PersonStanding className="h-4 w-4" />,
    href: "/main/category/personal",
    value: "personal",
  },
  {
    id: "4",
    name: "Products",
    description: "Description 3",
    icon: <PackageIcon className="h-4 w-4" />,
    href: "/main/category/products",
    value: "products",
  },
  {
    id: "5",
    name: "Other",
    description: "Description 4",
    icon: <PackageIcon className="h-4 w-4" />,
    href: "/main/category/other",
    value: "other",
  },
];

export const flowTypes: flowType[] = [
  {
    id: "1",
    name: "WorkFlow",
    value: "workflow",
  },
  {
    id: "2",
    name: "Api",
    value: "api",
  },
  {
    id: "3",
    name: "Job",
    value: "job",
  },
];
