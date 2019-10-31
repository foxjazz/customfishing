interface spdata {
  title: string;
  content: string;
  id: number;
  level: number;
  child: spdata;
  indentStep: number;

  indentCss: string;
  selectCss: string;
  isSelected: boolean;
}



