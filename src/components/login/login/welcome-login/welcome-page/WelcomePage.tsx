type Props = {
  strs: {
    id: number,
    str: string,
  }[],
  page: number,
};

export const WelcomePage = ({ strs,  }: Props) => 
  strs.map(p => <p key={p.id}>{p.str}</p>)

  