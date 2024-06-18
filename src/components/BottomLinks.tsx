interface Props {
  link: string;
  icon: string;
  title: string;
}

export default function LinkToSocial({ title, link, icon }: Props) {
  return (
    <a href={link} target="_blank">
      <img
        src={icon}
        className="h-10 w-10 ml-3 opacity-90 duration-200 hover:opacity-100 hover:scale-110 hover:-translate-y-1"
        title={title}
      />
    </a>
  );
}
