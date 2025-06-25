import { Home, UserPen, LogOut, User, Users } from "lucide-react";
import { GrUserManager } from "react-icons/gr";
import { RiUser2Line } from "react-icons/ri";
import { PiBuildingsBold } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { TbCirclesRelation } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { BsBuildingAdd } from "react-icons/bs";
import { BsBuildingExclamation } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
// admin navbar
export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/layout",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "All Customer",
                icon: Users,
                path: "/layout/edit-customer",
            },
        ],
    },
    {
        title: "Employees",
        links: [
            {
                label: "All Employee",
                icon: RiUser2Line,
                path: "/layout/edit-employee",
            },
        ],
    },
    {
        title: "Manager",
        links: [
            {
                label: "All Manager",
                icon: GrUserManager,
                path: "/layout/edit-manager",
            },
        ],
    },
    {
        title: "Super Manager",
        links: [
            {
                label: "All Super Manager",
                icon: GrUserManager,
                path: "/layout/edit-supermanager",
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                label: "All Company",
                icon: PiBuildingsBold,
                path: "/layout/edit-company",
            },
        ],
    },
    {
        title: "Offers",
        links: [
            {
                label: "All Offer",
                icon: BiSolidOffer,
                path: "/layout/all-offers",
            },
            {
                label: "Add Customer Offers",
                icon: IoPricetagsOutline,
                path: "/layout/add-offers",
            },
            {
                label: "Add Employee Offers",
                icon: IoPricetagsOutline,
                path: "/layout/add-employee-offers",
            },
        ],
    },
    {
        title: "Upcoming Offers",
        links: [
            {
                label: "All UpcomingOffer",
                icon: BiSolidOffer,
                path: "/layout/all-upcomingoffers",
            },
            {
                label: "Add Customer Upcom..",
                icon: IoPricetagsOutline,
                path: "/layout/add-upcomingoffers",
            },
            {
                label: "Add Employee Upcom..",
                icon: IoPricetagsOutline,
                path: "/layout/add-employee-upcomingoffers",
            },
        ],
    },
    {
        title: "Profile",
        links: [
            {
                label: "Profile",
                icon: User,
                path: "/layout/profile",
            },
        ],
    },
    {
        title: "Relationship",
        links: [
            {
                label: "Relation",
                icon: TbCirclesRelation,
                path: "/layout/relation",
            },
        ],
    },
    {
        title: "Logout",
        links: [
            {
                label: "Logout",
                icon: LogOut,
                path: "/layout/Logout",
            },
        ],
    },
];

// customer navbar
export const customernavbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: User,
                path: "/Customerlayout",
            },
            {
                label: "Edit Profile",
                icon: UserPen,
                path: "/Customerlayout/edit-profile",
            },
            {
                label: "Company Profile",
                icon: PiBuildingsBold,
                path: "/Customerlayout/company-profile",
            },
            {
                label: "Logout",
                icon: LogOut,
                path: "/Customerlayout/logout",
            },
        ],
    },
];

// employee navbar
export const employeenavbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: User,
                path: "/Employeelayout",
            },
            {
                label: "Edit Profile",
                icon: UserPen,
                path: "/Employeelayout/edit-profile",
            },
            {
                label: "Monthly Sale",
                icon: UserPen,
                path: "/Employeelayout/monthlysaleform",
            },
            {
                label: "Logout",
                icon: LogOut,
                path: "/Employeelayout/logout",
            },
        ],
    },
];

// super manager navbar
export const managernavbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/Managerlayout",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Cust. Notification",
                icon: User,
                path: "/Managerlayout/edit-customer",
            },
            {
                label: "Add Customer",
                icon: RiUserAddLine,
                path: "/Managerlayout/add-customer",
            },
            {
                label: "All Customer",
                icon: Users,
                path: "/Managerlayout/all-customer",
            },
        ],
    },
    {
        title: "Employees",
        links: [
            {
                label: "Empl. Notification",
                icon: RiUser2Line,
                path: "/Managerlayout/edit-employee",
            },
            {
                label: "Add Employee",
                icon: RiUserAddLine,
                path: "/Managerlayout/add-employee",
            },
            {
                label: "All Employee",
                icon: Users,
                path: "/Managerlayout/all-employee",
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                label: "Comp. Notification",
                icon: BsBuildingExclamation,
                path: "/Managerlayout/edit-company",
            },
            {
                label: "Add Company",
                icon: BsBuildingAdd,
                path: "/Managerlayout/add-company",
            },
            {
                label: "All Company",
                icon: PiBuildingsBold,
                path: "/Managerlayout/all-company",
            },
        ],
    },
    {
        title: "Offers",
        links: [
            {
                label: "Offer Notification",
                icon: BiSolidOffer,
                path: "/Managerlayout/all-offers",
            },
            {
                label: "Add Customer Offers",
                icon: IoPricetagsOutline,
                path: "/Managerlayout/add-offers",
            },
            {
                label: "Add Employee Offers",
                icon: IoPricetagsOutline,
                path: "/Managerlayout/add-employee-offers",
            },
        ],
    },
    {
        title: "Upcoming Offers",
        links: [
            {
                label: "Upcoming Offer Noti.",
                icon: BiSolidOffer,
                path: "/Managerlayout/all-upcomingoffers",
            },
            {
                label: "Add Customer Upcom..",
                icon: IoPricetagsOutline,
                path: "/Managerlayout/add-upcomingoffers",
            },
            {
                label: "Add Employee Upcom..",
                icon: IoPricetagsOutline,
                path: "/Managerlayout/add-employee-upcomingoffers",
            },
        ],
    },
    {
        title: "Profile",
        links: [
            {
                label: "Profile",
                icon: User,
                path: "/Managerlayout/edit-manager",
            },
        ],
    },
    {
        title: "Realtionship",
        links: [
            {
                label: "Relation",
                icon: TbCirclesRelation,
                path: "/Managerlayout/relation",
            },
        ],
    },
    {
        title: "Logout",
        links: [
            {
                label: "Logout",
                icon: LogOut,
                path: "/Managerlayout/logout",
            },
        ],
    },
];

// lowermanager navbar
export const lowermanagernavbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/LowerManagerlayout",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customer",
                icon: User,
                path: "/LowerManagerlayout/edit-customer",
            },
        ],
    },
    {
        title: "Employees",
        links: [
            {
                label: "Employee",
                icon: RiUser2Line,
                path: "/LowerManagerlayout/edit-employee",
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                label: "Company",
                icon: PiBuildingsBold,
                path: "/LowerManagerlayout/edit-company",
            },
        ],
    },
    {
        title: "Offers",
        links: [
            {
                label: "All Offers",
                icon: BiSolidOffer,
                path: "/LowerManagerlayout/all-offers",
            },
            {
                label: "Add Customer Offers",
                icon: IoPricetagsOutline,
                path: "/LowerManagerlayout/add-offers",
            },
            {
                label: "Add Employee Offers",
                icon: IoPricetagsOutline,
                path: "/LowerManagerlayout/add-employee-offers",
            },
        ],
    },
    {
        title: "Upcoming Offers",
        links: [
            {
                label: "All Upcoming Offer",
                icon: BiSolidOffer,
                path: "/LowerManagerlayout/all-upcomingoffers",
            },
            {
                label: "Add Customer Upcom..",
                icon: IoPricetagsOutline,
                path: "/LowerManagerlayout/add-upcomingoffers",
            },
            {
                label: "Add Employee Upcom..",
                icon: IoPricetagsOutline,
                path: "/LowerManagerlayout/add-employee-upcomingoffers",
            },
        ],
    },
    {
        title: "Profile",
        links: [
            {
                label: "Profile",
                icon: User,
                path: "/LowerManagerlayout/edit-manager",
            },
        ],
    },
    {
        title: "Realtionship",
        links: [
            {
                label: "Relation",
                icon: TbCirclesRelation,
                path: "/LowerManagerlayout/relation",
            },
        ],
    },
    {
        title: "Logout",
        links: [
            {
                label: "Logout",
                icon: LogOut,
                path: "/LowerManagerlayout/logout",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];