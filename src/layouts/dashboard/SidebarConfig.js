import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import searchFill from "@iconify/icons-eva/search-fill";
import personOutline from "@iconify/icons-eva/person-outline";
import monitorOutline from "@iconify/icons-eva/monitor-outline";
import barChart2Outline from "@iconify/icons-eva/bar-chart-2-outline";
import peopleOutline from "@iconify/icons-eva/people-outline";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'search',
    path: '/dashboard/search',
    icon: getIcon(searchFill)
  },
  {
    title: 'assets',
    path: '/dashboard/assets',
    icon: getIcon(monitorOutline)
  },
  {
    title: 'employees',
    path: '/dashboard/employees',
    icon: getIcon(personOutline)
  },
  {
    title: 'history',
    path: '/dashboard/history',
    icon: getIcon(barChart2Outline)
  },
  {
    title: 'visitor',
    path: '/dashboard/visitor',
    icon: getIcon(peopleOutline)
  },
];

export default sidebarConfig;
