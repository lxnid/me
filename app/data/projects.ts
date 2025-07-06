export interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio 2024',
    image: '/workImages/portfolio_24.jpg',
    link: '/work/1',
  },
  {
    id: 2,
    title: 'Weather App',
    image: '/workImages/weather.jpg',
    link: '/work/2',
  },
  {
    id: 3,
    title: 'To-Do App',
    image: '/workImages/todo.jpg',
    link: '/work/3',
  },
  {
    id: 4,
    title: 'Current Portfolio',
    image: '/workImages/portfolio_current.jpg',
    link: '/work/4',
  },
];