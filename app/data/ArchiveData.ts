export interface Archive {
  /**
   * The year of the archive.
   */
  year: string;
  /**
   * The URL of the archive.
   */
  url: string;
  /**
   * The label of the archive.
   */
  label: string;
}

export const archives: Archive[] = [
  {
    year: "2024",
    url: "https://lxnid.github.io/portfolio_site_v2",
    label: "Portfolio Website 2024"
  },
  {
    year: "2023",
    url: "https://lxnid.github.io/portfolio_2024_v1",
    label: "Portfolio Website 2023"
  },
  {
    year: "2022",
    url: "https://lxnid.github.io/portfolio_2022_demo",
    label: "Portfolio Website 2022"
  },
  {
    year: "2021",
    url: "https://lxnid.github.io/portfolio_2023_v1",
    label: "Portfolio Website 2021"
  },
];
